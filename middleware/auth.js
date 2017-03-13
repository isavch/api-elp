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

// var token = req.body.token || req.query.token || req.headers['x-access-token'];
//
// // decode token
// if (token) {
//
//   // verifies secret and checks exp
//   jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//     if (err) {
//       return res.json({ success: false, message: 'Failed to authenticate token.' });
//     } else {
//       // if everything is good, save to request for use in other routes
//       req.decoded = decoded;
//       next();
//     }
//   });
//
// } else {
//
//   // if there is no token
//   // return an error
//   return res.status(403).send({
//     success: false,
//     message: 'No token provided.'
//   });
//
// }
