<template>
    <div>
        <button @click="emit"></button>
    </div>
</template>

<script>
    import {
    EventBus,
    Current_Queue
  } from '@/common/EventBus';
    export default {
        name:'emit',
        data() {
            return {
                key: value
            }
        },
        methods: {
            emit() {
               EventBus.$emit(Current_Queue,'hello'); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>