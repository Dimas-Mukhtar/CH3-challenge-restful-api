const express = require("express")
const router = express.Router()
const carsControllers = require("../controllers/carsController.js")
const checkId = require("../middleware/checkId.js")
const checkBody = require("../middleware/checkBody.js")

router.param("id", checkId)

router.route("/").get(carsControllers.pingSuccesfully)
router.route("/cars").get(carsControllers.fetchAllCars).post(checkBody, carsControllers.createCar)
router
    .route("/cars/:id")
    .get(carsControllers.fetchById)
    .put(carsControllers.editeCarById)
    .delete(carsControllers.deleteCarById)

module.exports = router
