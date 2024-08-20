const mongoose = require('mongoose')

const {Schema, model} = mongoose

//expense model
const expenseSchema = new Schema({
    expenseDate: Date,/*{type: Date,required: true},*/
    amount: String, /*{type: Number,required: true},*/
    categoryid: Schema.Types.ObjectId,/*{type: Schema.Types.ObjectId,required: true,ref: 'Category'},*/
    description: String
}, {timestamps: true})

const Expense = model('Expense',expenseSchema)

module.exports = Expense

// const mongoose=require('mongoose')

// const{Schema,model}=mongoose
// const expenseSchema=new Schema({
//     expenseDate:{
//         type:Date,
//         required:true
//     },
//     amount:{
//         type:Number,
//         required:true
//     },
//     category:{
//         type:Schema.Types.ObjectId,
//         required:true,
//         //ref:category
//     },
//     description:{
//         type:String,
      


//     },
// })
// const Expense=model('Expense',expenseSchema)
 
// module.exports=Expense