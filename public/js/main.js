Modernizr.load({
    test: Modernizr.geolocation,
    yep: 'js/geo.js',
    nope: function() { console.log("no geolocation"); }
});

$.get('taplist/1')
	.done(function(data) {
		$('#taplist').text(data);
	});