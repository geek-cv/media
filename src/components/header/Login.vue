<template>
	<Form ref="formInline" :model="formInline" :rules="ruleInline" style="inline">
		<FormItem prop="user">
			<Input type="text" v-model="formInline.user" placeholder="Username">
			<Icon type="ios-person-outline" slot="prepend"></Icon>
			</Input>
		</FormItem>
		<FormItem prop="password">
			<Input type="password" v-model="formInline.password" placeholder="Password">
			<Icon type="ios-lock-outline" slot="prepend"></Icon>
			</Input>
		</FormItem>
		<FormItem>
			<Button type="primary" @click="handleSubmit('formInline')">登录</Button>
			<Button type="primary" @click="handleReset('formInline')">重置</Button>
			<router-link to='/register'>
				<Button type="primary">
					注册
				</Button>
			</router-link>
		</FormItem>
	</Form>
</template>
<script>
	// import axios from '@/axios.js'
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.formInline.password !== '') {
						this.$refs.formInline.validateField('password');
					}
					callback();
				}
			};
			return {
				formInline: {
					user: '',
					password: ''
				},
				ruleInline: {
					user: [{
						required: true,
						message: '请输入帐号',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						validator: validatePass,
						trigger: 'blur'
					}, ]
				}
			}
		},
		methods: {
			//提交表单
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						axios.userLogin(this.formInline)
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
									// this.$router.push('HelloWorld');
								}
							});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//重置表单
			handleReset(name) {
				this.$refs[name].resetFields();
			}
		}
	}
</script>
