/**
 * creates a shareable instance of logger
 */

import CLIENT_CONFIG from "../CLIENT_CONFIG"

const log = {
    history: [],
    memory: CLIENT_CONFIG.LOG_MEMORY,
    DEBUG_MODE: CLIENT_CONFIG.START_IN_DEBUG_MODE, // will be set at startup
    // console quick styles:
    style: {
        big: "font-size: 2em; font-weight: bold",
        text: "font-size: 1.2em;",
        code: "background: #000; color: #fff; font-family: monospace;"
    }
}

log.register = CLIENT_CONFIG.DEV_MODE
? function (data, css) { // only if DEV_MODE
    log.history = [
        {data, tag: "debug", css},
        ...log.history.slice(0, log.memory - 1)
    ]
}
: function () {} // production = skip client log history

/** shows message only if DEBUG_MODE is true */
log.debug = function (data) {
    log.DEBUG_MODE && console.log(data)
    log.register(data)
}

/** shows message anyways */
log.info = function (data, ...css) {
    console.log(data, ...css)
    log.register(data, css)
}

/** shows error anyway */
log.error = function (data, ...css) {
    console.error(data, ...css)
    log.register(data, css)
}

export default log
