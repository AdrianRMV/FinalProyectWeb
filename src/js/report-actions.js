/* const $estatus = document.querySelector('#estatus'); */
const $titulo = document.querySelectorAll('#titulo');
const $descripcion = document.querySelectorAll('#descripcion');
/* const $fecha_creacion = document.querySelector('#fecha_creacion');
const $foto = document.querySelector('#foto');
const $latitud = document.querySelector('#latitud');
const $longitud = document.querySelector('#longitud'); */
const $confirmarBtn = document.querySelector('#confirmarBtn')

$confirmarBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('titulo', $titulo.value);
    data.append('descripcion', $descripcion.value);
    console.log(response);

    axios({
            method: 'POST',
            url: "/api/user/report.php",
            data,
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("epico");
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