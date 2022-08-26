// dependencies
const express = require("express")
const {resolve} = require("path")

const apirouter = require("./apirouter")
const connect = require("../database/connect")
const getMetadata = require("./getMetadata")

function createServer () {
    const app = express()
    const db = connect()
    const metadata = getMetadata()

    // statics
    app.use(express.static(resolve(__dirname, "../../client/dist")))
    app.use(express.static(resolve(__dirname, "../../client/public")))

    // locals
    app.use((req, res, next) => {
        res.locals.metadata = metadata
        res.locals.db = db
        //add locals here
        next()
    })

    // api routes
    app.use("/api", apirouter)


    // non-api 404 => handled by client
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

    let port, httpserver

    function start () {
        port = process.env.PORT || 8080
        return new Promise((resolve, reject) => {
            httpserver = app.listen(port, err => {
                if (err) reject(err)
                console.log(
                    "! app " + (metadata.APP_NAME || "?")
                    + " v" + (metadata.APP_VERSION || "?")
                    + " listenning on port " + port
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