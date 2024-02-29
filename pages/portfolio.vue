<template>
<div class="portfolio-container">
<h1>Work</h1>
<main class="cards-container justify-center">
    <Card v-for="item in Object.keys(PORTFOLIO_ITEMS)" :key="item" :identifier="item" :minHeight="`${minCardHeight}px`">

    </Card>
</main>
</div>
</template>
<style lang="scss" scoped>
.portfolio-container {
    display: flex;
    flex-direction: column;
   align-items: center;
   padding: calcDimension(16px, true, true);
    padding-top: calcDimension(83px,
     true, false);
    @include breakpoint(small) {
        padding: 0px calcDimension(108px, false, true);
        padding-top: calcDimension(153px, false, false);
    }

    h1 {
        width: 100%;
        font-size: 26px;
        margin-bottom: 16px;
        @include breakpoint(small) {
            font-size: min(4.9603174603vw, 75px);
            margin-bottom: 12px;
        }
    }
}
    .cards-container {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        @include breakpoint(small) {
            gap: 37px;
        }

        
        @include breakpoint(small) {
            padding: unset;
        }
    }
</style>
<script setup>
    import {PORTFOLIO_ITEMS} from '@/constants/content/portfolio';
    import {useEventListener} from '@vueuse/core';

    const minCardHeight = ref(0)


    const setCardHeight = () => {
        minCardHeight.value = 0;
        nextTick(() => {
 const cards = document.getElementsByClassName('card-container');

        let tallest = 0;
        Array.from(cards).forEach(card => {
            if (card.clientHeight > tallest) {
                tallest = card.clientHeight;
            }
        })
               
    minCardHeight.value = tallest;
        })


    }

    onMounted(() => {
  
            setCardHeight()
      
    })

    useEventListener('resize', setCardHeight)
</script>