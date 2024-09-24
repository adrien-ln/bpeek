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
        '@nuxt/image',
        '@nuxt/fonts',
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