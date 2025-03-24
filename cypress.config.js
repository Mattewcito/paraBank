
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://tu-url.com',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    video: true, // Grabar videos de las pruebas
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720
  },
  browser: 'edge' // Especifica usar Edge
})