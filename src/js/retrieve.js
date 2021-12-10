// const $reportTitle = document.querySelector('#reportTitle');
// const $desc = document.querySelector('#desc');
const $getReporte = document.querySelector('.verReporte');

if($getReporte){
      $getReporte.addEventListener("click", (event)=>{

            console.log("pito")
            const  data = new FormData();
            // data.append('titulo', $reportTitle.value);
            // data.append('descripcion', $desc.value);
        
            axios({
                  method: 'POST',
                  url: "/api/user/retrieve.php",
                  data,
                  headers: {
                        "Content-Type": "multipart/form-data"
                  },
            })
            .then((response)=>{
                  if (response.status === 200){
                        
                        // while(response){
                        //       console.log(response.data)
                        // }
                        console.log(response);
                        console.log(response.data.length);
                        console.log(response.data[0].titulo);
                        alert("Me la pelo el reporte");
                        console.log('que pro');
                  } else {
                        alert(response.data.message);
                        console.log('gay');
                  }
            })
            .catch((error)=>{
                  if (error.response){
                        console.log(error.response);
                        console.log('?????????');
                        alert(error.response.data.message);
                  }
            });
        });
}
