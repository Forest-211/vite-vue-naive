import { ref } from 'vue' import { ref } from 'vue'

<template>
    <n-message-provider>
        <img alt="Vue logo" src="@/assets/logo.png" />
        <NButton @click="handleAdd">add</NButton>
        <NButton @click="handleMinus">minus</NButton>
        <n-progress type="circle" color="green" :percentage="percentage" />
        <h3>naive-ui搭建的项目</h3>
        <Button />
    </n-message-provider>
    <n-gradient-text :size="24" type="success" class="title"> {{ title }} </n-gradient-text>
    <n-button @click="$router.push('/about')">about</n-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'

const title = 'Forest'
let percentage = ref<number>(0)
function handleAdd() {
    if (percentage.value < 100) percentage.value += 10
}
function handleMinus() {
    if (percentage.value > 0) percentage.value -= 10
}
</script>

<style lang="scss" scoped>
.title {
    user-select: none;
}
</style>
