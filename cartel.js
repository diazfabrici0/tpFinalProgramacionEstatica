// muestra un cartel avisa que se realizo la compra, en realidad queria hacer muchas mas cosas, pero no me dio el tiempo :/

function mostrarMensajeCompraExitosa() {
  // Seleccionar el botón de compra
  const botonComprar = document.querySelector('.botonComprar');

  // Agregar un evento de clic al botón
  botonComprar.addEventListener('click', () => {
    // Mostrar el mensaje de compra exitosa usando una librería de notificaciones como "SweetAlert"
    Swal.fire({
      icon: 'success',
      title: '¡Compra realizada con éxito!',
      confirmButtonColor: '#8A2DED',
      confirmButtonText: 'Aceptar'
    });
  });
}


/*function cartel(){
    addEventListener('click', () => {
        alert('¡Compra realizada!');
      });
}*/
