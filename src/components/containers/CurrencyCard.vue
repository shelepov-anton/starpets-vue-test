<script lang="ts" setup>
import CurrencyDynamicIcon from '@/components/CurrencyDynamicIcon.vue'
import { Currency } from '@/utils/types/CurrencyEnum.ts'

const props = defineProps<{
    currency: Currency
    currencySymbol: string
    name: string
    value: number
    reversed?: boolean
}>()

</script>

<template>
    <div class="card" :class="{ reverse: props.reversed }">
        <CurrencyDynamicIcon :size="44" :selected="currency" />
        <div class="currency-info">
            <span class="currency">{{ currency }}</span>
            <span class="name">{{ name }}</span>
        </div>
        <span class="value" :class="{ reverse: props.currency === Currency.RUB }">
            <span>{{ currencySymbol }}</span>
            {{ value.toFixed(2) }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.card {
    background-color: $bg-primary-color;
    padding: toRem(12) toRem(16);
    border-radius: 10px;

    max-width: toRem(350);
    width: 100%;

    display: flex;
    align-items: center;
    gap: toRem(16);

    .currency-info {
        display: flex;
        flex-direction: column;
        gap: toRem(4);

        .currency {
            font-size: $font-size-lg;
            font-weight: 600;
        }
        .name {
            color: $text-secondary-color
        }
    }

    .reverse {
        flex-direction: row-reverse;
    }

    .value {
        margin-left: auto;
        display: flex;
        gap: toRem(4);
        font-size: $font-size-xl;
        font-weight: 500;
    }
}

.reverse {
    flex-direction: row-reverse;
    text-align: end;

    .value {
        margin-right: auto;
        margin-left: 0;
    }
}
</style>
