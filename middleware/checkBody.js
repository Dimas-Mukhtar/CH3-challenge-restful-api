const checkBody = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({
            status: "Bad request !",
            message: "id are required !, so make sure add id if you want to create data"
        })
    }
    next()
}

module.exports = checkBody
