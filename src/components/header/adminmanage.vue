<template>
  <div class="guanli">
    <div class="yonghu" style="width:800px;margin-bottom=50px">
      <h2>用户管理</h2>
      <el-table :data="tableData1" style="width: 100%" max-height="250">
        <el-table-column prop="create_time" fixed label="时间" width="120"></el-table-column>
        <el-table-column prop="username" label="姓名" width="120"></el-table-column>
        <el-table-column prop="sex" label="性别" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click="delUsers(scope.$index)" type="danger" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pinglun" style="width:800px">
      <h2>评论管理</h2>
      <el-table :data="tableData2" style="width: 100%" height="300">
        <el-table-column prop="message" fixed label="热门评论" width="320"></el-table-column>
        <el-table-column prop="messname" label="影片名字" width="120"></el-table-column>
        <el-table-column prop="create_time" label="评论时间" width="220"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click="removeMess(scope.$index)" type="danger" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import axios from "../../axios.js";
export default {
  data() {
    return {
      tableData1: [],
      tableData2: [
        {
          _id: "",
          message: "",
          messname: "",
          create_time: ""
        }
      ]
    };
  },
  created() {
    this.update();
  },
  methods: {
    delUsers(a) {
      let data1 = {
        username: this.tableData1[a].username,
        token: this.tableData1[a].token
      };
      console.log(data1)
      axios.delUsers(data1).then(res => {
        this.update();
      });
    },
    update() {
      axios.getAllMess().then(response => {
        if (response.status === 401) {
          //不成功跳转回登录页
          this.$router.push("/login");
        } else {
          //成功了就把data.result里的数据放入users，在页面展示
          this.tableData2 = response.data.result;
        }
      });
      axios.getUsers().then(response => {
        //console.log(response.data);
        this.tableData1 = response.data;
      });
    },
    removeMess(a) {
      let data1 = {
        messname: this.tableData2[a].messname,
        message: this.tableData2[a].message
      };
      axios.removeMess(data1).then(res => {
        this.update();
      });
    }
  }
};
</script>
