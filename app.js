
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});

//app.listen(3000);
// console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

app.get('/', routes.index);
app.get('/users', user.list);

// http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
// });


// socket.io

var io = require('socket.io').listen(app.listen(3000));
// var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
    console.log('server connected');
    socket.on('msg send', function(msg) {
        socket.emit('msg push', msg);
        socket.broadcast.emit('msg push', msg);
    } );
    socket.on('disconnect', function() {
        console.log('disconnected');
    } );
} );
