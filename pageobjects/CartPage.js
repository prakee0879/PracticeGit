const{ expect}= require ('@playwright/test');

class CartPage{

    constructor(page){
        this.page = page;
        this.cartPageContent = page.locator('div li');
        this.checkoutLink =page.getByText('Checkout');
    }

  async  hasAddedProductVisible(productName){
        const bool= await this.page.locator(`h3:has-text("${productName}")`).isVisible();
               expect(bool).toBeTruthy();

    }
    async goToCheckoutPage(){
             await this.checkoutLink.click();
    }
}
module.exports={CartPage};