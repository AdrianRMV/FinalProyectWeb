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

  function isAdmin(){
    return  isset($_SESSION["rol"]) && $_SESSION["rol"] == 1;
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
      $id_rol = 2; // predeterminado rol usuario = 1

      $cuentaRegistrado = $this->db->get("SELECT  email FROM usuario WHERE email = '$correo' ");

      if (count($cuentaRegistrado)>0){
        $this -> code = 418;
        $response = [
          "message" => "Este correo ya esta registrado"
        ];
      }else {
        $insert = "INSERT INTO usuario (id_rol,name, lastname_one, lastname_two, email, password) VALUES ('$id_rol','$nombre', '$apellidoP', '$apellidoM', '$correo', '$contra')";

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
    }
    return $response;
      }
      
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

      $user = $this->db->get("SELECT * FROM usuario WHERE email = '$email' AND password = '$password' LIMIT 1");
      // Usuario existe
      if (count($user) > 0) {
        // Si es correcto
        $_SESSION["user"] = $user[0]->id;

        // Para saber si es admin
        $_SESSION["rol"] = $user[0]->id_rol;
        
        if($_SESSION["rol"]== 1){
              $this->code = 100;
                $response = [
                    "message" => "Bienvenido Administrador",
                ];
        }else {
                $response = [
                    "message" => "Bienvenido Usuario",
                ];
        }
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
