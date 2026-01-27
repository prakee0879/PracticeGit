class CheckoutPage{
    constructor(page){
        this.page = page;
        this.CVVField =page.locator('input[type="text"]').nth(2);
        this.coutryField=page.locator("[placeholder*='Country']");
        this.countryOptionList = page.locator('.ta-results');
        this.userName = page.locator(".user__name label");
        this.placeOrderButton= page.locator("a.action__submit");

    }

    async searchCountryAndSelect(countryInitials,countryName){
         await this.coutryField.pressSequentially(countryInitials);
         await  this.countryOptionList.waitFor();
        const itemCount= await this.countryOptionList.locator('button').count();
        for(let i =0;i<itemCount;++i){
        const text=await  this.countryOptionList.locator('button').nth(i).textContent();
     
      //  if( text.trim()===countryName)
              if( text===countryName)

        {
        await this.countryOptionList.locator('button').nth(i).click();
        break;   
        }
       
    }
    }
}

module.exports ={CheckoutPage};