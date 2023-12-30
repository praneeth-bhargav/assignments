// Middleware for handling auth
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let {authorization:token}=req.headers;
    if(token.length<=7){
        return res.status(404).json("invalid token");
    }
    token=token.substring(7,token.length);
    try {
        jwt.verify(token,jwtPassword);
    } catch (error) {
       return res.status(404).json("invalid token");
    }
    next();
}

module.exports = adminMiddleware;