const path = "/song/:id"
const method = "get"
const type = "SONGS"

async function data (req, res, next) {
    const {db} = res.locals
    const id = req.params.id
    if (!id) next(new Error("invalid id: " + id))
    const songs = await db("songs")
    .whereRaw("id = ?", [req.params.id])

    return songs
}

module.exports = {
    method,
    path,
    data,
    type
}