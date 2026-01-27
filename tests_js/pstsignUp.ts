import {test,expect} from '@playwright/test'

test('SignUp', async ({page})=>{
    await page.goto("https://staging.prosolutionstraining.com/");
     await page.locator("//div[@class='desktop_only']//div//div//div//img").click();
    await page.locator('#CreateAccount').click();
     expect(await page.locator('h2:visible')).toContainText("Create Your New");
     const stateDropdown = page.locator("select#cifHomeState_id");
        await stateDropdown.selectOption('7');

   //await stateDropdown.selectText('Connecticut');
   await page.locator('input#FirstName').fill("prakhar");
      await page.locator('input#LastName').fill("Test");
    await page.locator('input#Username').fill("psarawagi@cceionline.com");
    await page.locator('input#ConfirmUsername').fill("psarawagi@cceionline.com");
    await page.locator('input#Password').fill("Test@123");
        await page.locator('input#ConfirmPassword').fill("Test@123");
                await page.locator('input#Phone').fill("9878654532");
                await page.locator('input#HomeZipcode').fill('10001');
        await page.locator('#IDOptOut').click();
        expect(await page.locator('#IDOptOut')).toBeChecked();
        await page.locator('#language_id').selectOption('1');
        await page.locator('select#Profession_id').selectOption('1');
        //await page.locator('[name="MarketingOptOut"]').click();
        await expect(page.locator('[name="MarketingOptOut"]')).toBeChecked();
} 
)