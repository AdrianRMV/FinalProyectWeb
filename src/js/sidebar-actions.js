const generarReporte = document.querySelector('.generarReporte');
const verReporte = document.querySelector('.verReporte');
const sideContainer = document.querySelector('.sideContainer');


if(generarReporte){
    generarReporte.addEventListener('click', () => {
        // sideContainer.innerHTML = '<p name="test" class="title2">Generar Reporte</p> <form> <p class="subtitle">Título</p> <input class="textBox" id="titulo" placeholder="Escriba un título" required></input> <p class="subtitle">Descripción</p> <input class="textBox textBox-desc" id="descripcion" placeholder="Escriba una descripción" required></input> <p class="subtitle">Adjuntar Foto</p> <input class="textBox" id="foto" placeholder="Adjunte una foto (Opcional)"></input> <p class="subtitle">Ubicación</p> <input class="textBox" placeholder="Seleccione una ubicación"></input> <button id="confirmarBtn">Confirmar</button> </form>'
        
        sideContainer.innerHTML= "";
        
        let titulo = document.createElement('p');
        titulo.classList.add('title2');
        titulo.innerHTML = 'Generar Reporte';
        sideContainer.appendChild(titulo);

        let form = document.createElement('form');
        let p1 = document.createElement('p');
        p1.classList.add('subtitle');
        p1.innerHTML = 'Título';

        let input1 = document.createElement('input');
        input1.classList.add('textBox');
        input1.setAttribute('id', 'titulo');
        input1.setAttribute('placeholder', 'Escriba un título');
        input1.setAttribute('required', '');

        let p2 = document.createElement('p');
        p2.classList.add('subtitle');
        p2.innerHTML = 'Descripción';

        let input2 = document.createElement('input');
        input2.classList.add('textBox', 'textBox-desc');
        input2.setAttribute('id', 'descripcion');
        input2.setAttribute('placeholder', 'Escriba una descripción');
        input2.setAttribute('required', '');

        let p3 = document.createElement('p');
        p3.classList.add('subtitle');
        p3.innerHTML = 'Adjuntar Foto';

        let input3 = document.createElement('input');
        input3.classList.add('textBox');
        input3.setAttribute('id', 'foto');
        input3.setAttribute('placeholder', 'Adjunte una foto (Opcional)');

        let p4 = document.createElement('p');
        p4.classList.add('subtitle');
        p4.innerHTML = 'Ubicación';

        let input4 = document.createElement('input');
        input4.classList.add('textBox');
        input4.setAttribute('id', 'inputUbicacion');
        input4.setAttribute('placeholder', 'Seleccione una ubicación');

        let button = document.createElement('button');
        button.setAttribute('id', 'confirmarBtn');
        button.innerHTML = 'Confirmar';
        button.style.visibility = 'visible';

        // agregando al form las etiquetas creadas
        form.appendChild(p1);
        form.appendChild(input1);
        form.appendChild(p2);
        form.appendChild(input2);
        form.appendChild(p3);
        form.appendChild(input3);
        form.appendChild(p4);
        form.appendChild(input4);
        form.appendChild(button);

        sideContainer.appendChild(form);

    });
}


if(verReporte){
    verReporte.addEventListener('click', () =>{
        // eliminar todos los elementos del sideContainer menos el boton del form
        // let form = document.querySelector('form');
        // sideContainer.removeChild(form);
        // button.style.visibility = 'visible';

        // let title2 = document.createElement('p');
        // title2.classList.add('title2');
        // title2.innerHTML = 'lista de reportes';
        // sideContainer.appendChild(title2);

        sideContainer.innerHTML = '<p class="title2">Lista de Reportes</p>'
    })
}

