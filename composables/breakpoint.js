import {useWindowSize} from '@vueuse/core'
export const useBreakpoint = () => {
    const {width: windowWidth} = useWindowSize() 
    const isXs = computed(() => windowWidth.value < 600)
    return {isXs}
}