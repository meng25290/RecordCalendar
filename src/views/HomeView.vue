<template>
  <div class="home">
    <el-header height="28px" style="background-color: rgb(235,235,235);line-height:28px;align-items: center;">
      <el-row :gutter="20">
        <el-col :offset="1" :span="12" style="text-align: left">
          当前时间:{{ currentTime }}
        </el-col>
        <el-col :span="11"></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-container>
        <el-aside>
          <el-menu :style="{ height: 'calc(100vh - 28px)' }">
            <el-menu-item>
              <i class="el-icon-bell"></i>
              今日寿星
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-date"></i>
              查看所有
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-plus"></i>
              新增数据
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-table :data="birthdayList">
            <el-table-column prop="favorite" label="最喜欢">
              <template slot-scope="scope">
                <i class="el-icon-star-on" v-if="scope.row.favorite"></i>
                <i class="el-icon-star-off" v-else></i>
              </template>
            </el-table-column>
            <el-table-column prop="mark" label="标记">
              <template slot-scope="scope">
                <el-tag style="width:75px;max-width: 75px;text-align: center;">{{ scope.row.mark }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" :show-overflow-tooltip=true>
            </el-table-column>
            <el-table-column prop="birthday" label="生日">
            </el-table-column>
            <el-table-column prop="remarks" label="备注" :show-overflow-tooltip=true>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapGetters(['birthdayList'])
  },
  data() {
    return {
      currentTime: this.$moment().format('YYYY-MM-DD HH:mm:ss')
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
