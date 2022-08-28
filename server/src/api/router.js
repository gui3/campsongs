const express = require("express")
const { readdirSync } = require("fs")
const { resolve } = require("path")
const format = require("./format")
const createRoutes = require("./createRoutes")

const router = new express.Router()

const routeroot = resolve(__dirname, "./routes")
createRoutes(router, routeroot)

// api 404
router.use((req, res) => {
    res.status(404)
    res.json(format.error(
        "route /api" + req.url + " not found",
        {status: 404}
    ))
})

// api 500
router.use((req, res, next, err) => {
    if (err) {
        res.status(500)
        res.json(format.error(
            "server error",
            {status: 500}
        ))
    }
})

module.exports = router