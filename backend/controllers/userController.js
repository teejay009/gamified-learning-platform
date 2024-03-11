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

    
        res.cookie("jwt", "", { maxAge: 1});
        res.status(200).json({ message: "User logged out successfully" });
    } catch (err) {

        res.status(500).json({ message: err.message});
        console.log("Error in signupUser: ", err.message);

    }
};

const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userTomodify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);
        if(id === req.user._id) return res.status(400).json({ message: "You cannot follow/unfollow your self" });
        if(!userTomodify || !currentUser) return res.status(400).json({ message: "User not found" });

        const isFollowing = currentUser.following.includes(id);

        if (isFollowing) {
            // unfollow user
            // Modify current User following, modify followers of userToModify
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id} });
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            res.status(200).json({ message: " User unfollowed successfully"});
        } else {
            // follow user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id} });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id} });
            res.status(200).json({ message: " User followed successfu "});

            
        }


    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in signupUser: ", err.message);
    }
};

export { signupUser, loginUser, logoutUser, followUnfollowUser };