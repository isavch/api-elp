const auth = require('../middleware/auth');

module.exports = function (server) {
  server.get('/', auth, (req, res) => res.send('I\'m alive'));
};