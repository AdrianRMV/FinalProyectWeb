// const $reportTitle = document.querySelector('#reportTitle');
// const $desc = document.querySelector('#desc');
const $getReporte = document.querySelector('.verReporte');
const  $contenedorDerecho = document.querySelector('.sideContainer');

if($getReporte){
      $getReporte.addEventListener("click", (event)=>{
            event.preventDefault();
            const  data = new FormData();
            // data.append('titulo', $reportTitle.value);
            // data.append('descripcion', $desc.value);
        
            axios({
                  method: 'POST',
                  url: "/api/user/retrieve.php",
                  data,
                  headers: {
                        "Content-Type": "multipart/form-data"
                  },
            })
            .then((response)=>{
                  if (response.status === 200){
                        
                        console.log(response);
                        console.log(response.data.length);
                        console.log(response.data[0].titulo);

                        for(let i = 0; i < response.data.length; i++){
                              //crear elementos dentro del contenedor derecho
                              let $div = document.createElement('div');
                                    $div.classList.add(`reporte-contenedor`); //CLASE PARA EL DIV (reporte)

                                    let $titulo = document.createElement('h3');
                                    $titulo.classList.add(`reporte-titulo-${i+1}`); //CLASE PARA EL TITULO (reporte-titulo)
                                    $titulo.innerHTML = response.data[i].titulo;
                                    $div.appendChild($titulo);


                                    let $descripcion = document.createElement('p');
                                    $descripcion.classList.add(`reporte-descripcion-${i+1}`); //CLASE PARA LA DESCRIPCION (reporte-descripcion)
                                    $descripcion.innerHTML = response.data[i].descripcion;
                                    $div.appendChild($descripcion);

                                    let $ubicacion = document.createElement('p');
                                    $ubicacion.classList.add(`reporte-ubicacion-${i+1}`); //CLASE PARA LA UBICACION (reporte-ubicacion)
                                    $ubicacion.innerHTML = response.data[i].ubicacion;
                                    $div.appendChild($ubicacion);


                                    // crea un boton nuevo y agregalo al DIV
                                    let $boton = document.createElement('button');
                                    $boton.setAttribute('id','btn-verReporte'); //CLASE PARA EL BOTON (reporte-boton)
                                    $boton.innerHTML = "Ver Reporte";
                                    $div.appendChild($boton);

                              $contenedorDerecho.appendChild($div);
                        }

                        console.log(response.data);
                  } else {
                        alert(response.data.message);
                        
                  }
            })
            .catch((error)=>{
                  if (error.response){
                        console.log(error.response);
                        // alert(error.response.data.message);
                        alert("No hay reportes");
                  }
            });
        });
}
