<script lang="ts" setup>
import SelectCurrencies from '@/components/SelectCurrencies.vue'
import AppInput from '@/components/ui/AppInput.vue'
import IconSwap from '@/components/icons/IconSwap.vue'
import type { Currency } from '@/utils/types/CurrencyEnum.ts'
import type { Currencies } from '@/composables/useCurrencies.ts'
import { onMounted, reactive } from 'vue'
import { currenciesSelectOptions } from '@/data/CurrenciesSelectOptions.ts'

const props = defineProps<{
    activeCurrency: Currency
    currencies: Currencies
}>()

const formData = reactive({
    from: {
        currency: props.activeCurrency,
        value: '1'
    },
    to: {
        currency: currenciesSelectOptions.find((option) => option.value !== props.activeCurrency)?.value || currenciesSelectOptions[0].value,
        value: ''
    }
})

const validationErrorMessages = reactive({
    fromValue: '',
    toValue: ''
})

const digitOnlyRule = new RegExp(/^[0-9]*\.?[0-9]*$/)
const ONLY_DIGITS_MESSAGE = '* Только целые или дробные числа'

function getCurrency(from: Currency, to: Currency) {
    return props.currencies[`${from.toLowerCase()}-${to.toLowerCase()}`] || 1
}

function recalculateFrom() {
    formData.from.value = (getCurrency(formData.to.currency, formData.from.currency) * +formData.to.value).toFixed(2)
}

function recalculateTo() {
    formData.to.value = (getCurrency(formData.from.currency, formData.to.currency) * +formData.from.value).toFixed(2)
}

function onToInputUpdate(value: string) {
    formData.to.value = value

    if (value === '' || digitOnlyRule.test(value)) {
        recalculateFrom()
        validationErrorMessages.toValue = ''
    } else {
        validationErrorMessages.toValue = ONLY_DIGITS_MESSAGE
    }
}

function onFromInputUpdate(value: string) {
    formData.from.value = value

    if (value === '' || digitOnlyRule.test(value)) {
        recalculateTo()
        validationErrorMessages.fromValue = ''
    } else {
        validationErrorMessages.fromValue = ONLY_DIGITS_MESSAGE
    }
}

function onToSelectUpdate(value: Currency) {
    formData.to.currency = value
    recalculateTo()
}

function onFromSelectUpdate(value: Currency) {
    formData.from.currency = value
    recalculateTo()
}

function onSwapClick() {
    const toCurrency = formData.to.currency
    formData.to.currency = formData.from.currency
    formData.from.currency = toCurrency
    recalculateTo()
}

onMounted(() => {
    recalculateTo()
})

</script>

<template>
    <div class="form-container">
        <form class="form">
            <div class="form-item">
                <h2 class="form-item__subtitle">Конвертировать из</h2>
                <div class="form-item__inputs">
                    <SelectCurrencies :model-value="formData.from.currency"
                                      :icon-size="40"
                                      @update:model-value="onFromSelectUpdate"
                    />
                    <AppInput :model-value="formData.from.value"
                              placeholder="Введите количество"
                              :validation-error="validationErrorMessages.fromValue"
                              @update:model-value="onFromInputUpdate"
                    />
                </div>
            </div>

            <IconSwap @click="onSwapClick" class="form-swap" />

            <div class="form-item">
                <h2 class="form-item__subtitle">Конвертировано в</h2>
                <div class="form-item__inputs">
                    <SelectCurrencies :model-value="formData.to.currency"
                                      :icon-size="40"
                                      @update:model-value="onToSelectUpdate"
                    />
                    <AppInput :model-value="formData.to.value"
                              placeholder="Введите количество"
                              :validation-error="validationErrorMessages.toValue"
                              @update:model-value="onToInputUpdate"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;
@use "@/styles/variables" as *;

.form-container {
    max-width: toRem(500);
    width: 100%;

    background-color: $bg-primary-color;
    padding: toRem(26);
    border-radius: 16px;

    transition: box-shadow .2s;

    &:hover {
        box-shadow: $shadow-card;
    }

    .form {
        display: flex;
        gap: toRem(20);
        flex-direction: column;
        justify-content: space-between;

        .form-swap {
            width: toRem(36);
            height: toRem(36);
            stroke: $primary-color;
            cursor: pointer;

            transition: opacity .15s;

            &:hover {
                opacity: 0.7;
            }
        }

        .form-item {
            .form-item__subtitle {
                font-size: $font-size-sm;
                color: $text-secondary-color;
                font-weight: 400;
            }

            .form-item__inputs {
                margin-top: toRem(12);
                display: flex;
                gap: toRem(2);
                align-items: center;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: toRem(16);
    }
}
</style>
