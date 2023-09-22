const fs = require("fs")
const path = require("path")
const dataCars = require("../models/cars.json")

const pingSuccesfully = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Ping Succesfully"
    })
}

const fetchAllCars = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Fetch all cars data succesfully",
        data: {
            dataCars
        }
    })
}

const fetchById = (req, res) => {
    const id = req.params.id
    const foundCarsData = dataCars.find((carsData) => {
        return carsData.id === id
    })
    res.status(200).json({
        status: "success",
        message: `Fetch car by id ${id} succesfully`,
        data: {
            car: foundCarsData
        }
    })
}

const createCar = (req, res) => {
    const create = req.body
    dataCars.unshift({
        ...create
    })
    const pathName = path.join(__dirname, "../models", "cars.json")
    fs.writeFile(pathName, JSON.stringify(dataCars), function (err) {
        if (err) {
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

const editeCarById = (req, res) => {
    const iddd = req.params.id

    const foundCarsData = dataCars.findIndex((carsData) => {
        return carsData.id === iddd
    })
    dataCars[foundCarsData] = { ...dataCars[foundCarsData], ...req.body }

    const pathName = path.join(__dirname, "../models", "cars.json")
    fs.writeFile(pathName, JSON.stringify(dataCars), function (err) {
        if (err) {
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

const deleteCarById = (req, res) => {
    const id = req.params.id

    const foundCarsData = dataCars.findIndex((carsData) => {
        return carsData.id === id
    })
    dataCars.splice(foundCarsData, 1)

    const pathName = path.join(__dirname, "../models", "cars.json")
    fs.writeFile(pathName, JSON.stringify(dataCars), function (err) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                status: "success",
                message: `The data with id ${id} succesfully deleted!`,
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
