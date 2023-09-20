const express = require("express")
const router = express.Router()
const carsControllers = require("../../controllers/carsControllers.js")

router.route("/")
    .get(carsControllers.pingSuccesfully)

router.route("/cars")
    .get(carsControllers.fetchAllCars)
    .post(carsControllers.createCar)

router.route("/cars/:id")
    .get(carsControllers.fetchById)
    .put(carsControllers.editeCarById)
    .delete(carsControllers.deleteCarById)

module.exports = router
