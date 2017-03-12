const auth = require('../middleware/auth');

module.exports = function (server, models) {
  server.get('/products', auth, (req, res, next) =>
    models.products.all()
      .then(items => res.send(items))
      .catch(error => next(error))
  );

  server.post('/products', auth, (req, res, next) =>
    models.products.create(req.body)
      .then(data => res.send(data))
      .catch(error => next(error))
  );

  server.put('/products/:id', auth, (req, res, next) =>
    models.products.update(req.params.id, req.body)
      .then(data => res.send(data))
      .catch(error => next(error))
  );

  server.del('/products/:id', auth, (req, res, next) =>
    models.products.remove(req.params.id)
      .then(data => res.send(data))
      .catch(error => next(error))
  );
};