var redIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});  

var greenIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});  


function crearmapa(id, nom, zoom) {
    var map = L.map(id, { zoomControl: true });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

    var gpxLayer = omnivore.gpx(nom).addTo(map);

    gpxLayer.on('ready', function() {
    map.fitBounds(gpxLayer.getBounds());

    map.setZoom(map.getZoom() - zoom);

    var coordinates = [];
    gpxLayer.eachLayer(function(layer) {
        if (layer.getLatLng) {
            coordinates.push(layer.getLatLng());
        } else if (layer.getLatLngs) {
            coordinates = coordinates.concat(layer.getLatLngs());
        }
    });

    L.marker(coordinates[0], {icon: greenIcon}).addTo(map).bindPopup("Sortida");
    L.marker(coordinates[coordinates.length - 1], {icon: redIcon}).addTo(map).bindPopup("Arribada");

    });
}


fetch('mapa.txt')
  .then(response => response.text())
  .then(rawData => {
    const lines = rawData.split('\n');
    lines.forEach((line, index) => {

        const [id, arxiu, km, desnivell, num] = line.split(',');
        crearmapa(`mapa${id}`, `gpx/${arxiu}`, num);

        var paragraf = document.createElement("p");
        var text = document.createTextNode(`${id}a SORTIDA`);
        paragraf.appendChild(text);
        document.getElementById(`mapText${id}`).appendChild(paragraf);

        var sampleText = document.createElement("p");
        var sampleTextContent = document.createTextNode(`Km: ${km}. Desnivell: ${desnivell}`);
        sampleText.appendChild(sampleTextContent);
        document.getElementById(`mapText${id}`).appendChild(sampleText);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo:', error);
});
