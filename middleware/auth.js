const restify = require('restify');

module.exports = auth;

function auth(req, res, next) {
    const user = process.env.API_USER;
    const password = process.env.API_PASSWORD;
    const securityToken = `${user}_${password}`;
    const authToken = req.headers.authorization;

    if (!authToken || authToken !== securityToken) {
        return next(new restify.errors.UnauthorizedError('You are not authorized'));
    }

    return next();
}