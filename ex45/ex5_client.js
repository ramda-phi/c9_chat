socket.on("connect", function() {
    socket.emit("message", 'Hello Server!');
} );

socket.on("message", function() {
    $("#message").html(text);
} );
