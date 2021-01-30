import { Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import * as criarContaPage from '../../page-objects/my-account/createAccountPage.js';

// Before(function() {
//   cy.fixture("homolog").then((data) => {
//     this.data = data
//   });
// });

// Cenário: Acessar formulário para abertura de conta
Given('que o usuário esteja na tela de login', () => {
  criarContaPage.accessSite();
})

When('criar sua conta com o email {string}', (email) => {
  criarContaPage.fillLoginCredentials(email);
  criarContaPage.submit();
})

Then('deve acessar o formulário para criação da conta', () => {
  criarContaPage.getTitle().should('have.text', 'Create an account');
})

// Cenário: Preencher formulário para abertura de conta
Given('que o usuário esteja na tela de criação de conta', () => {
  criarContaPage.accessSite();
})

When('criar sua conta com o email {string}', (email) => {
  criarContaPage.fillLoginCredentials(email);
  criarContaPage.submit();
})

Then('deve acessar o formulário para criação da conta', () => {
  criarContaPage.getTitle().should('have.text', 'Create an account');
})