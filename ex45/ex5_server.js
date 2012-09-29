io.socket.on("connection", function(socket) {
    console.log('connect new client.');
    socket.emit("message", 'Hello, Client!');
    socket.on("message", function(text) {
        console.log("message: " + text);
    } );
} );
