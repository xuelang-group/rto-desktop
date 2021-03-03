import axios from 'axios';

const service = axios.create({
  baseURL: '',
  timeout: 3 * 1000
});


// 请求拦截器
service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data);
  const token = getCookie('名称');
  if (token) {
    config.params = { 'token': token };
    config.headers.token = token;
  }
  return config;
}, error => {
  Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
  //接收到响应数据并成功后的一些共有的处理，关闭loading等
  
  return response
}, error => {
  return {
    "success": true,
    "data": [
      {
        "id":"5f8d0f2a-cfad-4bdd-b939-594d37031acd",
        "type": "model",
        "name": "S_ZORB_DLL3",
        "prop": [
          {
            "label": "输入维度",
            "name": "inputDimention",
            "type": "int",
            "value": 3
          },
          {
            "label": "输出维度",
            "name": "outputDimention",
            "type": "int",
            "value": 2
          }
        ],
        "param": [
          {
            "label": "模型服务器地址",
            "name": "modelServer",
            "isRequired": true,
            "type": "string",
            "defaultValue": "1"
          },
          {
            "label": "desc1",
            "name": "key1",
            "isRequired": true,
            "type": "int",
            "defaultValue": 1
          }
        ],
        "desc": "aaaaaaaaaaAspen模型优化氢流量，输入变量为温度，压强，氢气流量，输出为硫含量和xx"
      }, {
        "id":"5f8d0f2a-cfad-4bdd-b939-594d37031ac",
        "type": "model",
        "name": "S_ZORB_DLL3",
        "prop": [
          {
            "label": "输入维度",
            "name": "inputDimention",
            "type": "int",
            "value": 3
          },
          {
            "label": "输出维度",
            "name": "outputDimention",
            "type": "int",
            "value": 2
          }
        ],
        "param": [
          {
            "label": "模型服务器地址",
            "name": "modelServer",
            "isRequired": true,
            "type": "string",
            "defaultValue": "1"
          },
          {
            "label": "desc1",
            "name": "key1",
            "isRequired": true,
            "type": "int",
            "defaultValue": 1
          }
        ],
        "desc": "aaaaaaaaaaAspen模型优化氢流量，输入变量为温度，压强，氢气流量，输出为硫含量和xx"
      }
    ],    
    "pagination": {
        "pageSize": 1,
        "pageNo": 1,
        "total": 100
      }
  }
  /***** 接收到异常响应的处理开始 *****/
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = "/NotFound"
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    // error.message('连接服务器失败')
  }

  Message.error(error.message)
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
});

export default service;