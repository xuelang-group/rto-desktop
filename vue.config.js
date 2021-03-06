const fs = require("fs");
const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/renderer/main.js",
      template: "public/editor.html"
    },
    splash: {
      entry: "src/splash/main.js",
      template: "public/splash.html"
    },
    manage: {
      entry: "src/manage/main.js",
      template: "public/manage.html"
    },
    wizard: {
      entry: "src/wizard/main.js",
      template: "public/wizard.html"
    }
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: "src/main/background.js",
      preload: "src/main/preload.js",
      builderOptions: {
        productName: "rto",
        linux: {
          target: "AppImage",
          category: "Utility"
        },
        mac: {
          identity: null
        },
        extraResources: [
          {
            from: "./src/main/assets/",
            to: "assets",
            filter: ["**/*"]
          }
        ]
      }
    },
  },
  chainWebpack(config) {
    const root = path.join(__dirname, "src", "renderer");
    config.resolve.alias.set("@@", root);
    fs.readdirSync(root, { withFileTypes: true })
      .filter(i => i.isDirectory())
      .forEach(i => config.resolve.alias.set(i.name, path.join(root, i.name)));
  },
};
