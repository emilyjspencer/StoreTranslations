const express = require('express');
const app = express();
const bodyParser= require('body-parser')
 
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