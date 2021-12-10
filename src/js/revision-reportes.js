const  $btnRevisar = document.querySelectorAll('#reporte-boton')[0];
// const ubicacion = document.getElementsByClassName('reporte-ubicacion-1');

// cambiar la variable ubicacion a entero
// ubicacion = parseInt(ubicacion.value);
// console.log(ubicacion);
console.log("entre al script");
if ($btnRevisar) {
    $btnRevisar.addEventListener("click", (event) =>{
        event.preventDefault();
        console.log("Entre");
    });
}