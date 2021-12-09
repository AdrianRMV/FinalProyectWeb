<?php
  include_once($_SERVER["DOCUMENT_ROOT"]."/api/controllers/User.php");
  $userController = new User(false);
  if($userController->isLoggedIn() && $userController->isAdmin()) {
    header("Location: /pagina-admin.php");
  }else if($userController->isLoggedIn()){
      header("Location: /index.php");
  }
   
?>
<!DOCTYPE html>
<html lang="es">
<head>
      <?php include_once($_SERVER["DOCUMENT_ROOT"]."/components/templates/head.php")?>
</head>
<body class="login-body">
      <?php
            include_once($_SERVER["DOCUMENT_ROOT"]."/components/login.php");
            include_once($_SERVER["DOCUMENT_ROOT"]."/components/registrer.php");
      ?>
      <script src="/src/js/register-actions.js"></script>
      <script src="/src/js/Form-Registro.js"></script>
      <script src="/src/js/login-actions.js"></script>
</body>
</html>