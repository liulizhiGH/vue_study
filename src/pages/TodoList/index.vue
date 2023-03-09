<template>
  <div>
    <list-item />
    <el-button-group>
      <el-button type="primary" size="default" @click="showModal=true">open</el-button>
      <el-button type="primary" size="default" @click="showModal=false">close</el-button>
    </el-button-group>

    <el-dialog
      title="这是个modal框"
      :visible.sync="showModal"
      width="30%"
      @close="showModal"
    >
      <span>展示</span>
      <list-item />
      <span slot="footer">
        <el-button @click="showModal = false">Cancel</el-button>
        <el-button type="primary" @click="window.console.log('是js语法就好')">OK</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    ListItem,
  },
};
</script>

<style lang="less" scoped></style>
