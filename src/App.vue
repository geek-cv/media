<style scoped>
	.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-nav{
    width: 100%;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
		<Layout>
			<div class="layout-nav">
				<Menu mode="horizontal" active-name="1">
					<MenuItem name="1">
					<router-link to="/login">
						<Icon type="ios-navigate"></Icon>
						登录
					</router-link>
					</MenuItem>
					<MenuItem name="2">
					<router-link to="http://localhost:3000/">
						<Icon type="ios-navigate"></Icon>
						上传
					</router-link>
					</MenuItem>
					<MenuItem name="3">
					<router-link to="/register">
						<Icon type="ios-navigate"></Icon>
						注册
					</router-link>
					</MenuItem>
					<MenuItem name="4">
					
					</MenuItem>
				</Menu>
			</div>
			<Content>
				<Breadcrumb :style="{margin: '20px'}">
					<router-link to='/'>
						<BreadcrumbItem>主页丨</BreadcrumbItem>
					</router-link>
					<router-link to='/fun'>
						<BreadcrumbItem>搞笑丨</BreadcrumbItem>
					</router-link>
					<router-link to='/life'>
						<BreadcrumbItem>日常丨</BreadcrumbItem>
					</router-link>
					<router-link to='/App'>
						<BreadcrumbItem>数码丨</BreadcrumbItem>
					</router-link>
					<router-link to='/myplayer'>
						<BreadcrumbItem>播放器</BreadcrumbItem>
					</router-link>
					<router-link to='/bofang'>
						<BreadcrumbItem>m3u8播放</BreadcrumbItem>
					</router-link>
				</Breadcrumb>
				<Card>
					<div style="min-height: 730px;">
						<router-view></router-view>
					</div>
				</Card>
			</Content>
			<Footer class="layout-footer-center">孙豪</Footer>
		</Layout>
</template>
<script>
	export default {

	}
</script>
