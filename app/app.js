const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.length('/hello', (req, res, next) => {
  res.send('Hello World');
});
app.listen(3000, () => console.log('Server running on Port 3000'));
module.exports.handler = serverless(app);
