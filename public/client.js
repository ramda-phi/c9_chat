window.onload = function() {
    console.log('window onload.');
    logDiv = document.getElementById('log');
}

console.log('come');

var logDiv;
var log = function() {
    console.log(arguments);
    logDiv.innerHTML += arguments[0] + '<br>';
}
var socket = io.connect('http://localhost');

socket.on( 'connect', function() {
    log('connected');
    socket.emit('msg send', 'data');
    socket.on('msg push', function(msg) {
        log(msg);
    } );
} );

function ping(){
    console.log('ping');
    var text = document.getElementById('text').value;
    socket.emit('msg send', text);
}
