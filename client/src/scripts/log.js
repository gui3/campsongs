/**
 * creates a shareable instance of logger
 */

import CLIENT_CONFIG from "../CLIENT_CONFIG"

const log = {
    DEBUG_MODE: CLIENT_CONFIG.DEV_MODE // will be set at startup
}

/** shows message only if DEBUG_MODE is true */
log.debug = function (data) {
    log.DEBUG_MODE && console.log(data)
}

/** shows message anyways */
log.info = function (data, ...css) {
    console.log(data, ...css)
}

/** shows error anyway */
log.error = function (data, ...css) {
    console.error(data, ...css)
}

export default log
