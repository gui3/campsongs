import { Router } from "express"
import { readdirSync } from "fs"
import { resolve } from "path"
import { error } from "./format"
import createRoutes from "./createRoutes"

const router = new Router()

const routeroot = resolve(__dirname, "./routes")
createRoutes(router, routeroot)

// api 404
router.use((req, res) => {
    res.status(404)
    res.json(error(
        "route /api" + req.url + " not found",
        {status: 404}
    ))
})

// api 500
router.use((req, res, next, err) => {
    if (err) {
        res.status(500)
        res.json(error(
            "server error",
            {status: 500}
        ))
    }
})

export default router