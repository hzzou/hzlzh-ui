<template>
    <div class="app">
<!--        <Button></Button>-->
<!--        <Input></Input>-->
<!--        <Profile />-->
<!--        <VirtualTable></VirtualTable>-->
<!--        <Popper></Popper>-->
<!--        <Dialog></Dialog>-->
      <VirtualSelect></VirtualSelect>
    </div>
</template>
<script setup lang="ts">
    import Button from "./button/index.vue";
    import Dialog from "./dialog/index.vue";
    import Input from "./input/index.vue";
    import Popper from "./popper/index.vue";
    import VirtualTable from "./virtualTable/index.vue";
    import Profile from "../../viteDocs/demo/profile.vue";
    import VirtualSelect from  "./virtualSelect/index.vue";
    // let m = 100_123_234_223;
    // console.log(m)

</script>
<style>
.app{
    margin-top: 100px;
    padding: 10px;
}
</style>


