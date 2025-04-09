function mostrarSeccion(id) {
  const secciones = ['portada', 'agregar', 'listado', 'estadisticas'];
  secciones.forEach(sec => {
    document.getElementById(sec).classList.add('oculto');
  });
  document.getElementById(id).classList.remove('oculto');
}

