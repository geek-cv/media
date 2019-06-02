<template>
  <div class="guanli">
    <div class="yonghu" style="width:800px;margin-bottom=50px">
      <h2>用户管理</h2>
      <el-table :data="tableData1" style="width: 100%" max-height="250">
        <el-table-column prop="date" fixed label="时间" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="sex" label="性别" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData1)"
              type="danger"
              size="small"
            >移除</el-button>
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
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData2)"
              type="danger"
              size="small"
            >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import axios from '../../axios.js'
export default {
  data() {
    return {
      tableData1: [
        {
          date: "2019-05-20",
          name: "张三",
          sex: "男",
          address: "四川成都",
        },
        {
          date: "2019-05-20",
          name: "李四",
          sex: "男",
          address: "四川成都",
        },
        {
          date: "2019-05-20",
          name: "王五",
          sex: "男",
          address: "北京",
        },
        {
          date: "2019-05-20",
          name: "王五",
          sex: "男",
          address: "四川广元",
        },
        {
          date: "2019-05-20",
          name: "王五",
          sex: "男",
          address: "上海",
        }
      ],
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
  created(){
       axios.getAllMess().then(response => {
        if(response.status === 401){
        //不成功跳转回登录页
        this.$router.push('/login');
      }else{
        //成功了就把data.result里的数据放入users，在页面展示
        this.tableData2 = response.data.result;
      }
      })
  },
  methods: {
  }
};
</script>
