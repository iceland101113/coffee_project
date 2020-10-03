function searchWithinTime() {
  // Initailize the distance matrix service.
  let wifi_option = $("input:radio[name=wifi]:checked").val();
  let seat_option = $("input:radio[name=seat]:checked").val();
  let distanceMatrixService = new google.maps.DistanceMatrixService;

    // Use the distance matrix service to calculate the duration of the routes between all our markers, and the destination address entered by the user. Then put all the origins into an origin matrix.
  let destinations = [];
  marker_id = [];
  if (wifi_option == null && seat_option == null){
    for (let i = 0; i < markers.length; i++) {
      if (locations[i].location.lat <= pos.lat+0.005 && locations[i].location.lng <= pos.lng+0.005 && locations[i].location.lat >= pos.lat-0.005 && locations[i].location.lng >= pos.lng-0.005 ){
        destinations.push(locations[i].location);
        marker_id.push(i);
      }
    }
  } else if (wifi_option != null && seat_option == null) {
    for (let i = 0; i < markers.length; i++) {
      if (locations[i].location.lat <= pos.lat+0.005 && locations[i].location.lng <= pos.lng+0.005 && locations[i].location.lat >= pos.lat-0.005 && locations[i].location.lng >= pos.lng-0.005 && locations[i].wifi >= parseInt(wifi_option) ){
        destinations.push(locations[i].location);
        marker_id.push(i);
      }
    }
  } else if (wifi_option == null && seat_option != null ) {
    for (let i = 0; i < markers.length; i++) {
      if (locations[i].location.lat <= pos.lat+0.005 && locations[i].location.lng <= pos.lng+0.005 && locations[i].location.lat >= pos.lat-0.005 && locations[i].location.lng >= pos.lng-0.005 && locations[i].seat >= parseInt(seat_option) ){
        destinations.push(locations[i].location);
        marker_id.push(i);
      }
    }
  } else {
    for (let i = 0; i < markers.length; i++) {
      if (locations[i].location.lat <= pos.lat+0.005 && locations[i].location.lng <= pos.lng+0.005 && locations[i].location.lat >= pos.lat-0.005 && locations[i].location.lng >= pos.lng-0.005 && locations[i].wifi >= parseInt(wifi_option) && locations[i].seat >= parseInt(seat_option) ){
        destinations.push(locations[i].location);
        marker_id.push(i);
      }
    }
  }

  let origin = pos;
  let mode = 'WALKING';
  let re
  // Now that both the origins and destination are defined, get all the info for the distances between them.

  re = distanceMatrixService.getDistanceMatrix({
    origins: [origin],
    destinations: destinations,
    // destinations: [{lat: 25.04081, lng: 121.506566}, {lat: 25.0418973, lng: 121.5047744}],
    travelMode: google.maps.TravelMode[mode],
    unitSystem: google.maps.UnitSystem.METRIC,
  })
  console.log('response:')
  console.log(re)

  distanceMatrixService.getDistanceMatrix({
    origins: [origin],
    destinations: destinations,
    // destinations: [{lat: 25.04081, lng: 121.506566}, {lat: 25.0418973, lng: 121.5047744}],
    travelMode: google.maps.TravelMode[mode],
    unitSystem: google.maps.UnitSystem.METRIC,
  }, function(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      window.alert('Error was' + status);
    } else {
      displayMarkersWithinTime(response);
      re = response
    }
  })
}