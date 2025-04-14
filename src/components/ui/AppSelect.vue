<script lang="ts" setup>
import 'vue-select/dist/vue-select.css'
import VueSelect from 'vue-select'

export interface SelectOption<V> {
    label: string
    value: V
}

const props = withDefaults(defineProps<{
    options: SelectOption<string>[]
    clearable?: boolean
}>(), {
    clearable: true
})

</script>

<template>
    <VueSelect v-bind="props" />
</template>
