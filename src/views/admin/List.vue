<template>
  <div>
    <!--搜索表单-->
    <div style="margin-bottom: 20px">
      <el-input style="width:240px" placeholder="请输入名称" v-model="param.name"></el-input>
      <el-input style="width:240px; margin-left: 5px" placeholder="请输入联系方式" v-model="param.phone"></el-input>
      <el-input style="width:240px; margin-left: 5px" placeholder="请输入邮箱" v-model="param.email"></el-input>
      <el-button style="margin-left: 5px" type="primary" @click="load"><i class="el-icon-search"></i>搜索</el-button>
      <el-button style="margin-left: 5px" type="warning" @click="reset"><i class="el-icon-refresh"></i>重置</el-button>
    </div>

    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="编号" width="80"></el-table-column>
      <el-table-column prop="username" label="会员号" width="140"></el-table-column>
      <el-table-column prop="phone" label="联系方式"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="updatetime" label="更新时间"></el-table-column>
      <el-table-column prop="createtime" label="创建时间"></el-table-column>
      <el-table-column lebel="操作">
        <template v-slot="scope">
          <el-button style="margin-right: 5px" type="primary" @click="$router.push('/editadmin?id=' + scope.row.id)">编辑</el-button>
          <template>
            <el-popconfirm
                title="您确定删除这行数据吗？"
                @confirm="del(scope.row.id)"
            >
              <el-button type="danger" slot="reference">删除</el-button>
            </el-popconfirm>
          </template>
        </template>
      </el-table-column>

    </el-table>

    <div style="margin-top: 20px">
      <el-pagination
          background
          :current-page="param.pageNum"
          :page-size="param.pageSize"
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: 'admin',
  data() {
    return {
      tableData: [],
      total: 0,
      param:{
        name:'',
        phone:'',
        email:'',
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.load()
  },
  methods:{
    load() {
      request.get('/admin/page',{params:this.param})  // 确保 request 是有效的 Axios 实例
          .then(res => {
            this.tableData = res.data.list;
            this.total = res.data.total;
          })
          .catch(error => {
            console.error('请求失败:', error);
          });
    },
    reset() {
      this.param.phone = ''
      this.param.name = ''
      this.load()
    },
    //触发分页
    handleCurrentChange(pageNum) {
      this.param.pageNum = pageNum
      this.load()
    },
    del(id) {
      request.delete('admin/' + id).then(res => {
        if (res.code === '200') {
          this.$notify.success('删除成功')
          this.load()
        }else {
          this.$notify.error(res.msg)
        }
      })
    }
  }
}
</script>
