import { expect, type Locator, type Page } from '@playwright/test';

let message : string ="this is sample mesage";
console.log(message);

let age : number = 30;
console.log(age);

let numberArray :number[]= [1,3,5];
console.log(numberArray);

let data : any = "string not sure number";
console.log(data);

function add(f:number,r:number):number{
    return f+r;
}

console.log(add(3,4));

let user : {name: string, age:number,location : string} ={
    name : "prakhar",
    age : 30,
    location: "ahemdabad"
};
user.location = "rajasthan";

class CartPage{

    page : Page;
    CVVField : Locator;
    coutryField: Locator;
    countryOptionList:  Locator;
    userName :  Locator;
    placeOrderButton :  Locator;

 constructor(page : any){
        this.page = page;
        this.CVVField =page.locator('input[type="text"]').nth(2);
        this.coutryField=page.locator("[placeholder*='Country']");
        this.countryOptionList = page.locator('.ta-results');
        this.userName = page.locator(".user__name label");
        this.placeOrderButton= page.locator("a.action__submit");

    }
}