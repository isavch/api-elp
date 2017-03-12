const restify = require('restify');
const port = process.env.PORT || 8000;
const server = restify.createServer({name: 'ELP'});

server.use(function(req, res, next) {
  const user = process.env.API_USER;
  const password = process.env.API_PASSWORD;
  const securityToken = `${user}_${password}`;
  const authToken = req.headers.authorization;

  if (!authToken || authToken !== securityToken) {
    return res.send(401);
  }

  return next();
});

server.get('/', (req, res) => res.send('I\'m alive'));

server.listen(port, () => console.log('Listening on port %d', port));