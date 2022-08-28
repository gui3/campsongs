const path = "/songs/:name"
const method = "get"
const type = "SONGS"

async function data (req, res) {
    const {db} = res.locals

    const songs = await db("songs")
    .whereRaw("text LIKE ?", ["%" + req.params.name + "%"])

    return songs
}

module.exports = {
    method,
    path,
    data,
    type
}