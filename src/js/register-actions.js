let  cerrar = document.querySelectorAll('.cerrar')[0];
let  abrir = document.querySelectorAll(".register-modal")[0];
let  modal = document.querySelectorAll('.modal')[0];
let  modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(event){
      event.preventDefault();
      modalC.style.opacity = "1";      
      modalC.style.visibility = "visible";      
});