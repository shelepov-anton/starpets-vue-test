import { Currency } from '@/utils/types/CurrencyEnum.ts'
import type { SelectOption } from '@/components/ui/AppSelect.vue'

export const currenciesSelectOptions: SelectOption<Currency>[] = [
    {
        label: Currency.RUB,
        value: Currency.RUB
    },
    {
        label: Currency.EUR,
        value: Currency.EUR
    },
    {
        label: Currency.USD,
        value: Currency.USD
    }
]
