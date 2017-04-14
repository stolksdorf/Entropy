const path = require('path');
const Electron = require('electron');
const app = Electron.app;


const renderPage = (req, res, next) => {

};




//require('electron-reload')(__dirname+'/public');

const createWindow = ()=>{
	win = new Electron.BrowserWindow({
		width       : 500,
		height      : 500,
	});




	win.loadURL('file://' + __dirname + '/build/yo.html');

	win.webContents.openDevTools()

	Electron.globalShortcut.register('CommandOrControl+.', () => {
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