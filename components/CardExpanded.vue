<template>
    <div class="card-expanded__container">
       
        <main class="card-expanded__content">
            <div class="card-picture">
        <img :src="item.expanded.picture" :alt="item.expanded.alt" :style="{'object-position': item.expanded.position}" />
            </div>
            <div class="card-content">
                Content
            </div>
        </main>
         <div class="exit-button__floating">
            <Icon name="mdi:close" class="clickable" @click="emit('close')" size="2em"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-expanded__container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: red;
    z-index: 15;

    .exit-button__floating {
        position: absolute;
        top: 8px;
        right: 8px;
        color: $brand-white;
    }

    .card-expanded__content {
        display: grid;
        grid-template-rows: calcDimension(175px, true, false) auto;
        @include breakpoint(small) {
            grid-template-rows: calcDimension(425px, false, false) auto;
        }

        .card-picture{
            background-color: yellow;
            overflow: hidden;
            position: relative;
             img {
                object-fit: cover;
                
                height: 100%;
                width: 100%;
    //    height: 100%;
    //    @include breakpoint(small) {
    //     height: unset;
    //     width: 100%;
    //    }
        
   
      // background-size:unset;
    //   position: absolute;
    //   top: -9999px;
    //   left: -9999px;
    //   right: -9999px;
    //   bottom: -9999px;
      margin: auto;
    }
        }
    }
}
</style>
<script setup>
import { PORTFOLIO_ITEMS } from "@/constants/content";
    const props = defineProps({
        id: [String, Number]
    })

const item = PORTFOLIO_ITEMS[props.id];

    const emit = defineEmits(['close'])
</script>