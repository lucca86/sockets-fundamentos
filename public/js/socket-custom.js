var socket = io();

// .on sirve para escuchar sucesos    
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

// .emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Lucca',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);

});

// Escuchar Información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});