// @ts-check
//const { defineConfig, devices } = require('@playwright/test');
//const { timeout } = require('./playwright.config_orignal');
//import { timeout } from './playwright.config_orignal';
import { defineConfig, devices } from '@playwright/test';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig ({

//const config = ({
  testDir: './tests',
  retries:1,
  timeout: 110*100,
  expect :{
    timeout : 100*100,
  },
  reporter :'html',

  use: {
   browserName : 'firefox',
   headless : false,
   screenshot : 'on',
   trace : 'retain-on-failure',
    
  },

 
});
//module.exports = config   
