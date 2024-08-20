//validation
const expenseValidationSchema = {
    expenseDate: {
        notEmpty: {
            errorMessage: 'Date is required'
        },
        isDate: {
            errorMessage: 'The format of date must be yyyy-mm-dd'
        }
    },
    amount: {
        notEmpty: {
            errorMessage: 'Amount is required'
        },
        isNumeric: {
            errorMessage: 'Field should contain only numbers'
        }
    },
    categoryid: {
        notEmpty: {
            errorMessage: 'Category id is required'
        }
    }
}

module.exports = expenseValidationSchema

// const jwt=require('jsonwebtoken')

// const authenticateUser=(req,res,next)=>{
//     const token = req.headers['authorization']
//     if(token){
//         try{
//             const tokenData=jwt.verify(token,process.env.JWT_secret)
//             //console.log(tokenDate)
//             next()
//         }catch(e){
//             res.status(400).json(e)
//         }
//     }else{
//         res.status(400).json({error:'token is required'})
//     }
// }
// module.exports = authenticateUser