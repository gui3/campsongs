const { resolve } = require("path")
const { readdirSync, writeFileSync } = require("fs")
const https = require("https")
const node_url = require("url")
const { fork } = require("node:child_process")

/*
make requests without dependancies:
https://nodejs.dev/en/learn/making-http-requests-with-nodejs
*/
async function get(url) {
    /*
    const options = {
        hostname: 'localhost',
        port: "8080",
        path: path,
        method: 'GET',
    };
    */
    const options = node_url.parse( /**String*/ url );
    options.rejectUnauthorized = false;
    options.agent = new https.Agent( options );

    let data = ""
    let error

    const req = https.request(options, res => {
        console.log(res)
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
            console.log("> data:")
            console.log(d);
            data += d
        });
    });

    req.on('error', error => {
        console.log("! error:")
        console.error(error);
        error = error
    });

    req.end();

    return data
}

/*
const child_server = fork(resolve(__dirname, "./child_server"))


child_server.on('message', async (data) => {
    console.log(`message from child: ${data}`);
    if (data === "READY") {
        await fetchMocks()
    }
});

child_server.on('error', (data) => {
    console.error(`stderr: ${data}`);
});

child_server.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
*/

let fetching = false
async function fetchMocks () {
    fetching = true
    const data = await get("https://localhost:8080/api")
    console.log("SUCCESS : " + data)
    //child_server.send("STOP")
}

fetchMocks()

/*
setTimeout(_ => {
    if (!fetching) {
        console.log("not fetching, killing server...")
        child_server.send("STOP")
    }
}, 10000)
*/


