Proyecto de Automatización de Pruebas para ParaBank

🧾 Descripción General

Este proyecto contiene pruebas automatizadas para la aplicación web ParaBank, desarrollado como parte del Reto Técnico de Choucair para candidatos a Analista de Pruebas. La automatización cubre tres escenarios clave: registro de usuario, creación de cuenta y transferencia de fondos, utilizando el patrón Screenplay con Cucumber y Serenity BDD. El proyecto está diseñado para ser mantenible, escalable y seguir las mejores prácticas de automatización.

📌 Escenarios Automatizados
1. Registro de Usuario

Acción: Acceder al sitio, hacer clic en "REGISTER", completar el formulario de registro.
Verificación: Confirmar el mensaje: "Your account was created successfully. You are now logged in."

2. Creación de Cuenta

Acción: Navegar a "Open New Account", crear una cuenta tipo "SAVINGS" con un depósito mínimo de $100.00.
Verificación: Confirmar el mensaje: "Your new account number: [Número de Cuenta]."

3. Transferencia de Fondos

Acción: Ir a "Transfer Funds", realizar una transferencia entre dos cuentas diferentes con un monto especificado.
Verificación: Confirmar el mensaje: "[Monto] has been transferred from account [Origen] to account [Destino]."


🧪 Tecnologías Utilizadas

Java: Lenguaje de programación.
Cucumber: Desarrollo guiado por comportamiento (BDD) con sintaxis Gherkin.
Serenity BDD: Framework para automatización con soporte al patrón Screenplay.
Selenium WebDriver: Automatización del navegador.
Maven: Gestión de dependencias y construcción del proyecto.
Git: Control de versiones.


📁 Estructura del Proyecto

parabank/

├── src/

│   ├── main/

│   │   └── java/

│   │       ├── tasks/           # Tareas Screenplay

│   │       ├── interactions/    # Interacciones con la UI

│   │       ├── questions/       # Verificaciones de resultados

│   │       ├── pages/           # Clases Page Object Model

│   │       └── models/          # Modelos de datos

│   ├── test/

│   │   └── java/

│   │       ├── features/        # Archivos Gherkin (.feature)

│   │       └── stepdefinitions/ # Definiciones de pasos

│   └── resources/

│       └── serenity.conf        # Configuración de Serenity

├── .gitignore                   # Archivos ignorados por Git

├── pom.xml                      # Configuración de Maven

└── README.md                    # Documentación


⚙️ Configuración del Entorno
🔹 Prerrequisitos

Java JDK 11 o superior

Maven 3.6.0 o superior

Git

Navegador moderno (Chrome, Firefox, etc.)

IDE (IntelliJ IDEA, Eclipse, VS Code)

🔹 Instalación

Clonar el repositorio:git clone <url-del-repositorio>
cd parabank-automatizacion


Instalar dependencias:mvn clean install


Ejecutar las pruebas:mvn verify

🔹 Reportes

Los reportes de Serenity BDD se generan en target/site/serenity tras la ejecución.


📄 .gitignore

El archivo .gitignore sigue la plantilla recomendada (https://bit.ly/3OBRsNb) y excluye:

Archivos de IDE (.idea/, *.iml)

Artefactos de compilación (target/)

Archivos temporales (*.log, *.tmp)

🧭 Estrategia de Localización

Los localizadores se priorizan en este orden:

ID

Name

Class

XPath relativos

Selectores CSS

📝 Archivos de Características

Los escenarios están definidos en español usando Gherkin, ubicados en src/test/resources/features/. Ejemplo:
Característica: 
Registro de Usuario

  Como nuevo usuario
  
  Quiero registrarme en ParaBank
  
  Para acceder a los servicios de cuenta

  Escenario: Registro exitoso
  
    Dado que estoy en la página de ParaBank
    
    Cuando hago clic en el enlace Register
    
    Y completo el formulario con datos válidos
    
    Entonces veo el mensaje de bienvenida confirmando el registro

