const URL                     = Cypress.config("urlLogin")
const TITLE_CREATE_ACCOUNT    = '#create-account_form h3'
const FLD_EMAIL               = '#email_create'
const BTN_SUBMIT              = '#SubmitCreate'
const TITLE_CREATE_AN_ACCOUNT = 'h1'

export const accessSite = () => {
  cy.visit(URL);
  cy.get(TITLE_CREATE_ACCOUNT).should("be.visible");
}

export const fillLoginCredentials = (email) => {
  cy.get(FLD_EMAIL).type(email);
}

export const submit = () => {
  cy.get(BTN_SUBMIT).should("be.visible").click();
}

export const getTitle = () => {
  return cy.get(TITLE_CREATE_AN_ACCOUNT);
}

export const accessCreateAccount = () => {
  cy.visit(URL);
  cy.get(TITLE_CREATE_ACCOUNT).should("be.visible");
  cy.get(FLD_EMAIL).type(email);
  cy.get(BTN_SUBMIT).should("be.visible").click();
  cy.get(TITLE_CREATE_AN_ACCOUNT).should("be.visible");
}



