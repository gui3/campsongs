// environment
import "dotenv/config"
import "./environment.mjs"
console.log("! Running in " + process.env.NODE_ENV)

// dependancies
import createServer from "./createServer.mjs"

createServer().start()
