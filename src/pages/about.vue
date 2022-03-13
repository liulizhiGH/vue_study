<template>
  <div>
    这是about组件
    <h1>{{ $store.state.all }}asdasdadad</h1>
    <h1 ref="customname">hello vue---{{ $data.msg }}</h1>
    <button @click="$router.push('/')">前往home---$router123</button>
    <button @click="gohome($event.target)">前往home---this.$router</button>
    <button @click="withparams">withparams</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "this就是实例",
    };
  },
  created() {
    console.log(this.$refs.customname, "customname");
    console.log(this.$route, "route");
    console.log(this.$router, "router");
  },
  mounted() {
    console.log(this.$refs.customname, "customname");
  },
  methods: {
    gohome(p, e) {
      console.log(p, "ppp");
      console.log(e, "777");
      this.$router.push("/");
    },
    withparams() {
      this.$router.push({
        name: "home",
        params: {
          userid: "1234567",
        },
        query: {
          go: "gogogo",
        },
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
