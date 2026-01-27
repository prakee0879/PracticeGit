import {expect, Locator,Page} from '@playwright/test';

export class CartPage{

    page :Page;
    cartPageContent : Locator;
    checkoutLink : Locator;



    constructor(page: Page){
        this.page = page;
        this.cartPageContent = page.locator('div li');
        this.checkoutLink =page.getByText('Checkout');
    }

  async  hasAddedProductVisible(productName : string){
        const bool= await this.page.locator(`h3:has-text("${productName}")`).isVisible();
               expect(bool).toBeTruthy();

    }
    async goToCheckoutPage(){
             await this.checkoutLink.click();
    }
}
//module.exports={CartPage};