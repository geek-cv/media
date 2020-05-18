<template>
   <div class="collect" style="width:800px;margin-bottom=50px">
      <h2>用户收藏</h2>
      <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column prop="username" label="姓名" width="120"></el-table-column>
        <el-table-column prop="video_name" label="影片名称" width="120"></el-table-column>
      </el-table>
    </div>
</template>

  <script>
  import axios from "../../axios.js"
export default {
  data() {
    return {
      tableData: [
        {
          username:"",
          video_name:""
        },
      ]
    };
  },
  created(){
      axios.getUsers().then(response =>{
          this.tableData = response.data;
      })
  },
  methods: {
    collectInfo(data) {
      console.log(data)
      this.$router.push({path:'/bofang',query: {id: data.id}})
    }
  }
};
</script>
