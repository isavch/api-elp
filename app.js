const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const knex = require('knex')();
const server = app.listen(port, () => console.log('Listening on port %d', server.address().port));

sequelize.sync().then(() => console.log('Sync done'));

app.use('*', function(req, res, next) {
  const user = process.env.API_USER;
  const password = process.env.API_PASSWORD;
  const securityToken = `${user}_${password}`;
  const authToken = req.headers.authorization;

  if (!authToken || authToken !== securityToken) {
    return res.send(401);
  }

  return next();
});

app.get('*', (req, res) => {
  res.send('I\'m alive');
});