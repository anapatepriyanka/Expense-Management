const { reset } = require('nodemon')
const Category = require('../models/category-model')
const {validationResult} = require('express-validator')

const categoriesCtrl = {}
/*instead of creating an empty object we can directly add the properties to models.exports -- coz it is also an object
    modules.exports.list =(req,res) => {}
*/

categoriesCtrl.list=async(req,res)=>{
    try{
        const categories=await category.find()
        res.json(categories)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:'internal server Error'})
    }

}

//request handler -- for read operation
// categoriesCtrl.list = (req,res) => {
//     //Category.find().populate('categoryid')
//     Category.find()
//         .then((category)=>{
//             res.json(category)
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// }

//request handler -- for adding data into db(write operation)
categoriesCtrl.create=async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {body}=req
    const category=new Category(body)
    try{
        await category.save()
        res.json(category)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:'Internal server error'})
    }

}


// categoriesCtrl.create = (req,res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()})
//     }
//     const {body} = req //const data = req.body
//     const c1 = new Category(body)
//     //c1.name = body.name //data
//     c1.save()
//         .then((category) => {
//             res.json(category)
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// }

//request handler to delete the record
categoriesCtrl.destroy=async(req,res)=>{
    const id=req.params.id
    try{
        const category=await Category.findByIdAndDelete(id)
        res.json(category)
    }catch(err){
        console.log(err)
        reset.status(500).json({notice:'Internal server error'})
    }

}

// categoriesCtrl.destroy = (req,res) => {
//     const id = req.params.id
//     Category.findByIdAndDelete(id)
//         .then((cat)=>{
//             if(cat) {
//                 res.json(cat)
//             } else {
//                 res.status(404).json({error: 'record not found!'})
//             }
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// }


//request handler -- update operation
categoriesCtrl.update = async(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const id = req.params.id
    const {body} = req
    try{
        const category=await Category.findByIdAndUpdate(id,body,{new: true, runValidators: true})
        res.json(category)
    }catch(err){

            console.log(err)
            res.status(500).json({notice:'Internal server error'})
        }
    }

// categoriesCtrl.update = (req,res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()})
//     }
//     const id = req.params.id
//     const {body} = req
//     Category.findByIdAndUpdate(id,body,{new: true, runValidators: true})
//         .then((cat)=>{
//             res.json(cat)
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// }


module.exports = categoriesCtrl


// categoryCtrl.create=((req,res)=>{
//         const errors=validationResult(req)
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()})
//         }
//         const data=req.body
//         const c1=new Category()
//         c1.name=data.name
//         c1.save()
//         .then((category)=>{
//             res.json(category)
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
//     })

// categoryCtrl.update=((req,res)=>{
//     const errors=validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
//     const id=req.params.id
//     const body=req.body
//     Category.findByIdAndUpdate(id,body,{new:true,runvalidators:true})
//     .then((category)=>{
//         res.json(category)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// categoryCtrl.remove=((req,res)=>{
//     const id=req.params.id
//     Category.findByIdAndDelete(id)
//     .then((category)=>{
//         res.json(category)
        
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// module.exports=categoryCtrl