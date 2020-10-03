function displayDirections(destination) {
  let directionsService = new google.maps.DirectionsService;
  //Get mode again from the user entered value.
  let mode = 'WALKING';
  directionsService.route({
    //The origin is the passed in marker's position.
    origin: pos,
    //The destination is user enterd address.
    destination: destination,
    travelMode: google.maps.TravelMode[mode]
  }, function(response, status){
    if (status == google.maps.DirectionsStatus.OK) {
      // hideMarkers(markers);
      let directionsDisplay = new google.maps.DirectionsRenderer({
        map: map,
        directions: response,
        draggable: true,
        polylineOptions: {
          strokeColor: 'yellow'
        },
        suppressMarkers: true
    });
  } else {
    window.alert('Directions request failed due to ' + status);
  }
 });
}