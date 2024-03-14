import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Text: {
        type: String,
        nextLength:500
    },
    img:{
        type: String,
    },
    likes:{
        // array of user id;
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: [],
        
    },
    replies:[
        {
            userId:{
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true,
            },
            text:{
                type: String,
                required: true,

            },
            UserProfilePic:{
                type:String,
            },
            username:{
                type:true,
            }
        }
    ]

}, { 
    timestamps: true
})

const Post = mongoose.model('Post', postSchema);

export default post;