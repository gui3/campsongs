export default async function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => resolve(true), ms)
    })
}