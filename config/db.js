const mongoose=require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/expense-app')//connection between backend to database       
        .then(()=>{
             console.log('connected to db')
    })
        .catch((err)=>{
            console.log(err)//error in db connection
            console.log('error connecting to db')
    })
}
module.exports=configureDB