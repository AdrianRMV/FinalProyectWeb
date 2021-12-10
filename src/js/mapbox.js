  document.addEventListener("DOMContentLoaded", () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoicXVlYnluIiwiYSI6ImNrd3dqMGZicTA0NnUyb25ycHhlM2ZkczMifQ.pcce_3Y1efvphqm5AbUjXQ';

    // Crea el mapa y lo centra en la ciudad de La Paz
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-110.31258264243725, 24.142320519956417],
      zoom: 12.5,
    });

    let  marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([-110.3133500617475, 24.140485041417175])
      .addTo(map);

      marker.on("dragend", (event) => {
        const pos = marker.getLngLat();
        console.log(`[Latitud: ${pos.lat}, Longitud: ${pos.lng}]`);
      });

      map.on('click', (event) => {
        console.log(event);
        marker.setLngLat([event.lngLat.lng, event.lngLat.lat]);
      });

      
    
  });
