var scanner = require('chromecast-scanner');

scanner(function(err, service) {
  console.log('chromecast %s running on: %s',
    service.name,
    service.data);
});

var nodecast = require('nodecast');

var devices = nodecast.find();

devices.once('device', function(device) {
	var yt = device.app('YouTube');

	yt.start('v=12345', function(err) {
		// starts the app on the device
		// also optionally takes data to pass to the app
		// (for example: youtube takes v=id to launch with a video)
	});
});