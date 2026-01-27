"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "this is sample mesage";
console.log(message);
var age = 30;
console.log(age);
var numberArray = [1, 3, 5];
console.log(numberArray);
var data = "string not sure number";
console.log(data);
function add(f, r) {
    return f + r;
}
console.log(add(3, 4));
var user = {
    name: "prakhar",
    age: 30,
    location: "ahemdabad"
};
user.location = "rajasthan";
var CartPage = /** @class */ (function () {
    function CartPage(page) {
        this.page = page;
        this.CVVField = page.locator('input[type="text"]').nth(2);
        this.coutryField = page.locator("[placeholder*='Country']");
        this.countryOptionList = page.locator('.ta-results');
        this.userName = page.locator(".user__name label");
        this.placeOrderButton = page.locator("a.action__submit");
    }
    return CartPage;
}());
