// cypress/support/e2e.js

import './commands'
require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})