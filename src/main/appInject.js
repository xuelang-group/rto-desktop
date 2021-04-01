import { protocol, session } from "electron";
import http from "http";
import { parse } from "node-html-parser";
import fs from "fs";
import path from "path";
import { appConfig } from "./api/config"

export async function appInjectDev() {
  protocol.interceptStringProtocol("http", async (request, callback) => {
    protocol.uninterceptProtocol("http");
    let url = new URL(request.url);
    console.log('++++', url)
    let htmlStr = await getHtmlString(url.href);
    callback({ mimeType: "text/html", data: injectAppConfig(htmlStr, appConfig) });
  });
}

export async function appInjectDev2() {
  protocol.interceptStringProtocol("http", async (request, callback) => {
    let url = new URL(request.url);
    console.log('====', url)
    if(url.pathname.indexOf('modelAlgoManage')) {
      protocol.uninterceptProtocol("http");
      let htmlStr = await getHtmlString(process.env.WEBPACK_DEV_SERVER_URL);
      callback({ mimeType: "text/html", data: injectAppConfig(htmlStr, appConfig) });
    }
  });
}

function getHtmlString(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let indexHtml = "";
      res.on("data", (chunk) => {
        indexHtml += chunk;
      });
      res.on("end", () => {
        resolve(indexHtml);
      });
    });
  });
}

function injectAppConfig(htmlStr, ac) {
  const root = parse(htmlStr);
  let acNode = parse(
    `<script>window.appConfig = ${JSON.stringify(ac)}</script>`
  );
  root.querySelector("head").appendChild(acNode);
  return root.toString();
}

export function appInjectProd() {
  protocol.registerBufferProtocol(
    "app",
    (request, respond) => {
      let pathName = new URL(request.url).pathname;
      pathName = decodeURI(pathName); // Needed in case URL contains spaces

      fs.readFile(path.join(__dirname, pathName), (error, data) => {
        if (error) {
          console.error(`Failed to read ${pathName} on app protocol`, error);
        }
        const extension = path.extname(pathName).toLowerCase();
        let mimeType = "";

        if (extension === ".js") {
          mimeType = "text/javascript";
        } else if (extension === ".html") {
          mimeType = "text/html";
          if (pathName === "/index.html") {
            data = Buffer.from(injectAppConfig(data.toString(), appConfig));
          }
        } else if (extension === ".css") {
          mimeType = "text/css";
        } else if (extension === ".svg" || extension === ".svgz") {
          mimeType = "image/svg+xml";
        } else if (extension === ".json") {
          mimeType = "application/json";
        } else if (extension === ".wasm") {
          mimeType = "application/wasm";
        }

        respond({ mimeType, data });
      });
    },
    (error) => {
      if (error) {
        console.error(`Failed to register app protocol`, error);
      }
    }
  );
}

export function interceptUrl(url) {
  let startIdx = url.indexOf('proxr')
  if(startIdx === -1) {
    startIdx = url.indexOf('proxy')
  }
  if(startIdx === -1) {
    return url;
  }
  return path.join(appConfig.RtoOrigin, url.slice(startIdx));
}