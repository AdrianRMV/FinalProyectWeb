  document.addEventListener("DOMContentLoaded", () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicXVlYnluIiwiYSI6ImNrd3dqMGZicTA0NnUyb25ycHhlM2ZkczMifQ.pcce_3Y1efvphqm5AbUjXQ';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-110.31258264243725, 24.142320519956417],
      zoom: 12.5,
    });
  });