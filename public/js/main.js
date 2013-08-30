Modernizr.load({
    test: Modernizr.geolocation,
    yep: 'js/geo.js',
    nope: function() { console.log("no geolocation"); }
})
