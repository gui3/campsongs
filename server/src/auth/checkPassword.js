const crypto = require("crypto")
const hashPassword = require("./hashPassword")

module.exports = function checkPassword (
    passwordAttempt,
    passwordOriginal,
    salt,
    iterations
) {
    return passwordOriginal == hashPassword(
        passwordAttempt, 
        salt, 
        iterations
    )
}