<template>
  <el-row :gutter="20" style="margin-left: 200px">
    <el-col :offset="1" :span="12" style="text-align: left">
      <!-- 当前时间 -->
      {{ $t('basicTop.currentTime') }} : {{ currentTime }}
    </el-col>
    <el-col :span="11"></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      currentTime: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
    }
  },
  methods: {
    currentTimeFunc: function () {
      this.currentTime = this.$moment().format('YYYY-MM-DD HH:mm:ss')
    },
  },
  mounted() {
    setInterval(
      this.currentTimeFunc
      , 1000)
  }
}
</script>

<style></style>