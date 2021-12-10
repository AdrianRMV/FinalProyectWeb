/* const $estatus = document.querySelector('#estatus'); */
const $tituloR = document.querySelectorAll('#titulo')[0];
const $descripcion = document.querySelectorAll('#descripcion')[0];
/* const $fecha_creacion = document.querySelector('#fecha_creacion');
const $foto = document.querySelector('#foto');
const $latitud = document.querySelector('#latitud');
const $longitud = document.querySelector('#longitud'); */
const $confirmarBtn = document.querySelectorAll('#confirmarBtn')[0];

if($confirmarBtn){
    $confirmarBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('titulo', $tituloR.value);
        data.append('descripcion', $descripcion.value);
    
        axios({
                method: 'POST',
                url: "/api/user/report.php",
                data,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            }).then((response) => {
                if (response.status === 200) {
                    alert("Reporte registrado con éxito");
                } else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    alert(error.response.data.message);
                }
            });
    });
}
