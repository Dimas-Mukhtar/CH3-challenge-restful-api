const dataCars = require("../models/cars.json")

const checkId = (req, res, next, val) => {
    const foundCarsData = dataCars.find((carsData) => {
        return carsData.id === val
    })
    if (!foundCarsData) {
        return res.status(404).json({
            status: `NOT FOUND! make sure the id ${val} is exist`,
            message:
                "this is an example one of the correct ID = 6e2bc663-5197-441a-957b-bc75e4a2da7c"
        })
    }
    next()
}

module.exports = checkId
