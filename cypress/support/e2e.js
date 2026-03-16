// cypress/support/e2e.js

import "cypress-real-events/support";
require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})