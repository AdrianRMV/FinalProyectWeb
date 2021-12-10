// const $reportTitle = document.querySelector('#reportTitle');
// const $desc = document.querySelector('#desc');
const $getReporte = document.querySelector('.verReporte');
const $contenedorDerecho = document.querySelector('.sideContainer');

if ($getReporte) {
      $getReporte.addEventListener("click", (event) => {
            event.preventDefault();
            const data = new FormData();

            axios({
                        method: 'POST',
                        url: "/api/user/retrieve.php",
                        data,
                        headers: {
                              "Content-Type": "multipart/form-data"
                        },
                  })
                  .then((response) => {
                        if (response.status === 200) {

                              console.log(response);
                              console.log(response.data.length);
                              console.log(response.data[0].titulo);

                              for (let i = 0; i < response.data.length; i++) {
                                    //crear elementos dentro del contenedor derecho
                                    let $div = document.createElement('div');
                                    $div.classList.add(`reporte-contenedor`); //CLASE PARA EL DIV (reporte)

                                    let $innerDiv = document.createElement('div');
                                    $innerDiv.classList.add('small-container');

                                    let $titulo = document.createElement('p');
                                    $titulo.classList.add('reporte-titulo'); //CLASE PARA EL TITULO (reporte-titulo)

                                    $titulo.innerHTML = response.data[i].titulo;
                                    $innerDiv.appendChild($titulo);

                                    let $estatus = document.createElement('img');
                                    $estatus.classList.add('status-img'); //CLASE PARA EL ESTATUS (status-img)
                                    $estatus.src = '/src/images/' + response.data[i].estatus + '.png';
                                    $innerDiv.appendChild($estatus);

                                    $div.appendChild($innerDiv);

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
                                    $boton.setAttribute('id', 'btn-verReporte'); //CLASE PARA EL BOTON (reporte-boton)
                                    $boton.innerHTML = "Ver Reporte";
                                    $div.appendChild($boton);
                                    
                                    

                                    // TODO: LISTENER
                                    $boton.addEventListener('click', () => {
                                          console.log("ENTRO AL ACTION");
                                          $idReporte = response.data[i].id;
                                          const  data = new FormData();
                                          data.append('id', $idReporte);
                                          console.log($idReporte);
                                          axios({
                                                      method: 'POST',
                                                      url: "/api/user/obtener-reporte.php",
                                                      data,
                                                      headers: {
                                                            "Content-Type": "multipart/form-data"
                                                      },
                                                })
                                                .then((response) => {
                                                      if (response.status === 200) {

                                                            // Retornar ubicacion separada LNG LAT
                                                            let ubicacion= [];
                                                            function  dividirCadena (cadena,separador) {
                                                                  let arrayDeCadenas = cadena.split(separador);
                                                                  for (let i = 0; i < arrayDeCadenas.length; i++) {
                                                                        ubicacion.push(arrayDeCadenas[i]);
                                                                  }
                                                            }
                                                            dividirCadena(response.data[0].ubicacion, ",");

                                                            // recolocando el marcado en el mapa
                                                            marker.setLngLat([ubicacion[0], ubicacion[1]]);
                  
                                                      }
                                                })
                                                .catch((error) => {
                                                      if (error.response) {
                                                            console.log(error.response);
                                                            // alert(error.response.data.message);
                                                            alert("No hay reportes");
                                                      }
                                                });
                                    });

                                    let $hr = document.createElement('hr');
                                    $hr.classList.add('reporte-hr');
                                    $div.appendChild($hr);

                                    $contenedorDerecho.appendChild($div);
                              }

                        } else {
                              alert(response.data.message);

                        }
                  })
                  .catch((error) => {
                        if (error.response) {
                              console.log(error.response);
                              // alert(error.response.data.message);
                              alert("No hay reportes");
                        }
                  });
      });
}

