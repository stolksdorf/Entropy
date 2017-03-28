//https://github.com/electron-userland/electron-packager/blob/master/docs/api.md

const packager = require('electron-packager');

const options = {
	dir: ".",
	name: "Entropy",
	overwrite: true,
	out: "build",
	tmpdir: false,
	asar : true,
	platform: "win32",
	ignore: ["[.]gitignore", "[.]DS_Store", "[.]idea", "scripts", "Dockerfile", ".*[.]sublime-"]
}

packager(options, function(err, appPaths) {
	if (err) {
		console.log('Failed to build ' + options.platform + 'with error: ' + err);
		process.exit(1);
	} else {
		console.log('Package created at ' + appPaths[0]);
	}
});