export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },

  components: [{ path: "components", pathPrefix: false }],

  future: {
    compatibilityVersion: 4
  },

  devServer: {
    host: "0.0.0.0",
    https: setupHTTPS()
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: `width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no`
    }
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/content"
  ],
  colorMode: {
    classSuffix: "",
    disableTransition: true
  },
  unocss: {
    preflight: true
  }
});

function setupHTTPS() {
  return undefined;
}
