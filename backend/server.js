import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import Blog from "./model/blog.model.js";

dotenv.config();
const port = process.env.PORT
const app = express();

app.use(express.json())

app.post("api/blog", async (req, res) => {
    const blog = req.body;

    if (!blog.title || !blog.author || !blog.body) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newBlog = new Blog(blog)

    try {
        await newBlog.save()
        res.status(201).json({ success: true, data: newproduct })
    } catch (error) {
        console.log("Error in creating blog:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
})

app.listen(port, () => {
    connectDB();
    console.log(`App listening on port ${port}`)
})

