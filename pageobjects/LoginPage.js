class LoginPage{

    constructor(page){
        this.page=page;
        this.userName =page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInButton = page.locator("#login");
    }

    async goTo(){

    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(userName,passsword){

    await  this.userName.fill(userName);
    await   this.password.fill(passsword);
    await   this.signInButton.click();
    await this.page.waitForLoadState('networkidle');

    }

}

module.exports = {LoginPage};