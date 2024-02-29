import {useWindowSize} from '@vueuse/core'
export const useBreakpoint = () => {
    const {width: windowWidth} = useWindowSize() 
    const xs = computed(() => windowWidth.value < 600
    )
    const isXs = toRef(xs)


    const med = computed(() => windowWidth.value >= 900)
    const isMed = toRef(med)



    return {isXs, isMed}
}