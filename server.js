const express = require("express")
const logger = require("./middleware/eventLog.js")

const app = express()
app.use(logger)
app.use(express.json())

app.use("/", require("./routes/api/cars.js"))

app.all("*", (req,res)=>{
    res.status(404).json({
        error: "404 halaman tidak ditemukan, please input the correct endpoint!"
    })
})

app.listen(6000, ()=>{
    console.log("Server is running at https://localhost:6000")
})