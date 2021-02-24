const fs = require("fs");
const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/renderer/main.js",
      template: "src/renderer/index.html"
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
