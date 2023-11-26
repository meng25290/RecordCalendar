import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birthdays:[],
    // birthdays: [
    //   {
    //     id: "1",
    //     favorite: false,
    //     name: "24",
    //     mark: "mark",
    //     birthday: "2023-11-25",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "2",
    //     favorite: false,
    //     name: "willian dawei good nice nearby shashi",
    //     mark: "mark",
    //     birthday: "2023-11-26",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "3",
    //     favorite: false,
    //     name: "23",
    //     mark: "mark",
    //     birthday: "2023-11-23",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "4",
    //     favorite: false,
    //     name: "25",
    //     mark: "mark",
    //     birthday: "2023-11-25",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "5",
    //     favorite: true,
    //     name: "26",
    //     mark: "mark",
    //     birthday: "2023-11-26",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "6",
    //     favorite: false,
    //     name: "30",
    //     mark: "mark",
    //     birthday: "2023-11-30",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "7",
    //     favorite: true,
    //     name: "1",
    //     mark: "mark",
    //     birthday: "2023-12-01",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "8",
    //     favorite: false,
    //     name: "2",
    //     mark: "mark",
    //     birthday: "2023-12-02",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "9",
    //     favorite: false,
    //     name: "3",
    //     mark: "mark",
    //     birthday: "2023-12-03",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "9",
    //     favorite: false,
    //     name: "4",
    //     mark: "mark",
    //     birthday: "2023-12-04",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "10",
    //     favorite: false,
    //     name: "30",
    //     mark: "mark",
    //     birthday: "2023-12-30",
    //     remarks: "remarks",
    //   },
    //   {
    //     id: "11",
    //     favorite: false,
    //     name: "01",
    //     mark: "mark",
    //     birthday: "2024-01-01",
    //     remarks: "remarks",
    //   },
    // ]
  },
  getters: {
    birthdayList: state => state.birthdays
  },
  mutations: {
    // 自动更换到下一年
    changeBirthdayYear(state, moment) {
      state.birthdays.forEach(day => {
        if (moment(day.birthday).isBefore(moment().format('YYYY-MM-DD'))) {
          day.birthday = moment(day.birthday).year(moment(day.birthday).year() + 1).format('YYYY-MM-DD');
        }
      });
    },
    // 自动读取localStorage
    autoLoad(state) {
      state.birthdays=JSON.parse(localStorage.getItem('birthdayData'));
    },
    // 自动存储到localStorage
    autoSave(state) {
      localStorage.setItem('birthdayData', JSON.stringify(state.birthdays));
    },
    addBirthday(state,obj){
      state.birthdays.push(obj);
    }
  },
  actions: {
  },
  modules: {
  }
})
