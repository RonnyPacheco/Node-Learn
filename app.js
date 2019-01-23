//console.log("Hello world, testing");
/*
const tutorial = require('./tutorial');
console.log(tutorial.sum(1,2));
console.log(tutorial.PI);
console.log(tutorial.SomeMathObject);



///////// Events //////////////////////
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

console.log("Hello");
eventEmitter.on('tutorial', (num1, num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 4);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}
let pedro = new Person('Pedrito');
let sam = new Person('Sam');

sam.on('name', ()=>{
    console.log('Hello, ' + sam.name);

});
pedro.on('name', ()=>{
    console.log('Welcome to the world, ' + pedro.name);

});
sam.emit('name');
pedro.emit('name');



/////Readline Module ///////
const readLine = require('readline');
const rl = readLine.createInterface({input: process.stdin,
    output: process.stdout}); //creating instance of readline interface. input and object (process)


    //random numbers created
let num1 = Math.floor((Math.random() *10) + 1);
let num2 = Math.floor((Math.random() *10) + 1);
let answer = num1 + num2; 
//stdin
rl.question(`What is the sum of ${ num1 } + ${ num2 } ? \n`, (userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }//if answer is right, close rl 
    else{
        //set prompt.
        rl.setPrompt('Incorrect answer, please try again \n');
        rl.prompt();
        rl.on('line', (userInput)=>{
            if(userInput.trim() == answer)
            rl.close();
        else{
            rl.setPrompt(`You answer of ${userInput} is incorrect, try again. \n` );
            rl.prompt();
        }
        });
    }
});

rl.on('close', ()=>{
    console.log("Correct!");

});

*/




