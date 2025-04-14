import { useBreakpoints } from '@vueuse/core'

export const breakpoints = useBreakpoints({
    mobile: 460,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
})
