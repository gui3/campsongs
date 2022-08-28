import { resolve } from "path"
import { readFileSync } from "fs"

function getMetadata () {
    const raw = readFileSync(
        resolve(__dirname, "../../METADATA.properties"),
        {encoding: "utf-8"}
    )

    const data = {}

    raw.split(/[\r\n]/)
    .forEach(line => {
        const noComment = line.split("#")[0]
        const pair = noComment.split("=")
        if (!pair[0].match(/^\s*$/)) {
            data[pair[0]] = pair.slice(1).join("=")
        }
    })

    return data
}

export default getMetadata

