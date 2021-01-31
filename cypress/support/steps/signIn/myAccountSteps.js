import { Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import * as criarContaPage from '../../page-objects/signIn/myAccountPage.js';
import faker from 'faker'

const email = faker.internet.email();

Before({ tags: "@criar_conta" }, () => {
  criarContaPage.accessCreateAccount(email);
});

// Cenário: Acessar formulário para abertura de conta
Given('que o usuário esteja na tela de login', () => {
  criarContaPage.accessSite();
})

When('criar sua conta com um email válido', () => {
  criarContaPage.fillLoginCredentials(email);
  criarContaPage.submit();
})

Then('deve acessar o formulário para criação da conta', () => {
  criarContaPage.getTitle().should('have.text', 'Create an account');
})

// Cenário: Preencher formulário para abertura de conta
Given('que o usuário esteja na tela de criação de conta', () => {
  criarContaPage.getTitle().should('have.text', 'Create an account');
})

Given('informe todos os dados solicitados', () => {
  criarContaPage.accessSite();
})

When('registrar as informações', (email) => {
  criarContaPage.fillLoginCredentials(email);
  criarContaPage.submit();
})

Then('deve ter criado a conta com sucesso', () => {
  criarContaPage.getTitle().should('have.text', 'Create an account');
})