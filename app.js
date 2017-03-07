const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const server = app.listen(port, () => console.log('Listening on port %d', server.address().port));

app.get('*', (req, res) => {
  res.send('I\'m alive');
});