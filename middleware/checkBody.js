const checkBody = (req, res, next) => {
    if (!req.body.manufacture) {
        return res.status(400).json({
            status: "Bad request !",
            message:
                "manufacture are required !, so make sure add manufacture if you want to create data"
        })
    }
    next()
}

module.exports = checkBody
