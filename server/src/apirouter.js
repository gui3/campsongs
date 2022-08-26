const express = require("express")
const { readdirSync } = require("fs")
const { resolve } = require("path")

const router = new express.Router()

const routeroot = resolve(__dirname, "./api")
const routefiles = readdirSync(routeroot)

routefiles.forEach(routefilename => {
    try {
        const routefilepath = resolve(routeroot, routefilename)
        const route = require(routefilepath)
        router[route.method || "get"](route.path, route.handler)
    }
    catch (error) {
        console.log("! route " + routefilename + " could not be parsed")
        throw new Error(error)
    }
})

// api 404
router.use((req, res) => {
    res.status(404)
    res.json({
        error: "route api" + req.url + " not found",
        code: 404
    })
})

// api 500
router.use((req, res, next, err) => {
    if (err) {
        res.status(500)
        res.json({
            error: "server error",
            code: 500
        })
    }
})

module.exports = router