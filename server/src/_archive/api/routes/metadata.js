const path = "/metadata"
const method = "get"
const type = "CONFIG"

async function data (req, res) {
    const {metadata} = res.locals
    metadata.ENV = process.env.NODE_ENV
    return metadata
}

module.exports = {
    method,
    path,
    data,
    type
}