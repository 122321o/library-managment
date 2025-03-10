<template>
  <div style="width: 80%">
    <div style="margin-bottom: 30px">新增用户</div>
    <el-form :inline="true" :model="form" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入联系方式"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
    </el-form>
    <div style="text-align: center;margin-top: 30px">
      <el-button type="primary" @click="save" size="medium">提交</el-button>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "AddUser",
  data() {
    const checkPhone = (rule, value, callback) => {
      if (!/^[1][3-9][0-9]{9}$/.test(value)) {
        callback(new Error('请输入合法的手机号'));
      }
      callback();
    };
    return {
      form: {
        name: '',
        phone: '',
        password:'',
        email:''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    save() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          request.post('admin/save', this.form).then(res => {
            if (res.code === '200') {
              this.$notify.success('新增成功');
              // 逐个清空表单字段
              this.form.name = '';
              this.form.age = '';
              this.form.phone = '';
              this.form.sex = '男';
              this.form.address = '';
            } else {
              this.$notify.error(res.msg);
            }
          });
        } else {
          this.$notify.error('表单校验失败，请检查输入');
        }
      });
    }
  }
};
</script>