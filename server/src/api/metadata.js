const path = "/metadata"
const method = "get"

async function handler (req, res) {
    const {metadata} = res.locals
    metadata.ENV = process.env.NODE_ENV
    res.status(200)
    res.json(metadata)
}

module.exports = {
    method,
    path,
    handler
}