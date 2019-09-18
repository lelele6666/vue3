const  CONFIG = {};
const apiBaseUrl = window.API && typeof window.API != "undefined"  ? window.API : "//integkefumanager.58corp.com";
// 接口根路径
CONFIG.apiBaseUrl = apiBaseUrl;
// 退出路径
CONFIG.logoutPath = "https://passport.58corp.com/logout?service=http:" + apiBaseUrl;

export default {
    // 对象的复制，有则覆盖，无则添加，设置对象，
    set(config){
        Object.assign(CONFIG,config);
    },
    // 获取CONFIG的某个值
    get(key){
        return CONFIG[key];
    }
}
