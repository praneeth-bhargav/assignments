const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let {authorization:token}=req.headers;
    if(token.length<=7){
        return res.status(404).json("invalid token");
    }
    token=token.substring(7,token.length);
    try {
        jwt.verify(token,jwtPassword);
    } catch (error) {
        res.status(404).json("invalid token");
        // console.log(error);
    }
    next();
}

module.exports = userMiddleware;