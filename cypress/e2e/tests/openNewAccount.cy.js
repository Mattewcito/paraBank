import OpenNewAccount from '../../pages/OpenNewAccount';

describe('Abrir nueva cuenta', () => {
  it('Debe registrar al usuario si no lo está, luego iniciar sesión y abrir una cuenta nueva', () => {
    cy.fixture('userData').then((user) => {
          cy.visit('https://parabank.parasoft.com/parabank/index.htm');
          OpenNewAccount.login(user);
          OpenNewAccount.assertLoginSuccess(user.firstName, user.lastName);
        });

    // Abrir nueva cuenta
    OpenNewAccount.selectAccountType('SAVINGS');
    OpenNewAccount.assertMessage();
  });
});
