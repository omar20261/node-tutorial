var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
    const cors = require('cors');
    const path = require('path');


var {AddItem,getItems,updateItem,deleteItem} = require("./customers/customers.controller")
var db = require('mongoose')
db.connect('mongodb+srv://omar:zBWusbyYPjOlBpia@cluster0-utyhh.mongodb.net/test?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json({limit: '50mb'}));


app.use(cors());

/* app.get('/',(req, res)=>{  
   res.send('<h1> Hello World 2 </h1>');  
 });*/

app.get('/customers',getItems);

app.post('/customers',AddItem);

app.put('/customers/:id',updateItem);

app.delete('/customers/:id',deleteItem);

/*------ front-end / Set Static Folder-------*/
app.use(express.static(path.join(__dirname,'public')));
app.get('*',(req,res) => { res.sendFile(path.join(__dirname,'public/index.html')) });
/*-----------------------------*/
app.listen(process.env.PORT || '3000',() => {  console.log('server started on port 3000'); });
