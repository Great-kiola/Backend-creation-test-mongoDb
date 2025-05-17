import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    }, // String is shorthand for {type: String}
    author: 
    {
        type: String, 
        required: true
    },
    body: String,
    meta: {
        votes: Number,
        favs: Number
    },
}, {
    timestamps: true
}
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;