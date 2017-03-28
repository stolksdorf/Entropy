const path = require('path');
const Electron = require('electron');
const app = Electron.app;



require('electron-reload')(__dirname+'/public');

const createWindow = ()=>{
	win = new Electron.BrowserWindow({
		width       : 500,
		height      : 500,
	});

	win.loadURL('file://' + __dirname + '/client/main.html');



	const ret = Electron.globalShortcut.register('CommandOrControl+X', () => {
		console.log('CommandOrControl+X is pressed')
	});

};

app.on('ready', createWindow);

app.on('window-all-closed', function() {
	app.quit();
});

app.on('will-quit', () => {
	// Unregister all shortcuts.
	Electron.globalShortcut.unregisterAll()
})