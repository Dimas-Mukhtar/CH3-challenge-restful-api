const express = require("express")
const router = express.Router()
const carsControllers = require("../../controllers/carsControllers.js")

router.route("/")
    .get(carsControllers.pingSuccesfully)

router.route("/cars")
    .get(carsControllers.fetchAllCars)

router.route("/cars/:id")
    .get(carsControllers.fetchById)

router.route("/cars")
    .post(carsControllers.createCar)

router.route("/cars/:id")
    .put(carsControllers.editeCarById)

router.route("/cars/:id")
    .delete(carsControllers.deleteCarById)


module.exports = router
