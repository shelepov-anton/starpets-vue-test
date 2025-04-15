<script lang="ts" setup>
import IconLogo from '@/components/icons/IconLogo.vue'
import NavigationBar from '@/components/containers/NavigationBar.vue'
import SelectCurrencies from '@/components/SelectCurrencies.vue'
import { computed } from 'vue'
import { useAppSettings } from '@/composables/useAppSettings.ts'
import type { Currency } from '@/utils/types/CurrencyEnum.ts'
import { breakpoints } from '@/utils/breakpoints.ts'

const { setActiveCurrency, settingsState } = useAppSettings()

const selectCurrenciesModel = computed({
    get: () => settingsState.activeCurrency,
    set: (value: Currency) => setActiveCurrency(value)
})

</script>

<template>
    <div class="header-container">
        <IconLogo class="logo" />
        <NavigationBar class="navigation-bar" />
        <SelectCurrencies v-model="selectCurrenciesModel"
                          :hidden-icon="breakpoints.smallerOrEqual('mobile').value"
        />
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/functions" as *;

.header-container {
    background-color: white;
    height: toRem(82);
    display: flex;
    align-items: center;
    padding: 0 toRem(24);

    .navigation-bar {
        margin-left: toRem(130);
        margin-right: auto;
    }

    @media screen and (max-width: 768px) {
        height: toRem(60);
        padding: 0 toRem(16);

        .navigation-bar {
            margin-left: 0;
        }

        .logo {
            display: none;
        }
    }
}
</style>
