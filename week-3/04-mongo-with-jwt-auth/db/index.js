const mongoose = require('mongoose');

// Connect to MongoDB
try {
    mongoose.connect('mongodb+srv://rasikaraja695:lUWK2RAoREMl8Ak7@cluster0.guxiqeg.mongodb.net/Hello');
} catch (error) {
    console.log(error);
}

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    purchased:{
        type:[{
            _id:mongoose.Schema.Types.ObjectId,
            title:String
        }],
        default:[]
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number
    },
    imageLink:String,
    published:Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}