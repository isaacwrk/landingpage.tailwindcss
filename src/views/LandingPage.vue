<template>
    <NavBar/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import NavBar from '@/components/Nav.vue';

const landingPage = defineComponent({
    components:{
        NavBar
    }
});

export default landingPage;
</script>

<style>

</style>