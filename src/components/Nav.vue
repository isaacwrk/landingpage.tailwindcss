<template>
    <body class="font-Poppins">
        <header>
            <nav class="container flex items-center py-4">
                <div class="py-1 ml-1 w-32"><img src="../assets/yamahalogo.svg" alt="" /></div>
                <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 uppercase text-xs">
                    <li class="cursor-pointer text-white hover:text-red-200">Linha MT</li>
                    <li class="cursor-pointer text-white hover:text-red-200 ">Sobre</li>
                    <li class="cursor-pointer text-white hover:text-red-200">Contato</li>
                    <button type="button" class="bg-b-red hover:bg-red-500 hover:text-white rounded-md px-7 py-3 uppercase">Login</button>
                </ul>
                <div class="flex sm:hidden flex-1 justify-end">
                    <i class="text-2xl fas fa-bars"></i>
                </div>
            </nav>
        </header> 
    </body>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const navBar = defineComponent({
});

export default navBar;
</script>

<style>


</style>