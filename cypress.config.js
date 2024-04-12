const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6br7eb',
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
