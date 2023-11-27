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
          <el-row>
            <el-col :offset="6" :span="12">
              <span><i class="el-icon-user"></i>姓名 : </span>
              <el-input v-model="name" maxlength="35" show-word-limit style="width: 80%;"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="6" :span="12">
              <span><i class="el-icon-date"></i>日期 : </span>
              <el-input v-model="month" :placeholder="this.$moment(currentDate).format('MM')" maxlength="2"
                show-word-limit style="width: 35%;"></el-input>
              <span> - </span>
              <el-input v-model="date" :placeholder="this.$moment(currentDate).format('DD')" maxlength="2" show-word-limit
                style="width: 35%;"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="6" :span="12">
              <el-checkbox v-model="favorite">
                <i class="el-icon-star-on" v-if="favorite"></i><i class="el-icon-star-off" v-else></i>
                最喜欢
              </el-checkbox>
              <span style="margin-right: 20px;"></span>
              <span><i class="el-icon-brush"></i>标记 : </span>
              <el-input v-model="mark" maxlength="6" show-word-limit style="width: 50%;"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="6" :span="12">
              <span><i class="el-icon-edit"></i>备注 : </span><el-input v-model="remarks" type="textarea" rows="3"
                style="width: 80%;"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="15" :span="1">
              <el-button type="success" plain @click="addBirthday()">提交</el-button>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BasicTop from '@/components/BasicTop.vue'
import BasicLeft from '@/components/BasicLeft.vue'
// import $ from 'jquery';

export default {
  name: 'AllView',
  components: {
    BasicTop,
    BasicLeft
  },
  data() {
    return {
      headerHeight: "28px",
      currentDate: this.$moment().format('YYYY-MM-DD'),
      name: "",
      month: "",
      date: "",
      favorite: false,
      mark: "",
      remarks: "",
    }
  },
  methods: {
    addBirthday() {
      if (this.name == "" || this.month == "" || this.date == "" || this.mark == "") {
        this.$notify.error({
        title: '失败',
        message: '除备注外不能为空值',
        duration: 3000
      });
        return;
      }
      let day;
      try {
        let dateObj;
        // 闰年操作，固定为2020起步，后续自动更新再修正
        if (parseInt(this.month) == 2 && parseInt(this.date) == 29) {
          dateObj = new Date(`${this.$moment("2020").format("YYYY")}-${this.month}-${this.date}`)
        } else
          // automatically generated
          dateObj = new Date(`${this.$moment().format("YYYY")}-${this.month}-${this.date}`);
        if (isNaN(dateObj.getTime())) {
          throw new Error('无效的日期');
        }
        day = this.$moment(dateObj).format("YYYY-MM-DD");
      } catch (error) {
        this.$notify.error({
          title: '错误',
          message: error,
          duration: 3000
        });
        return;
      }
      const uuid = this.$uuidv4();
      const id = uuid;

      const jsonObj = {
        id: id,
        favorite: this.favorite,
        name: this.name,
        mark: this.mark,
        birthday: day,
        remarks: this.remarks,
      }
      this.$store.commit('addBirthday', jsonObj);

      this.$store.commit('autoSave', this.$moment);
      this.$store.commit('autoLoad', this.$moment);

      this.$notify({
        title: '成功',
        message: '添加成功',
        type: 'success',
        duration: 3000
      });

      this.$router.push('/all');
    }
  },
  created() {

  },
  mounted() {

  }
}

</script>

<style scoped>
.el-row {
  padding-bottom: 20px;
}
</style>