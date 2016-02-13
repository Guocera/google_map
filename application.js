'use strict';
$(function() {
  var marker;
  var myLatLng = {
    lat: 49.2827,
    lng: -123.1207
  };

  initializeAPI();

  function initializeMarker(myLatLng){
    marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello World!"
    });
  }

  function initializeAPI() {
    var url = "https://maps.googleapis.com/maps/api/js?key=" +
      config.mapsAPI + 
      "&callback=initMap";

    $.getScript(url, function() {
        initializeMarker(myLatLng);
        var vancouver = marker.getPosition();
        map.setCenter(vancouver);
    });
    
  }

});

