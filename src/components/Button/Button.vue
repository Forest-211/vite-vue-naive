<template>
    <n-button @click="handleClick">lin-button</n-button>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'lin-button',
    setup() {
        const message = useMessage()
        function handleClick() {
            message.info("I don't know why nobody told you how to unfold your love")
        }

        return {
            handleClick
        }
    }
})
</script>

<style lang="scss" scoped></style>
