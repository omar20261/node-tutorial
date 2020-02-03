var customerModel = require('./customers.model')

exports.getItems=function(req,res,next){
    customerModel.find({},(error,doc)=>{
        res.json(doc)
    })
}
exports.AddItem=function(req,res,next){
    const { name,phone,email,country} = req.body;
    let newCustomer = new customerModel({name,phone,email,country})
    newCustomer.save((error,doc)=>{
        if(error){ res.status(400).json({message:'something went wrong',error}); return;}
        res.json(doc)
    })
}
exports.updateItem=function(req,res,next){
    let id = req.params.id;
    const { name,phone,email,country} = req.body;
    customerModel.findOneAndUpdate({_id:id},{
        $set:{name,phone,email,country}
    },{new:true}).exec((error,doc)=>{
        if(error){ res.status(400).json({message:'something went wrong',error}); return;}
        if(!doc){ res.status(404).json({message:'customer not found'}); return;}
        res.json(doc)
    })
}
exports.deleteItem=function(req,res,next){
    let id = req.params.id;
    customerModel.findOneAndRemove({_id:id},(error,doc)=>{
        if(error){ res.status(400).json({message:'something went wrong',error}); return;}
        if(!doc){ res.status(404).json({message:'customer not found'}); return;}
        res.json({message:'customer successfully deleted'})
    })
}