const path = "/songs"
const method = "get"

async function data (req, res) {
    const {db} = res.locals

    const songs = await db("songs")
    return songs
}

export default {
    method,
    path,
    data
}