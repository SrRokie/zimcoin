// Función para crear una estrella aleatoria
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  // Aquí se definirán las propiedades de posición, tamaño, etc. de la estrella
  document.body.appendChild(star);
}

// Función para animar las estrellas (parpadeo)
function animateStars() {
  // Aquí irá la lógica para animar las estrellas
}

// Crear un número determinado de estrellas
for (let i = 0; i < 100; i++) {
  createStar();
}

// Iniciar la animación
animateStars();
