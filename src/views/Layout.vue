<template>
  <div>
    <!--头部区域-->
    <div style="height: 60px; line-height: 60px; background-color:white;margin-bottom: 2px; display: flex">
      <div style="width: 300px">
        <img src="@/assets/logo.png" alt="" style="width: 40px; position: relative; top: 10px;left: 20px">
        <span style="margin-left: 25px; font-size: 24px">图书管理系统</span>
      </div>
      <div style="flex: 1;text-align: right;padding-right: 20px;">
        <el-dropdown size="medium">
          <span class="el-dropdown-link" style="cursor: pointer">
            {{admin.username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="margin-top: -5px">
            <el-dropdown-item style="width: 70px;text-align: center" @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>

    <!--侧边栏主题-->
    <div style="display: flex">
      <!--侧边栏导航-->
      <div
          style="width: 200px;min-height: calc(100vh - 62px); overflow: hidden;margin-right: 2px;background-color:white;">
        <el-menu :default-active="$route.path" router class="el-menu-demo" :default-openeds="['/admin','/user']">
          <el-menu-item index="/home">
            <i class="el-icon-eleme"></i>
            <span>首页</span>
          </el-menu-item>
          <el-submenu index="/admin">
            <template slot="title">
              <i class="el-icon-question"></i>
              <span>管理员管理</span>
            </template>
            <el-menu-item index="/addAdmin">管理员添加</el-menu-item>
            <el-menu-item index="/admin">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="/user">
            <template slot="title">
              <i class="el-icon-question"></i>
              <span>会员管理</span>
            </template>
            <el-menu-item index="/addUser">会员添加</el-menu-item>
            <el-menu-item index="/user">会员列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <div style="flex: 1;background-color:white;padding: 10px">
        <router-view/>
      </div>

    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";

export default {
  name: "Layout",
  data() {
    return {
      user: Cookies.get('admin') ? JSON.parse(Cookies.get('admin')) : {}
    }
  },
  methods: {
    logout() {
      Cookies.remove('user')
      this.$router.push('/login')
    }
  }
}
</script>


<style scoped>

</style>