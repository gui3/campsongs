// dependencies
const express = require("express")
const {resolve} = require("path")

const connect = require("./database/connect")
const test = require("./database/test")
const readConfig = require("./readConfig")

async function createServer () {
    /* es6 modules import */
    const { default: routes } 
    = await import("../../global/api/routes.mjs")
    const { default: format } 
    = await import("../../global/api/format.mjs")

    const app = express()
    const db = connect()
    const metadata = readConfig(resolve(
        __dirname,
        "../../METADATA.properties"
    ))
    
    app.use((req, res, next) => {
        console.log("> " + req.method + " " + req.url)
        next()
    })

    // auth token


    // statics
    app.use(express.static(resolve(__dirname, "../../client/dist")))
    app.use(express.static(resolve(__dirname, "../../client/public")))

    /* prevent browser to get favicon */
    app.get('/favicon.ico', (req, res) => res.status(204).end())

    // locals
    app.use((req, res, next) => {
        res.locals.metadata = metadata
        res.locals.db = db
        //add locals here
        next()
    })

    // api router
    const apiRouter = new express.Router()

    for (const route of routes) {
        if (!route.IS_MIDDLEWARE && !(route.data instanceof Function)) {
            console.log("! ignored route api" + route.method + " " + route.path)
            continue
        }

        /* to not declare useless async routes */
        const IS_ASYNC = route.data.constructor.name === "AsyncFunction"
        const formatThis = route.IS_ERROR ? format.error : format.data
        const status = route.status || 200
        const wrapper = IS_ASYNC
        ? async (req, res, next) => {
            try {
                const data = await route.data(req, res, next)
                res.status(status)
                res.json(formatThis(data, route.type, route.keys))
            }
            catch (error) {
                res.status(error.status || 500)
                res.json(format.error(error))
            }
        }
        : (req, res, next) => {
            try {
                const data = route.data(req, res, next)
                res.status(status)
                res.json(formatThis(data, route.type, route.keys))
            }
            catch (error) {
                res.status(error.status || 500)
                res.json(format.error(error))
            }
        }

        /* listen to route */
        const method = route.method || "all"
        if (route.path) {
            apiRouter[method.toLowerCase()](
                route.path,
                wrapper
            )
        }
        else {
            apiRouter[method.toLowerCase()](wrapper)
        }
        
        // console.log(
        //     "added route " 
        //     + (IS_ASYNC ? "async " : "") 
        //     + method + " " + route.path
        // )
    }
    
    // api 404
    apiRouter.use((req, res) => {
        res.status(404)
        res.json(format.error(
            "route " + req.url + " not found",
            {status: 404}
        ))
    })

    // api 500
    apiRouter.use((req, res, next, err) => {
        if (err) {
            res.status(500)
            res.json(format.error(
                "server error",
                {status: 500}
            ))
        }
    })

    app.use("/api", apiRouter)


    // non-api 404 => handled by client
    app.use((req, res, next) => {
        console.log("> turnover " + req.url)
        next()
    })
    app.use((req, res) => {
        res.sendFile(resolve(
            __dirname,
            "../../client/dist/index.html"
        ))
    })

    // errors
    app.use((req, res, next, err) => {
        if (err) console.error(err)
    })

    let httpserver
    const port = process.env.PORT || 8080

    async function start () {
        return new Promise((resolve, reject) => {
            httpserver = app.listen(port, err => {
                if (err) reject(err)
                console.log(
                    "! app " + (metadata.APP_NAME || "?")
                    + " v" + (metadata.APP_VERSION || "?")
                    + " listening on port " + port
                )

                resolve(httpserver)
            })
        })
    }

    async function stop() {
        try {
            await db.destroy()
            await httpserver.close()
        }
        catch (error) {
            throw new Error("could not close server properly")
        }
    }

    return {
        app,
        db,
        httpserver,
        port,
        start,
        stop
    }
}

module.exports = createServer