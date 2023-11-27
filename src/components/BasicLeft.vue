<template>
  <el-menu :style="{ height: `calc(100vh - ${headerHeight})` }">
    <el-menu-item @click="changeCurrentPage('today')">
      <i class="el-icon-bell"></i>
      今日寿星
    </el-menu-item>
    <el-menu-item @click="changeCurrentPage('all')">
      <i class="el-icon-date"></i>
      查看全部
    </el-menu-item>
    <el-menu-item @click="changeCurrentPage('add')">
      <i class="el-icon-plus"></i>
      新增数据
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    headerHeight: String
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['currentPage'])
  },
  methods: {
    changeCurrentPage(index) {
      if(this.$route.path.substring(1)==index){
        return
      }
      this.$router.push(index);
    },
  },
}
</script>

<style></style>