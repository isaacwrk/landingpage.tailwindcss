<template>
    <div id="app" class="base-color">
        <LandingPage/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LandingPage from '@/views/LandingPage.vue';


@Options({
    components: {
        LandingPage
    },
})
export default class App extends Vue {}
</script>

<style>
#app{
    color: white;
}
</style>
