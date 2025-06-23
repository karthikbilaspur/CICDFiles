function initMap() {
    var lat = parseFloat(document.querySelector('#map').getAttribute('data-lat'));
    var lon = parseFloat(document.querySelector('#map').getAttribute('data-lon'));
    var city = document.querySelector('#map').getAttribute('data-city');

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lon},
        zoom: 13
    });

    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lon},
        map: map,
        title: city
    });

    var infowindow = new google.maps.InfoWindow({
        content: city
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}