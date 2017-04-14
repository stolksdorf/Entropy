//https://github.com/electron-userland/electron-packager/blob/master/docs/api.md

const packager = require('electron-packager');

const options = {
	dir: ".",
	name: "Entropy",
	overwrite: true,
	out: "final",
	tmpdir: false,
	//asar : true,
	//icon : '',
	platform: "win32",
	ignore: [
		"[.]gitignore",
		"[.]DS_Store",
		"[.]idea",
		"scripts",
		"Dockerfile",
		".*[.]sublime-",
		'client',
		'.md'
	]
}

packager(options, function(err, appPaths) {
	if (err) {
		console.log('Failed to build ' + options.platform + 'with error: ' + err);
		process.exit(1);
	} else {
		console.log('Package created at ' + appPaths[0]);
	}
});