import { reactive } from 'vue'
import { getCurrencies } from '@/api/currency.ts'

export type Currencies = Record<string, number>

interface UseCurrenciesState {
    currencies: Currencies | null
    isLoading: boolean
}

const currenciesState = reactive<UseCurrenciesState>({
    currencies: null,
    isLoading: false
})

export function useCurrencies() {
    async function fetchCurrencies() {
        try {
            currenciesState.isLoading = true
            currenciesState.currencies = await getCurrencies()
        } catch (error) {
            console.log(error)
        } finally {
            currenciesState.isLoading = false
        }
    }

    return {
        currenciesState,
        fetchCurrencies
    }
}
