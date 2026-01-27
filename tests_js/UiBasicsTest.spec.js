const{test, expect}= require ('@playwright/test');

test('First browser context Playwright Test', async ({browser}) =>
{
const context = await browser.newContext();//if u have different plugin or coockies for browser then use this otherwise page
 const page = await context.newPage();
 await page.goto("https:www.google.com");
 console.log(await page.title());
 await expect(page).toHaveTitle("Google");

})


test('first page test', async ({page})=> 
    {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const userName =page.locator('#username');
const signIn =page.locator('#signInBtn');


 await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
 await userName.fill("rahulshettyacadem");
await page.locator("[type='password']").fill("learning");
await signIn.click();
await  expect(page.locator("[style*='block']")).toContainText('Incorrect');
//await page.pause('40000')
await userName.fill("");
 await userName.fill("rahulshettyacademy");
 await signIn.click();
  console.log(await page.locator(".card-body a").first().textContent());
   console.log(await page.locator(".card-body a").nth(1).textContent());
})


test('test dynamic wait',async ({page}) => {
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("prakhar0879@gmail.com");
    await  page.locator("#userPassword").fill("Iamthebest@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
      console.log(  await page.locator(".card-body b").allTextContents());
})

test('UI Controls',async ({page})=> {
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName =page.locator('#username');
    const signIn =page.locator('#signInBtn');
    const freeAccessLink =page.locator("[href*='documents-request']")

    await userName.fill("rahulshettyacadem");
await page.locator("[type='password']").fill("learning");
const dropdown = page.locator('select.form-control');
await dropdown.selectOption('consult')
await page.locator('.checkmark').last().click();
await page.locator('#okayBtn').click();
await expect(page.locator('.checkmark').last()).toBeChecked();
console.log(await page.locator('.checkmark').last().isChecked());
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
 expect(await page.locator("#terms").isChecked()).toBeFalsy();
 await expect(freeAccessLink).toHaveAttribute('class','blinkingText');
 freeAccessLink.click();
})

test('child window page',async ({browser})=> {
const context = await browser.newContext();
 const page = await context.newPage();
  const userName =page.locator('#username');
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    const freeAccessLink =page.locator("[href*='documents-request']")


const [newPage] =await Promise.all
([
    context.waitForEvent('page'),
     freeAccessLink.click(),
    
 ])

const text =await  newPage.locator("p[class*='red']").textContent();

 console.log(text);

const splittedText=text.split(' ');
const domain =splittedText[4].split('@')[1];

console.log(domain);
 userName.fill(domain);
 //  page.pause();
 console.log(userName.inputValue());



})



test('test', async ({ page }) => {
  await page.goto('https://staging.prosolutionstraining.com/');
  await page.locator('#DesktopNavigation').getByRole('link', { name: 'Early Childhood Education' }).click();
  await page.getByRole('combobox').selectOption('3');
  await page.getByRole('button', { name: 'Select' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('View Details').first().click();
  const page1 = await page1Promise;
  await page1.getByText('ECE Individual Annual').click();
  await page1.getByText('ECE Individual Annual').click();
  await page1.getByText('$').click();
  await page1.getByRole('button', { name: 'Add to Cart' }).click();
  await page1.goto('https://staging.prosolutionstraining.com/store/product/index.cfm?tDisplayAdd=1&tProductVersion_id=279&CatalogFilter_id=1042&tCatalogFilterType_id=');
  await page1.locator('#DesktopNavigation').getByRole('link', { name: 'Earning Your CDA' }).click();
});
