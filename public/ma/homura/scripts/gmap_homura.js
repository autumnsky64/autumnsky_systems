function initialize() {
    var myLatlng = new google.maps.LatLng(34.723802, 135.018386);
    var myOptions = {
      zoom: 15,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,//地図の表示形式を設定
    };

	var map_homura = new google.maps.Map(document.getElementById("map"), myOptions);

	var pos_homura = new google.maps.LatLng(34.728184,135.019008);

	var mark_homura = new google.maps.Marker({
		position: pos_homura,
		map: map_homura,
	});
};

google.maps.event.addDomListener(
    window
  , 'load'
  , initialize
);