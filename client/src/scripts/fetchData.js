import CLIENT_CONFIG from "../CLIENT_CONFIG";
import mock from "../../../global/mock.mjs"
import log from "./log";

export default async function fetchData(path) {
    if (CLIENT_CONFIG.USE_MOCK_DATA) {
        log.debug("mocking " + path)
        return mock(path)
    }

    try {
        const res = await fetch(path)
        const json = await res.json()
        return json
    }
    catch (error) {
        return {
            valid: false,
            path,
            data: null,
            error: error.message
        }
    }
    
}