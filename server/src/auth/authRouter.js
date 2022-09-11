const {Router} = require("express")

const authRouter = new Router()

authRouter.post("/login", (req, res) => {

    const maxAge = 60 * 60 * 24 * 10 // 10 days

    res.setHeader(
        'Set-Cookie',
        `isLoggedin=true; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Strict`
    );
})

authRouter.get("/auth", (req, res) => {
    console.log("cookie", req.cookie)
})

module.exports = authRouter