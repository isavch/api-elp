const restify = require('restify');
const port = process.env.PORT || 8000;
const models = require('./models');
const db = require('./db/knex');
const routes = require('./routes');
const server = restify.createServer();

/* Middleware*/
server.use(restify.queryParser());
server.use(restify.bodyParser());

/* Routes initialize*/
routes(server, models(db));

/* Server start*/
server.listen(port, () => console.log('Listening on port %d', port));