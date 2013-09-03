function get_location() {
    navigator.geolocation.getCurrentPosition(handle_location, err);
}

function handle_location(pos) {
    var lat = pos.coords.latitude,
		lng = pos.coords.longitude;
    $.get('/fs_venues', {"lat": lat, "lng": lng})
		.done(function(data) {
			venues = "";
			for (var venue in data.response.venues) {
				venues += data.response.venues[venue].name + "</br>";
			}
			$('#locations').text(venues);
			console.log("Got venues: " + data);
		});
}

function err(e) {
	$('#locations').text("Could not get locations from Foursquare");
    console.error(e);
}

get_location();
