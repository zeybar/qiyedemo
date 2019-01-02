import Vue from 'vue';
import Configs from '~/common/configs';
var vm = new Vue(); //获取vue实例

/**
 * API_URL: 可覆盖服务端的baseURL
 * API_URL_BROWSER: 可覆盖客户端的baseURL
 * */
export default ({ $axios, redirect }) => {
  $axios.defaults.baseURL = Configs.DEFAULT.API;
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url);
  });

  $axios.onResponse(response => {
    const status = response.status;

    if (status === 401) {
      alert('没有权限');
    }
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      alert('没有权限');
      return;
    }
    return;
  });
};
