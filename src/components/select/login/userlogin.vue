<template>
  <div class="login">
	  <h2>用户登录</h2>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" style="width:400px" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>
<script>
import axios from '../../../axios.js'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      activeName: 'first',
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入您的名称', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ]
      },

    };
  },
  methods: {
    //选项卡切换
    handleClick(tab, event) {},
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.userLogin(this.ruleForm)
            .then(({ data }) => {
              //账号不存在
              if (data.info === false) {
                this.$message({
                  type: 'info',
                  message: '账号不存在'
                });
                return;
              }
              if (data.success) {
                this.$message({
                  type: 'success',
                  message: '登录成功'
                });
                //拿到返回的token和username，并存到store
                let token = data.token;
                let username = data.username;
                this.$store.dispatch('UserLogin', token);
                this.$store.dispatch('UserName', username);
                //跳到目标页
                this.$router.push('/');
              }
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
}

</script>
<style>
</style>
