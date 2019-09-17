<template>
    <div>
        <h1>我是儿子组件</h1>
        <!-- <p>子组件名字:{{name}}</p> -->
      <p>子组件名字:{{this.obj.name}}</p>
    </div>
</template>

<script>
export default {
  name: "son",
  data() {
    return {};
  },
  props: {},
//   inject: ["name"],
  inject: {
    obj: {
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>