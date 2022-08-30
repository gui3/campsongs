/**
 * formatting data the same way across the app
 */
export function error (err, keys={}) {
    return {
        valid: false,
        type: "ERROR",
        data: null,
        error: err.message || err,
        ...keys
    }
}

export function data (data, type, keys={}) {
    return {
        valid: true,
        type,
        data,
        ...keys
    }
}

export default {
    error,
    data
}
