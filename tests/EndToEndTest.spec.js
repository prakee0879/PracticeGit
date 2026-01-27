const{test, expect}= require ('@playwright/test');


test.skip('test dynamic wait',async ({page}) => {
    const email = "prakhar0879@gmail.com";
    const productName = 'ZARA COAT 3';
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   const productCard  =page.locator('div.card-body');
  await page.locator("#userEmail").fill(email);
    await  page.locator("#userPassword").fill("Iamthebest@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").last().waitFor();
      console.log(  await page.locator(".card-body b").allTextContents());
     

     const count= await  productCard.count();
     
      for(let i=0;i<count;++i)
        {
       const  text=await productCard.nth(i).locator(' h5 b').textContent();
       if(text ==productName){      
        await productCard.nth(i).locator("text= Add To Cart").click();
        break;
        
       }
      }
      await page.locator("[routerlink*='cart']").click();
      await page.locator('div li').last().waitFor();
     const bool= await page.locator(`h3:has-text("${productName}")`).isVisible();
     expect(bool).toBeTruthy();
     await page.getByText('Checkout').click();
     await page.locator('input[type="text"]').nth(2).fill('344');
     await page.locator("[placeholder*='Country']").pressSequentially('ind');
     const optionlist= page.locator('.ta-results');
    await  optionlist.waitFor();
  const itemCount= await optionlist.locator('button').count();
  for(let i =0;i<itemCount;++i){
    const text=await optionlist.locator('button').nth(i).textContent();
     
    if( text===" India")
        {
       
       await optionlist.locator('button').nth(i).click();
       break;   
    }
       
  }
  await expect(page.locator(".user__name label")).toHaveText(email);
    await page.locator("a.action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
      const orderID =  await page.locator("label.ng-star-inserted") .textContent();
  console.log(orderID);
  await page.locator("[routerlink*='myorders']").first().click(); 
   await page.locator("tbody").waitFor();
     const rows=await page.locator("tbody tr");
     
      
     for(let i =0;i<await rows.count();++i)
        {
      
     const rowOrderID = await rows.nth(i).locator("th").textContent();
      
        if(orderID.trim().includes(rowOrderID.trim()))
            {
           await rows.nth(i).locator("button").first().click();
           
           break;

            }

     }
 
   const  finalOrderId=await page.locator('div.col-text').textContent();
    expect(orderID.includes(finalOrderId)).toBeTruthy();
     
     
})