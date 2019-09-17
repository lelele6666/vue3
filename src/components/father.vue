<template>
    <div>
        <button @click="changeName">点击我改变name</button>
        <h1>我是父亲组件</h1>
        <p>我的名字：{{name}}</p>
        <!-- <child></child> -->
        <Child :age = 'age' :name = 'name' :qq = 'qq'></Child>
    </div>
</template>

<script>
    import Child from './son.vue'
    export default {
        name:'father',
        data() {
            return {
                name: '张玉',
                age:24,
                qq:'12344'
            }
        },
        // provide() {
        //   return {
        //     name: this.name //这种绑定方式是不可响应的
        //   };
        // },

        // Provide 和 Inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
        // 监听的是地址，当地址发生改变才会相应的改变
        // 能把所有的属性都传给子组件
        // provide() {
        //     return {
        //     obj: this
        //     };
        // },
        
        components: {
            Child,
        },
        methods: {
            changeName() {
                this.name = 'zhangzhang'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>