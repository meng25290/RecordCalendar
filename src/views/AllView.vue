<template>
  <div class="all">
    <el-header :height="headerHeight" style="background-color: rgb(235,235,235);line-height:28px;align-items: center;">
      <BasicTop></BasicTop>
    </el-header>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <BasicLeft :headerHeight="headerHeight"></BasicLeft>
        </el-aside>
        <el-main :style="{ height: `calc(100vh - ${headerHeight})` }">
          <el-table :data="birthdayList" :default-sort="{ prop: 'birthday', order: 'ascending' }">
            <el-table-column prop="favorite" label="最喜欢" width="100" align="center" sortable>
              <span slot="header">
                最喜欢
              </span>
              <div slot-scope="scope">
                <i class="el-icon-star-on" v-if="scope.row.favorite"></i>
                <i class="el-icon-star-off" v-else></i>
              </div>
            </el-table-column>
            <el-table-column prop="mark" label="标记" width="125" align="center" sortable>
              <span slot="header">
                标记
              </span>
              <div slot-scope="scope">
                <el-tag style="padding:0 12px;">{{ scope.row.mark }}</el-tag>
              </div>
            </el-table-column>
            <el-table-column prop="name" label="姓名" :show-overflow-tooltip=true>
            </el-table-column>
            <el-table-column prop="birthday" label="生日" width="125" align="center" sortable>
            </el-table-column>
            <el-table-column prop="remarks" label="备注" :show-overflow-tooltip=true>
            </el-table-column>
            <el-table-column width="150" align="right">
              <template slot="header">
                <el-button size="mini" type="info" plain round @click="importFunc()">导入</el-button>
                <el-button size="mini" type="primary" plain round @click="exportFunc()">导出</el-button>
              </template>
              <template slot-scope="scope">
                <!-- <el-button size="mini" @click="clickEdit(scope.row.id)">编辑</el-button> -->
                <span style="padding-left:10px"></span>
                <el-popconfirm title="确定删除？" @confirm="clickDelete(scope.row)">
                  <el-button slot="reference" size="mini" type="danger">删除</el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
    <input type="file" ref="fileInput" style="display: none" accept=".txt" @change="handleFileSelect" />
    <!-- <el-dialog title="修改" :visible.sync="dialogVisible" width="50%" :close-on-click-modal=false :close-on-press-escape=false>
      <el-row>
        <el-col>
          <span><i class="el-icon-user"></i>姓名 : </span>
          <el-input v-model="selectItem.name" maxlength="35" show-word-limit style="width: 80%;"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <span><i class="el-icon-date"></i>日期 : </span>
          <el-input v-model="selectItem.birthday" :placeholder="this.$moment(currentDate).format('MM')" maxlength="10"
            show-word-limit style="width: 80%;"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-checkbox v-model="selectItem.favorite">
            <i class="el-icon-star-on" v-if="favorite"></i><i class="el-icon-star-off" v-else></i>
            最喜欢
          </el-checkbox>
          <span style="margin-right: 20px;"></span>
          <span><i class="el-icon-brush"></i>标记 : </span>
          <el-input v-model="selectItem.mark" maxlength="6" show-word-limit style="width: 50%;"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <span><i class="el-icon-edit"></i>备注 : </span><el-input v-model="selectItem.remarks" type="textarea" rows="3"
            resize="none" style="width: 80%;"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit()">取 消</el-button>
        <el-button type="primary" @click="submitItem()">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import BasicTop from '@/components/BasicTop.vue'
import BasicLeft from '@/components/BasicLeft.vue'

export default {
  name: 'AllView',
  components: {
    BasicTop,
    BasicLeft
  },
  computed: {
    ...mapGetters(['birthdayList'])
  },
  data() {
    return {
      headerHeight: "28px",
      dialogVisible: false,
      id: "17f222a8-5a8d-4cbb-9052-4510c0a463ea",
      selectItem: {},
    }
  },
  methods: {
    // automatically generated
    importFunc() {
      this.$refs.fileInput.click();
    },
    handleFileSelect(event) {
      const fileInput = event.target;
      const selectedFile = fileInput.files[0];

      if (selectedFile && selectedFile.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileContent = e.target.result;
          try {
            const parsedData = JSON.parse(fileContent);
            localStorage.setItem('birthdayData', JSON.stringify(parsedData));
            location.reload();
          } catch (error) {
            this.$message.error("内容格式错误，请选择正确的文件");
          }
        };
        reader.readAsText(selectedFile, 'UTF-8');
      } else {
        this.$message.error("请选择有效的文本文件(*.txt)");
      }

      // 清空文件输入，以允许再次选择相同的文件
      fileInput.value = null;
    },
    exportFunc() {
      // 从 localStorage 中获取数据
      const exportedData = localStorage.getItem('birthdayData');

      if (exportedData) {
        // 创建 Blob 对象
        const blob = new Blob([exportedData], { type: 'text/plain' });

        // 创建下载链接
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'birthdayList.txt';

        // 将下载链接添加到文档，并触发点击事件
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // 清理
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
      } else {
        this.$message.error("没有可导出的数据");
      }
    },
    // clickEdit(id) {
    //   this.dialogVisible = true;
    //   this.id = id;
    //   this.selectItem = this.birthdayList.find(i => i.id == this.id)
    // },
    // submitItem() {
    //   // automatically generated
    //   let birthdayList = JSON.parse(localStorage.getItem('birthdayData'));
    //   birthdayList[birthdayList.findIndex(i => i.id == this.id)] = { ...this.selectItem };
    //   localStorage.setItem('birthdayData', JSON.stringify(birthdayList));
    //   this.dialogVisible = false;
    //   location.reload();
    // },
    // cancelEdit() {
    //   this.dialogVisible = false;
    //   location.reload();
    // },
    clickDelete(item) {
      const birthdayList = JSON.parse(localStorage.getItem('birthdayData'));
      birthdayList.splice(birthdayList.findIndex(i => i.id == item.id), 1);
      localStorage.setItem('birthdayData', JSON.stringify(birthdayList));
      location.reload();
    }
  },
}
</script>

<style scoped>
.el-row {
  padding-bottom: 8px;
}
</style>