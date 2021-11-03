<template>
    <NavBar/>
    <div class="mt-1">
        <Carrousel/>
    </div>
    
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import NavBar from '@/components/Nav.vue';
import Carrousel from '@/components/Carrousel.vue';

const landingPage = defineComponent({
    components:{
        NavBar,
        Carrousel
    }
});

export default landingPage;
</script>

<style>

</style>