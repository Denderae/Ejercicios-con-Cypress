// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videosFolder: "cypress/videos",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
