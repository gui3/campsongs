import format from "./format.mjs"
import routes from "./routes.mjs"

/* mock data */
import songs from "./mocks/songs.json"

export const samples = {
    songs
}

export default async function mock (path) {
    try {
        const url = new URL(path, "https://fake-url.mock")
        const urlPathArray = url.pathname.split("/")
        let params
        const route = routes.find(rt => {
            params = {}
            let ix = 0
            let mockPathArray = rt.path.split("/")
            let name

            while (ix < mockPathArray.length) {
                name = mockPathArray[ix]
                const match = name.startsWith(":")
                ? (params[name.slice(1)] = urlPathArray[ix]) && true
                : name === urlPathArray[ix]

                ix++
                if (match) {
                    if (ix === urlPathArray.length) return true
                }
                else return false
            }
        })

        if (!route) {
            return format.error("route not found", {code: 404})
        }
        else if (!(route.mock instanceof Function)) {
            return format.error("mock route invalid", {code: 500})
        }

        params.get = function (key) {return params[key]}
        const req = {params, query: url.searchParams, url}
        const res = {}

        const data = await route.mock(samples, req, res)
        return format.data(data, route.type)
    }
    catch (error) {
        // console.error("mocking failed", error)
        if (path === "/api/DEAD_END") throw error
        return format.error(error, {code: 500})
    }
}