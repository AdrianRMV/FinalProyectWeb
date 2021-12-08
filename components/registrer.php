<div class="modal-container">
      <div class="modal modal-close">
            <p class="close">X</p>
            <form class="registro-inputs" method="post" action="/api/user/register.php">
                  <h2 class="login-title">Registro</h2>
                  <input type="text" placeholder="Nombre" id="nombre-usuario" name= "nombre" required>
                  <input type="text" placeholder="Apellido paterno" id="apellido-paterno" name="apellidoP" required>
                  <input type="text" placeholder="Apellido materno" id="apellido-materno" name="apellidoM" >
                  <input type="email" placeholder="Correo electronico" id="correo" name="email" required>
                  <!-- <input type="date" id="date" min="1930-01-01" max="2005-12-31" required> -->
                  <!-- <input type="password" placeholder="Contraseña" id="password-usuario" required> -->
                  <input type="password" placeholder="Contraseña" id="password-user" name="contra"required>
                  <input type="password" placeholder="Confirmar contraseña" id="password-confirm" name="contra-conf" required>
                  <input type="submit" value="Registrar"  id="btn-registrar" class="loginBtn"">

            </form>
      </div>
</div>