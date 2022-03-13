<template>
  <div>
    这是home组件
    <button @click="goabout">goabout</button>
    <h1>{{this.$store.state.all}}</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route, "homeroute-params");
  },
  updated() {
    console.log(this.$route.params, "777");
  },
  methods: {
    goabout() {
      this.$router.push({
        name: "about",
        // path:"/about",
        // params:{
        //   maby:"asd"
        // },
        query: {
          hhh: "zxc",
        },
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
