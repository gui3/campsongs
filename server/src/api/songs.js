const path = "/songs"
const method = "get"

async function handler (req, res) {
    const {db} = res.locals

    const songs = await db("songs")
    res.status(200)
    res.json(songs)
}

module.exports = {
    method,
    path,
    handler
}