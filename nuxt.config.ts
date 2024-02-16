// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/style/global.scss"],
  devtools: { 
    enabled: false,
  
 },
 image: {

 },
 pages: true,
 modules: [
  'nuxt-icon',
  '@vueuse/nuxt',
  '@nuxt/image'
 ],
 vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/style/_colors.scss" as *; @use "@/style/_fonts.scss" as *; @use "@/style/_breakpoint.scss" as *; @use "@/style/_dimensions.scss" as *; @use "@/style/_utility.scss" as *;'
      }
    }
  }
}
})
