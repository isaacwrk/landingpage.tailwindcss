<template>
    <NavBar/>
    <div class="mt-1">
        <Carrousel/>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12 font-Poppins">
        <div class="flex flex-wrap -mx-1 lg:-mx-20">
            <div class="w-full overflow-hidden xl:w-1/3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg hover:border-white cursor-pointer">
                    <img class="w-full h-72	" src="~@/assets/03-card.jpg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">MT-03</div>
                        <p class="text-gray-700 text-base">
                            Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        
                    </div>
                </div>
            </div>

            <div class="w-full overflow-hidden xl:w-1/3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg hover:border-white cursor-pointer">
                    <img class="w-full h-72	" src="~@/assets/07-card.jpg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">MT-07</div>
                        <p class="text-green-100 text-base">
                            Conhecida pelo DNA “Master of Torque” e motor com a tecnologia Crossplane, de mesma arquitetura e funcionamento da Yamaha YZR-M1 da MotoGP. possui controle, estabilidade e segurança em manobras e frenagens, seja qual for o trajeto.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        
                    </div>
                </div>
            </div>

            <div class="w-full overflow-hidden xl:w-1/3 hover:border-white cursor-pointer">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full h-72	" src="~@/assets/09-card.jpg"  alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">MT-09</div>
                        <p class="text-gray-700 text-base">
                            Com apenas 193 kg, 115 cv e 8,92 kgf.m de torque, a MT-09 surpreende em todos os detalhes. Seu motor crossplane tricilíndrico de 847 cc proporciona acelerações e retomadas rápidas de uma autêntica Master of Torque (MT).
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        
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