const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            return fn(req, res);
        } catch (error) {
            return next(error);
        }
    }
}
module.exports = { asyncWrapper, }