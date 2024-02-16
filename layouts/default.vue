<template>
    <main class="app-content" :class="{light}">
        <NavBar />
    <slot/>
    </main>
</template>
<script setup>
    const {light} = useColor();
</script>
<style lang="scss" scoped>
    .app-content {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
        &.light {
            background-color: $brand-yellow;
        }
    }
</style>