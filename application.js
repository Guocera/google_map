'use strict';
$(function() {
  var marker;
  var myLatLng = {
    lat: -34.397,
    lng: 150.644
  }

  initializeAPI();

  function initializeMarker(){
    marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello World!"
    })
  }

  function initializeAPI() {
    var body = $("body");
    var url = "https://maps.googleapis.com/maps/api/js?key=" +
      config.mapsAPI + 
      "&callback=initMap";

    $.getScript(url, function() {
        initializeMarker();
    });
    
  }

});

