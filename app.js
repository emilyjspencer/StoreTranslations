const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
 
const connection = "mongodb+srv://emily:mongo@cluster0-5zjjm.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(connection, 
    { useUnifiedTopology: true })
  .then(client => {
    console.log('Successfully connected to Database')
    const db = client.db('translations')
  })
  .catch(error => console.error(error))


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')   
})

app.post('/words', (req, res) => {
  console.log(req.body)
})

app.listen(5000, function() {
    console.log('listening on 5000')
})