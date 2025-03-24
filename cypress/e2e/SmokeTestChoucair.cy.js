describe("SmokeTest - Choucair", () => {
  const userData = {
    username: "Mathewcito-v11",
    password: "1000294910"
  };

  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Registro de Usuario", () => {
    cy.get('.logo').should("be.visible"); // Verificar logo
    cy.get('h2').contains("Customer Login").should("be.visible"); // Validar que se cargó la página correcta
    cy.contains("Register").click(); // Hacer clic en "Register"

    // Esperar a que el formulario esté visible
    cy.get("#customer\\.firstName", { timeout: 10000 }).should("be.visible");

    // Datos de usuario
    const newUser = {
      firstName: "Emanuel",
      lastName: "López",
      street: "Prueba",
      city: "Medellín",
      state: "Prueba",
      zipCode: "1234",
      phoneNumber: "1234567890",
      ssn: "123",
      username: userData.username,
      password: userData.password
    };

    // Llenar formulario de registro
    cy.get("#customer\\.firstName").type(newUser.firstName);
    cy.get("#customer\\.lastName").type(newUser.lastName);
    cy.get("#customer\\.address\\.street").type(newUser.street);
    cy.get("#customer\\.address\\.city").type(newUser.city);
    cy.get("#customer\\.address\\.state").type(newUser.state);
    cy.get("#customer\\.address\\.zipCode").type(newUser.zipCode);
    cy.get("#customer\\.phoneNumber").type(newUser.phoneNumber);
    cy.get("#customer\\.ssn").type(newUser.ssn);
    cy.get("#customer\\.username").type(newUser.username);
    cy.get("#customer\\.password").type(newUser.password);
    cy.get("#repeatedPassword").type(newUser.password);

    // Enviar formulario
    cy.get('[colspan="2"] > .button').click();
    cy.contains("Your account was created successfully. You are now logged in.").should("be.visible");
  });

  it("Creación de Cuenta", () => {
    iniciarSesion(userData);

    // Navegar a la sección de creación de cuenta
    cy.get('#leftPanel > ul > :nth-child(1) > a').should("exist").click();

    // Seleccionar la opción "SAVINGS"
    cy.get("#type").select("SAVINGS");

    // Seleccionar cuenta aleatoria
    seleccionarCuentaAleatoria("#fromAccountId");

    // Confirmar la creación de la cuenta
    cy.get("input.button[value='Open New Account']").click();
    cy.contains("Congratulations, your account is now open").should("be.visible");
  });

  it("Transferencia de Fondos", () => {
    iniciarSesion(userData);

    // Navegar a la sección de transferencia de fondos
    cy.get('#leftPanel > ul > :nth-child(3) > a').should("exist").click();

    // Ingresar cantidad a transferir
    cy.get('#amount').type("100");

    // Seleccionar cuentas aleatorias de origen y destino
    seleccionarCuentaAleatoria("#fromAccountId");
    seleccionarCuentaAleatoria("#toAccountId");

    // Confirmar transferencia
    cy.get(':nth-child(4) > .button').should("exist").click();
    cy.contains("Transfer Complete!").should("be.visible");
  });

  /** 
   * Función para iniciar sesión
   * @param {Object} userData - Datos de usuario (username, password)
   */
  function iniciarSesion(userData) {
    cy.get("[name='username']", { timeout: 10000 }).should("be.visible").type(userData.username);
    cy.get("[name='password']").type(userData.password);
    cy.get("input.button[value='Log In']").click();
    cy.contains("Welcome").should("be.visible");
  }

  /** 
   * Función para seleccionar una cuenta aleatoria en un dropdown
   * @param {string} selector - Selector del dropdown
   */
  function seleccionarCuentaAleatoria(selector) {
    cy.get(selector)
      .find("option")
      .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.get(selector).select($options[randomIndex].value);
      });
  }
});
