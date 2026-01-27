class DashboardPage{

    constructor(page){
        this.products =page.locator('div.card-body');
        this.productText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");

    }

   async  searchAndAddToCart(productName){
         await this.productText.last().waitFor();
        //console.log(  await page.locator(".card-body b").allTextContents());
             const count= await  this.products.count();
             
              for(let i=0;i<count;++i)
                {
               const  text=await this.products.nth(i).locator(' h5 b').textContent();
               if(text ==productName){      
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
                
               }
              }
    }

   async navigateToCartPage(){
      await  this.cart.click();

    }
}
module.exports={DashboardPage};