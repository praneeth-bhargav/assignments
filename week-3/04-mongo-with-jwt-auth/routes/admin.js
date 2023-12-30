const { Router } = require("express");
const { z : zod } = require("zod");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
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
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  if (bodySchema.safeParse(req.body).success) {
    const temp = await Admin.findOne({ username: username });
    if (temp) {
      return res.status(404).send(`username ${username} already exists`);
    } else {
      const admin = new Admin(req.body);
      const saved_user = await admin.save();
      return res
        .status(200)
        .send("succesfully created admin with id " + saved_user._id);
    }
  }
  return res.status(422).send("invalid body");
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (bodySchema.safeParse(req.body).success) {
    const saved_user = await Admin.findOne({ username: username });
    if (saved_user.password === password) {
      const token = jwt.sign({ username }, jwtPassword);
      return res.status(200).json({ token: `Bearer ${token}` });
    } else {
      return res.status(401).send("invalid password");
    }
  }
  return res.status(422).send("invalid body");
  // Implement admin signup logic
});

router.post("/courses", adminMiddleware, async(req, res) => {
  // Implement course creation logic
  if(courseSchema.safeParse(req.body).success){
    const course=new Course(req.body);
    const saved_course=await course.save();
    return res.status(200).json({message:'Course Created Succesfully',courseId:saved_course._id});
  }
  return res.status(422).send("invalid body");
});

router.get("/courses", adminMiddleware, async(req, res) => {
  // Implement fetching all courses logic
  const courses=await Course.find();
  return res.status(200).json(courses);
});

module.exports = router;
