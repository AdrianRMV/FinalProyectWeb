let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll(".register-modal")[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll(".modal-container")[0];

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
});

// Por si el usuario da click fuera del modal
window.addEventListener("click", function (event) {
      if (event.target == modalC) {
            modal.classList.toggle("modal-close");
            setTimeout(function () {
                  modalC.style.opacity = "0";
                  modalC.style.visibility = "hidden";
            }, 500);
      }
});