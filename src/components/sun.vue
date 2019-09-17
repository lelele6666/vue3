<template>
    <div>
        <p>我是子孙组件</p>
        <p>{{$attrs}}</p>
        <p>张玉的年龄:{{age}}</p>
    </div>
</template>

<script>
    export default {
        name:'sun',
        data() {
            return {
                age: this.$attrs.age
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>