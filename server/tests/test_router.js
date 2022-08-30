const express = require("express")

const app = express()

app.use((req, res, next) => console.log(req.url) || next())

app.get("/", (req, res) => res.send("hello"))

const router = express.Router()

const sayHello = async (req, res) => res.send("hello")

router["get"]("/hello", sayHello)

app.use("/api", router)

app.listen(8080, _ => console.log("listenning"))