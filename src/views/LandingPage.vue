<template>
    <NavBar/>

    <div class="mt-1">
        <Carrousel/>
    </div>

    <div class="container my-12   mx-auto px-4 md:px-12 font-Poppins">
        <h1 class="text-white bold text-center text-3xl mb-2">Conheça o a linha <a class="text-red-500 font-normal italic">Master of Torque</a></h1>
        <div class="flex flex-wrap -mx-1 lg:-mx-20">
            <div class="w-full overflow-hidden xl:w-1/3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg  border-2 border-white cursor-pointer">
                    <img class="w-full h-72	" src="~@/assets/03-card.jpg" alt="Card MT-03 frontal">
                    <div class="px-6 py-4" >
                        <div class="font-bold text-xl mb-2 text-white">MT-03</div>
                        <p class="text-gray-200 text-base">
                            Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas. MT-03 acompanha facilmente em viagens motos de porte maior.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        
                    </div>
                </div>
            </div>

            <div class="w-full overflow-hidden xl:w-1/3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 cursor-pointer">
                    <img class="w-full h-72	" src="~@/assets/07-card.jpg" alt="Card MT-07 frontal">
                    <div class="px-6 py-4">
                        <div class="font-bold text-white text-xl mb-2">MT-07</div>
                        <p class="text-gray-200 text-base">
                            Conhecida pelo DNA “Master of Torque” e motor com a tecnologia Crossplane, de mesma arquitetura e funcionamento da Yamaha YZR-M1 da MotoGP. possui controle, estabilidade e segurança em manobras e frenagens, seja qual for o trajeto.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        
                    </div>
                </div>
            </div>

            <div class="w-full overflow-hidden xl:w-1/3 border-2 cursor-pointer">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full h-72	" src="~@/assets/09-card.jpg"  alt="Card MT-09 frontal">
                    <div class="px-6 py-4">
                        <div class="font-bold text-white text-xl mb-2">MT-09</div>
                        <p class="text-gray-200 text-base">
                            Com apenas 193 kg, 115 cv e 8,92 kgf.m de torque, a MT-09 surpreende em todos os detalhes. Seu motor crossplane tricilíndrico de 847 cc proporciona acelerações e retomadas rápidas de uma autêntica Master of Torque (MT).
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="min-w-full relative about">
        <div class="rounded ">
            <img src="~@/assets/about-mt.jpg" alt="MT-09 visão lateral">
            <p class="img_description text-left p-12"><strong>TORQUE</strong> é o significado da sigla MT é Master of Torque, ou mestre da força.<br> Nos modelos maiores, MT-07 e MT-09, o motor conta com a tecnologia crossplane, que é um arranjo na movimentação dos pistãos que permite maior força ou torque, justificando a pretensão do nome.<br>
                A linha de entrada já entrega grande desempenho nas pistas, incrementenando cada vez mais nas irmãs mais velhas, MT-07 e MT-09, nos quais dominam as pistas. Também conhecidas como "Dark side of Japan".<br>
                <strong>MT-03:</strong>As revoluções nas quais a potência é entregue por completo denunciam que a japonesa emoldura um propulsor girador. O torque despejado em todas as faixas de rotações chegou até a me confundir em alguns momentos.
                Como quando saí em segunda marcha pensando estar em primeira. Ou quando acelerei em terceira pensado estar em segunda. O ajuste associado ao câmbio de seis marchas com trocas suaves deixa a moto esperta e com um freio motor que ajuda na frenagem.<br>
                <strong>MT-07:</strong>A sensação de intimidade é imediata. Com banco a 805 mm de chão e uma equação entre altura do guidão e pedaleiras que deixa o corpo mais relaxado e levemente inclinado para frente, a tarefa de acelerar passa a ser de explorar o motor e sua admirável capacidade de retomada.<br>
                <strong>MT-09:</strong> é uma pilotagem que exige muito cuidado quando a condução é esportiva, mas que curiosamente é bem fácil quando se está no modo civilizado. Ao contrário do que esperávamos, a MT-09 é dócil no trânsito. Com aceleração vertiginosa, proporciona um ganho de velocidade estúpido e, enquanto eu pensava “meu Deus, que moto é essa!”, esqueci do pardal. Passado esse momento sublime e caro, voltei à realidade e aos cuidados necessários.
            </p>
        </div>
    </div>
    <Footer/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import NavBar from '@/components/Nav.vue';
import Carrousel from '@/components/Carrousel.vue';
import Footer from '@/components/Footer.vue';

const landingPage = defineComponent({
    components:{
        NavBar,
        Carrousel,
        Footer
    }
});

export default landingPage;
</script>

<style>
*{
margin: 0;
padding: 0;
}
.img_description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(236, 96, 86, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;

  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
}

.about:hover .img_description {
  visibility: visible;
  opacity: 1;
}
</style>