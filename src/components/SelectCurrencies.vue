<script lang="ts" setup>
import AppSelect, { type SelectOption } from '@/components/ui/AppSelect.vue'
import { Currency } from '@/utils/types/CurrencyEnum.ts'
import { computed } from 'vue'
import CurrencyDynamicIcon from '@/components/CurrencyDynamicIcon.vue'
import { currenciesSelectOptions } from '@/data/CurrenciesSelectOptions.ts'

defineProps<{
    iconSize?: number
    hiddenIcon?: boolean
}>()

const model = defineModel<Currency>()

const selectedOption = computed({
    get: () => currenciesSelectOptions.find(currency => currency.value === model.value) || currenciesSelectOptions[0],
    set: (option: SelectOption<Currency>) => {
        model.value = option.value
    }
})

</script>

<template>
    <div class="select-container">
        <CurrencyDynamicIcon v-if="!hiddenIcon"
                             :selected="selectedOption.value"
                             :size="iconSize || 30"
        />
        <AppSelect :options="currenciesSelectOptions"
                   v-model="selectedOption"
                   class="app-select"
                   :clearable="false"
        />
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;

.select-container {
    display: flex;
    align-items: center;
    gap: toRem(10);

    .icon {
        width: toRem(30);
        height: toRem(30);
    }

    .app-select {
        min-width: toRem(92);
        --vs-dropdown-min-width: 80px;
    }
}


</style>
