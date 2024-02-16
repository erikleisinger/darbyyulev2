<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import {useEventListener} from '@vueuse/core'
const setVh = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

  onMounted(() => {
setVh();
    useEventListener(window, 'resize', setVh)
  }) 


</script>
