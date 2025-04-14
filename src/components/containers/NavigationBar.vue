<script lang="ts" setup>
import NavigationLink from '@/components/NavigationLink.vue'
</script>

<template>
    <div class="navigation-container">
        <NavigationLink to="/" title="Главная" />
        <NavigationLink to="/currency" title="Конвертация" />
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;

.navigation-container {
    display: flex;
    gap: toRem(30);
    height: 100%;
}
</style>
