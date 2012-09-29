window.onload = function() {
    logDiv = document.getElementById("log");
}

var logDiv;
var log = function() {
    console.log(arguments);
    logDiv.innerHTML += arguments[0] + '<br>';
}
var socket = io.connect('http://localhost');

socket.on( 'connect', function() {
    log('client connected');
    socket.emit('msg send', 'data');
    socket.on('msg push', function(msg) {
        log(msg);
    } );
} );

function ping(){
    var text = document.getElementById("text").value;
    socket.emit('msg send', text);
}
