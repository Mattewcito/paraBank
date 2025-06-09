class Login {
    elements = {
         register: () => cy.get('#loginPanel > :nth-child(3) > a'),
    }
    goToRegister() {
        this.elements.register().click();
    }
}
export default new Login();
