// const  $nombre                       = document.querySelector('#nombre-usuario');
//             $apellidoPaterno         = document.querySelector('#apellido-paterno');
//             $apellidoMaterno        = document.querySelector('#apellido-materno');
//             $correo                          = document.querySelector('#correo');
//             $contrasena                  = document.querySelector('#password-user');
//             $confirmPassword      = document.querySelector('#password-confirm');
//             $btnRegistro                 = document.querySelector('#btn-registrar');

// $btnRegistro.addEventListener("submit", (e) => {
      
//       e.preventDefault();


//       if ($contrasena.value === $confirmPassword.value) {
//             const  data = new FormData();
//             data.append('nombre', $nombre.value);
//             data.append('apellidoPaterno', $apellidoPaterno.value);
//             data.append('apellidoMaterno', $apellidoMaterno.value);
//             data.append('password', $password.value);
      
//             axios({
//                   method: 'POST',
//                   url: "/api/user/register.php",
//                   data,
//                   headers: {
//                         "Content-Type": "multipart/form-data"
//                   },
//             })
//             .then((response)=>{
//                   if (response.status === 200){
//                         console.log("Salio todo bien capo");
//                         location.href = '/hola.php';
//                   } else {
//                         alert(response.data.message);
//                   }
//             })
//             .catch((error)=>{
//                   if (error.response){
//                         console.log(error.response);
//                         alert(error.response.data.message);
//                   }
//             });
//       }else {
//             alert('Las contraseñas no coinciden');
//       }
      
// });