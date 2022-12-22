

function init( ) {
    let map = new ymaps.Map('map-test',{
        center: [60.69718959379483,28.771734682338163],
        zoom: 17
    });
    let placemark = new ymaps.Placemark([60.69718959379483,28.771734682338163], {}, {
        iconLayout: 'default#image',
        iconImageHref:'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
        iconImageSize:[40, 40],
        iconImageOffset:[-10, -20]
    });
map.controls.remove('geolocationControl');
map.controls.remove('searchControl');
map.controls.remove('trafficControl');
map.controls.remove('typeSelector');
map.controls.remove('fullscreenControl');
map.controls.remove('zoomControl');
map.controls.remove('rulerControl');
// map.behaviors.disable(['scrollZoom']);
map.geoObjects.add(placemark);
}
ymaps.ready(init);


const txt = document.querySelector(".txt");
let item = 0;
let fun = setInterval(function () {
item += 1;
if (item === 11) {
document.getElementById("au").play();
item -= 10;
}
txt.innerHTML = item;
}, 1000);

