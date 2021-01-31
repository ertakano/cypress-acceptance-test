const RDO_MR                  = '#id_gender1'
const RDO_MRS                 = '#id_gender2'
const TITLE_FORMS             = 'h3'
const FLD_FIRST_NAME          = '#customer_firstname'
const FLD_LAST_NAME           = '#customer_lastname'
const FLD_EMAIL               = '#email'
const FLD_PASSWORD            = '#passwd'
const SEL_DAYS                = '#days'
const SEL_MONTHS              = '#months'
const SEL_YEARS               = '#years'
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
  cy.get(TITLE_FORMS).should("be.visible");
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

export const accessCreateAccount = (email) => {
  cy.visit(URL);
  cy.get(TITLE_CREATE_ACCOUNT).should("be.visible");
  cy.get(FLD_EMAIL).type(email);
  cy.get(BTN_SUBMIT).should("be.visible").click();
  cy.get(TITLE_CREATE_AN_ACCOUNT).should("be.visible");
}




