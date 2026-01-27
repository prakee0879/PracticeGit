const{test, expect}= require ('@playwright/test');


test.skip('test dynamic wait',async ({page}) => {
    const email = "prakhar0879@gmail.com";
    const productName = 'ZARA COAT 3';
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByPlaceholder("email@example.com").fill(email);
    await  page.getByPlaceholder("enter your passsword").fill("Iamthebest@123");
    await page.getByRole("button",{name : "login"}).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").last().waitFor();
      console.log(  await page.locator(".card-body b").allTextContents());
     

     await page.locator('div.card-body').filter({hasText: "ZARA COAT 3"}).getByRole("button",{name : "Add To Cart"}).click();
    
      await page.getByRole('listitem').getByRole('button',{name : "Cart"}).click();
      await page.locator('div li').last().waitFor();
     const bool= await page.getByText(productName).isVisible();
     expect(bool).toBeTruthy();
     await page.getByText('Checkout').click();
     await page.locator('input[type="text"]').nth(2).fill('344');
     await page.getByPlaceholder("Select Country").pressSequentially('ind');
     const optionlist= page.locator('.ta-results');
    await  optionlist.waitFor();
    await page.getByRole('button',{name : "India"}).nth(1).click();
  
  await expect(page.locator(".user__name label")).toHaveText(email);
    await page.getByText("PLACE ORDER").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
      const orderID =  await page.locator("label.ng-star-inserted") .textContent();
    const orderIDList= orderID.split(" ");
  console.log(orderIDList[2]);
  await page.locator("[routerlink*='myorders']").first().click(); 
   await page.locator("tbody").waitFor();

   await page.locator("tbody tr").filter({hasText: orderIDList[2]}).getByRole('button',{name: "View"}).click();
    derID.trim().includes(rowOrderID.trim());
  
 
   const  finalOrderId=await page.locator('div.col-text').textContent();
    expect(orderID.includes(finalOrderId)).toBeTruthy();
     
     
})