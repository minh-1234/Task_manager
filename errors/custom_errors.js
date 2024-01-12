class CustomAPIrError extends Error {
    constructor(massage, statuscode) {
        super(massage);
        this.statuscode = statuscode;
    }
}
const createCustomError = (msg, statuscode) => {
    return new CustomAPIrError(msg, statuscode);
}
module.exports = { createCustomError, CustomAPIrError };