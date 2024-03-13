import User from "../models/userModel";

const createPost = async (req, res) => {
    try {
        const {postedBy,text,img} = req.body;

        if(!postedBy || !text) {
            return res.status(400).json({message: "postedby and text fields are required"})
        }

        const user
    } catch (err) {
        res.status(500).json({message: err.message });
        console.log(err)
    }
}

export { createPost };