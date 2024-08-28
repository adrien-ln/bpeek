// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: '4',
    },
    devtools: { enabled: true },
    srcDir: 'app',
    modules: [
        '@nuxt/ui',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
    ],
    components: [
        {
        path: '~/components',
        pathPrefix: false,
        },
    ],
})