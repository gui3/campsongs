const connect = require("../../server/database/connect")

//process.env.NODE_ENV = "production"

const db = connect()
const query = "SELECT 1"

db.raw(query)
.then(result => {
    console.log("! successful connection with query " + query)
    return db.destroy()
})
.then(_ => {
    console.log("! connection closed successfully")
})
.catch(err => {
    console.log("! connection failed")
    throw err
})