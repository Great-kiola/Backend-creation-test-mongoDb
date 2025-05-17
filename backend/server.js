import express from "express"
const app = express();

const port = 5000;


app.get("/", (res,req) => {})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

