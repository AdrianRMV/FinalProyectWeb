const generarReporte = document.querySelector('.generarReporte');
const sideContainer = document.querySelector('.sideContainer');

generarReporte.addEventListener('click', () => {
    sideContainer.innerHTML = '<p class="title2">Generar Reporte</p> <hr class="solid"></hr> <form> <p class="subtitle">Título</p> <input class="textBox" placeholder="Escriba un título"></input> <p class="subtitle">Descripción</p> <input class="textBox textBox-desc" placeholder="Escriba una descripción"></input> <p class="subtitle">Adjuntar Foto</p> <input class="textBox" placeholder="Adjunte una foto (Opcional)"></input> <p class="subtitle">Ubicación</p> <input class="textBox" placeholder="Seleccione una ubicación"></input> <button class="confirmarBtn">Confirmar</button> </form>'
});



{
    /* <div class='sideContainer'>
            <p class='title2'>Generar Reporte</p>
            <hr class='solid'></hr>
            <form>
                <p class='subtitle'>Título</p>
                <input class='textBox' placeholder='Escriba un título'></input>

                <p class='subtitle'>Descripción</p>
                <input class='textBox textBox-desc' placeholder='Escriba una descripción'></input>

                <p class='subtitle'>Adjuntar Foto</p>
                <input class='textBox' placeholder='Adjunte una foto (Opcional)'></input>

                <p class='subtitle'>Ubicación</p>
                <input class='textBox' placeholder='Seleccione una ubicación'></input>

                <button class='confirmarBtn'>Confirmar</button>
            </form>
        </div>"; */
}