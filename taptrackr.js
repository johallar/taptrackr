var express = require('express'),
    app = express(),
    FS_CLIENT_ID = '1OMJLWUT03ZZB01QKFBSUSUX5M30QITADSXE3I3GOSN1HP2U',
    FS_CLIENT_SECRET = 'OZ40LI24MOBP21HQYKUA2CRX23B555B4LIOYPWWRIOPPM2BV';

app.get('/fs_venues', function(req, res) {
	var lat = req.query.lat,
		lng = req.query.lng,
		api = require('node-foursquare-venues')(FS_CLIENT_ID, FS_CLIENT_SECRET);

	api.venues.search({'ll': lat + ',' + lng}, function(status, data) {
		if (status !== 200) {
			console.log(status);
			res.send(status);
		} else {
			res.send(data);
		}
	});
});

app.use(express.static(__dirname + '/public'));
app.listen(8002);
