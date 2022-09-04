
const maxAge = 60 * 60 * 24 * 10 // 10 days

module.exports = ` Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Strict`