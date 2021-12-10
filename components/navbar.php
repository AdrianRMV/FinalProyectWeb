<?php
  if($userController->isLoggedIn() && !$userController->isAdmin()){ 
    echo "<div class='barContainer'>
        <img class='logo' src='/src/images/weonqliao.jpg'>
        <p class='title'>Laweafome.com</p>
          <button class='generarReporte'>Realizar Reporte</button>
          <button class='verReporte'> Ver Reporte </button>
          <button id='logoutBtn'>Cerrar Sesión</button>
        </div>";
}else if(!$userController->isLoggedIn()){
    echo "<div class='barContainer'>
        <img class='logo' src='/src/images/weonqliao.jpg'>
        <p class='title'>Laweafome.com</p>
        <button class='verReporte'>Ver Reportes</button>
        <button id='iniciarBtn'>Iniciar Sesión / Registrate</button>
        </div>";  
}
  if($userController->isLoggedIn() && $userController->isAdmin()){
    echo "<div class='barContainer barContainer-Admin'>
        <img class='logo' src='/src/images/weonqliao.jpg'>
        <p class='title'>Laweafome.com</p>
        <img class='logo' src='/src/images/admin.png'>
          <button class='generarReporte generarReporte-Admin'>Realizar Reporte</button>
          <button class='verReporte'> Ver Reporte </button>
          <button id='logoutBtn'>Cerrar Sesión</button>
        </div>";
  }

?>