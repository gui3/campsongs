const knex = require("knex")
const knexfile = require("../../knexfile")

function connect () {
    const config = process.env.NODE_ENV === "production" 
    ? knexfile.production
    : knexfile.development

    console.log("> connection to " + config.client)

    return knex(config)
}

module.exports = connect