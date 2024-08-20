const categoriesValidationSchema = {
    name: {
        notEmpty: {
            errorMessage: 'Name of category is required'
        },
        isAlpha: {
            errorMessage: 'Name should contain only alphabets'
        }
    }
}

module.exports = categoriesValidationSchema


// const categoryValidationSchema={
//     name:{
//         notEmpty:{
//             errorMessage:'name is required'
//         }
//     }
// }
// module.exports=categoryValidationSchema
