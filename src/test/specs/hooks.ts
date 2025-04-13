import { Given, When, Then, defineParameterType, DataTable, BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";

import { Page, BrowserContext, Browser, chromium } from "playwright-core";

export default class CustomWorld extends World {
    private browser!: Browser;
    private bCtx!: BrowserContext;
    private page!: Page;
    constructor(opions: IWorldOptions<any>) {
        super(opions);
    }
    async init() {
        this.browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
        this.bCtx = await this.browser.newContext({ viewport: null, javaScriptEnabled: true });
        this.page = await this.bCtx.newPage();
    }
    async deInit() {
        await this.bCtx?.close();
        await this.browser?.close();
    }
    getPage(){
        return this.page;
    }
}

setWorldConstructor(CustomWorld);

//-----------------------------

// BeforeAll(function(){
//     console.log('1 CREATING RES DIR :::::::::::::::::::');
// });

// BeforeAll(function(){
//     console.log('2 INTIALIZING DRIVER :::::::::::::::::::');
// });

Before(async function (this: CustomWorld, fn) {
    console.log('this IS LOGIN :: BEFORE EACH SCENARIO');
    await this.init();
    await this.getPage().goto('https://www.google.com');
});

After(async function (this: CustomWorld, fn) {
    await this.getPage().close();
    await this.deInit();
});

// BeforeStep(function(fn){
//     console.log('THIS IS BEFORE STEP $$$$$$$$$$$$$$$$');
// });

// AfterAll(function(){
//     console.log('1  QUITTINNG DRIVER INSTANCE............!');
// });

// AfterAll(function(){
//     console.log('2  QUITTINNG DRIVER INSTANCE............!');
// });

After(function (fn) {
    console.log(`*************${fn.pickle.name}******************`);
});

// AfterStep(function(fn){
//     console.log(`step ${fn.pickleStep.text} has completed and status is ${fn.result.status}`);
//     if(fn.result.status=='FAILED'){
//         //attach screenshots
//     }
// });

// AfterStep(function({result}){
//     console.log('after steps');
// });
