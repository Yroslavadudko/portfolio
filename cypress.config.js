const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w463pb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
