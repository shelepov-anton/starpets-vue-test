<script lang="ts" setup>
import CurrenciesList from '@/components/containers/CurrenciesList.vue'
import { useCurrencies } from '@/composables/useCurrencies.ts'
import { onMounted } from 'vue'
import { useAppSettings } from '@/composables/useAppSettings.ts'
import AppLoader from '@/components/AppLoader.vue'

const { currenciesState, fetchCurrencies } = useCurrencies()
const { settingsState } = useAppSettings()

onMounted(() => {
    if (currenciesState.currencies === null) {
        fetchCurrencies()
    }
})

</script>

<template>
    <div v-if="!currenciesState.isLoading && currenciesState.currencies">
        <h1 class="title">Курсы валют на сегодня</h1>
        <CurrenciesList :currencies="currenciesState.currencies"
                        :active-currency="settingsState.activeCurrency"
        />
    </div>
    <AppLoader v-else />
</template>
