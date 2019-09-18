// http.js文件用来封装我们的axios，api.js用来统一管理我们的接口。
// 在http.js中引入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
import { Toast } from 'vant'; 

const BaseUrl = '/api/';

const INSTANCE = axios.create({
    baseURL: BASE_URL,
    timeout: 8e3,
    transformRequest: [data => qs.stringify(data)],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

