const generarReporte = document.querySelector('.generarReporte');
const verReporte = document.querySelector('.verReporte');
const sideContainer = document.querySelector('.sideContainer');

if(generarReporte){
    generarReporte.addEventListener('click', () => {
        sideContainer.innerHTML = '<p class="title2">Generar Reporte</p> <hr class="solid"></hr> <form> <p class="subtitle">Título</p> <input class="textBox" id="titulo" placeholder="Escriba un título" required></input> <p class="subtitle">Descripción</p> <input class="textBox textBox-desc" id="descripcion" placeholder="Escriba una descripción" required></input> <p class="subtitle">Adjuntar Foto</p> <input class="textBox" id="foto" placeholder="Adjunte una foto (Opcional)"></input> <p class="subtitle">Ubicación</p> <input class="textBox" placeholder="Seleccione una ubicación"></input> <button id="confirmarBtn">Confirmar</button> </form>'
    });
}

// Código de generarReporte
    /* <div class="sideContainer">
            <p class="title2">Generar Reporte</p>
            <hr class="solid"></hr>
            <form>
                <p class="subtitle">Título</p>
                <input type = "text" class="textBox" id="titulo" placeholder="Escriba un título" required></input>

                <p class="subtitle">Descripción</p>
                <input type = "text" class="textBox textBox-desc" id="descripcion" placeholder="Escriba una descripción" required></input>

                <p class="subtitle">Adjuntar Foto</p>
                <input class="textBox" id="foto" placeholder="Adjunte una foto (Opcional)"></input>

                <p class="subtitle">Ubicación</p>
                <input class="textBox" placeholder="Seleccione una ubicación"></input>

                <button id="confirmarBtn">Confirmar</button>
            </form>
        </div>"; */
if(verReporte){
    verReporte.addEventListener('click', () =>{
        sideContainer.innerHTML = '<p class="title2">Lista de Reportes<p>'
    })
}
// Código de verReporte
    {/* <p>brob<p> */}
