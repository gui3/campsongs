import CLIENT_CONFIG from "../CLIENT_CONFIG";
import mock from "../../../global/mock.mjs"
import log from "./log";

export default async function fetchData(path) {
    const visiblePath = path.replace("/api/", "")


    try {
        if (CLIENT_CONFIG.USE_MOCK_DATA) {
            log.debug("mocking " + visiblePath)
            return mock(path)
        }

        log.debug("fetching " + visiblePath)
        const res = await fetch(path)
        const json = await res.json()
        return json
    }
    catch (error) {
        log.error("failed fetching " + visiblePath)
        return {
            valid: false,
            path,
            data: null,
            error: error.message
        }
    }
    
}