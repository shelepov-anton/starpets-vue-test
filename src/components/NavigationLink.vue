<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
    title: string
    to: string
}>()

const route = useRoute()

const isActive = computed(() => route.path === props.to)

</script>

<template>
    <RouterLink :to="to" class="navigation-link" :class="{ active: isActive }">
        {{ title }}
    </RouterLink>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;
@use "@/styles/functions" as *;

.navigation-link {
    display: inline-flex;
    align-items: center;
    position: relative;
    color: $text-secondary-color;
    font-size: $font-size-lg;
    font-weight: 500;
    height: 100%;
    padding: toRem(8) 0;

    transition: color .1s;
    &:hover {
        color: $text-primary-hover;
    }

    @media screen and (max-width: 768px) {
        font-size: $font-size-base;
    }
}

.active {
    color: $text-primary-color;

    &:after {
        content: '';
        width: 40px;
        height: 3px;
        background-color: $primary-color;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>
