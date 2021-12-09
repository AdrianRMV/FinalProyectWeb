<?php
  if($userController->isLoggedIn()){ 
    echo "<div class='barContainer'>
        <img class='logo' src='/src/images/weonqliao.jpg'>
        <p class='title'>Laweafome.com</p>
          <button class='generarReporte'>Realizar Reporte</button>
          <button id='logoutBtn'>Cerrar Sesión</button>
        </div>";
}else{
    echo "<div class='barContainer'>
        <img class='logo' src='/src/images/weonqliao.jpg'>
        <p class='title'>Laweafome.com</p>
        <button id='iniciarBtn'>Iniciar Sesión / Registrate</button>
        <button class='reporte'> Ver Reporte </button>
        </div>";  
}
?>
