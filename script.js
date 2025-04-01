// script.js

// Función para manejar el envío del formulario de comentarios
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comentarioForm');
    const nombreInput = document.getElementById('nombre');
    const mensajeInput = document.getElementById('mensaje');
    const comentariosList = document.getElementById('comentariosList');
  
    // Cargar comentarios almacenados
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentarios.forEach(com => renderComentario(com));
  
    // Manejar envío del formulario
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const nombre = nombreInput.value.trim();
      const mensaje = mensajeInput.value.trim();
  
      if (nombre && mensaje) {
        const nuevoComentario = { nombre, mensaje };
        comentarios.push(nuevoComentario);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
        renderComentario(nuevoComentario);
        form.reset();
      }
    });
  
    // Función para renderizar un comentario
    function renderComentario({ nombre, mensaje }) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${nombre}</strong><p>${mensaje}</p>`;
      comentariosList.appendChild(div);
    }
  });
  