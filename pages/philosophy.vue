<template>
    <div class="philosophy-container">
        <h1>My philosophy</h1>
        <section v-for="paragraph, index, in PARAGRAPHS" :key="index">
            <h3 v-if="paragraph.title">{{paragraph.title}}</h3>
            <p v-if="paragraph.content">{{paragraph.content}}</p>
            <br/>
         
        </section>
    </div>
</template>
<script setup>
    import {PARAGRAPHS} from "@/constants/content";

</script>
<style lang="scss" scoped>
    .philosophy-container {
        
        padding: 0px calcDimension(38px, true, true);
        margin-top: calcDimension(73px, true, false);
        @include breakpoint(small) {
            padding: unset;
            width: calcDimension(894px, false, true);
            margin: auto;
            margin-top: calcDimension(142px, false, false)
        }

        h1 {
            margin-bottom: calcDimension(13px, true, false);
            @include breakpoint(small) {
                margin-bottom: calcDimension(20px, false, false)
            }
        }

        
        section {
            color: $brand-white;
        }

        p, h3 {
            font-size: 14.81px;
            @include breakpoint(small) {
                font-size: 29px;
            }
        }
        p {
            line-height: 16px;
            @include breakpoint(small) {
                line-height: 32px;
            }
        }
    }
</style>