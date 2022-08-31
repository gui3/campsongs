const path = "/songs"
const method = "get"
const type = "SONGS"

async function data (req, res) {
    const {db} = res.locals

    const songs = await db("songs")
    return songs
}

module.exports = {
    method,
    path,
    data,
    type
}