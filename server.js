const express = require("express")
const { fetchAllCars, fetchById, createCar, editeCarById, deleteCarById } = require("./utils/utils.js")

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

app.get("/detail-car/:id", fetchById)

app.post("/create-car", createCar)

app.put("/car/:id", editeCarById)

app.delete("/car/:id", deleteCarById)