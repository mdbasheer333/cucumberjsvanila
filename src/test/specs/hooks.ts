import { Given, When, Then, defineParameterType, DataTable, BeforeAll, AfterAll, Before, After, BeforeStep,AfterStep } from "@cucumber/cucumber";


//-----------------------------

// BeforeAll(function(){
//     console.log('1 CREATING RES DIR :::::::::::::::::::');
// });

// BeforeAll(function(){
//     console.log('2 INTIALIZING DRIVER :::::::::::::::::::');
// });

Before(function (fn){
    console.log('this IS LOGIN :: BEFORE EACH SCENARIO');
});

BeforeStep(function(fn){
    console.log('THIS IS BEFORE STEP $$$$$$$$$$$$$$$$');
});

// AfterAll(function(){
//     console.log('1  QUITTINNG DRIVER INSTANCE............!');
// });

// AfterAll(function(){
//     console.log('2  QUITTINNG DRIVER INSTANCE............!');
// });

// After(function(fn){
//     console.log('this IS LOGOUT :: AFTER EACH SCENARIO');
// });

// AfterStep(function(fn){
//     console.log(`step ${fn.pickleStep.text} has completed and status is ${fn.result.status}`);
//     if(fn.result.status=='FAILED'){
//         //attach screenshots
//     }
// });

// AfterStep(function({result}){
//     console.log('after steps');
// });
