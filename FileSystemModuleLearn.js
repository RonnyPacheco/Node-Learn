//read, create files
const fs = require('fs');

//create file

/*
fs.writeFile('test.txt', "Testing", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file created!");
    }
    fs.readFile('test.txt','utf8', (err, file)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(file);
        }
    });
});

////////////////////////renaming a file /////////////////
fs.rename('test.txt', 'newTest.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file renamed!');
    }
});

/////////////////file appending /////////////////
fs.appendFile('newTest.txt', ' new data' , (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('data appended!!');
    }
});

*/

fs.unlink('newTest.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file deleted! :(');
    }
});