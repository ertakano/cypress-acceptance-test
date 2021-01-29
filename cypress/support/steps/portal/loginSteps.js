import { Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import * as loginPage from '../../page-objects/portal/loginPage.js';

Before(function() {
  cy.fixture("homolog").then((data) => {
    this.data = data
  });
  loginPage.siteAccess();
  cy.log(window.testState.currentScenario.tags[0].name)
});

Given('que o usuário tenha uma conta válida na HG', () => {
  loginPage.fillLoginCredentials(data.email, data.password);
})

When('submeter seus dados de email e senha pelo portal', () => {
  loginPage.submit();
})

Then('deve acessar o portal com sucesso', () => {
  loginPage.closeOnboarding();
  loginPage.getTitleSiteList().should('contain', 'Lista de Sites');
})