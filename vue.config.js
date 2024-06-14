const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/abstracts/variables.scss";`,
      },
      scss: {
        additionalData: `@import "@/assets/scss/abstracts/variables.scss";`,
      },
    },
  },
});
