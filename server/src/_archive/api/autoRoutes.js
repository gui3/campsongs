const express = require("express")
const { readdirSync } = require("fs")
const { resolve } = require("path")
const format = require("./format")

function autoRoutes (router, routesPath) {
    const routefiles = readdirSync(routesPath)

    /* automatic api routes generation */
    routefiles.forEach(routefilename => {
        try {
            const routefilepath = resolve(routesPath, routefilename)
            const route = require(routefilepath)
            console.log("create route", route)
            router[route.method || "get"](route.path, async function (req, res, next, err) {
                console.log("use route", route)
                const data = await route.data(req, res, next, err)

                res.status(200)
                res.json(format.data(data, {
                    valid: true,
                    status: 200,
                    type: route.type
                }))
            })
        }
        catch (error) {
            console.log("! route " + routefilename + " could not be parsed")
            throw new Error(error)
        }
    })
    return router
}

module.exports = autoRoutes