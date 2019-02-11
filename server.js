const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
var server_port = process.env.YOUR_PORT || process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port || server_host || 8080);
const path = require('path');
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/front/index.html'));
});
console.log('Server listening on port 8080');

