const  $email              = document.querySelector('#email');
             $password     = document.querySelector('#password');
             $btnLogin       = document.querySelector('#btn-login');



$btnLogin.addEventListener("click", (event)=>{
      event.preventDefault();
      const  data = new FormData();
      data.append('email', $email.value);
      data.append('password', $password.value);

      axios({
            method: 'POST',
            url: "/api/user/login.php",
            data,
            headers: {
                  "Content-Type": "multipart/form-data"
            },
      })
      .then((response)=>{
            if (response.status === 200){
                  location.href = '/perfil.php';
            } else {
                  alert(response.data.message);
            }
      })
      .catch((error)=>{
            if (error.response){
                  console.log(error.response);
                  alert(error.response.data.message);
            }
      });
});