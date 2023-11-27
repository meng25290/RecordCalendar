// author:e4glet
// 引入 vue
import Vue from 'vue';

// 引入  vue-i18n
import VueI18n from 'vue-i18n'

// 注册  vue-i18n
Vue.use(VueI18n)

// 利用 webpack 的 require.context 方法遍历读取 i18n 目录下的所有 .json 语言文件
// 这样做省去了逐一引入语言文件的工作量，只需要将创建的语言文件 xx.json 直接放入 i18n这个目录中就行
function loadLocaleMessages() {
   const locales = require.context('.', true, /.json$/i)
   const messages = { };
   locales.keys().forEach(key => { 
      messages[key.replace('./', '').replace('.json', '')] = locales(key);
   });
  // 返回语言配置对象
   return messages;
}

// 初始化语言配置
const i18nConfig = {
    locale: 'en',
    messages:loadLocaleMessages()
}

// 创建 vue-i18n 实例
const i18n = new VueI18n(i18nConfig)

// 导出实例
export default i18n;

// 代码(navigator.language)	语种	字段名
// "zh-CN",	中文	Chinese
// "zh-SG"	马新简体	Chinese_SG
// "zh-TW","zh-HK",	繁体中文	Chinese_TW
// "en",	英语	English
// "it",	意大利语	Italian
// "ru"	俄语	Russian
// "th"	泰国语	Thai
// "vi"	越南语	Vietnamese
// "ja", ja-JP	日语	Japanese
// "ko", ko-kr	朝鲜语	Korean
// "de",	德语	German
// "fr",	法语	French
// "es",	西班牙语	Spanish
// "ar-SA",（沙特阿拉伯）	阿拉伯语	Arabic
// "pt"	葡萄牙语	Grapevine
// "sr",	塞尔维亚语	Serbian
// "tr",	土耳其语	Turkish