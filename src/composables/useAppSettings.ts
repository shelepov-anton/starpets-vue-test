import { reactive } from 'vue'
import { Currency } from '@/utils/types/CurrencyEnum.ts'

interface UseAppSettingsState {
    activeCurrency: Currency
}

const settingsState = reactive<UseAppSettingsState>({
    activeCurrency: Currency.RUB
})

export function useAppSettings() {
    function setActiveCurrency(value: Currency) {
        settingsState.activeCurrency = value
    }

    return {
        settingsState,
        setActiveCurrency
    }
}
