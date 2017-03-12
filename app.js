const restify = require('restify');
const port = process.env.PORT || 8000;
const routes = require('./routes');
const server = restify.createServer();

/* Middleware*/
server.use(restify.queryParser());
server.use(restify.bodyParser());

/* Routes initialize*/
routes(server);

/* Server start*/
server.listen(port, () => console.log('Listening on port %d', port));