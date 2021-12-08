<?php
  include_once($_SERVER["DOCUMENT_ROOT"]."/api/controllers/User.php");
  $user = new User();
  $response = $user->register();
  $user->response($response);