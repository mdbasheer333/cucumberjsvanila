import { Given, When, Then, defineParameterType, DataTable } from "@cucumber/cucumber";

Given('the user is on the login page', function () {
    console.log(`----------the user is on the login page---------------`);
});

When('the user enters valid credentials', function () {
    console.log(`----------the user enters valid credentials--------------`);
});

When('clicks the login button', function () {
    console.log(`-----------clicks the login button--------------`);
});

Then('they should be redirected to the homepage', function () {
    console.log(`-----------they should be redirected to the homepage-------------`);
});

Then('see a welcome message', function () {
    console.log(`---------see a welcome message------------`);
});

Then('item should be available in cart', function () {
    console.log(`------------item should be available in cart-----------`);
});

When('the user remove the item from cart', function () {
    console.log(`--------the user remove the item from cart---------------`);
});

Then('item should not be available in cart', function () {
    console.log(`-----------item should not be available in cart------------`);
});

When('the user edits the the item in the cart', function () {
    console.log(`-----------the user edits the the item in the cart------------`);
});

// When('the user add {int} item to cart', function (noOfItems: number) {
//     console.log(`-----------the user add ${noOfItems} item to cart----------------`);
// });

// When('the user add {int} item {string} to cart', function (noOfItems: number, productName: string) {
//     console.log(`-----------the user add ${noOfItems} item ${productName} to cart----------------`);
// });

// When('the user add {word} to cart', function (word: any) {
//     console.log(`-----------the user add ${word} to cart----------------`);
// });

// Then('user should see some message', function (docString: string) {
//     console.log(`${docString}`);
// });

When(/^the user add ((?:\d+)) item(?:s)? to cart$/, function (noOfItems: number) {
    console.log(`-------------the user add ${noOfItems} item(s) to cart----------`);
});

class LoginType {
    private type: string;
    constructor(type: string) {
        this.type = type;
    }
    public getType(): string {
        return this.type;
    }
}

defineParameterType({
    name: "loginType",
    regexp: /admin|employee|manager/,
    transformer: function (match) {
        return new LoginType(match.toUpperCase());
    }
});

Given('the user login with {loginType} access', function (loginType: LoginType) {
    console.log(loginType.getType());
});

class UserRecord {
    fname: string;
    lname: string;
    age: number;
    constructor(fname: string, lname: string, age: number) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}

defineParameterType({
    name: "userDetails",
    regexp: /([^\s;]+);([^\s;]+);(\d+)/,
    transformer: function (fName, lastName, age) {
        return new UserRecord(fName, lastName, Number(age));;
    }
});

Given('the user {userDetails} details', function (userDetails: UserRecord) {
    console.log(`fname = ${userDetails.fname} lname=${userDetails.lname} and age=${userDetails.age}`);
});


Given('the below user details', function (dataTable:DataTable) {
    console.log(dataTable.hashes());    
});

When('the user enters valid credentials {string} and {string}', function (username, password) {
    console.log(`user name is ${username} and password is ${password}`);
    
  });

  Then('see a welcome message as {string}', function (message) {
   console.log(`welcome message is ${message}`);
   
  });