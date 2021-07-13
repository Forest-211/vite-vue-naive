<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <NButton @click="handleAdd">add</NButton>
    <NButton @click="handleMinus">minus</NButton>
    <n-progress type="circle" color="green" :percentage="percentage" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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

<style></style>
