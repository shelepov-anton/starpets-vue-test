<script lang="ts" setup>
import CurrencyCard from '@/components/CurrencyCard.vue'
import { computed } from 'vue'
import { Currency } from '@/utils/types/CurrencyEnum.ts'
import type { Currencies } from '@/composables/useCurrencies.ts'
import { breakpoints } from '@/utils/breakpoints.ts'
import IconSwap from '@/components/icons/IconSwap.vue'

const props = defineProps<{
    currencies: Currencies
    activeCurrency: Currency
}>()

const items = computed(() => ([
    {
        name: 'Евро',
        currency: Currency.EUR,
        currencySymbol: '€'
    },
    {
        name: 'Доллар',
        currency: Currency.USD,
        currencySymbol: '$'
    },
    {
        name: 'Рубль',
        currency: Currency.RUB,
        currencySymbol: '₽'
    }
]))

function calculateCurrency(from: Currency) {
    return props.currencies[`${from.toLowerCase()}-${props.activeCurrency.toLowerCase()}`]
}

const activeCurrencyItem = computed(() =>
    items.value.find(item => item.currency === props.activeCurrency) || items.value[0]
)

</script>

<template>
    <div class="container">
        <template v-for="item in items" :key="item.name">
            <div v-if="item.currency !== activeCurrency" class="currency-item">
                <CurrencyCard v-bind="item" :value="1" class="card" />
                <IconSwap class="icon-swap" />
                <CurrencyCard :value="calculateCurrency(item.currency)"
                              :name="activeCurrencyItem.name"
                              :currency="activeCurrencyItem.currency"
                              :currency-symbol="activeCurrencyItem.currencySymbol"
                              :reversed="breakpoints.greaterOrEqual('tablet').value"
                              class="card"
                />
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;

.container {
    display: flex;
    flex-direction: column;
    gap: toRem(16);

    .currency-item {
        display: flex;
        align-items: center;
        gap: toRem(8) toRem(20);

        .icon-swap {
            width: toRem(30);
            height: toRem(30);
            transform: rotate(90deg);
            flex-shrink: 0;
        }
    }

    @media screen and (max-width: 768px) {
        gap: toRem(56);

        .currency-item {
            flex-direction: column;
            align-items: center;

            .card {
                max-width: 100%;
            }

            .icon-swap {
                transform: none;
                height: toRem(26);
            }
        }
    }
}
</style>
