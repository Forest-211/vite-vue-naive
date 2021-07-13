<template>
    <n-message-provider>
        <img alt="Vue logo" src="./assets/logo.png" />
        <NButton @click="handleAdd">add</NButton>
        <NButton @click="handleMinus">minus</NButton>
        <n-progress type="circle" color="green" :percentage="percentage" />
        <h3>naive-ui搭建的项目</h3>
        <Button />
    </n-message-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '@/components/Button/Button.vue'
export default defineComponent({
    // name: 'App',
    // data() {
    //     return {
    //         percentage: 0
    //     }
    // },
    // methods: {
    //     add() {
    //         this.percentage += 10
    //         if (this.percentage > 100) this.percentage = 0
    //     },
    //     minus() {
    //         this.percentage -= 10
    //         if (this.percentage < 0) this.percentage = 100
    //     }
    // }
    components: { Button },
    setup() {
        let percentage = ref<number>(0)
        function handleAdd() {
            if (percentage.value < 100) percentage.value += 10
        }
        function handleMinus() {
            if (percentage.value > 0) percentage.value -= 10
        }
        return {
            percentage,
            handleAdd,
            handleMinus
        }
    }
})
</script>

<style lang="scss">
h3 {
    font-size: 24px;
    color: red;
}
</style>
