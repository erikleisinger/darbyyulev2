import {useWindowSize} from '@vueuse/core'
export const useBreakpoint = () => {
    const {width: windowWidth} = useWindowSize() 
    const i = computed(() => windowWidth.value < 600
    )
    const isXs = toRef(i)
    return {isXs}
}