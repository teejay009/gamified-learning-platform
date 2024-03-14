import Post from "../models/postModel.js";
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

        const newPost = new Post({ postedBy, text, img });

        await newPost.save();
        res.status(201).json({ message: "Post created successfully", newPost });
        

    } catch (err) {
        res.status(500).json({message: err.message });
        console.log(err)
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({message: "No post found"});
        }

        res.status(200).json({ post });
    } catch (err) {
        res.status(500).json({message: err.message});

    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "No post found" });
        }
        if (post.posteedBy.toString() === req.user._id.toString()) {
            return res.status(401).json({ message: "unauthorized to delete post" });
        }

        await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Post deleted successfully" });
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};
const likeUnlikePost = async (req, res, next) => {
    try {
        const {id:postId} = req.params;
        const userId = req.user._id;

        const post = await post.findById(postId);
        if(!post) {
            return res.status(404).json({message: "Post not found"});
        }
        const userLikedPost = post.likes.includes(userId);
        if(userLikedPost){
// unlike post
await Post.updateOne({_id:postedId}, {$pull: {likes: userId}})
res.status(200).json({message: "Post unliked successfully"});
        } else{
            //like post
            post.likes.push(userId);
            await post.save();
            res.status(200).json({message: "Post liked successfully"});

        }

    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

export { createPost, getPost, deletePost, likeUnlikePost, replyToPost };