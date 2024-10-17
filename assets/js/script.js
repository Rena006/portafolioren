document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío automático
  
      // Obtener los valores del formulario
      const nombre = document.querySelector('#nombre').value;
      const email = document.querySelector('#email').value;
      const mensaje = document.querySelector('#mensaje').value;
  
      // Validar que los campos no estén vacíos
      if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
      } else {
        alert(`Gracias por tu mensaje, ${nombre}. Te contactaremos pronto.`);
        
        // Limpiar el formulario
        form.reset();
      }
    });
  });
  