const mongoose = require('mongoose');

const MySchema = mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:Number},
    email:{type:String,required:true},
    country:{type:String},
    active:{type:Boolean},
},{timestamps: true});

const CustomerModule = module.exports = mongoose.model("customers",MySchema);
