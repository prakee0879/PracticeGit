
import {test, expect, Page} from '@playwright/test'
import {LoginPage} from '../pageobjects_ts/LoginPage';
import {DashboardPage} from '../pageobjects_ts/DashboardPage';
import {CartPage} from '../pageobjects_ts/CartPage';
import {CheckoutPage} from '../pageobjects_ts/CheckoutPage';

import dataset from '../test_data/end-to-endtestdata.json' with {type : 'json'};






for(const data of dataset){

test(`test dynamic wait for ${data.productName}`,async ({page}) => {
    

    const loginPage = new LoginPage(page);
   await  loginPage.goTo();
   await loginPage.validLogin(data.userName,data.password);
  
    const dashboardPage=new DashboardPage(page);
   await  dashboardPage.searchAndAddToCart(data.productName);
   await  dashboardPage.navigateToCartPage();

   const cartPage =new CartPage(page);
   await cartPage.cartPageContent.last().waitFor();
   await cartPage.hasAddedProductVisible(data.productName);
   await cartPage.goToCheckoutPage();

   const checkoutPage =new CheckoutPage(page);
   await checkoutPage.CVVField.fill('344');
   await checkoutPage.searchCountryAndSelect('ind',data.countryName)
   await expect(checkoutPage.userName).toHaveText(data.userName);
   await checkoutPage.placeOrderButton.click();

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
      const orderID : any =  await page.locator("label.ng-star-inserted") .textContent();
  console.log(orderID);
  await page.locator("[routerlink*='myorders']").first().click(); 
   await page.locator("tbody").waitFor();
     const rows=await page.locator("tbody tr");
     
      
     for(let i =0;i<await rows.count();++i)
        {
     
     const rowOrderID : any = await rows.nth(i).locator("th").textContent();
      
        if(orderID.trim().includes(rowOrderID.trim()))
            {
           await rows.nth(i).locator("button").first().click();
           
           break;

            }

     }
 
   const  finalOrderId=await page.locator('div.col-text').textContent();
    expect(orderID.includes(finalOrderId)).toBeTruthy();
     
     
})
}