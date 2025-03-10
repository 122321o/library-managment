<template>
  <div>
    <div class="item">用户名：{{admin.username}}</div>
    <div class="item">联系方式：{{admin.phone}}</div>
    <div class="item">邮箱：{{admin.email}}</div>
  </div>
</template>

<script>


import Cookies from "js-cookie";

export default {
  name: 'HomeView',
  data() {
    return {
      user: JSON.parse(Cookies.get('admin'))
    }
  }
}
</script>
<style>
.item{
  margin: 10px 0;
  color: #666;
}
</style>
