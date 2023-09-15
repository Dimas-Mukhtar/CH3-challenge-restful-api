const express = require("express")
const fs = require("fs")
const { fetchAllCars, fetchById, createCars, editeCarsById, deleteCarsById } = require("./utils/utils.js")

const app = express()
app.use(express.json())

app.listen(6000, ()=>{
    console.log("Server is running at https://localhost:6000")
})

// routes
app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Ping Succesfully"
    })
})

app.get("/list-cars", fetchAllCars)

app.get("/detail-cars/:id", fetchById)

app.post("/create-cars", createCars)

app.put("/cars/:id", editeCarsById)

app.delete("/cars/:id", deleteCarsById)