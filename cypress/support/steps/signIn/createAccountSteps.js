import { Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import * as authenticationPage from '../../page-objects/signIn/authenticationPage.js';
import * as accountCreationPage from '../../page-objects/signIn/accountCreationPage.js';
import * as myAccountPage from '../../page-objects/signIn/myAccountPage.js';
import faker from 'faker'

const email     = faker.internet.email();
const firstName = faker.name.firstName();
const lastName  = faker.name.lastName();
const password  = faker.internet.password();
const address   = faker.address.streetName();
const address2  = faker.address.secondaryAddress();
const city      = faker.address.city();
const zipCode   = '12345';
const info      = faker.lorem.sentence();
const phone     = '11111111111';
const alias     = faker.internet.userName();

Before({ tags: "@criar_conta" }, () => {
  authenticationPage.accessCreateAccount(email);
  cy.log(`email: ${email} and password: ${password}`);
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
  accountCreationPage.setFirstName(firstName);
  accountCreationPage.setLastName(lastName);
  accountCreationPage.getEmail().should('have.value', email);
  accountCreationPage.setPassword(password);
  accountCreationPage.setDateOfBirth('15','7','1990');
  accountCreationPage.setFirstNameAddress(firstName);
  accountCreationPage.setLastNameAddress(lastName);
  accountCreationPage.setAddress(address);
  accountCreationPage.setAddress2(address2);
  accountCreationPage.setCity(city);
  accountCreationPage.setZipCode(zipCode);
  accountCreationPage.setCountry('21');
  accountCreationPage.setState('California');
  accountCreationPage.setAdditionalInfo(info);
  accountCreationPage.setHomePhone(phone);
  accountCreationPage.setMobilePhone(phone);
  accountCreationPage.setAlias(alias);
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