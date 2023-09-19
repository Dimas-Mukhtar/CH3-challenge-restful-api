const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require('uuid')
const dataCars = require("../model/cars.json")

const pingSuccesfully = (req,res)=>{
    res.status(200).json({
        status: "success",
        message: "Ping Succesfully"
    })
}

const fetchAllCars = (req,res)=>{
    try {
        res.status(200).json({
            status: "success",
            message: "Fetch all cars data succesfully",
            data: {
                dataCars
            }
        })
    } catch(error){
        res.status(404).json({
            status: "NOT FOUND!"
        })
    }
}

const fetchById = (req,res)=>{
    const id = req.params.id
    const foundCarsData = dataCars.find((carsData)=>{
        return carsData.id === id
    })
    if(!foundCarsData){
        return res.status(404).json({
            status: "NOT FOUND! make sure the id correctly",
            solution: "this is an example one of the correct ID = 6e2bc663-5197-441a-957b-bc75e4a2da7c"
        })
    } else {
        res.status(200).json({
            status: "success",
            message: `Fetch car by id ${id} succesfully`,
            data: {
                car: foundCarsData
            }
        })
    }
}

const createCar = (req,res)=>{
    const create = req.body
    dataCars.unshift({
        ...create
    })
    const pathName = path.join(__dirname, "../model", "cars.json")
    fs.writeFile(pathName, JSON.stringify(dataCars), function(err){
        if(err){
            console.log(err)
        } else {
            res.status(200).json({
                status: "success",
                message: "The data succesfully created!",
                data: {
                    car: create
                }
            })
        }
    })
}

const editeCarById = (req,res)=>{
    const iddd = req.params.id

    const foundCarsData = dataCars.findIndex((carsData)=>{
        return carsData.id === iddd
    })

    if(foundCarsData === -1){
        return res.status(404).json({
            status: "NOT FOUND! make sure the id correctly",
            solution: "this is an example one of the correct ID = 6e2bc663-5197-441a-957b-bc75e4a2da7c"
        })
    }

    dataCars[foundCarsData] = {...dataCars[foundCarsData], ...req.body}

    const pathName = path.join(__dirname, "../model", "cars.json")
    fs.writeFile(pathName, JSON.stringify(dataCars), function(err){
        if(err){
            console.log(err)
        } else {
            res.status(200).json({
                status: "success",
                message: `The data with id ${iddd} succesfully updated!`,
                data: {
                    car: dataCars[foundCarsData]
                }
            })
        }
    })
}

const deleteCarById = (req,res)=>{
    const id = req.params.id

    const foundCarsData = dataCars.findIndex((carsData)=>{
        return carsData.id === id
    })

    if(foundCarsData === -1){
        return res.status(404).json({
            status: "NOT FOUND! make sure the id correctly",
            solution: "this is an example one of the correct ID = 6e2bc663-5197-441a-957b-bc75e4a2da7c"
        })
    }

    dataCars.splice(foundCarsData, 1)

    const pathName = path.join(__dirname, "../model", "cars.json")
    fs.writeFile(pathName, JSON.stringify(dataCars), function(err){
        if(err){
            console.log(err)
        } else {
            res.status(200).json({
                status: "success",
                message: `The data with id ${id} succesfully deleted!, to check it restart the server`,
                data: null
            })
        }
    })
}

module.exports = {
    pingSuccesfully,
    fetchAllCars,
    fetchById,
    createCar,
    editeCarById,
    deleteCarById
}