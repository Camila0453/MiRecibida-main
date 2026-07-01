
    function crearConfetti() {
      const colores = ['#ff4fa3', '#ffd166', '#ffffff', '#ff85c2', '#c77dff'];

      for (let i = 0; i < 90; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confetti.style.animationDuration = (4 + Math.random() * 4) + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = (8 + Math.random() * 8) + 'px';
        confetti.style.height = (8 + Math.random() * 8) + 'px';

        document.body.appendChild(confetti);
      }
    }
const botonCerrar = document.getElementById("cerrarDialogo");
const dinoBox = document.getElementById("dinoBox");

if (botonCerrar && dinoBox) {
  botonCerrar.addEventListener("click", () => {
    dinoBox.style.display = "none";
  });
}
  
    crearConfetti();

document.addEventListener("DOMContentLoaded", () => {

    const abrir = document.getElementById("abrirModal");
    const cerrar = document.getElementById("cerrarModal");
    const modal = document.getElementById("modalMensaje");
  console.log(abrir);
    console.log(cerrar);
    console.log(modal);

    abrir.addEventListener("click", function(e){
        e.preventDefault();
        modal.classList.add("mostrar");
    });

    cerrar.addEventListener("click", function(){
        modal.classList.remove("mostrar");
    });

    window.addEventListener("click", function(e){
        if(e.target === modal){
            modal.classList.remove("mostrar");
        }
    });

let formMSJ= document.getElementById("formMSJ");

formMSJ.addEventListener("submit", async(e)=>{
  /*  e.preventDefault();
    const modalExito = document.getElementById("modalExito");
const cerrarExito = document.getElementById("cerrarExito");
    cerrarExito.addEventListener("click", () => {
    modalExito.classList.remove("mostrar");
});
    const formData= new FormData(formMSJ)
    try{
        const respuesta= await fetch("https://formspree.io/f/xkoayllr",{
           method: "POST",
           body:formData,
           headers:{"Accept":"application/json"
        }
    });
 if(respuesta.ok){
    formMSJ.reset();

modal.classList.remove("mostrar");

modalExito.classList.add("mostrar");
    formMSJ.reset();
    modal.classList.remove("mostrar"
    )
}else{
        alert("no se pudo mandar msj")
    }
 }catch(error){
console.log(error)
 }*/
 e.preventDefault();

    // Simulación de envío exitoso
    formMSJ.reset();

    modal.classList.remove("mostrar");

    modalExito.classList.add("mostrar");
     formMSJ.reset();
    modal.classList.remove("mostrar")


})

});

const fechaEvento = new Date("2026-07-06T14:00:00").getTime();

const texto = document.getElementById("textoContador");

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        texto.innerHTML = " ¡Es hoy! Gracias por acompañarme ";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );

    texto.innerHTML =
`<span style=" color:#8A7650;">
Faltan ${dias} días · ${horas} h · ${minutos} min · ${segundos} seg
</span>`;

}

actualizarContador();

setInterval(actualizarContador, 1000);