<template>
    <div>
        <button @click="changeName">点击我改变name</button>
        <h1>我是父亲组件</h1>
        <p>我的名字：{{name}}</p>
        <Child></Child>
    </div>
</template>

<script>
    import Child from './son.vue'
    export default {
        name:'father',
        data() {
            return {
                name: '张玉'
            }
        },
        // provide() {
        //   return {
        //     name: this.name //这种绑定方式是不可响应的
        //   };
        // },
        provide() {
            return {
            obj: this
            };
        },
        
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