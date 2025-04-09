document.addEventListener('DOMContentLoaded', function() {
  // Mostrar comunas según la región seleccionada
  const regionSelect = document.getElementById('region');
  const comunaSelect = document.getElementById('comuna');
  
  regionSelect.addEventListener('change', function() {
    const region = regionSelect.value;
    comunaSelect.innerHTML = ''; // Limpiar las opciones de comuna
    let opcionesComuna = [];
    
    if (region === 'Región 1') {
      opcionesComuna = ['Comuna 1', 'Comuna 2', 'Comuna 3'];
    } else if (region === 'Región 2') {
      opcionesComuna = ['Comuna 4', 'Comuna 5', 'Comuna 6'];
    } else if (region === 'Región 3') {
      opcionesComuna = ['Comuna 7', 'Comuna 8', 'Comuna 9'];
    }
    
    opcionesComuna.forEach(comuna => {
      const option = document.createElement('option');
      option.value = comuna;
      option.textContent = comuna;
      comunaSelect.appendChild(option);
    });
  });

  // Mostrar campo de contacto para "Otra"
  const contactarSelect = document.getElementById('contactar');
  const contactoOtro = document.getElementById('contacto-otro');
  
  contactarSelect.addEventListener('change', function() {
    if (contactarSelect.value === 'otra') {
      contactoOtro.classList.remove('oculto');
    } else {
      contactoOtro.classList.add('oculto');
    }
  });

  // Mostrar campo de descripción de tema "Otro"
  const temaSelect = document.getElementById('tema');
  const temaOtro = document.getElementById('tema-otro');
  
  temaSelect.addEventListener('change', function() {
    if (temaSelect.value === 'otro') {
      temaOtro.classList.remove('oculto');
    } else {
      temaOtro.classList.add('oculto');
    }
  });

  // Agregar más fotos
  const agregarFotoBtn = document.getElementById('agregar-foto');
  const fotoInput = document.getElementById('foto');
  
  agregarFotoBtn.addEventListener('click', function() {
    const fotoNuevo = document.createElement('input');
    fotoNuevo.type = 'file';
    fotoNuevo.accept = 'image/*';
    fotoNuevo.multiple = true;
    fotoInput.insertAdjacentElement('afterend', fotoNuevo);
  });

  // Manejar el envío del formulario
  const form = document.getElementById('actividad-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío real del formulario
    document.getElementById('confirmacion').classList.remove('oculto');
  });

  // Confirmación de agregar actividad
  const confirmarBtn = document.getElementById('confirmar');
  const volverBtn = document.getElementById('volver');
  
  confirmarBtn.addEventListener('click', function() {
    document.getElementById('confirmacion').classList.add('oculto');
    document.getElementById('mensaje-confirmacion').classList.remove('oculto');
  });

  volverBtn.addEventListener('click', function() {
    document.getElementById('confirmacion').classList.add('oculto');
  });

  // Volver a la portada
  const volverPortadaBtn = document.getElementById('volver-portada');
  volverPortadaBtn.addEventListener('click', function() {
    window.location.href = 'index.html'; // Asumiendo que la portada es index.html
  });
});
