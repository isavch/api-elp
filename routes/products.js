const auth = require('../middleware/auth');

module.exports = function (server, models) {
  server.get('/products', auth, (req, res, next) =>
    models.products.all()
      .then(items => res.send(items))
      .catch(error => next(error))
  );

  server.post('/products', auth, (req, res, next) =>
    models.products.create()
      .then(data => res.send(data))
      .catch(error => next(error))
  );

  server.put('/products', auth, (req, res, next) =>
    models.products.update()
      .then(data => res.send(data))
      .catch(error => next(error))
  );

  server.del('/products', auth, (req, res, next) =>
    models.products.remove()
      .then(data => res.send(data))
      .catch(error => next(error))
  );
};