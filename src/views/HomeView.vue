<template>
  <div class="home">
    <el-header>
      <el-row :gutter="20">
        <el-col :span="6">
          欢迎使用
        </el-col>
        <el-col :offset="12" :span="6">
          当前时间:{{ time }}
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-container>
        <el-aside>
          2
        </el-aside>
        <el-main>
          3
        </el-main>
      </el-container>
      <el-footer>
        4
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  el: '#time',
  name: 'HomeView',
  data() {
    return {
      currentTime: "1"
    }
  },
  methods: {
    currentTimeFunc: function () {
      // this.currentTime = new Date().toLocaleString()
    },
  },
  mounted() {
    setInterval(
      this.currentTimeFunc()
      , 1000)
  }
}
</script>
