const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*.spec.js",
    watchForFileChanges: false,
    projectId: "q4minv",
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      jsone: true,
      reportDir: "cypress/reports",
      experimentalStudio: true
      // experimentalStudio:true,
    },
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
  },
});
