const functions = require('firebase-functions')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

app.get('/',(req,res) => {
    res.send('BoraAjudar Server ')
})

app.post('/donate',(req,res) => {
    res.send(req.body)
})

exports.api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
