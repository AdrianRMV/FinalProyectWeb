// var x = document.getElementById("demo");
const  lng =  document.getElementById("lng");
const  lat =  document.getElementById("lat");
function getLocation() {
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
      } else {
            // x.innerHTML = "Geolocation is not supported by this browser.";
            console.log("Not supported");
      }
}

function showPosition(position) {
      lat.innerHTML = position.coords.latitude;
      lng.innerHTML = position.coords.longitude;                        
}