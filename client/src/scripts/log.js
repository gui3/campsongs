/**
 * creates a shareable instance of logger
 */
/*
import Logger from "./Logger";
import CLIENT_CONFIG from "../CLIENT_CONFIG"

export default new Logger(CLIENT_CONFIG.DEBUG_AT_START)
*/

import { DEBUG_AT_START } from "../CLIENT_CONFIG"

const log = {
    DEBUG_MODE: DEBUG_AT_START
}

log.debug = function (data) {
    log.DEBUG_MODE && console.log(data)
}

log.info = function (data) {
    console.log(data)
}

log.error = function (data) {
    console.error(data)
}

export default log
