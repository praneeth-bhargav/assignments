const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Admin, Course}=require("../db")
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password
    let x=await User.findOne({username:`${username}`})
    if(!x){
       const entity=new User({username:`${username}`,password:`${password}`});
       await entity.save()
       res.status(200).json({message:"User created successfully"});
    }else{
        res.status(201).json(x)
    }
    // console.log(x);
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try {
        const courses=await Course.find();
        res.status(200).send(courses);
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username=req.headers.username;

    try {
        await User.findOneAndUpdate({username:username},{$push:{
            purchased:req.params.courseId
        }});
    } catch (error) {
        console.log(error.message);
    }
    
    const user=await User.findOne({username:`${username}`});
    res.status(200).json({ message: 'Course purchased successfully',object: user});
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    try {
        const db_user=await User.findOne({username:username});
        // console.log(db_user.purchased);
        const courses=await Course.find({_id:{$in:db_user.purchased}})
        res.status(200).json(courses);
    } catch (error) {
        console.log(error.message);
    }
   res.status(500);
});

module.exports = router