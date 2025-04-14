<script lang="ts" setup>
import CurrencyConverterForm from '@/components/form/CurrencyConverterForm.vue'
import { useAppSettings } from '@/composables/useAppSettings.ts'
import { useCurrencies } from '@/composables/useCurrencies.ts'
import { onMounted } from 'vue'
import AppLoader from '@/components/AppLoader.vue'

const { settingsState } = useAppSettings()
const { currenciesState, fetchCurrencies } = useCurrencies()

onMounted(() => {
    if (currenciesState.currencies === null) {
        fetchCurrencies()
    }
})

</script>

<template>
    <div v-if="!currenciesState.isLoading && currenciesState.currencies">
        <h1 class="title">Конвертер валюты</h1>
        <CurrencyConverterForm v-if="!currenciesState.isLoading && currenciesState.currencies"
                               :currencies="currenciesState.currencies"
                               :active-currency="settingsState.activeCurrency"
        />
    </div>
    <AppLoader v-else />
</template>
