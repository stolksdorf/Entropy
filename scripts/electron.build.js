//https://github.com/electron-userland/electron-packager/blob/master/docs/api.md

const packager = require('electron-packager');

const options = {
	dir: ".",
	name: "Entropy",
	overwrite: true,
	out: "release",
	tmpdir: false,
	asar : true,
	//icon : '',
	platform: "win32",
	ignore: [
		"[.]gitignore",
		"/scripts",
		'/interface',
		'/tests',
		'/config',
		'.md'
	]
}

module.exports = ()=>{
	return new Promise((resolve, reject)=>{
		packager(options, function(err, appPaths) {
			if (err) {
				console.log('Failed to build ' + options.platform + 'with error: ' + err);
				reject(err)
				process.exit(1);
			} else {
				console.log('Package created at ' + appPaths[0]);
				resolve();
			}
		});
	})
}

