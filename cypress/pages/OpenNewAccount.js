class OpenNewAccount {
  elements = {
    usernameInput: () => cy.get('form > :nth-child(2) > .input'),
    passwordInput: () => cy.get(':nth-child(4) > .input'),
    loginButton: () => cy.get(':nth-child(5) > .button'),
    assertLoginSuccess: (firstName, lastName) => cy.get('.smallText').should('contain', `Welcome ${firstName} ${lastName}`),
    SelectOpenNewAccount: ()=> cy.get('#leftPanel > ul > :nth-child(1) > a'),
    accountTypeSelect: () => cy.get('#type'),
    selecctaccount: () => cy.get('#fromAccountId'), 
    openNewAccountButton: () => cy.get('input.button'),
    confirmationMessage: () => cy.get('#openAccountResult > :nth-child(2)'),
  };
  login(user) {
    this.elements.usernameInput().type(user.username);
    this.elements.passwordInput().type(user.password);
    this.elements.loginButton().click();
  }
  assertLoginSuccess(firstName, lastName) {
    this.elements.assertLoginSuccess(firstName, lastName);
  }

  selectAccountType(type) {
    this.elements.SelectOpenNewAccount().click();
    this.elements.accountTypeSelect().select(type);
    this.elements.selecctaccount().find('option').should('have.length.greaterThan', 1).then($options => {
    const options = $options.slice(1);
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    const randomValue = Cypress.$(randomOption).val();
    this.elements.selecctaccount().select(randomValue);
    cy.log(`Opción aleatoria seleccionada: ${randomValue}`);
  });
    this.elements.openNewAccountButton().click();
  }

  assertMessage() {
    this.elements.confirmationMessage().should('contain', 'Congratulations, your account is now open.');
  }

}

export default new OpenNewAccount();


   

