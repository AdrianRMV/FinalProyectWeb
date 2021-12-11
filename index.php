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
      
      <script type="text/javascript"src="/src/js/logout.js"></script>
      <script type="text/javascript"src="/src/js/login.js"></script>
      <script type="text/javascript"src="/src/js/sidebar-actions.js"></script>
      <script type="text/javascript"src="/src/js/retrieve.js"></script>
      <script type="text/javascript"src="/src/js/report-actions.js"></script>
      <script type="text/javascript" src="/src/js/mapbox.js"></script>


</body>
</html>