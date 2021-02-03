import faker from "faker";

// YOUR PERSONAL INFORMATION
const TITLE_FORMS             = '#account-creation_form'
const FLD_FIRST_NAME          = '#customer_firstname'
const FLD_LAST_NAME           = '#customer_lastname'
const FLD_EMAIL               = '#email'
const FLD_PASSWORD            = '#passwd'
// date of birth
const SEL_DAYS                = '#days'
const SEL_MONTHS              = '#months'
const SEL_YEARS               = '#years'

// YOUR ADDRESS
const FLD_ADDRESS_FIRST_NAME  = '#firstname'
const FLD_ADDRESS_LAST_NAME   = '#lastname'
const FLD_ADDRESS             = '#address1'
const FLD_ADDRESS_2           = '#address2'
const FLD_CITY                = '#city'
const SEL_STATE               = '#id_state'
const FLD_ZIP_CODE            = '#postcode'
const SEL_COUNTRY             = '#id_country'
const FLD_ADDITIONAL_INFO     = '#other'
const FLD_HOME_PHONE          = '#phone'
const FLD_MOBILE_PHONE        = '#phone_mobile'
const FLD_ALIAS               = '#alias'
const BTN_SUBMIT              = '#submitAccount'

export const getTitles = () => {
  return cy.get(TITLE_FORMS);
}

export const checkTitle = (option) => {
  cy.get(`#id_gender${option}`).check().should('be.checked')
}

export const setFirstName = (firstName) => {
  cy.get(FLD_FIRST_NAME).type(firstName).should('have.value', firstName);
}

export const setLastName = (lastName) => {
  cy.get(FLD_LAST_NAME).type(lastName).should('have.value', lastName);
}

export const getEmail = () => {
  return cy.get(FLD_EMAIL);
}

export const setPassword = (password) => {
  cy.get(FLD_PASSWORD).type(password).should('have.value', password);
}

export const setDateOfBirth = (day, month, year) => {
  cy.get(SEL_DAYS).select(day).should('have.value', day);
  cy.get(SEL_MONTHS).select(month).should('have.value', month);
  cy.get(SEL_YEARS).select(year).should('have.value', year);
}

export const setFirstNameAddress = (firstName) => {
  cy.get(FLD_ADDRESS_FIRST_NAME).should('have.value', firstName);
}

export const setLastNameAddress = (lastName) => {
  cy.get(FLD_ADDRESS_LAST_NAME).should('have.value', lastName);
}

export const setAddress = (address) => {
  cy.get(FLD_ADDRESS).type(address).should('have.value', address);
}

export const setAddress2 = (address2) => {
  cy.get(FLD_ADDRESS_2).type(address2).should('have.value', address2);
}

export const setCity = (city) => {
  cy.get(FLD_CITY).type(city).should('have.value', city);
}

export const setState = (state) => {
  cy.get(SEL_STATE).select(state).should('contain', state);
}

export const setZipCode = (zipCode) => {
  cy.get(FLD_ZIP_CODE).type(zipCode).should('have.value', zipCode);
}

export const setCountry = (country) => {
  cy.get(SEL_COUNTRY).select(country).should('have.value', country);
}

export const setAdditionalInfo = (info) => {
  cy.get(FLD_ADDITIONAL_INFO).type(info).should('have.value', info);
}

export const setHomePhone = (phone) => {
  cy.get(FLD_HOME_PHONE).type(phone).should('have.value', phone);
}

export const setMobilePhone = (phone) => {
  cy.get(FLD_MOBILE_PHONE).type(phone).should('have.value', phone);
}

export const setAlias = (alias) => {
  cy.get(FLD_ALIAS).clear().type(alias).should('have.value', alias);
}

export const clickRegister = () => {
  cy.get(BTN_SUBMIT).should("be.visible").click();
}

export const fillClientRegister = (firstName, lastName, email) => {
  setFirstName(firstName);
  setLastName(lastName);
  getEmail().should("have.value", email);
  setPassword(faker.internet.password());
  setDateOfBirth("15", "7", "1990");
  setFirstNameAddress(firstName);
  setLastNameAddress(lastName);
  setAddress(faker.address.streetName());
  setAddress2(faker.address.secondaryAddress());
  setCity(faker.address.city());
  setZipCode("12345");
  setCountry("21");
  setState("California");
  setAdditionalInfo(faker.lorem.sentence());
  setHomePhone("11111111111");
  setMobilePhone("11111111111");
  setAlias(faker.internet.userName());
};