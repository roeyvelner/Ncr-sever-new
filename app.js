

////////////////// old one  /////////////////////////////////////
const express = require('express');
const app =express();

var flag = false;

app.get('/', (req,res)=>{
    flag = ! flag;
    res.set({'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://ncr-raanana.s3-website.us-east-2.amazonaws.com'})
    
    res.send(JSON.stringify({ ans: flag }));
});

app.get('/changeFlag', (req,res)=>{
    //res.header(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://ncr-raanana.s3-website.us-east-2.amazonaws.com'});
    res.set({'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://ncr-raanana.s3-website.us-east-2.amazonaws.com'})
    res.send(JSON.stringify({ ans: flag }));
});

const port = process.env.port || 8080;
app.listen(port, ()=>{
    console.log("Hello!!")
});

//






// ///  WebSocket with express server/////
// var WebSocketServer = require('websocket').server;
// var express         = require('express');
// var app             = express();
// var server          = app.listen(8080);
// var wsServer        = new WebSocketServer({ httpServer : server });

// // this will make Express serve your static files
// app.use(express.static(__dirname + '/public'));

// app.get('/', (req,res)=>{
//     res.send("Welcome");
// });


// // the rest of your code
// wsServer.on('request', function(r) {
//     var connection = request.accept('echo-protocol', request.origin);
//     console.log((new Date()) + ' Connection accepted.');
//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log('Received Message: ' + message.utf8Data);
//             connection.sendUTF(message.utf8Data);
//         }
//         else if (message.type === 'binary') {
//             console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
//             connection.sendBytes(message.binaryData);
//         }
//     });
//     connection.on('close', function(reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//     });
// });


// //////////////////// webSocket  first   Try  /////////////////////////////////////
// const WebSocket = require('ws')
// var http = require('http');
// var url = require("url");


// console.log("before open webSocket");

// const wss = new WebSocket.Server({ port: 8080 })

// console.log("after open webSocket");

// wss.on('connection', ws => {

//     console.log("has connection ");
//     http.createServer(function (req, res) {
//         console.log("got request " + i);
//         i++;
    
//         var parsedUrl = url.parse(req.url, true); // true to get query as object
//       var queryAsObject = parsedUrl.query;
    
//        console.log(JSON.stringify(queryAsObject));
//     //   console.log("party= == " + queryAsObject.party);
//         // res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'});
//         res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://ncr-raanana.s3-website.us-east-2.amazonaws.com'});
//         if (!isEmpty(queryAsObject)){
//             var isTrueSet = (queryAsObject.party === 'true');
//             flag =isTrueSet;
//         }
//         if (isTrueSet)
//             ws.send("תחילת מכירה");
//         else
//             ws.send("סיום מכירה");
//         res.end(JSON.stringify({ ans: flag }));
//     }).listen(8083);

//     console.log("start http server on 8080");



// //   ws.on('message', message => {
// //     console.log(`Received message => ${message}`)

// //     if (message === 'Start Sale'){

// //     }
// //   })

// /**
// //   setInterval(()=>{
// //     var num = Math.floor(Math.random() * 10);  
// //     switch (num){
// //         case 1:
// //             ws.send('שלום אלי');
// //             break;
// //         case 2:
// //             ws.send('שלום רועי');
// //             break;
            
// //         case 3:
// //             ws.send('שלום בובה');
// //             break;
// //         case 4:
// //             ws.send('שלום משה');
// //             break;

// //         case 5:
// //             ws.send('שלום איתי');
// //             break;
// //         case 6:
// //             ws.send('שלום אסף');
// //             break;
// //         default:
// //     }
// //   },10000)


//   ws.send('ho!')

// */
// })





// //////////////////// new one  /////////////////////////////////////
// var http = require('http');
// var url = require("url");

// var flag = false;
// var i =1;
// // setTimeout(()=>{
// //     flag = true;
// // },10000)
// http.createServer(function (req, res) {
//     console.log("got request " + i);
//     i++;

//     var parsedUrl = url.parse(req.url, true); // true to get query as object
//   var queryAsObject = parsedUrl.query;

//    console.log(JSON.stringify(queryAsObject));
// //   console.log("party= == " + queryAsObject.party);
//     // res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'});
//     res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://ncr-raanana.s3-website.us-east-2.amazonaws.com'});
//     // if (!isEmpty(queryAsObject)){
//     //     var isTrueSet = (queryAsObject.party === 'true');
//     //     flag =isTrueSet;
//     // }
//     flag = !flag;
//     res.end(JSON.stringify({ ans: flag }));
// }).listen(8080);
// console.log("server is listening");


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}