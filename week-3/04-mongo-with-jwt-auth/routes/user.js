const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const { z: zod } = require("zod");
const userMiddleware = require("../middleware/user");
const jwtPassword = "secret";
const jwt = require("jsonwebtoken");
const bodySchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
const courseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number(),
  imageLink: zod.string(),
  published: zod.boolean(),
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  if (bodySchema.safeParse(req.body).success) {
    const temp = await User.findOne({ username: username });
    if (temp) {
      return res.status(404).send(`username ${username} already exists`);
    } else {
      const user = new User(req.body);
      const saved_user = await user.save();
      return res
        .status(200)
        .send("succesfully created user with id " + saved_user._id);
    }
  }
  return res.status(422).send("invalid body");
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (bodySchema.safeParse(req.body).success) {
    const saved_user = await User.findOne({ username: username });
    if (saved_user.password === password) {
      const token = jwt.sign({ username }, jwtPassword);
      return res.status(200).json({ token: `Bearer ${token}` });
    } else {
      return res.status(401).send("invalid password");
    }
  }
  return res.status(422).send("invalid body");
  // Implement user signup logic
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  return res.status(200).json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  const saved_course = await Course.findOne({ _id: courseId });
  console.log(saved_course,saved_course._id,saved_course.title);
  let token = req.headers.authorization;
  token = token.substring(7, token.length - 1);
  const decoded = jwt.decode(token, jwtPassword);
//   console.log(decoded);
  try {
    const user = await User.findOne({ username: decoded.username });
    const extracted_user = await User.findOneAndUpdate(
      { _id: user._id }, // Your query to find the user
      {
        $push: {
          purchased: {
            _id: saved_course._id,
            title: saved_course.title,
          }
        },
      }
    ,{ new: true, runValidators: true });
    console.log(extracted_user);
    if (!extracted_user) {
      res.status(400).json({ message: "unable to find the course" });
    }
    return res.status(200).json({ message: "Course purchased Succesfully" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/purchasedCourses", userMiddleware, async(req, res) => {
  // Implement fetching purchased courses logic
  let token = req.headers.authorization;
  token = token.substring(7, token.length - 1);
  const decoded = jwt.decode(token, jwtPassword);
  const saved_user=await User.findOne({username:decoded.username});
  res.status(200).json(saved_user.purchased)
});
router.post("/reset",userMiddleware,async(req,res)=>{
  let token = req.headers.authorization;
  token = token.substring(7, token.length - 1);
  const decoded = jwt.decode(token, jwtPassword);
  const saved_user=await User.findOneAndUpdate({username:decoded.username},{"$set":{
    purchased:[]
  }});
  // saved_user
  res.send("done");
})
module.exports = router;
