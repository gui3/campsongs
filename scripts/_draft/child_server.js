const createServer = require("../server/src/createServer")

const server = createServer()

server.start()
.then(httpserver => {
    process.on('message', async (m) => {
        console.log('CHILD got message:', m);
        if (m === "STOP") await httpserver.close() && process.exit()
    });
    process.send("READY")
})