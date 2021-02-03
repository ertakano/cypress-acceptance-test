import { Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import * as authenticationPage from '../../page-objects/signIn/authenticationPage.js';
import * as accountCreationPage from '../../page-objects/signIn/accountCreationPage.js';
import * as myAccountPage from '../../page-objects/signIn/myAccountPage.js';
import faker from 'faker'

const email     = faker.internet.email();
const firstName = faker.name.firstName();
const lastName  = faker.name.lastName();

Before({ tags: "@criar_conta" }, () => {
  authenticationPage.accessCreateAccount(email);
});

// Cenário: Acessar formulário para abertura de conta
Given('que o usuário esteja na tela de login', () => {
  authenticationPage.accessSite();
})

When('criar sua conta com um email válido', () => {
  authenticationPage.fillLoginCredentials(email);
  authenticationPage.submit();
})

Then('deve acessar o formulário para criação da conta', () => {
  authenticationPage.getTitle().should('have.text', 'Create an account');
})

// Cenário: Preencher formulário para abertura de conta
Given('que o usuário esteja na tela de criação de conta', () => {
  accountCreationPage.getTitles().should('contain', 'Your personal information');
})

Given('informe todos os dados solicitados', () => {
  accountCreationPage.checkTitle(1);
  accountCreationPage.fillClientRegister(firstName, lastName, email);
})

When('registrar as informações', () => {
  accountCreationPage.clickRegister();
})

Then('deve ter criado a conta com sucesso', () => {
  myAccountPage.getTitle().should('have.text', 'My account');
  myAccountPage.getTitlesMenus().should('contain', 'Order history and details');
  myAccountPage.getTitlesMenus().should('contain', 'My credit slips');
  myAccountPage.getTitlesMenus().should('contain', 'My addresses');
  myAccountPage.getTitlesMenus().should('contain', 'My personal information');
  myAccountPage.getTitlesMenus().should('contain', 'My wishlists');
})