<template>
    <div>
        <h1>我是儿子组件</h1>
        <!-- <p>子组件名字:{{name}}</p> -->
      <!-- <p>子组件名字:{{this.obj.name}}</p> -->
      <Sun v-bind="$attrs"></Sun>
    </div>
</template>

<script>
import Sun from './sun.vue'
export default {
  name: "son",
  data() {
    return {};
  },
  props: {},
  components: {
      Sun,
  },
//   inject: ["name"],
// 子组件使用inject进行接收
//   inject: {
//     obj: {
//       default: () => {
//         return {};
//       }
//     }
//   },

};
</script>

<style lang="scss" scoped>
</style>