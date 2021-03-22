import fs from "fs";
import ini from "ini";
import { ipcMain } from "electron";
import { configPath } from "../mainconfig";
import { getUrlContent } from "../utils";

let config = {
  protocol: 'http',
  host: "58.215.216.238",
  port: "48000",
};

export let appConfig = {};

ipcMain.handle("config-get", getConfig);
ipcMain.handle("config-set", setConfig);
ipcMain.handle("config-app", getAppConfig);

function getConfig() {
  return new Promise((resolve, reject) => {
    fs.readFile(configPath, "utf-8", (err, data) => {
      if (err) {
        resolve(config);
      } else {
        resolve(Object.assign(config, ini.parse(data)));
      }
    });
  });
}

function setConfig(event, obj) {
  Object.assign(config, obj)
  return new Promise((resolve) => {
    fs.writeFile(configPath, ini.stringify(config), () => {
      resolve();
    });
  });
}

function getAppConfig() {
  return new Promise((resolve, reject) => {
    getUrlContent(`${config.protocol}://${config.host}:${config.port}/app/config`, "POST").then(
      (rawData) => {
        appConfig = convert2Appconfig(JSON.parse(rawData).data)
        resolve(appConfig);
      }
    ).catch( err => {
      reject(err);
    });
  });
}

function convert2Appconfig(obj) {
  let RtoOrigin = `${config.protocol}://${config.host}:${config.port}`;
  const ac = Object.assign(
    {
      ...obj,
      oss: {
        bucket: obj.osBucket,
        endpoint: obj.ossEndpoint,
        ossAccessKey: obj.ossAccessKey,
        ossAccessSecret: obj.ossAccessSecret,
      },
    },
    {
      redirectRequest: RtoOrigin,
      suanpanWebHost: RtoOrigin,
    }
  );
  ac.defaultDirs = JSON.parse(ac.defaultDirs);
  ac.appMenu = JSON.parse(ac.appMenu);
  ac.services = JSON.parse(ac.services);
  ac.RtoOrigin = RtoOrigin;
  return ac;
}
