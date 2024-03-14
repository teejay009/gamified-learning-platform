import User from "../models/userModel.js";

const createPost = async (req, res) => {
    try {
        const {postedBy,text,img} = req.body;

        if(!postedBy || !text) {
            return res.status(400).json({message: "postedby and text fields are required"})
        }

        const user = await User.findById(postedBy);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        if(user._id.toString() !== req.user._id.toString()){
            return res.status(401).json({message: "Unauthorized to create post"})
        }
        const maxlenght = 500;
        if(text.lenght > maxlenght){
            return res.status(400).json({message: `Text must be less than ${maxlenght} characters`});
        }

        const newPost = new post({ postedBy, text, img });

        await newPost.save();
        res.status(201).json({ message: "Post created successfully", newPost });
        

    } catch (err) {
        res.status(500).json({message: err.message });
        console.log(err)
    }
};

export { createPost };