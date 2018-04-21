/**
 * FIREBASE - CLOUD FUNCTIONS - NODE.JS
 * 
 * COMANDO PARA EXECUTAR a SIMULAÇAO DO CLOUD FUNCTION LOCAL: 
 * sudo firebase serve --only functions
 */


const functions = require('firebase-functions')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const request = require('request-promise');
const parse = require('xml2js').parseString;

const cToken = 'CC1E598E13D14012A92FA0EABF0B6E9D';
const cEmail = 'haroldbarros@gmail.com'

//url de confirmaçao da transaçao para redirecionamento 
const cCheckoutUrl = 'https://pagseguro.uol.com.br/v2/checkout/payment.html?code=';

 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))



app.get('/',(req,res) => {
    res.send('BoraAjudar Server ')
})



app.post('/donate',(req,res) => {
 
    
    //realiza o requenst para criar uma tansaçao no pagseguro
    request({
        uri:'https://ws.pagseguro.uol.com.br/v2/checkout',
        method:'POST',
        form:{
            token:cToken,
            email:cEmail,
            currency: 'BRL',
            itemId1: 'idCampanha',
            itemDescription1:'doação',
            itemQuantity1:'1',
            itemAmount1:'1.00'
        },
        headers:{
            'content-Type': 'application/x-www-urlencoded; charset=ISO-8859-1'
        }
    
    })
    .then( data => {
        console.log('pagseguro-ok');
        //converte o retorno de xml para json 
        parse(data,(err,json) => {
            res.send(
                {
                    //url de confirmaçao da transaçao para redirecionamento 
                    url: cCheckoutUrl+json.checkout.code[0]
                });    
        });
    });
    
    //

})

exports.api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
