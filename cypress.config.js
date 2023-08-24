const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
   e2e: {
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do Curso de Cypress',
      reportPageTitle: 'Projeto do Curso de Cypress'
    },
     baseUrl: 'http://automationpratice.com.br/',
     specPattern: "cypress/e2e/features/*.feature",
       
     setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on);
     addCucumberPreprocessorPlugin(on, config);
     on(
     "file:preprocessor", 
     createBundler({
       plugins: [createEsbuildPlugin(config)],
     })
    );
     return config;
   },
  },
 })

