var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
var {AddItem,getItems,updateItem,deleteItem} = require("./customers/customers.controller")
var db = require('mongoose')
db.connect('mongodb+srv://omar:zBWusbyYPjOlBpia@cluster0-utyhh.mongodb.net/test?retryWrites=true&w=majority')
app.use(bodyParser.urlencoded())

app.get('/',(req, res)=>{  
   res.send('<h1> Hello World 2 </h1>');  
});

app.get('/customers',getItems);

app.post('/customers',AddItem);

app.put('/customers/:id',updateItem);

app.delete('/customers/:id',deleteItem);

app.listen('3000',() => {  console.log('server started on port 3000'); });