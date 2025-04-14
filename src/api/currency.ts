import axios from 'axios'
import type { Currencies } from '@/composables/useCurrencies.ts'

export async function getCurrencies(): Promise<Currencies> {
    const response = await axios.get('https://status.neuralgeneration.com/api/currency')
    return response.data
}
