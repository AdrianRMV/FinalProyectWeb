<?php
include_once($_SERVER["DOCUMENT_ROOT"] . "/api/controllers/Controller.php");
class User extends Controller
{
  function __construct($jsonResponse = true)
  {
    parent::__construct($jsonResponse);
  }
  function isLoggedIn()
  {
    return isset($_SESSION["user"]);
  }

  function  register()
  {
    $response = [];
    if (isset($_POST["nombre"]) && isset($_POST["apellidoPaterno"]) && isset($_POST["apellidoMaterno"]) && isset($_POST["correo"]) && isset($_POST["contrasena"])) {

      $nombre = $_POST["nombre"];
      $apellidoP = $_POST["apellidoPaterno"];
      $apellidoM = $_POST["apellidoMaterno"];
      $correo = $_POST["correo"];
      $contra = $_POST["contrasena"];

      $insert = "INSERT INTO usuario (name, lastname_one, lastname_two, email, password) VALUES ('$nombre', '$apellidoP', '$apellidoM', '$correo', '$contra')";

      $query = $this->db->post($insert);

      if ($query) {
        $response = [
          "message" => "Usuario registrado correctamente"
        ];
      } else {
        $this -> code = 400;
        $response = [
          "message" => "Error al registro"
        ];
      }
    } else {
      $this -> code = 400;
      $response = [
        "message" => "Faltan datos",
        "Mira" => "me la pelas xd"
      ];
    }
    return $response;
  }

  function login()
  {
    $response = [];
    if ($this->isLoggedIn()) {
      $this->code = 401;
      $response = [
        "message" => "Usted ya tiene una sesión activa"
      ];
    } else if (isset($_POST["email"]) && isset($_POST["password"])) {
      $email = $_POST["email"];
      $password =  $_POST["password"];
      $user = $this->db->get("SELECT id, name, lastname_one,lastname_two, email FROM usuario WHERE email = '$email' AND password = '$password' LIMIT 1");
      if (count($user) > 0) {
        // Si es correcto
        $_SESSION["user"] = $user[0]->id;
        $response = [
          "data" => $user[0],
          "message" => "Ha iniciado sesión con éxito.",
        ];
      } else {
        // No es correcto
        $this->code = 401;
        $response = [
          "message" => "Correo electrónico y/o contraseña incorrecta.",
        ];
      }
    } else {
      $this->code = 400;
      $response = [
        "message" => "No se solicitó correctamente el servicio, faltan campos: [email, password].",
      ];
    }
    return $response;
  }
  function logout()
  {
    $response = [];
    try {
      session_destroy();
      $response = [
        "message" => "Se ha cerrado sesión con éxito."
      ];
    } catch (Exception $e) {
      $this->code = 500;
      $response = [
        "message" => "Ha ocurrido un error inesperado, por favor intentelo nuevamente y si el problema persiste contacte a servicio al cliente.",
        "details" => $e->getMessage()
      ];
    }
    return $response;
  }
}
