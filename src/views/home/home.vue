<template>
    <div>
        <n-message-provider>
            <img alt="Vue logo" src="@/assets/logo.png" />
            <NButton @click="handleAdd">add</NButton>
            <NButton @click="handleMinus">minus</NButton>
            <n-progress type="circle" color="green" :percentage="percentage" />
            <h3>naive-ui搭建的项目</h3>
        </n-message-provider>
        <n-gradient-text :size="24" type="success" class="title"> {{ title }} </n-gradient-text>
        <n-button @click="$router.push('/about')">about</n-button>
        <n-button @click="increment">+</n-button>
        <span>{{ count }}</span>
        <n-button @click="decrement">-</n-button>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

    const title = 'Forest'
    const percentage = ref<number>(0)

    function handleAdd() {
        if (percentage.value < 100) percentage.value += 10
    }
    function handleMinus() {
        if (percentage.value > 0) percentage.value -= 10
    }
    const store = useStore()
    const count = computed(() => store.state.count)

    const increment = () => store.commit('increment')
    const decrement = () => store.commit('decrement')
</script>

<style lang="scss" scoped>
.title {
    user-select: none;
}
</style>
