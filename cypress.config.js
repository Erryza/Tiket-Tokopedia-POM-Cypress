const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,

  e2e: {
    baseUrl: "https://tiket.tokopedia.com/kereta-api/",
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
