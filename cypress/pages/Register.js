class Register {
  elements = {
    firstName: () => cy.get('#customer\\.firstName'),
    lastName: () => cy.get('#customer\\.lastName'),
    street: () => cy.get('#customer\\.address\\.street'),
    city: () => cy.get('#customer\\.address\\.city'), 
    state: () => cy.get('#customer\\.address\\.state'),
    zipCode: () => cy.get('#customer\\.address\\.zipCode'),
    phone: () => cy.get('#customer\\.phoneNumber'),
    ssn: () => cy.get('#customer\\.ssn'),
    username: () => cy.get('#customer\\.username'),
    password: () => cy.get('#customer\\.password'),
    repeatedPassword: () => cy.get('#repeatedPassword'),
    submitForm: () => cy.get('[colspan="2"] > .button'),
    assertRegistrationSuccess: (username) => cy.get('.title').should('contain', `Welcome ${username}`),
  };
  
  fillForm(user) {
    cy.get('#customer\\.firstName', { timeout: 10000 }).should('be.visible');
    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    this.elements.street().type(user.street);
    this.elements.city().type(user.city);
    this.elements.state().type(user.state);
    this.elements.zipCode().type(user.zipCode);
    this.elements.phone().type(user.phone);
    this.elements.ssn().type(user.ssn);
    this.elements.username().type(user.username);
    this.elements.password().type(user.password);
    this.elements.repeatedPassword().type(user.repeatedPassword);
  }
  submitForm() {
    this.elements.submitForm().click();
}
  assertRegistrationSuccess(username) {
     this.elements.assertRegistrationSuccess(username);
  }
}
export default new Register();
