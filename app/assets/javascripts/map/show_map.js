function initMap() {
  //Create your own style
  let styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  // Constructor creates a new map - only center and zoom are required.

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 23.781389, lng: 120.958699},
    zoom: 8,
    styles: styles,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
    }
  });

  // console.log(locations)


  let largeInfowindow = new google.maps.InfoWindow();

  let defaultIcon = makeMarkerIcon('0091ff');

  //Create a "highlighted location" marker color for when the user
  //Mouse over the marker
  let highlightedIcon = makeMarkerIcon('FFFF24')

  let url = 'api/v1/coffees'
  fetch(url)
  .then(function(response){
    return response.json()
  }) // to json
  .then(function(json){
    locations = json.data
    for (let i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      let position = locations[i].location;
      let title = '<h3>' + locations[i].title + '</h3><br>' + '營業時間：' + locations[i].open_time + '<br>' + '地址：' + locations[i].address + '<br>' +  'wifi：' + locations[i].wifi + '<br>' + 'seat：' + locations[i].seat + '<br>' + '相關連結：' + '<a href=' + locations[i].url + '>' + locations[i].url + '</a>';
      // Create a marker per location, and put into markers array.
      let marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        icon: defaultIcon,
        animation: google.maps.Animation.DROP,
        id: i
      });

      markers.push(marker);

      marker.addListener('click', function() {
        populateInfoWindow(this, largeInfowindow);
      });

      marker.addListener('mouseover', function(){
        this.setIcon(highlightedIcon);
      });
      marker.addListener('mouseout', function(){
        this.setIcon(defaultIcon);
      });
    }

    let markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    })
  .catch(function(error) {
    console.log('error', error);
    alert(error);
  })

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      let posMarker = new google.maps.Marker({
        position: {lat: pos['lat'], lng: pos['lng']},
        title: '我的位置',
        map: map,
      });

      let pos_infoWindow = new google.maps.InfoWindow();

      posMarker.addListener('click', function() {
        posInfoWindow(this, pos_infoWindow);
      });

      map.setCenter(pos);
      map.setZoom(16);

      //定位點的infowindow 並自動打開
      // pos_infoWindow.setPosition(pos);
      // pos_infoWindow.setContent('Location found.');

      // var posMarker = new google.maps.Marker({
      //   position: {lat: pos['lat'], lng: pos['lng']},
      //   title: '我的位置',
      //   map: map,
      // });

      // var pos_infoWindow = new google.maps.InfoWindow();

      // posMarker.addListener('click', function() {
      //   posInfoWindow(this, pos_infoWindow);
      // });


      // map.setCenter(pos);
      // map.setZoom(16);
      // pos_infoWindow.open(map);

    });
  }

  document.getElementById('search-within-time').addEventListener('click', function() {
      searchWithinTime();
    });

  // document.getElementById('關').addEventListener('click', function() {
  //       hideMarkers(markers);
  //   });

}