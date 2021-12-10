<?php
if($userController->isLoggedIn()){ 
    echo "<div class='sideContainer'>
            <p class='title2'>Generar Reporte</p>
            <form>
                <p class='subtitle'>Título</p>
                <input type = 'text' class='textBox' id='titulo' placeholder='Escriba un título' required></input>

                <p class='subtitle'>Descripción</p>
                <input type = 'text' class='textBox textBox-desc' id='descripcion' placeholder='Escriba una descripción' required></input>

                <p class='subtitle'>Adjuntar Foto</p>
                <input class='textBox' id='foto' placeholder='Adjunte una foto (Opcional)'></input>

                <p class='subtitle'>Ubicación</p>

                <input class='textBox' id='inputUbicacion' placeholder='Seleccione una ubicación' required></input>

                <button id='confirmarBtn'>Confirmar</button>
            </form>
        </div>";
}else{
    echo "<div class='sideContainer'>
    <img class='large-icon' src='/src/images/login.png'>
    <p class='subtitle subtitle-advise'>Inicia Sesión para reportar un problema</p>
    </div>";
}


?>

