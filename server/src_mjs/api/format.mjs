/**
 * unified data response formatting across the api
 */
function data (data, keys = {}) {
    return {
        data,
        ...keys
    }
}

function error (error, keys = {}) {
    return {
        error: error.message || error,
        data: null,
        ...keys
    }
}

export default {
    data,
    error
}