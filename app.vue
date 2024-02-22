<template>
<transition name="page">
  <NuxtLayout v-if="mounted" key="app">
    <NuxtPage />
  </NuxtLayout>
  <Loading v-else key="loading"/>
</transition>
</template>
<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script setup>
import { useEventListener } from "@vueuse/core";
const setVh = () => {
  const vh = Math.floor(window.innerHeight * 0.01);
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

onBeforeMount(() => {
  setVh();
  useEventListener(window, "resize", setVh);
});

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

</script>
