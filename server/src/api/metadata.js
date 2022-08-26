const path = "/metadata"
const method = "get"

async function handler (req, res) {
    const {metadata} = res.locals
    res.status(200)
    res.json(metadata)
}

module.exports = {
    method,
    path,
    handler
}