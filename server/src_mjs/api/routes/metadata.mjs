const path = "/metadata"
const method = "get"

async function data (req, res) {
    const {metadata} = res.locals
    metadata.ENV = process.env.NODE_ENV
    return metadata
}

export default {
    method,
    path,
    data
}