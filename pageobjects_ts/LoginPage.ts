import {Page, Locator} from '@playwright/test'

export class LoginPage{

    page : Page;
    userName : Locator;
    password : Locator;
    signInButton : Locator;



    constructor(page : Page){
        this.page=page;
        this.userName =page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInButton = page.locator("#login");
    }

    async goTo(){

    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(userName : string,passsword : string){

    await  this.userName.fill(userName);
    await   this.password.fill(passsword);
    await   this.signInButton.click();
    await this.page.waitForLoadState('networkidle');

    }

}

//module.exports = {LoginPage};