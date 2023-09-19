const express = require("express")
const logger = require("./middleware/eventLog.js")
const PORT = process.env.PORT || 8000

const app = express()
app.use(logger)
app.use(express.json())

app.use("/", require("./routes/api/cars.js"))

app.all("*", (req,res)=>{
    res.status(404).json({
        status: "404 halaman tidak ditemukan, please input the correct endpoint!"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})