<?php
  include_once($_SERVER["DOCUMENT_ROOT"]."/api/controllers/User.php");
  $user = new User();
  $array = $user->retrieve();
  $user->response($array);