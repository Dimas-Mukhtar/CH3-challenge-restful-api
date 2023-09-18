const express = require("express")
const router = express.Router()
const carsControllers = require("../../controllers/carsControllers.js")

router.route("/")
    .get(carsControllers.pingSuccesfully)

router.route("/list-cars")
    .get(carsControllers.fetchAllCars)

router.route("/detail-car/:id")
    .get(carsControllers.fetchById)

router.route("/create-car")
    .post(carsControllers.createCar)

router.route("/car/:id")
    .put(carsControllers.editeCarById)

router.route("/car/:id")
    .delete(carsControllers.deleteCarById)


module.exports = router
