<template>
	<Form ref="formInline" :model="formInline" :rules="ruleInline">
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
		<FormItem prop="passwordcheck">
			<Input type="password" v-model="formInline.passwordcheck" placeholder="passwordcheck">
			<Icon type="ios-lock-outline" slot="prepend"></Icon>
			</Input>
		</FormItem>
		<FormItem>
			<Button type="primary" @click="handleSubmit('formInline')">注册</Button>
			<Button type="primary" @click="handleReset('formInline')">重置</Button>
		</FormItem>
	</Form>
</template>
<script>
	import axios from '@/axios.js'
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
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.formInline.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				formInline: {
					user: '',
					password: '',
					passwordcheck: ''
				},
				ruleInline: {
					user: [{
						required: true,
						message: '请输入账户',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: '请输入密码',
							validator: validatePass,
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '长度至少6位',
							trigger: 'blur'
						}
					],
					passwordcheck: [{
						required: true,
						validator: validatePass2,
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						axios.userRegister(this.formInline)
							.then(({
								data
							}) => {
								if (data.success) {
									this.$message({
										type: 'success',
										message: '注册成功'
									});
								} else {
									this.$message({
										type: 'info',
										message: '用户名已经存在'
									});
								}
							})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			handleReset(name) {
				this.$refs[name].resetFields();
			}
		}
	}
</script>
