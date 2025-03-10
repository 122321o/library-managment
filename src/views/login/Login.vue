<template>
  <div style="height: 100vh;overflow: hidden">
    <div style="width: 500px;height: 400px;background-color:white;border-radius: 10px;margin: 150px auto;padding: 50px">
      <div style="margin: 30px;text-align: center;font-size: 30px; font-weight: bold;color: dodgerblue">登录</div>
      <el-form :model="admin" ref="loginForm" :rules="rules" @submit.native.prevent="login">
        <el-form-item prop="username">
          <el-input v-model="admin.username" placeholder="请输入帐号" prefix-icon="el-icon-user"
                    size="medium" @keyup.enter="login"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="admin.password" placeholder="请输入密码" show-password prefix-icon="el-icon-lock"
                    size="medium" @keyup.enter="login"></el-input>
        </el-form-item>
        <el-button style="width: 100%" size="medium" type="primary" native-type="submit">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import Cookies from 'js-cookie';

export default {
  name: "Login",
  data() {
    return {
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur'},
        ]
      },
      admin: {},
    }
  },
  methods: {
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          request.post('/admin/login',this.admin).then(res => {
            if (res.code === '200') {
              this.$notify.success("登录成功")
              this.$router.push('/')
              if (res.data != null) {
                Cookies.set('admin', JSON.stringify(res.data))
              }
            } else {
              this.$notify.error(res.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>