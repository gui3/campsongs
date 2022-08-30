import CLIENT_CONFIG from "./CLIENT_CONFIG";
import mock from "../../../global/api/mock.mjs"
import log from "./log";

export default async function fetchData(path) {
    const visiblePath = path.replace("/api/", "")

    try {
        if (CLIENT_CONFIG.DEV_MODE && CLIENT_CONFIG.USE_MOCK_DATA) {
            log.debug("mocking " + visiblePath)
            return await mock(path)
        }

        log.debug("fetching " + visiblePath)
        const res = await fetch(path)
        const json = await res.json()
        return json
    }
    catch (error) {
        log.error("failed fetching " + visiblePath, error)
        return {
            valid: false,
            path,
            data: null,
            error: error.message
        }
    }
    
}