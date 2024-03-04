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
const loginUser = async (req, res) => {
    try {

        const {username, password} = req.body;
        const user = await User.findOne({ username }); // jaamesallan
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) return res.status(400).jsobn({ message: "Invalid username or password"});
        generateTokenAndSetCookies(user._id, res);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username

        })

    }catch (error) {
        res.status(500).json({message: error.message});
        console.log("Error inloginUser:", error.message);
    }
};

const logoutUser = (req, res) => {
    try {

    } catch (error) {
        res.cookie("jwt", "", { maxAge: 1});
        res.status(200)
        res.status(500).json({message: error.message});
        console.log("Error inloginUser:", error.message);

    }
};

export { signupUser, loginUser };