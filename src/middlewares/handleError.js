const { ValidationError } = require('express-validation');
const { UnauthorizedError } = require('express-jwt');

module.exports = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error);
    }
    else if (error instanceof UnauthorizedError) {
        return res.status(error.status).json("Acesso negado!");
    };

    console.error(error);
    return res.status(400).json(error);
};
