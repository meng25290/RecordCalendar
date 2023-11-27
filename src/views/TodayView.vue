<template>
  <div class="today">
    <el-header :height="headerHeight" style="background-color: rgb(235,235,235);line-height:28px;align-items: center;">
      <BasicTop></BasicTop>
    </el-header>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <BasicLeft :headerHeight="headerHeight"></BasicLeft>
        </el-aside>
        <el-main :style="{ height: `calc(100vh - ${headerHeight})` }">
          <el-container>
            <!-- <button @click="test()">删除localsto</button> -->
            <el-header height="100px" style="font-size: 75px">
              <!-- 今日寿星 -->
              {{ $t('todayView.today') }}
            </el-header>
            <el-main>
              <el-col>
                <el-row v-for="(item, index) in whoseBirthdayList" :key="index" style="font-size: 50px">
                  {{ item.name }}
                </el-row>
                <el-row v-show="whoseBirthdayList.length == 0" style="font-size: 50px">
                  <!-- 暂无... -->
                  {{ $t('todayView.nodata') }}
                </el-row>
              </el-col>
            </el-main>
          </el-container>
          <el-divider></el-divider>
          <el-container>
            <el-header height="85px" style="font-size: 65px">
              <!-- 七日提醒 -->
              {{ $t('todayView.seven') }}
            </el-header>
            <el-main>
              <el-col>
                <el-row v-for="(item, index) in whoseBirthdayIsComingList" :key="index" style="font-size: 35px">
                  {{ item.name }}
                </el-row>
                <el-row v-show="whoseBirthdayIsComingList.length == 0" style="font-size: 35px">
                  <!-- 暂无... -->
                  {{ $t('todayView.nodata') }}
                </el-row>
              </el-col>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BasicTop from '@/components/BasicTop.vue'
import BasicLeft from '@/components/BasicLeft.vue'


export default {
  name: 'AllView',
  components: {
    BasicTop,
    BasicLeft
  },
  computed: {
  },
  data() {
    return {
      headerHeight: "28px",
      whoseBirthdayList: [],
      whoseBirthdayIsComingList: [],
    }
  },
  methods: {
    // test(){
    //   localStorage.removeItem('birthdayData');
    // },
    whoseBirthday() {
      this.whoseBirthdayList = [];
      const birthdayList = this.$store.getters.birthdayList;
      const currentDate = this.$moment().format('YYYY-MM-DD')
      for (let i = 0; i < birthdayList.length; i++) {
        if (birthdayList[i].birthday == currentDate) {
          this.whoseBirthdayList.push(birthdayList[i]);
        }
      }
    },
    whoseBirthdayIsComing() {
      this.whoseBirthdayIsComingList = [];
      const birthdayList = this.$store.getters.birthdayList;
      const currentDate = this.$moment().format('YYYY-MM-DD')
      // const currentDate = "2023-12-31"

      for (let i = 0; i < birthdayList.length; i++) {
        if (this.$moment(birthdayList[i].birthday).diff(currentDate, "days") <= 7
          && this.$moment(birthdayList[i].birthday).diff(currentDate, "days") > 0) {
          this.whoseBirthdayIsComingList.push(birthdayList[i]);
        }
      }
    }
  },
  created() {
    this.whoseBirthday()
    this.whoseBirthdayIsComing()
  },
  mounted() {
    setInterval(
      this.whoseBirthday, this.whoseBirthdayIsComing
      , 1000)
  }
}

</script>

<style></style>