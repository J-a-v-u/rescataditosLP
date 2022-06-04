const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})


function reload() {
 // window.history.back();
  window.location.reload(true);
}
function salir() {
  setTimeout(reload, 500);

}

/***************************scripts del reproductor***********************/

// Declaración de variables.
var V_max; // Longitud máxima del vector "Fotos".
var n; // Auxiliar para programación.

n = 0; // Inicia la variable auxiliar de programación con valor 0.


/*---------------vectores de imagenes y videos por gatito-------------*/
Fotos0 = new Array();
Fotos0 [0] = "images/paw.png"

/*_____________________Gato 1________________________ */

// Rutas de imagenes y videos
Fotos1 = new Array();
Fotos1 [0] = "images/otto/1.jpg"
Fotos1 [1] = "images/otto/2.jpg"
Fotos1 [2] = "images/otto/3.jpg"
Fotos1 [3] = "images/otto/vid.mp4"



/*_____________________Gato 2________________________ */

// Rutas de imagenes y videos
Fotos2 = new Array();
Fotos2 [0] = "images/fran/1.jpg"

Fotos2 [1] = "images/otto/vid.mp4"
/*
Fotos2 [2] = "images/ciru/3.jpg"
Fotos2 [3] = "images/ciru/4.jpg"
*/

/*_____________________Gato 3________________________ */

// Rutas de imagenes y videos
Fotos3 = new Array();
Fotos3 [0] = "images/comino/1.jpg"
Fotos3 [1] = "images/comino/2.jpg"
Fotos3 [2] = "images/comino/3.jpg"
Fotos3 [3] = "images/comino/4.jpg"


/*_____________________Gato 4________________________ */

// Rutas de imagenes y videos
Fotos4 = new Array();
Fotos4 [0] = "images/draclag/1.jpg"
Fotos4 [1] = "images/draclag/2.jpg"
Fotos4 [2] = "images/draclag/3.jpg"
Fotos4 [3] = "images/draclag/4.jpg"
Fotos4 [4] = "images/draclag/5.jpg"
Fotos4 [5] = "images/draclag/6.jpg"
Fotos4 [6] = "images/draclag/7.jpg"
Fotos4 [7] = "images/draclag/8.jpg"
Fotos4 [8] = "images/draclag/9.jpg"
Fotos4 [9] = "images/draclag/10.jpg"






/*_________________fin arrays_____________________ */

/*_______________________________REPRODUCTOR_______________________________ */




function getFileExtension(filename) {             /* obtinene la exstension del archivo para identificar si es imagen o video*/
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}

function esVideo(archivo) {                      /* identifica si es imagen o video*/
     var extension = getFileExtension(archivo);
     if(extension=="mp4"){                       /* para mas formatos de video agregar un "o" con los mismos */ 
        return true;
     } else{return false;}

}




function visualizador(vector, nombre){                 /* reroductor */
  //var vector = Fotos1;
    let galeria = document.querySelector('#popup1');
    var h2nombre = galeria.querySelector('#nombre');
    h2nombre.innerHTML = nombre;
    window.addEventListener('click',e=>{
    V_max = vector.length;
    //var contador=galeria.querySelector('#contador');
    var atras=galeria.querySelector('#botonI');
    var adelante=galeria.querySelector('#botonD');
    var imagenes = galeria.querySelector('.Diapositiva');
    var video = galeria.querySelector('.video');
    var trgt= e.target;
    console.log("click en "+trgt);
     var contEle = galeria.querySelector('#contador');
    if(trgt == atras){
        if(n>0){
            var cont = String.raw`${n}/${V_max}`;
            contEle.textContent = cont;

            if(esVideo(vector[n-1])==false){
                            
                imagenes.style.zIndex = 9;

                video.style.zIndex = 7;

                imagenes.src = vector[n-1];

                  } else {
                   
                    video.style.zIndex = 9;

                    imagenes.style.zIndex = 7;

                    video.src = vector[n-1];

                  }

          
          n--;
        } else {             
                var cont = String.raw`${V_max}/${V_max}`;
                contEle.textContent = cont;

                if(esVideo(vector[V_max-1])==false){
                imagenes.style.zIndex = 9;

                video.style.zIndex = 7;
                imagenes.src = vector[V_max-1];
                 console.log("es video "+esVideo(vector[V_max-1]))
                 n = V_max-1;

                
                  } else {
                    

                    video.style.zIndex = 9;

                    imagenes.style.zIndex = 7;

                    video.src = vector[V_max-1];
                         console.log("es video "+esVideo(vector[V_max-1]))
                     n = V_max-1;

                    
                  }


        }
    
    } else if(trgt==adelante){
      if(n<V_max-1){
        var verificador = esVideo(vector[n]);

        var cont = String.raw`${n+1}/${V_max}`;
        contEle.textContent = cont;

            if(verificador==false){
                imagenes.style.zIndex = 9;

                video.style.zIndex = 7;

               imagenes.src = vector[n];
                 console.log("es video  "+esVideo(vector[n]))
                n++;

                  } else if(verificador==true){
                    video.style.zIndex = 9;

                    imagenes.style.zIndex = 7;

                    video.src = vector[n];
                 console.log("es video  "+esVideo(vector[n]))
                n++;

                  }
        
      } else {
        var cont = String.raw`${n+1}/${V_max}`;
        contEle.textContent = cont;

        var verificador = esVideo(vector[V_max-1]);
        console.log("es video  "+verificador)
            if(verificador){

                    video.style.zIndex = 9;

                    imagenes.style.zIndex = 7;

                    video.src = vector[V_max-1];
                 console.log("es video  "+verificador)
               n = 0;
                

                  } else {
                    imagenes.style.zIndex = 9;

                    video.style.zIndex = 7;

               imagenes.src = vector[V_max-1];
                 console.log("es video  "+esVideo(vector[0]))
               n = 0;

                  }
        
      }
    }

  });

  return;


}



