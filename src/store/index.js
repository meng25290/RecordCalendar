import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: 'Today',
    birthdays: [
      {
        favorite: false,
        name: "name",
        mark: "mark",
        birthday: "2001-11-8",
        remarks: "remarks",
      },
      {
        favorite: false,
        name: "name",
        mark: "mark",
        birthday: "2023-11-24",
        remarks: "remarks",
      },
      {
        favorite: true,
        name: "name12345678901234567890",
        mark: "markfamiliar",
        birthday: "2001-11-11",
        remarks: "mark12345678901234567890123456789012345678901234567890",
      },
      {
        favorite: false,
        name: "name",
        mark: "MARK1",
        birthday: "2001-11-8",
        remarks: "remarks",
      },
      {
        favorite: true,
        name: "中文名啊啊啊啊啊啊啊",
        mark: "中文名啊啊啊",
        birthday: "2999-99-99",
        remarks: "中文名啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
      },
    ]
  },
  getters: {
    currentPage: state => state.current,
    birthdayList: state => state.birthdays
  },
  mutations: {
    changeCurrent(state, index) {
      state.current = index;
    },
  },
  actions: {
  },
  modules: {
  }
})
