<?php
  if($userController->isLoggedIn()){ 
    echo "<div class='barContainer'>
        <img class='logo' src='/src/images/weonqliao.jpg'>
        <p class='title'>Laweafome.com</p>
          <button class='generarReporte'>Realizar Reporte</button>
          <button class='verReporte'> Ver Reporte </button>
          <button id='logoutBtn'>Cerrar Sesión</button>
        </div>";
}else{
    echo "<div class='barContainer'>
        <img class='logo' src='/src/images/weonqliao.jpg'>
        <p class='title'>Laweafome.com</p>
        <button class='verReporte'>Ver Reportes</button>
        <button id='iniciarBtn'>Iniciar Sesión / Registrate</button>
        </div>";  
}
?>
