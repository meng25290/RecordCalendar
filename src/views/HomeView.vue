<template>
  <div class="home">
    <el-header height="28px" style="background-color: rgb(235,235,235);line-height:28px;align-items: center;">
      <el-row :gutter="20" style="margin-left: 200px">
        <el-col :offset="1" :span="12" style="text-align: left">
          当前时间:{{ currentTime }}
        </el-col>
        <el-col :span="11"></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-menu :style="{ height: 'calc(100vh - 28px)' }">
            <el-menu-item @click="changeCurrentPage('Today')">
              <i class="el-icon-bell"></i>
              今日寿星
            </el-menu-item>
            <el-menu-item @click="changeCurrentPage('All')">
              <i class="el-icon-date"></i>
              查看全部
            </el-menu-item>
            <el-menu-item @click="changeCurrentPage('Add')">
              <i class="el-icon-plus"></i>
              新增数据
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <ViewAll v-if="currentPage=='All'"></ViewAll>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ViewAll from '@/components/ViewAll.vue'

export default {
  name: 'HomeView',
  components:{
    ViewAll
  },
  computed: {
    ...mapGetters(['currentPage','birthdayList'])
  },
  data() {
    return {
      currentTime: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
    }
  },
  methods: {
    currentTimeFunc: function () {
      this.currentTime = this.$moment().format('YYYY-MM-DD HH:mm:ss')
    },
    changeCurrentPage(index){
      this.$store.commit('changeCurrent', index);
    }
  },
  mounted() {
    setInterval(
      this.currentTimeFunc
      , 1000)
  }
}
</script>
