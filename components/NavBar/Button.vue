<template>
     <Icon :name="name" size="100%" :color="color" class="nav-button clickable"/>
</template>
<style lang="scss" scoped>
    .nav-button {
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            
            color: $brand-orange;
        }
    }
</style>
<script setup>

    const props = defineProps({
        name: String,
        selected: Boolean,
        light: Boolean
    })

    const {getColor} = useColor();

    const color = computed(() => {
        if (props.light) {
            return props.selected ? '' : getColor('gray')
        }
        return props.selected ? '' : getColor('orange')
    })
</script>