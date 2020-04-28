// Comando para establecer la comunicacion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desonectado al servidor');
});

socket.on('estadoACtual', function(resp) {
    label.text(resp.actual);
    console.log(resp.actual);

});

$('button').on('click', function() {
    console.log('click');

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});