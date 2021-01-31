const URL                     = Cypress.config("urlMyAccount")
const TITLE_MY_ACCOUNT        = 'h1'
const CENTER_COLLUM           = '#center_column'

export const getTitle = () => {
  return cy.get(TITLE_MY_ACCOUNT).should("be.visible");
}

export const getTitlesMenus = () => {
  return cy.get(CENTER_COLLUM);
}