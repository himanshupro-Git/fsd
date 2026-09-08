// const checkroles = (...allowedroles) => {
//     (req, res, next)=>{
//         const role = req.headers.role
//         if(!role)
//         {
//             return res.status().json({
//                     message:"please enter valid role"
//                 })
//         }
//         if(allowedroles.includes(role))
//         {
//             next()
//         }
//         else{
//             return res.status(403).json({
//                 message:"You are not allowed to access this"
//             })
//         }
//     }
// }
// module.exports = checkroles;
const checkroles = (...allowedroles) => {
    return (req, res, next) => {
        const role = req.headers.role;

        if (!role) {
            return res.status(400).json({
                message: "Please enter a valid role"
            });
        }

        if (allowedroles.includes(role)) {
            next();
        } else {
            return res.status(403).json({
                message: "You are not allowed to access this"
            });
        }
    };
};

module.exports = checkroles;