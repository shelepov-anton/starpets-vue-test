<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/containers/AppHeader.vue'

</script>

<template>
    <AppHeader />
    <div class="content-wrapper">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;

.content-wrapper {
    padding: 0 toRem(24);
    margin-top: toRem(20);

    @media screen and (max-width: 768px) {
        padding: 0 toRem(16);
    }
}
</style>
