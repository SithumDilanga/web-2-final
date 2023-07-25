$(function(){
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

function initialize(){
  var map = new google.maps.Map(document.getElementById('mymap'),{
    zoom: 10,
    center: {lat: 6.6662786, lng: 79.9319047},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  );

  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(6.6662786, 79.9319047),
    map: map,
    title: "MyHome"
  })

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(6.8544958,79.9078393),
    map: map,
    title: "My University"
  })

  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(6.7101186,79.90503),
    map: map,
    title: "Neighboring town"
  })

  var info1 = new google.maps.InfoWindow({
    content:"My Hometown in Wadduwa, Srilanka"
  });

  var info2 = new google.maps.InfoWindow({
    content:"My University"
  });

  var info3 = new google.maps.InfoWindow({
    content:"Neighboring town"
  });

  google.maps.event.addListener(marker1, "click",
    function(){
      info1.open(map, marker1);
  });

  google.maps.event.addListener(marker2, "click",
    function(){
      info2.open(map, marker2);
  });

  google.maps.event.addListener(marker3, "click",
    function(){
      info3.open(map, marker3);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);