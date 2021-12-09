const  $nombre                       = document.querySelector('#nombre');
            $apellidoPaterno         = document.querySelector('#apellidoPaterno');
            $apellidoMaterno        = document.querySelector('#apellidoMaterno');
            $correo                          = document.querySelector('#correo');
            $contrasena                  = document.querySelector('#contrasena');
            $confirmPassword      = document.querySelector('#confirmPassword');
            $btnRegistro                 = document.querySelector('#btn-registrar');

            //Modal de registro
            $modal2                        = document.querySelectorAll('.modal')[0];         
            $modalC2                     = document.querySelectorAll(".modal-container")[0];
            $inputsRegistro2              = document.querySelectorAll("input");


$btnRegistro.addEventListener("click", (e) => {
      e.preventDefault();
      if ($contrasena.value === $confirmPassword.value) {
            const  data = new FormData();
            data.append('nombre', $nombre.value);
            data.append('apellidoPaterno', $apellidoPaterno.value);
            data.append('apellidoMaterno', $apellidoMaterno.value);
            data.append('correo', $correo.value);
            data.append('contrasena', $contrasena.value);
      
            axios({
                  method: 'POST',
                  url: "/api/user/register.php",
                  data,
                  headers: {
                        "Content-Type": "multipart/form-data"
                  },
            })
            .then((response)=>{
                  if (response.status === 200){
                        alert("Usuario registrado con exito");
                        // Cierra el modal
                        modal.classList.toggle("modal-close");
                        setTimeout(function () {
                              modalC.style.opacity = "0";
                              modalC.style.visibility = "hidden";
                        }, 500);
                  
                        // Borra los inputs
                        for (let i = 0; i < inputsRegistro.length; i++) {
                              inputsRegistro[i].value = "";
                        }
                        console.log(response.data);
                  } else {
                        console.log(response.data.message);
                  }
            })
            .catch((error)=>{
                  if (error.response){
                        console.log(error.response);
                        alert(error.response.data.message);

                        // Borra los inputs
                        for (let i = 0; i < inputsRegistro.length; i++) {
                              inputsRegistro[i].value = "";
                        }
                  }
            });
      }else {
            alert('Las contraseñas no coinciden');
      }
      
});