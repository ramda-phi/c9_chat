var express = require('express');
var app = express.createServer();

app.configure( function() {
    app.use( express.static( __dirname + '/ex45') );
});

app.listen(3001);
console.log('Server started.');
