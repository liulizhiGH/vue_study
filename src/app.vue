<template>
  <div>
    此处以下为路由渲染区域：
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/concat">concat</router-link>
    <router-link to="/todolist">todolist</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
