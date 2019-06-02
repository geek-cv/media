<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in users" :key="item._id">
        {{ index + 1 }}.{{ item.username }}
        <el-button @click="del_user(index)">删除</el-button>
				<el-button @click="alter_user(index)">修改</el-button>
      </li>
    </ul>
    <el-button type="primary" @click="logout()">注销</el-button>
  </div>
</template>

<script>
import axios from '../../axios.js'
export default {
  data () {
    return {
      users:''
    }
  },
  created(){
    axios.getUser().then((response) => {
      if(response.status === 401){
        //不成功跳转回登录页
        this.$router.push('/login');
        //并且清除掉这个token
        this.$store.dispatch('UserLogout');
      }else{
        //成功了就把data.result里的数据放入users，在页面展示
        this.users = response.data.result;
      }
    })
  },
  methods:{
    del_user(index, event){
      let thisID = {
        id:this.users[index]._id
      }
      axios.delUser(thisID)
        .then(response => {
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          //移除节点
          this.users.splice(index, 1);
        }).catch((err) => {
          console.log(err);
      });
    },
		alter_user(index)
		{
			this.$router.push({path:'/alteruser'});
		},
    logout(){
      //清除token
      this.$store.dispatch('UserLogout');
      if (!this.$store.state.token) {
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '登出成功'
        })
      } else {
        this.$message({
          type: 'info',
          message: '登出失败'
        })
      }
    },
  }
}
</script>

<style>
</style>
