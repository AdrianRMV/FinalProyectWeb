window.addEventListener("DOMContentLoaded", e => {
    // e.preventDefault();
    const $btnRevisar = document.querySelector('#btn-verReporte');
    // const ubicacion = document.getElementsByClassName('reporte-ubicacion-1');

    // cambiar la variable ubicacion a entero
    // ubicacion = parseInt(ubicacion.value);
    // console.log(ubicacion);
    console.log("ACA ANDO")
    if ($btnRevisar) {
        $btnRevisar.addEventListener('click', e => {
            e.preventDefault();
            console.log("entre al script");
            
        } );
    }
    // e.preventDefault();
});