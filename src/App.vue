<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav {
  width: 100%;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div id="app">
    <Layout>
      <div class="layout-nav">
        <Menu mode="horizontal" active-name="1">
          <MenuItem name="1">
            <Dropdown>
              <a href="javascript:void(0)">
                登录
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <router-link to="/userlogin">
                    <Icon type="ios-navigate"></Icon>用户登录
                  </router-link>
                </DropdownItem>
                <DropdownItem>
                  <router-link to="/adminlogin">
                    <Icon type="ios-navigate"></Icon>管理员登录
                  </router-link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
          <MenuItem name="2">
            <router-link to="/register">
              <Icon type="ios-navigate"></Icon>注册
            </router-link>
          </MenuItem>
          <MenuItem name="3">
            <router-link to="/upload">
              <Icon type="ios-navigate"></Icon>上传
            </router-link>
          </MenuItem>
          <MenuItem name="4"></MenuItem>
          <el-button @click="logout()">退出登录</el-button>
        </Menu>
      </div>
      <Content>
        <Breadcrumb :style="{margin: '20px'}">
          <router-link to="/">
            <BreadcrumbItem>主页丨</BreadcrumbItem>
          </router-link>
          <router-link to="/dianying">
            <BreadcrumbItem>电影丨</BreadcrumbItem>
          </router-link>
          <router-link to="/juji">
            <BreadcrumbItem>剧集丨</BreadcrumbItem>
          </router-link>
          <router-link to="/zongyi">
            <BreadcrumbItem>综艺丨</BreadcrumbItem>
          </router-link>
        </Breadcrumb>
        <Card>
          <div style="min-height: 730px;">
            <!-- <router-view v-if="isRouterAlive"></router-view> -->
			<router-view ></router-view>
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">孙豪</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "App",
//   provide() {
//     return {
//       reload: this.reload
//     };
//   },
  data() {
    return {
    //   isRouterAlive: true
    };
  },
  methods: {
    logout() {
      //清除token
      this.$store.dispatch("UserLogout");
      if (!this.$store.state.token) {
        this.$router.push("/login");
        this.$message({
          type: "success",
          message: "登出成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "登出失败"
        });
      }
    },
    // reload() {
    //   this.isRouterAlive = false;
    //   this.$nextTick(function() {
    //     this.isRouterAlive = true;
    //   })
    // }
  },
  components:{

  }
};
</script>
