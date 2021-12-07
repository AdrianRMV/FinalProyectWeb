<?php 
      include_once($_SERVER['DOCUMENT_ROOT'].'/api/controllers/User.php');
      $userController = new User(false);
      if(!$userController->isLoggedIn()){
        header('Location: /');
      }
?>

<!DOCTYPE html>
<html lang="en">
<head>
      <?php
            include_once($_SERVER["DOCUMENT_ROOT"]."/components/templates/head.php");
      ?>
</head>
<body>
      <?php
            include_once($_SERVER["DOCUMENT_ROOT"]."/components/paginaInicio.php");
            include_once($_SERVER["DOCUMENT_ROOT"]."/components/logout.php");

      ?>
</body>
</html>