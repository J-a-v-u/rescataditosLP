const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

function mostrarGaleria(){
  //popup = document.querySelector('.popup')
  document.getElementById("popup").className = "visible";
 }

 function cerrarVentana(){
  //popup = document.querySelector('.popup')
  document.getElementById("popup").className = "overlay";
 }


abrirGaleria =  document.querySelector('.hero-image')

abrirGaleria.addEventListener("click", mostrarGaleria)


btnCerrar =  document.querySelector('#cerrar')
btnCerrar.addEventListener("click", cerrarVentana)

















