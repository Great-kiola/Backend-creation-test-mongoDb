import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express(); 
const port = process.env.PORT

app.get("/", (req,res) => {
    console.log("here")
    res.send("hello")
})

app.get("/users", (req, res) => {
    res.send("Users list")
}) 

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

