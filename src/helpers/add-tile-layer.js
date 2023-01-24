import L from 'leaflet';

export function addTileLayer(map, markerIcon) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="github.com/space900">Khnykin Andrey</a>'
    }).addTo(map);
    L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);
}