// environment
require("./environment")
require("dotenv").config()
console.log("! Running in " + process.env.NODE_ENV)

// dependancies
const createServer = require("./createServer")

createServer().start()
