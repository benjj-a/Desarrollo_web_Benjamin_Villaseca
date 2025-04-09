function showList() {
    document.getElementById("portada").classList.add("hidden");
    document.getElementById("activityList").classList.remove("hidden");
}

function showActivityDetails(id) {
    const activities = [
        {
            inicio: '10:00',
            termino: '12:00',
            comuna: 'Santiago',
            sector: 'Salud',
            tema: 'Medicina General',
            nombre: 'Atención Médica',
            organizador: 'Hospital ABC',
            total: 20,
            fotos: ['https://via.placeholder.com/320x240', 'https://via.placeholder.com/320x240']
        },
        {
            inicio: '14:00',
            termino: '16:00',
            comuna: 'Valparaíso',
            sector: 'Educación',
            tema: 'Reforzamiento Escolar',
            nombre: 'Reforzamiento Escolar',
            organizador: 'Profesor XYZ',
            total: 30,
            fotos: ['https://via.placeholder.com/320x240']
        },
        {
            inicio: '08:30',
            termino: '10:30',
            comuna: 'Concepción',
            sector: 'Cultura',
            tema: 'Teatro',
            nombre: 'Actuación en Vivo',
            organizador: 'Teatro Nacional',
            total: 50,
            fotos: ['https://via.placeholder.com/320x240', 'https://via.placeholder.com/320x240']
        },
        {
            inicio: '12:00',
            termino: '14:00',
            comuna: 'Temuco',
            sector: 'Deporte',
            tema: 'Fútbol',
            nombre: 'Campeonato Local',
            organizador: 'Organizador Fútbol',
            total: 100,
            fotos: ['https://via.placeholder.com/320x240']
        },
        {
            inicio: '17:00',
            termino: '19:00',
            comuna: 'La Serena',
            sector: 'Artesanía',
            tema: 'Exposición de Arte',
            nombre: 'Galería Arte',
            organizador: 'Artista Juan',
            total: 10,
            fotos: ['https://via.placeholder.com/320x240']
        }
    ];

    const activity = activities[id - 1];
    let activityInfo = `
        <p><strong>Nombre:</strong> ${activity.nombre}</p>
        <p><strong>Organizador:</strong> ${activity.organizador}</p>
        <p><strong>Inicio:</strong> ${activity.inicio}</p>
        <p><strong>Término:</strong> ${activity.termino}</p>
        <p><strong>Comuna:</strong> ${activity.comuna}</p>
        <p><strong>Sector:</strong> ${activity.sector}</p>
        <p><strong>Tema:</strong> ${activity.tema}</p>
        <p><strong>Total:</strong> ${activity.total}</p>
    `;
    document.getElementById("activityInfo").innerHTML = activityInfo;

    let photosHtml = '';
    activity.fotos.forEach(photo => {
        photosHtml += `<img src="${photo}" alt="Foto" class="photo" onclick="showModal('${photo}')">`;
    });
    document.getElementById("activityPhotos").innerHTML = photosHtml;

    document.getElementById("activityList").classList.add("hidden");
    document.getElementById("activityDetails").classList.remove("hidden");
}

function backToList() {
    document.getElementById("activityDetails").classList.add("hidden");
    document.getElementById("activityList").classList.remove("hidden");
}

function backToPortada() {
    document.getElementById("activityDetails").classList.add("hidden");
    document.getElementById("portada").classList.remove("hidden");
}

function showModal(photo) {
    document.getElementById("photoModal").classList.remove("hidden");
    document.getElementById("modalPhoto").src = photo;
}

function closeModal() {
    document.getElementById("photoModal").classList.add("hidden");
}
