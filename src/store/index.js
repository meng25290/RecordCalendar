import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import moment from 'moment';

export default new Vuex.Store({
  state: {
    birthdays: [],
  },
  getters: {
    birthdayList: state => state.birthdays
  },
  mutations: {
    // 自动更换到下一年
    changeBirthdayYear(state, moment) {
      state.birthdays.forEach(day => {
        // 闰年操作
        if (day.birthday.substring(5) == "02-29" && moment(day.birthday).isBefore(moment().format('YYYY-MM-DD'))) {
          day.birthday = moment(day.birthday).year(moment(day.birthday).year() + 4).format('YYYY-MM-DD');
        } else if (moment(day.birthday).isBefore(moment().format('YYYY-MM-DD'))) {
          day.birthday = moment(day.birthday).year(moment(day.birthday).year() + 1).format('YYYY-MM-DD');
        }
      });
    },
    // 自动读取localStorage
    autoLoad(state) {
      // 生日信息
      // 新建无对象判断
      if (localStorage.getItem('birthdayData') == null) {
        const birthdayData = [];
        localStorage.setItem('birthdayData', JSON.stringify(birthdayData));
      }
      state.birthdays = JSON.parse(localStorage.getItem('birthdayData'));

      // 3日提醒初始化
      if (localStorage.getItem('birthdayDataSave') == null) {
        localStorage.setItem('birthdayDataSave', moment().format("YYYY-MM-DD"));
      }
    },
    // 自动存储到localStorage
    autoSave(state) {
      localStorage.setItem('birthdayData', JSON.stringify(state.birthdays));
    },
    addBirthday(state, obj) {
      state.birthdays.push(obj);
    },
  },
  actions: {
  },
  modules: {
  }
})
