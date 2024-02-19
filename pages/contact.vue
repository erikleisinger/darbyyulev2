<template>
    <main class="contact-container">
        <h1>Contact</h1>

    </main>
</template>
<style lang="scss" scoped>
  
    .contact-container{
          padding: 0px calcDimension(38px, true, true);
        margin-top: calcDimension(73px, true, false);
        @include breakpoint(small) {
            padding: unset;
            width: calcDimension(894px, false, true);
            margin: auto;
            margin-top: calcDimension(142px, false, false)
        }
    }
</style>