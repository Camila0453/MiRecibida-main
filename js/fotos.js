const modal = document.getElementById("modalImagen");

const imagenGrande = document.getElementById("imagenGrande");

const cerrar = document.getElementById("cerrarImagen");

document.querySelectorAll(".foto").forEach(foto=>{

    foto.addEventListener("click",()=>{

        imagenGrande.src = foto.src;

        modal.classList.add("mostrar");

    });

});

cerrar.addEventListener("click",()=>{

    modal.classList.remove("mostrar");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("mostrar");

    }

});
