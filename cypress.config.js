const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: 'https://cartao-de-visitas-1f916.web.app/home',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
