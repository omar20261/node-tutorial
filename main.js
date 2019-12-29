var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded())
var customers = [];

app.get('/',(req, res)=>{  
   res.send('<h1> Hello World 2 </h1>');  
});

app.get('/customers',(req, res)=>{  
   res.json(customers);  
});

app.post('/customers',(req, res)=>{  
   const { name,phone,email,country} = req.body;
   let newCustomer = {id:customers.length+1,name,phone,email,country}
   customers.push(newCustomer)
   res.json(newCustomer);
});

app.put('/customers/:id',(req, res)=>{  
   let id = req.params.id;
   const { name,phone,email,country} = req.body;
   let ind = customers.findIndex( x => x.id ==  id);
   if(ind > -1){
      let updatedCustomer = {id:ind+1,name,phone,email,country}
      customers.splice(ind,1,updatedCustomer)
      res.json({message:'customer successfully updated'});  
   }else{
      res.json({message:'customer not found'});  
   }
});

app.delete('/customers/:id',(req, res)=>{  
   let id = req.params.id;
   let ind = customers.findIndex( x => x.id ==  id);
   if(ind > -1){
      customers.splice(ind,1)
      res.json({message:'customer successfully deleted'});  
   }else{
      res.json({message:'customer not found'});  
   }
});


app.listen('3000',() => {  console.log('server started on port 3000'); });