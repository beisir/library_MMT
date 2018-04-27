import axios from 'axios';
import {Indicator} from 'mint-ui';
axios.defaults.withCredentials = true

/**
 * axios 请求方法
 * @param {*} type 请求方式
 * @param {*} url 请求地址
 * @param {*} data 请求数据
 * @param {*} {Promise}
 */
const http = (type, url, data = {},config={}) => {
    return new Promise((resolve,reject) => {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        axios[type](url,data,config).then(response =>{
            // Indicator.close();
            resolve(response.data);
        }, err =>{
            // Indicator.close();
            reject(err);
        });
    });
};

export default {
    ajax: http
}
