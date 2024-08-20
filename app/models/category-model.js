const mongoose = require('mongoose')

const {Schema , model} = mongoose
//creating schema --> holds the fields we need
const catergoriesSchema = new Schema({
    /*name: {
        type: String,
        required: true
    }*/
//using express-validator
    name: String
},{timestamps: true})

//creating model --> to create objects
const Category = model('Category',catergoriesSchema)

module.exports = Category

// const mongoose=require('mongoose')

// const {Schema,model}=mongoose
// const categoryschema=new Schema({
//     name:{
//         type:String,
//         required:true
//     }
// })
// const Category=model('Category',categoryschema)

// module.exports=Category