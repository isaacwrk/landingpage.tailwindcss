<template>
    <NavBar/>
    <div class="mt-1">
        <Carrousel/>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-20">
            <div class="w-full overflow-hidden xl:w-1/3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full h-72	" src="~@/assets/03-card.jpg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">MT-03</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>

            <div class="w-full overflow-hidden xl:w-1/3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full h-72	" src="~@/assets/07-card.jpg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">MT-07</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>

            <div class="w-full overflow-hidden xl:w-1/3 ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full h-72	" src="~@/assets/09-card.jpg"  alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">MT-09</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
        </div>
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
*{
margin: 0;
padding: 0;
}
</style>