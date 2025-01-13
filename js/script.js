// MOSTRAR Y CERRAR MODALES
function mostrarModal(tipo) {
  const modalId = `modal-${tipo}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function cerrarModal(tipo) {
  const modalId = `modal-${tipo}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}
