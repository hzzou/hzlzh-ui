<template>
    <div class="basicInput">
        <input :value="model" @input="handleInput"  />
    </div>
</template>
<script lang="ts" name="hz-input" setup>

    const props = defineProps({
        model: {
            type: [String, Number],
            default: null
        }
    });

    const vCustModel = {
        mounted:(el, binding)=>{
            console.log(el)
            console.log(binding)
        }
    }

    const emitEvent = defineEmits(["updateModel"]);

    const handleInput = (e) => {
        emitEvent("updateModel", e.target.value);
    }

</script>

<style lang="scss" scoped>
    .basicInput{
        input{
            border: 1px solid #dedede;
            font-size: 20px;
        }
    }
</style>
