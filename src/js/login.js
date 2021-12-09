const iniciarBtn = document.getElementById("iniciarBtn");
if(iniciarBtn){
    iniciarBtn.addEventListener("click", () => {
        location.href = "/loginMenu.php";
    });
}