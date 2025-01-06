import { defineConfig } from 'cypress';

const cypressJsonConfig: Cypress.ConfigOptions & any = {
  chromeWebSecurity: false,
  defaultCommandTimeout: 150000,
  requestTimeout: 50000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalSessionAndOrigin: true,
  testIsolation: false,
  numTestsKeptInMemory: 0,
  responseTimeout: 50000,
  pageLoadTimeout: 40000,
  nodeOptions: `--max-old-space-size=16384`,
  specPattern: [
    'cypress/Tests/**/*.{js,jsx,ts,tsx}'
  ],
  experimentalMemoryManagement: true,
  video: true,
};
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    ...cypressJsonConfig,
   // specPattern: 'cypress/Tests/**/*.{js,jsx,ts,tsx}', // Points to your custom spec location
    //supportFile: 'cypress/support/e2e.ts',
    
  },
  "includeShadowDom":true
});