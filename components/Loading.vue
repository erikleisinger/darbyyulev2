<template>
    <div class="loading-container">
        <LogoSmall :color="getColor('mustard')" class="loading-logo"/>
    </div>
</template>
<script setup>
    const {getColor} = useColor();
</script>
<style lang="scss" scoped>
    .loading-container {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .loading-logo {
            height: auto;
            width: 100px;
        }
    }
</style>