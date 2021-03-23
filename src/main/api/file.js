import { ipcMain, dialog, BrowserWindow, app } from "electron";
import fs from 'fs';
const http = require('http');
import { idCachePath } from "../mainconfig";

ipcMain.handle("file-read-ids", getCacheId);
ipcMain.handle("file-save-ids", setCacheId);
ipcMain.handle("file-delete-ids", deleteCacheId);
ipcMain.handle("file-open", openFile);
ipcMain.handle("file-load", loadFile);
ipcMain.handle("file-save-dialog", saveFileDialog);
ipcMain.handle("file-save", saveFile);
ipcMain.handle("file-save-content", saveFileContent);
ipcMain.handle("file-read", readFileContent);
ipcMain.handle("file-message-dialog", fileMessageDialog);

let cacheIds = [];

function getCacheId() {
  return new Promise((resolve, reject) => {
    if(!fs.existsSync(idCachePath)) {
      resolve([])
    }else {
      fs.readFile(idCachePath, 'utf-8', (err, data) => {
        if(err) {
          reject(err)
        }else {
          try {
            cacheIds = JSON.parse(data).ids;
            resolve(cacheIds)
          } catch (error) {
            reject(error)
          }
        }
      })
    }
  });
}

function setCacheId(event, appid) {
  return new Promise((resolve, reject) => {
    // unique
    cacheIds.push(appid)
    cacheIds = [...new Set(cacheIds)]
    fs.writeFile(idCachePath, JSON.stringify({
      ids: cacheIds
    }), () => {
      resolve(cacheIds);
    });
  });
}

function deleteCacheId(event, appid) {
  let idx = cacheIds.indexOf(appid)
  if(idx > -1) {
    cacheIds.splice(idx, 1)
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(idCachePath, JSON.stringify({
      ids: cacheIds
    }), () => {
      resolve(cacheIds);
    });
  });
}

async function openFile() {
  const { filePaths } = await dialog.showOpenDialog( BrowserWindow.getFocusedWindow(), {
    title: '打开',
    defaultPath: app.getPath("documents"),
    filters: [{
      name: "sp", extensions: ['sp'],
    }]
  });
  return filePaths[0];
}

function loadFile(event, filePath) {
  return new Promise( (resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if(error) {
        reject(error)
      }else {
        resolve(data)
      }
    })
  });
}

async function saveFileDialog(event, title) {
  const { filePath } = await dialog.showSaveDialog( BrowserWindow.getFocusedWindow(), {
    title: title,
    defaultPath: app.getPath("documents"),
    filters: [{
      name: "sp", extensions: ['sp']
    }]
  })
  return filePath
}

function saveFile(event, filePath, url) {
  return new Promise( (resolve, reject) => {
    let file = fs.createWriteStream(filePath);
    let request = http.get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(resolve);
      });
    }).on('error', function(err) {
      fs.unlink(filePath);
      reject(err);
    });
  })
}

async function fileMessageDialog() {
  let { response } = await dialog.showMessageBox( BrowserWindow.getFocusedWindow(), {
    type: 'warning',
    message: '是否保存当前文件？',
    buttons: ['保存', '不保存', '取消'],
    noLink: true,
    cancelId: 2
  });
  return response;
}

function saveFileContent(event, filePath, content) {
  return new Promise( (resolve, reject) => {
    fs.writeFile(filePath, content, () => {
      resolve();
    });
  })
}

function readFileContent(event, filePath) {
  return new Promise( (resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if(err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}