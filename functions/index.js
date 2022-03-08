const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const express = require('express');
const app = express();
// exports.helloWorld = functions.https.onRequest((req,res)=>{
//     res.send("hello from firebase function");
// })

// exports.api = functions.https.onRequest((req,res) =>{
//     switch(req.method){
//         case 'GET':
//             res.send("it is a GET request");
//             break;
//         case 'POST':
//             const body = req.body;
//             res.send(body);
//             break;
//         case 'DELETE':
//             res.send("it is a delete request");
//             break;
//         default:
//             res.send("It's a default request");
//     }
// })

app.get('/:helloworld',(req,res) =>{
    return res.status(200).send(req.params.helloworld)
});

 
exports.app = functions.https.onRequest(app);

//get requests
exports.hello = functions.https.onRequest((req,res)=>{
    res.send("Hello, World");
});

exports.num = functions.https.onRequest((req,res)=>{
    const sum = 4+4;
    res.send(`${sum}`);
});
exports.object = functions.https.onRequest((req,res)=>{
    const info = [{
        id:"1",
        name : "Navjot",
        age: "23",
        arr:[1,2,3,4,5]
    },
    {
        id:"2",
        name : "Robannn",

        age: "20",
        arr:[5,10,1,5,6]
    }];
    res.send(info);
});

//starting with checking endpoints
exports.uploadFile = functions.https.onRequest((req,res)=>{
   


    if(req.method !== 'POST'){
        return res.status(500).json({
            message: 'not allowed!'
        })
    }
    res.status(200).json({
        message:'it worked!'
    });
})

//put request getting the body and return it

exports.upperCase = functions.https.onRequest((req,res)=>{
    if(req.method === 'PUT'){
        let result="";
        result += req.body;
        result = result.toUpperCase();
        return res.status(200).send(result);

    }
    
});

exports.multiply4 = functions.https.onRequest((req,res)=>{
    if(req.method === 'PUT'){
        let result = req.body;
        return res.status(200).send(`${result*4}`);
    }
});

exports.prettyPrint = functions.https.onRequest((req,res)=>{
    if(req.method==='PUT'){
        let result = JSON.stringify(req.body);
        return res.status(200).send(result); 
    }
})
