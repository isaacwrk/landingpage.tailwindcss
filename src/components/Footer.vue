<template>
    <nav id="footer">

        <!-- start container -->
        <div class="container mx-auto pt-8 pb-4">

            <div class="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">

                <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                    <img style="max-width: 70%;height:auto;" class="" src="~@/assets/yamaha-footer.svg" alt="Logo">
                </div>

                <div class="w-full overflow-hidden sm:my-1 text-white  sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                    <h3>Este é um projeto de estudos sobre <a href="https://tailwindcss.com/" target="_blank" class="text-green-400 hover:text-green-500">TailwindCSS.</a><br>Todos os direitos de imagem pertencem a Yamaha Motors do Brasil.</h3>
                </div>
            </div>

            <div class="pt-4 md:flex md:items-center md:justify-center " style="border-top:1px solid red">
                <ul class="">
                    <li class="md:mx-2 md:inline leading-7 text-sm text-gray-200">Desenvolvido por <a class="text-red-400 text-small hover:text-red-500" href="https://www.github.com/isaacwrk" target="_blank">isaacwrk</a></li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const footer = defineComponent({
});

export default footer;
</script>

<style>

</style>