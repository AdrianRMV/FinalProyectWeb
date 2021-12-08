const cerrar = document.querySelectorAll('.close')[0];
const abrir = document.querySelectorAll(".register-modal")[0];
const modal = document.querySelectorAll('.modal')[0];
const modalC = document.querySelectorAll(".modal-container")[0];
const inputsRegistro = document.querySelectorAll("input");

abrir.addEventListener("click", function (event) {
      event.preventDefault();
      modalC.style.opacity = "1";
      modalC.style.visibility = "visible";
      modal.classList.toggle("modal-close");
});

// Cierra el modal al clickear en el boton de cerrar
cerrar.addEventListener("click", function () {
      modal.classList.toggle("modal-close");
      setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
      }, 500);

      // // Borra los inputs
      for (let i = 0; i < inputsRegistro.length; i++) {
            inputsRegistro[i].value = "";
      }
      
});
