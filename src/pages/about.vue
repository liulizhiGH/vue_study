<template>
  <div>
    这是about组件
    <h1>{{ lll }}局部数据data</h1>
    <h1>{{ zxc }}局部数据computed</h1>
    <h1>{{ $store.state.all }}直接取store</h1>
    <h1>{{ all }}使用mapState映射取同名计算属性</h1>
    <h1 ref="customname">hello vue---{{ $data.msg }}</h1>
    <br />
    <button @click="updateValue('这是payload')">mapMutations</button>
    <button @click="kkk('a啊实打实大苏打')">mapAction</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      lll: this.$store.state.all,
    };
  },
  created () {
    this.kkk()
  },
  computed: {
    zxc(){
      return this.$store.state.all
    } ,
    ...mapState(["all"]),
  },
  methods: {
    ...mapMutations([
      "updateValue", //also supports payload `this.nameOfMutation(amount)`
    ]),
    ...mapActions([
      "kkk", //also supports payload `this.nameOfAction(amount)`
    ]),
  },
};
</script>

<style lang="less" scoped></style>
