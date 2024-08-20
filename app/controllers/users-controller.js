//user - authentication
const jwt = require('jsonwebtoken')
const usersCtrl = {}

usersCtrl.login = (req,res) => {
    const {body} = req
    if(body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
        // res.json({
        //     notice: 'Successfully logged in!'
        // })
        const tokenData = {id : process.env.ID}
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '14d'}) //this token will expire in 14 days after which we need to login via credentials
        res.json({
            token: token
        })
    } else {
        res.status(401).json({
            notice: 'Invalid email/password!'
        })
    }
}

module.exports = usersCtrl


// const jwt = require('jsonwebtoken')//npm install jwt
// const usersCtrl={ }

// usersCtrl.login=(req,res)=>{
//     const body=req.body
//     if(body.email==process.env.EMAIL && body.password==process.env.PASSWORD){
//         const token=jwt.sign({id: process.env.ID},process.env.JWT_SECRET,)
//         res.json({token:token})//token-verify the user
//             //notice : 'successfully logged in'
// //generate a jwt (json web token) token and send the token to the frontend        
//     }else{
//         res.status(401).json({ //401-invalid,failed 
//             notice : 'invalid Credentials'
//         })
//     }
// }
// module.exports=usersCtrl