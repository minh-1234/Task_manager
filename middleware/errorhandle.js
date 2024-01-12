const { CustomAPIrError } = require('../errors/custom_errors');
const errorHandlerMiddleware = (err, req, res, next) => {
    if (Error instanceof CustomAPIrError) {
        return res.status(err.statuscode).json({ msg: err.msg });
    }
    return res.status(500).json({ msg: 'Something went wrong.' });
}
module.exports = errorHandlerMiddleware;