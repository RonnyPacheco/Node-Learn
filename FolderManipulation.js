

const fs = require('fs');

/*
fs.unlink('./tutorial/example.txt' , (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file deleted');
        fs.rmdir('tutorial', (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('folder removed!');
            }

        });

    }
});

// fs.mkdir('tutorial', (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('Folder created');2
        
//         fs.rmdir('tutorial', (err)=>{
            
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('File deleted');
//             }
//         });
        
//        fs.writeFile('./tutorial/example.txt', 'this is testing', (err)=>{
//            if(err){
//                console.log(err);
//            }
//            else{
//                console.log('file created');
//            }
//        });
//     }

// });


fs.mkdir('tutorial', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('folder created');
        fs.writeFile('./tutorial/a.txt', 'a', (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('file a created');
            }
        });
        fs.writeFile('./tutorial/b.txt', 'b', (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('file b created');
            }
        });


    }
});
*/
fs.readdir('tutorial',(err, files)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./tutorial/' + file, (err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('unlinked file: ' + file);
                }
            });
        }
    }
});


