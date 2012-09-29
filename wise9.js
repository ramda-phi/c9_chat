var express = require('express');
var app = express.createServer();

app.configure( function() {
    app.use( express.static( __dirname + '/wise9') );
});

app.listen(3002);
console.log('Server started.');
