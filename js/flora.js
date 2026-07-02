const imagenes = [
    "img/f1.jpg",
    "img/f3.jpg",
    "img/f2.jpg",
    "img/ff.jpg",
];

let indice = 0;

const slide = document.getElementById("slide");

function mostrarImagen() {
    slide.src = imagenes[indice];
}

function siguiente() {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    mostrarImagen();
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    mostrarImagen();
}

// Cambia automáticamente cada 4 segundos
setInterval(siguiente, 4000);