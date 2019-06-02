<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="序号" width="180"></el-table-column>
    <el-table-column prop="filmname" label="名称" width="180"></el-table-column>
    <el-table-column prop="date" label="收藏日期"></el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          filmname: "小偷家族",
          date: "2019-5-22"
        },
        {
          id: "2",
          filmname: "仙剑奇侠传",
          date: "2019-5-22"
        },
        {
          id: "3",
          filmname: "过春天",
          date: "2019-5-22"
        },
      ]
    };
  }
};
</script>
