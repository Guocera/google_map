$(function() {
  var map;
  var marker;
  var myLatLng = {
    lat: -34.397,
    lng: 150.644
  }

  initializeAPI();

  initializeMarker();




function initializeMarker(){

}

function initializeAPI() {
  var body = $("body");
  body.append("<script async defer src='https://maps.googleapis.com/maps/api/js?key=" +
    config.mapsAPI + 
    "&callback=initMap'></script>");
}

function initMap() {
  map = new google.maps.Map($("#map"), {
    center: myLatLng,
    zoom: 8
  });
}

});

