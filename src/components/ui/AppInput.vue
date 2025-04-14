<script lang="ts" setup>

const modelValue = defineModel()

defineProps<{
    validationError?: string
}>()

</script>

<template>
    <div class="container">
        <input v-model="modelValue" class="app-input" />
        <p class="app-input__error" v-if="validationError">{{ validationError }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.container {
    display: flex;
    flex-direction: column;
    gap: toRem(4);
    position: relative;
    width: 100%;

    .app-input {
        border: rgba(60, 60, 60, .26) 1px solid;
        border-radius: 4px;
        font-size: $font-size-base;
        padding: toRem(7);
        outline: none;
        width: 100%;

        transition: border-color 0.15s;
        &:hover, &:focus {
            border-color: $primary-color;
        }
    }

    .app-input__error {
        position: absolute;
        top: 38px;
        left: 0;
        color: red;
        font-size: $font-size-sm;
    }
}
</style>
