const jwt    = require('jsonwebtoken');

module.exports = function(server, models) {
  server.post('/login', (req, res, next) => {
    models.users.get(req.body.user)
      .then(user => {
        if (user.password !== req.body.password) {
          return next({status: 401, message: 'Bad credentials'});
        }

        const token = jwt.sign(user, process.env.SECRET, {
          expiresInMinutes: 1440
        });

        res.send({
          token, token
        });
      })
      .catch(error => next(error));
  });

  server.get('/logout', () => res.send('logout'));
};
