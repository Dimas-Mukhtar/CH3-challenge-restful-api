const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")
const { format } = require("date-fns")

const logEvent = async (messageReq, fileName) => {
    const dateTime = `${format(new Date(), "yyyy-MM-dd--HH:mm:ss")}`
    const fileValue = `Ada yang request pada: ${dateTime}\t informasi request: ${messageReq}\n`
    try {
        await fsPromises.appendFile(path.join(__dirname, "..", "logs", fileName), fileValue)
    } catch (err) {
        console.log(err)
    }
}

const logger = (req, res, next) => {
    logEvent(`url = ${req.url}, method = ${req.method}`, "userLogInformation.txt")
    next()
}

module.exports = logger
