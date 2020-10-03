function displayMarkersWithinTime(response) {
  let maxDuration = document.getElementById('max-duration').value;
  let origins = response.originAddresses;
  let destinations = response.destinationAddresses;
  // Parse through the results, and get the distance and duration of each.
  // Because there might be multiple origins and destination we have a nested loop
  //Then, make sure at least 1 result was found.
  let atLeastOne = false;
  findnum = 0;

  for (let i = 0; i < origins.length; i++) {
    let results = response.rows[i].elements;
    for (let j = 0; j < results.length; j++) {
      let element = results[j];
      if (element.status === "OK") {
        // The distance is returned in feet, but the TEXT is in miles. If we wanted to switch the function to show markers within a user-entered DISTANCE, we would need the value for distance, but for now we only need the text.
        // var distanceText = element.distance.text;
        let distance_num = element.distance.value;
        // Duration value is given in seconds so we make it MINUTES. We need both the value and the text.
        let duration = element.duration.value/60;
        let duration_num = Math.round(duration);
        // var durationText = element.duration.text;
        if (duration <= maxDuration) {
          //the origin [i] should = the marker[i]
          findnum += 1;
          console.log(findnum);
          // $('#show-result').html("<h4>共 " + findnum + " 筆結果</h4>");
          markers[marker_id[j]].setMap(map);
          atLeastOne = true;
          // Create a mini infowindow to open immediately and contain the distance and duration
          let infowindow = new google.maps.InfoWindow({
            content: '約 ' + duration_num + ' 分鐘可達， ' + distance_num + ' 公尺' + '<div><input type=\"button\" value=\"最佳路徑\" onclick =' + '\"displayDirections(&quot;' + destinations[j] + '&quot;);\"></input></div>'
          });
          infowindow.open(map, markers[marker_id[j]]);
          // Put this in so that this small window closes if the user clicks the marker, when the big infowindow opens
          markers[i].infowindow = infowindow;
          google.maps.event.addListener(markers[marker_id[j]], 'click', function(){
            this.infowindow.close();
          });
        }
      }
    }

    $('#show-result').html("<h4>共 " + findnum + " 筆結果</h4>");
  }
}