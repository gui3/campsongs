const path = "/songs/search"
const method = "get"
const type = "SONGS"

async function data (req, res) {
    const {db} = res.locals

    const songs = await db("songs")
    .whereRaw("text LIKE ?", ["%" + req.params.text + "%"])

    return songs
}

module.exports = {
    method,
    path,
    data,
    type
}