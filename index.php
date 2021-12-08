<?php
  include_once($_SERVER["DOCUMENT_ROOT"]."/api/controllers/User.php");
  $userController = new User(false);
  if($userController->isLoggedIn()) {
    header("Location: /perfil.php");
  }
?>
<!DOCTYPE html>
<html lang="es">
<head>
      <?php include_once($_SERVER["DOCUMENT_ROOT"]."/components/templates/head.php")?>
</head>
<body class="login-body">
      <?php
            // Inicio de sesion y registro:
            include_once($_SERVER["DOCUMENT_ROOT"]."/components/login.php");
            include_once($_SERVER["DOCUMENT_ROOT"]."/components/registrer.php");

            // Pagina principal:
            // include_once($_SERVER["DOCUMENT_ROOT"]."/components/navbar.php");
            // include_once($_SERVER["DOCUMENT_ROOT"]."/components/mapbox.php");
            // include_once($_SERVER["DOCUMENT_ROOT"]."/components/sidebar.php");
      ?>
      <script src="/src/js/register-actions.js"></script>
      <script src="/src/js/Form-Registro.js"></script>
      <script src="/src/js/login-actions.js"></script>
</body>
</html>