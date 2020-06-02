const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
 
const connection = "mongodb+srv://emily:mongo@cluster0-5zjjm.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(connection, 
    { useUnifiedTopology: true })
  .then(client => {

    app.use(bodyParser.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')   
    })
    
    app.post('/words', (req, res) => {
      translations.insertOne(req.body)
        .then(result => {
          console.log(result)
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
    
    app.listen(5000, function() {
        console.log('listening on 5000')
    })
    console.log('Successfully connected to Database')
    const db = client.db('translations')
    const translations = db.collection('translations')
  })
  .catch(error => console.error(error))


