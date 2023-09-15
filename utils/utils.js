const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require('uuid')
const dataCars = require("../data/cars.json")

const fetchAllCars = (req,res)=>{
    try {
        res.status(200).json({
            message: "Fetch all cars data succesfully",
            dataCars
        })
    } catch(error){
        res.status(400).json({
            error: "Something wrong!"
        })
    }
}

const fetchById = (req,res)=>{
    const id = req.params.id
    const foundCarsData = dataCars.find((carsData)=>{
        return carsData.id === id
    })
    if(!foundCarsData){
        res.status(400).json({
            error: "Something wrong! make sure the id correctly",
            solution: "this is an example one of the correct ID = 6e2bc663-5197-441a-957b-bc75e4a2da7c"
        })
    } else {
        res.status(200).json({
            message: "Fetch cars data succesfully",
            foundCarsData
        })
    }
}

const createCar = (req,res)=>{
    const create = req.body
    dataCars.unshift({
        ...create
    })
    const pathName = path.join(__dirname, "../data", "cars.json")
    fs.writeFile(pathName, JSON.stringify(dataCars), function(err){
        if(err){
            console.log(err)
        } else {
            res.status(200).json({
                message: "The data succesfully created!",
                create
            })
        }
    })
}

const editeCarById = (req,res)=>{
    const iddd = req.params.id
    const {
        plate, manufacture, model, image, rentPerDay,
        capacity, description, availableAt, transmission,
        available, type, year, options, specs   
    } = req.body

    const foundCarsData = dataCars.find((carsData)=>{
        return carsData.id === iddd
    })

    if(!foundCarsData){
        res.status(400).json({
            error: "Something wrong! make sure the id correctly",
            solution: "this is an example one of the correct ID = 6e2bc663-5197-441a-957b-bc75e4a2da7c"
        })
    }

    const filteredCars = dataCars.filter((cars => cars.id !== iddd))

    const carId = uuidv4()
    foundCarsData.id = carId
    foundCarsData.plate = plate
    foundCarsData.manufacture = manufacture
    foundCarsData.model = model
    foundCarsData.image = image
    foundCarsData.rentPerDay = rentPerDay
    foundCarsData.capacity = capacity
    foundCarsData.description = description
    foundCarsData.availableAt = availableAt
    foundCarsData.transmission = transmission
    foundCarsData.available = available
    foundCarsData.type = type
    foundCarsData.year = year
    foundCarsData.options = options
    foundCarsData.specs = specs
    
    filteredCars.unshift(foundCarsData)

    const pathName = path.join(__dirname, "../data", "cars.json")
    fs.writeFile(pathName, JSON.stringify(filteredCars), function(err){
        if(err){
            console.log(err)
        } else {
            res.status(200).json({
                message: "The data succesfully updated!",
                foundCarsData
            })
        }
    })
}

const deleteCarById = (req,res)=>{
    const id = req.params.id

    const deletedCars = dataCars.find((cars)=>{
        return cars.id === id
    })
    const foundCars = dataCars.filter((cars)=>{
        return cars.id !== id
    })

    const pathName = path.join(__dirname, "../data", "cars.json")
    fs.writeFile(pathName, JSON.stringify(foundCars), function(err){
        if(err){
            console.log(err)
        } else {
            res.status(200).json({
                message: "The data succesfully deleted!, to check it restart the server",
                deletedCars
            })
        }
    })
}

module.exports = {
    fetchAllCars,
    fetchById,
    createCar,
    editeCarById,
    deleteCarById
}