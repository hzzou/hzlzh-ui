<template>
    <div>
        <hz-button type="primary" @click="showModal = true">展示弹窗</hz-button>
        <hz-dialog v-model="showModal" title="标题">
            <template #default>
                内容
            </template>
            <template #footer>
                <hz-button @click="showModal = false">取消</hz-button>
                <hz-button type="primary" @click="showModal = false">确定</hz-button>
            </template>
        </hz-dialog>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const showModal = ref(false);
</script>
<style lang="scss">
    .hz-dialog{
        .footer{
            .hz-button{
                margin-left: 10px;
            }
        }
    }
</style>
