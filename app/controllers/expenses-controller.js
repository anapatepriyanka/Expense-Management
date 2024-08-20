const Expense = require('../models/expense-model.js')
const {validationResult} = require('express-validator')

const expenseCtrl = {}

//request -- list all expenses
expenseCtrl.list=async(req,res)=>{
    try{
        const expenses=await Expense.find()
        res.json(expenses)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:'internal server Error'})
    }

}
// expenseCtrl.list = (req,res) => {
//     Expense.find()
//         .then((exp) => {
//             res.json(exp)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

//request -- create expense
expenseCtrl.create=async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {body}=req
    const expense=new Expense(body)
    try{
        await expense.save()
        res.json(expense)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:'Internal server error'})
    }

}

// expenseCtrl.create = (req,res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()})
//     }
//     const {body} = req
//     const e1 = new Expense(body)
//     e1.save()
//         .then((exp) => {
//             res.json(exp)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

//update expense
expenseCtrl.update = async(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const id = req.params.id
    const {body} = req
    try{
        const expense=await Expense.findByIdAndUpdate(id,body,{new: true, runValidators: true})
        res.json(expense)
    }catch(err){

            console.log(err)
            res.status(500).json({notice:'Internal server error'})
        }
    }

// expenseCtrl.update = (req,res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()})
//     }
//     const id = req.params.id
//     const {body} = req
//     Expense.findByIdAndUpdate(id,body,{new: true, runValidators: true})
//         .then((exp) => {
//             res.json(exp)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

//delete expense
expenseCtrl.destroy=async(req,res)=>{
    const id=req.params.id
    try{
        const expense=await Expense.findByIdAndDelete(id)
        res.json(expense)
    }catch(err){
        console.log(err)
        reset.status(500).json({notice:'Internal server error'})
    }

}

// expenseCtrl.destroy = (req,res) => {
//     const id = req.params.id
//     Expense.findByIdAndDelete(id)
//         .then((exp) => {
//             res.json(exp)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }


module.exports = expenseCtrl



// const { validationResult } = require('express-validator')
// const Expense=require('../expense-model')

// const expenseCtrl={}

// expenseCtrl.list=((req,res)=>{
//     Expense.find()
//     .then((expenses)=>{
//         res.json(expenses)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// expenseCtrl.create=((req,res)=>{
//     const errors=validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
//     const body=req.body
//     const c1=new Expense(body)
//     c1.save()
//     .then((expense)=>{
//         res.json(expense)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })

// })

// expenseCtrl.update=(req,res)=>{
//     const errors=validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
//     const id=req.params.id
//     const body=req.body
//     Expense.findByIdAndUpdate(id,body,{new:true,runValidators:true})
//     .then((expense)=>{
//         res.json(expense)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })

// }
// expenseCtrl.remove=(req,res)=>{
//     const id=req.params.id
//     Expense.findByIdAndDelete(id)
//     .then((expense)=>{
//         res.json(expense)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })

// }

// module.exports=expenseCtrl
