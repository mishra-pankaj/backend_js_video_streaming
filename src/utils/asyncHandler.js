const asyncHandler = (requesthandeler) =>{
    (req,res,next) =>{
        Promise.resolve(requesthandeler(res,req,next)).catch((err)=> next(err))
    }
}

export{asyncHandler}



// 1 method 
// const asyncHandler = (fn) =>async (req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess: false,
//             message: err.message
//         })
//     }
// }