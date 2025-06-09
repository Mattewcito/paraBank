class TransferFunds {
  elements = {
    usernameInput: () => cy.get('form > :nth-child(2) > .input'),
    passwordInput: () => cy.get(':nth-child(4) > .input'),
    loginButton: () => cy.get(':nth-child(5) > .button'),
    assertLoginSuccess: (firstName, lastName) => cy.get('.smallText').should('contain', `Welcome ${firstName} ${lastName}`),
    openTransferFunds: () => cy.get('#leftPanel ul li a').contains('Transfer Funds'),
    amountInput: () => cy.get('#amount'),
    fromAccountSelect: () => cy.get('#fromAccountId'),
    toAccountSelect: () => cy.get('#toAccountId'),
    transferButton: () => cy.get(':nth-child(4) > .button'),
    messageConfirm: () => cy.get('#showResult > .title'),
  };
    login(user) {
    this.elements.usernameInput().type(user.username);
    this.elements.passwordInput().type(user.password);
    this.elements.loginButton().click();
  }
    assertLoginSuccess(firstName, lastName) {
    this.elements.assertLoginSuccess(firstName, lastName);
  }
 selectRandomOption(selectElement) {
  selectElement
    .find('option')
    .should('have.length.greaterThan', 1) // espera que haya más de 1 opción
    .then($options => {
      const options = $options.slice(1); // ignora el primer option (placeholder)
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex];
      const randomValue = Cypress.$(randomOption).val();

      cy.wrap($options.first().parent()).select(randomValue);
      cy.log(`Opción aleatoria seleccionada: ${randomValue}`);
    });
}

  transferFunds() {
  const randomAmount = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
  this.elements.openTransferFunds().click();
  this.elements.amountInput().clear().type(randomAmount.toString());
  this.selectRandomOption(this.elements.fromAccountSelect());
  this.selectRandomOption(this.elements.toAccountSelect());
  this.elements.transferButton().click();

  cy.log(`Monto aleatorio transferido: ${randomAmount}`);
}
    assertTransferSuccess() {
    this.elements.messageConfirm().should('contain', 'Transfer Complete!');
    }
}

export default new TransferFunds();