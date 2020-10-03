function My_pos() {

  var posMarker = new google.maps.Marker({
    position: {lat: pos['lat'], lng: pos['lng']},
    title: '我的位置',
    map: map,
  });

  var pos_infoWindow = new google.maps.InfoWindow();

  posMarker.addListener('click', function() {
    posInfoWindow(this, pos_infoWindow);
  });

  map.setCenter(pos);
  map.setZoom(16);

}