import axios from "axios";

/**
 * @description 请求函数模块封装
 * @param {String} url 请求地址
 * @param {Object} data 传参
 * @param {String} type 请求方式
 */
export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function(resolve, reject) {
    let promise;
    if (type === "GET") {
      let dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}
