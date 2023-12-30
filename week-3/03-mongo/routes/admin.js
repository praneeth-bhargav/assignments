const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const admin=new Admin({username:username,password:password});
    try{
        await admin.save();
    }catch(err){
        console.log(err.message);
    }
    res.send("admin saved to the database")
    // console.log();
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink}=req.body;
    const course=new Course({title:title,description:description,price:price,imageLink:imageLink});
    try{
        const saved_course=await course.save();
        res.status(200).send({message:'Course created succesfully',courseId:saved_course._id})
    }catch(err){
        console.log(err.message);
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try {
        const courses=await Course.find();
        res.status(200).send(courses);
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;