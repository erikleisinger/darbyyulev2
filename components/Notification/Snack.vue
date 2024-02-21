<template>
    <div class="notification-snack clickable" @click="removeNotification(id)">
        {{text}}
        <div class="line">
            <div class="line__inner" :style="{width: lineWidth}"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$duration-line-height: 4px;
$padding: 16px;
    .notification-snack {
        padding: $padding;
        padding-bottom: calc($padding + $duration-line-height);
        border-radius: 8px;
        background-color: rgba(0,0,0,0.3);
        color: $brand-white;
        transition: all 0.2s;
        width: fit-content;
        position: relative;
        overflow: hidden;
        pointer-events: all;
        .line {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,0.2);
            height: $duration-line-height;
            .line__inner {
                background-color: $brand-white;
                height: inherit;
                transition: all 0.1s;
            }
        }
    }
</style>
<script setup>
    const props = defineProps({
        id: String,
        text: String
    })

    const {removeNotification} = useNotification();

    const NOTIFICATION_DURATION_MS = 8000;

    const timeRemaining = ref(NOTIFICATION_DURATION_MS);

    const lineWidth = computed(() => {
        return (timeRemaining.value / NOTIFICATION_DURATION_MS) * 100 + '%';
    })


    onMounted(() => {
        setTimeout(() => {
            removeNotification(props.id)
        }, NOTIFICATION_DURATION_MS)

        setInterval(() => {
            timeRemaining.value -= 10;
        }, 10)
    })
</script>