<script setup lang="ts">
import { Currency } from '@/utils/types/CurrencyEnum.ts'
import IconUSD from '@/components/icons/IconUSD.vue'
import IconEUR from '@/components/icons/IconEUR.vue'
import IconRUB from '@/components/icons/IconRUB.vue'
import { computed } from 'vue'

const props = defineProps<{
    selected: Currency
    size: number
}>()

const style = computed(() => ({ width: `${props.size}px`, height: `${props.size}px`}))

</script>
<template>
    <IconEUR v-if="selected === Currency.EUR" :style="style" />
    <IconRUB v-if="selected === Currency.RUB" :style="style" />
    <IconUSD v-if="selected === Currency.USD" :style="style" />
</template>
