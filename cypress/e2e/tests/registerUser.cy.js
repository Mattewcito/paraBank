import Login from '../../pages/Login';
import Register from '../../pages/Register';


describe('Registrar un usuario', () => {
  it('Debe llenar el formulario de registro', () => {
    cy.fixture('userData').then((user) => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      Login.goToRegister();
      Register.fillForm(user);
      Register.submitForm();
      Register.assertRegistrationSuccess(user.username);
    });
  });
});
