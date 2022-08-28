const express = require("express")
const { readdirSync } = require("fs")
const { resolve } = require("path")
const format = require("./format")

function createRoutes (router, routesPath) {
    const routefiles = readdirSync(routesPath)

    /* automatic api routes generation */
    routefiles.forEach(routefilename => {
        try {
            const routefilepath = resolve(routesPath, routefilename)
            const route = require(routefilepath)
            router[route.method || "get"](route.path, async (req, res) => {
                const data = await route.data(req, res)

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
}

module.exports = createRoutes