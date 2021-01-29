const URL                    = Cypress.config("baseUrlHomol")
const COOKIE                 = '#cookie-cta'
const EMAIL                  = 'input[type="email"]'
const PASSWORD               = 'input[type="password"]'
const BTN_ENTRY              = '.button-yellow'
const CLOSE_ONBOARDING_PHONE = '[data-id="close-phoneConfirmation"]'
const CLOSE_ONBOARDING_EMAIL = '[data-id="close-emailverify"]'
const CLOSE_ONBOARDING_SITES = '[data-id="drawer-menu-button-sites"]'
const TITLE_SITE_LIST        = '[data-id="my-sites-page"]'

export const siteAccess = () => {
  cy.visit(URL);
  cy.get(COOKIE, {timeout:5000}).should("be.visible").click();
}

export const fillLoginCredentials = (email, password) => {
  cy.get(EMAIL).type(email);
  cy.get(PASSWORD).type(password);
}

export const submit = () => {
  cy.get(BTN_ENTRY).should("be.visible").click();
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  });
}

export const closeOnboarding = () => {
  cy.get(CLOSE_ONBOARDING_PHONE).should("be.visible", {timeout:5000}).click();
  cy.get(CLOSE_ONBOARDING_EMAIL).should("be.visible").click();
  cy.get(CLOSE_ONBOARDING_SITES).should("be.visible").click();
}

export const getTitleSiteList = () => {
  return cy.get(TITLE_SITE_LIST);
}

