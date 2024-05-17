const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app.dev.recrutamento.itixti-lab.com.br/?vid=f08297bcb6c2d06eb8b722ca4794204f'
  },
});
