
var express = require("express");
var path = require("path");
var app = express();
var morgan = require('morgan')
var cors = require('cors')

const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var listener = app.listen(8351, function () {
  console.log("Listening on port " + listener.address().port);
});


const { text } = require('express');

const detector = require('./detectText.js');
const { requirePropFactory } = require("@material-ui/core");
const url = 'mongodb://localhost:27017';
const dbName = 'Notes';

function createAlert(msg) {
return `
<script>
alert("${msg}")
</script>
`}

morgan('dev')

app.post('/api/v1/post/searchDb',async(req,res) => {
  let myArr = []

  var data = ({
    email: req.body.email,
    description : req.body.description
  });  
  console.log(data)
  MongoClient.connect(url, function (err, client) {
    if(err) throw err;
     const db = client.db(dbName);
     const collection = db.collection('note');

     if (err) throw err;
     collection.find({},{"email":data.email, "description":data.description }).toArray(function(err, result) {
       if (err) throw err;
   
       result.forEach(element => {
          if(element.email === data.email && element.description.includes(data.description)){
            myArr.push(element.url)
          }
        
       })  

       return res.status(200).json(myArr);
     });
     client.close();   
});

//return res.status(201).json(myArr.length == 0 ? "null":myArr)
 
});






app.post('/api/v1/post/imageUpload', async (req, res) => {
  
  var data = ({
    email: req.body.email,
    description : ' ',
    url : `https://ucarecdn.com/${req.body.uuid}/default.png`
  });  
  detector.getText(`https://ucarecdn.com/${req.body.uuid}/default.png`).then((value) => {
    data.description=value;
    MongoClient.connect(url, function (err, client) {
    
      if(err) throw err;
       const db = client.db(dbName);
       const collection = db.collection('note');
       collection.insertOne(data,function(err,res){
         if(err) throw err;
         console.log(data);
       })
       client.close();
       return res.status(200).json("success");
   
 });
  });

  
})