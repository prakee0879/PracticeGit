import { test, expect } from '@playwright/test';
 
test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
   await page.getByLabel("Check me out if you Love IceCreams!").check();
   await  page.getByLabel("Employed").click();
   await  page.getByLabel("Gender").selectOption("Female");
   await page.getByRole("button",{name: "Submit"}).click();
   await page.getByText("The Form has been submitted successfully!.").isVisible()
   await page.getByRole("link",{name: "Shop"}).click();
   await page.locator("div.card").filter({hasText: "Samsung Note 8"}).getByRole("button").click();

  //await  page.pause();


})