function addMarkersToMap(map) {
    var parisMarker = new H.map.Marker({lat:25.276987, lng:55.296249});
    map.addObject(parisMarker);
}

var platform = new H.service.Platform({
  'apikey': 'kvWNTuLiSY87feETLEq3ljCCFK6ek7k-Nk-gjp-dw6Q'
});
var defaultLayers = platform.createDefaultLayers();


var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:24.488180, lng:54.354950},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});

window.addEventListener('resize', () => map.getViewPort().resize());


var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


var ui = H.ui.UI.createDefault(map, defaultLayers);

window.onload = function () {
  addMarkersToMap(map);
}
