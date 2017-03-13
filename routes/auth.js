module.exports = function(server) {
  server.post('/login', () => res.send('login'));
  server.get('/logout', () => res.send('logout'));
};
