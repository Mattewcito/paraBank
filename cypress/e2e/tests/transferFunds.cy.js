import TransferFunds from "../../pages/TransferFunds";

describe('Transferir fondos entre cuentas', () => {
  it('Debe transferir fondos entre cuentas', () => {
    cy.fixture('userData').then((user) => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        TransferFunds.login(user);
        TransferFunds.assertLoginSuccess(user.firstName, user.lastName);
        TransferFunds.transferFunds();
        TransferFunds.assertTransferSuccess();

    });
  });
});