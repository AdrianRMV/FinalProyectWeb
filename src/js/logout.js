const logoutButton = document.getElementById("logoutBtn");
if(logoutButton){
  logoutButton.addEventListener("click", () => {
    axios({
      method: "GET",
      url: "/api/user/logout.php",
    })
      .then((response) => {
        if (response.status === 200) {
          location.href = "/";
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.message);
        }
      });
  });
}