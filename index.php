<?php
      include_once($_SERVER["DOCUMENT_ROOT"]."/api/controllers/User.php");
      $userController = new User(false);
?>
<!DOCTYPE html>
<html lang="es">
<head>
            <?php include_once($_SERVER["DOCUMENT_ROOT"]."/components/templates/head.php")?>
</head>
<body class="login-body">
      <?php
             include_once($_SERVER["DOCUMENT_ROOT"]."/components/navbar.php");
             include_once($_SERVER["DOCUMENT_ROOT"]."/components/mapbox.php");
             include_once($_SERVER["DOCUMENT_ROOT"]."/components/sidebar.php");
      ?>
      
      <script src="/src/js/logout.js"></script>
      <script src="/src/js/login.js"></script>

</body>
</html>