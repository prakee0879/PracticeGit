const{test, expect}= require ('@playwright/test');

//alert, hover, frames
test('popup validation', async ({page})=> {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();

   await page.locator("#hide-textbox").click();
   await expect(page.locator("#displayed-text")).toBeHidden();
   await page.pause();
   await page.locator("#confirmbtn").click();
   page.on('dialog',dialog=> dialog.accept());
   page.locator('#mousehover').hover();
   const frameLocator=page.frameLocator('#courses-iframe');
   await frameLocator.locator("li a[href*='lifetime-access']:visible").click();
   console.log(await frameLocator.locator("h2[style ='padding-bottom: 25px;'] span").textContent());



    
})