import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/helpers/generateTokenAndSetCookie.js";

// signUP user
const signupUser = async (req, res) => {
    try {
        const {name,email,username,password} = req.body;
        const user = await User.findOne({$or:[{email},{username}]});

        if(user) {
            return res.status(400).json({message: "user already exists:"});
    }

    const salt = await bcrypt.gensalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
        name,
        email,
        username,
        password: hashedPassword,
    });
    await newUser.save();

    if(newUser){


        generateTokenAndSetCookies(newUser._id, res);
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,

        })
    } else {
        res.status(400).json({message: "Invalid user data"})
    }

} catch (err) {
        res.status(500).json({ message: err.message})
        console.log("Error in signupUser: ", err.message)
}
};
const loginUser = asynnc (req, res) => {
    try {

    }catch (error) {
        res.status(500).json({message: error.message});
        console.log("Error inloginUser:", error.message);
    }

};

export { signupUser, loginUser };