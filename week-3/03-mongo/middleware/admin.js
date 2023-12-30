// Middleware for handling auth
const { Admin } = require('../db');
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    const user= await Admin.findOne({username:`${username}`});
    if(user && user.password===password){
        next();
        return;
    }
    res.status(404).json("invalid credentials");
}

module.exports = adminMiddleware;