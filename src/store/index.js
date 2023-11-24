import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // birthdays:{},
    birthdays: [
      {
        id:"1",
        favorite: false,
        name: "24",
        mark: "mark",
        birthday: "11-24",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "willian shassssssss",
        mark: "mark",
        birthday: "11-24",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "23",
        mark: "mark",
        birthday: "11-23",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "25",
        mark: "mark",
        birthday: "11-25",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "26",
        mark: "mark",
        birthday: "11-26",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "30",
        mark: "mark",
        birthday: "11-30",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "1",
        mark: "mark",
        birthday: "12-01",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "2",
        mark: "mark",
        birthday: "12-02",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "3",
        mark: "mark",
        birthday: "12-03",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "30",
        mark: "mark",
        birthday: "12-30",
        remarks: "remarks",
      },
      {
        id:"1",
        favorite: false,
        name: "01",
        mark: "mark",
        birthday: "01-01",
        remarks: "remarks",
      },
    ]
  },
  getters: {
    birthdayList: state => state.birthdays
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
