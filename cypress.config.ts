import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
   // baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/Tests/**/*.{js,jsx,ts,tsx}', // Points to your custom spec location
    //supportFile: 'cypress/support/e2e.ts',
    
  },
  "includeShadowDom":true
});