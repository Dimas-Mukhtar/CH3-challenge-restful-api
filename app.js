const express = require("express")
const logger = require("./middleware/eventLog.js")
const morgan = require("morgan")

const app = express()

// middleware
app.use(logger)
app.use(morgan("dev"))
app.use(express.json())

app.use((req, res, next) => {
    req.requestTime = new Date().toString()
    next()
})

app.use("/", require("./routes/carsRouter.js"))

app.all("*", (req, res) => {
    res.status(404).json({
        status: "404 halaman tidak ditemukan, please input the correct endpoint!"
    })
})

module.exports = app
