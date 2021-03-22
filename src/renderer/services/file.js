import { invoke } from "./index";
import { getFileNameAndExt } from "utils/index";

/**
 * 新建一个项目
 */
export function createApp(name) {
  return window.appService.create(
    name,
    window.appConfig.defaultAppFolder,
    "predict"
  );
}

/**
 * 保存sp文件
 */
export function saveSpFile(appId, fullpath) {
  return invoke('file-save-content', fullpath, JSON.stringify({
    id: appId
  }));
}

/**
 * 读取sp文件
 */
export function readSpFile(fullpath) {
  return invoke('file-read', fullpath).then( data => {
    try {
      let appid = JSON.parse(data).id;
      if(appid) {
        return appid
      }else {
        throw new Error('sp file content not valid')
      }
    } catch (error) {
      throw new Error('sp file content not valid')
    }
  })
}

/**
 * 删除项目
 */
export function deleteApp(appId) {
  return window.SuanpanAPI.appService.del(appId)
}

/**
 * 项目列表
 */
export function applist() {
  return window.SuanpanAPI.appService.list(9999, 'predict')
}

/**
 * 拷贝项目
 */
export function copyApp(appid, name) {
  return window.SuanpanAPI.appService.duplicate(appid, name, '', 'predict', false, window.appConfig.defaultAppFolder)
}

/**
 * Metrics
 */
export function getMetricsList() {
  return window.SuanpanAPI.appService.getMetricsList('service');
}


/**
 * 导入项目
 */
 export function openFile(fullpath) {
  return invoke('file-load', fullpath).then((fileBuffer) => {
    return new Promise( (resolve, reject) => {
      let { name: fileName } = getFileNameAndExt(fullpath);
      const importAppDataPath = window.SuanpanAPI.commonService.getImportPath(
        window.appConfig.userId
      );
      let fileBlob = new Blob([
        new Uint8Array(
          fileBuffer.buffer,
          fileBuffer.byteOffset,
          fileBuffer.length
        ),
      ]);
      const ext = ".zip";
      // fileBlob.lastModifiedDate = new Date();
      // fileBlob.name = `${fileName}`;
      // 上传文件至 oss
      const Key = `${importAppDataPath}${fileName}-${window.SuanpanAPI.commonService.uuid()}${ext}`;
      window.SuanpanAPI.appDataStoreService
        .upload( Key, fileBlob, null, null, () => {
            // 导入项目文件
            window.SuanpanAPI.appService
              .import({
                name: fileName,
                dataPath: Key,
                dir: window.appConfig.defaultAppFolder,
              })
              .then(
                (res) => {
                  // 查询导入状态
                  window.SuanpanAPI.loopService
                    .fetchJob(
                      { asyncable: true },
                      res.job.id,
                      window.SuanpanAPI.appService.getJob
                    )
                    .then(
                      (res) => {
                        window.SuanpanAPI.appService.switch(res.appId, res.importFolderName).then( () => {
                          resolve(res);
                        }).catch (err => {
                          console.error(err);
                          reject(err);
                        })
                      },
                      (err) => {
                        console.error(err);
                        reject(err);
                      }
                    );
                },
                (err) => {
                  console.error(err);
                  reject(err);
                }
              );
          }).catch( err => {
            console.error(err);
            reject(err);
          });
    })
  });
}

function getDownloadUrl(appId) {
  return window.appService.export(appId, {
    exportAppNext: true,
    packAppNext: true,
    type: "appDashboardExport"
  }).then( res => {
    return window.SuanpanAPI.loopService.fetchJob({type: "export", asyncable: true}, res.job.id, window.appService.getJob).then(
      (res) => {
        return SuanpanAPI.appDataStoreService.url(res) 
      })
  })
}

/**
 * 导出项目
 */
export function saveFile(appId, fullpath) {
  return getDownloadUrl(appId).then( downloadUrl => {
    return invoke("file-save", fullpath, downloadUrl.data)
  })
}