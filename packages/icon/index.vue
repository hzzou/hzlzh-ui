<template>
    <i class="hz-icon iconfont" :style="{color, fontSize: size+'px'}" :class="'icon-'+name"></i>
</template>
<script name="hz-icon" setup lang="ts">

    const props = defineProps({
        name: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "#999"
        },
        size: {
            type: [String , Number],
            default: "16"
        }
    });
</script>

<style scoped lang="scss">
    @import "../../assets/fonts/iconfont.css";
    .hz-icon{

    }
</style>
