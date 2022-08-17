const express = require('express')
const app = express()



app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userIwas"]})
    res.send("Hello there, General Kenobi")
})

const houseRouter = require("./routers/houses")

app.use('/houses', houseRouter)

app.listen(5000, () => {console.log("Server started on port 5000")})