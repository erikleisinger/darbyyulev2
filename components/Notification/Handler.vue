<template>
    <div class="notification-handler">
          <transition-group name="page" >
        <div v-for="notification in notifications" :key="notification.id">
            <NotificationSnack :text="notification.text" :id="notification.id"/>
        </div>
          </transition-group>
    </div>
</template>
<style lang="scss" scoped>
    .notification-handler {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
        
    }
</style>
<script setup>
    const {notifications} = useNotification();
</script>