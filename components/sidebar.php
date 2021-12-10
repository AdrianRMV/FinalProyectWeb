<?php
if($userController->isLoggedIn()){ 
    echo "<div class='sideContainer'>
        <img class='large-icon' src='/src/images/list.png'>
        <p class='subtitle subtitle-advise'>Presiona 'Realizar Reporte' para empezar</p>
    </div>";
}else{
    echo "<div class='sideContainer'>
    <img class='large-icon' src='/src/images/login.png'>
    <p class='subtitle subtitle-advise'>Inicia Sesión para reportar un problema</p>
    </div>";
}


?>
