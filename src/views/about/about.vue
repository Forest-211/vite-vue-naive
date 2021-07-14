<template>
    <div>
        <n-button @click="$router.push('/')">home</n-button>
        <n-car>
            <n-row>
                <n-col :span="12">
                    <n-statistic label="统计数据" :value="99">
                        <template #prefix>
                            <n-icon>
                                <md-save />
                            </n-icon>
                        </template>
                        <template #suffix>/ 100</template>
                    </n-statistic>
                </n-col>
                <n-col :span="12">
                    <n-statistic label="活跃用户">1,234,123</n-statistic>
                </n-col>
            </n-row>
        </n-car>

        <n-space vertical>
            <n-switch v-model:value="loading" />
            <n-card>
                <template #header>
                    <n-skeleton v-if="loading" text width="60%" />
                    <template v-else>I'm OK</template>
                </template>
                <n-skeleton v-if="loading" text :repeat="6" />
                <template v-else>
                    不要忘了留姓名<br />
                    电话和其他事情<br />
                    不要说的太快免得我没写下你大名<br />
                    或许你不再打来<br />
                    我却等到头发白<br />
                    希望有一天你会打来
                </template>
            </n-card>
        </n-space>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MdSave } from '@vicons/ionicons4'
export default defineComponent({
    components: { MdSave },
    setup() {
        const loading = ref(true)

        return {
            loading
        }
    }
})
</script>

<style scoped></style>
