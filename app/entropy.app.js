const path = require('path');
const Electron = require('electron');
const app = Electron.app;


const createWindow = ()=>{
	win = new Electron.BrowserWindow({
		//width       : 500,
		//height      : 500,
	});


	win.loadURL('file://' + __dirname + '/../build/entropy.interface.html');

	win.webContents.openDevTools()

	Electron.globalShortcut.register('CommandOrControl+.', () => {
		console.log('CommandOrControl+. is pressed')
	});
};


app.on('ready', createWindow);
app.on('window-all-closed', ()=>app.quit());
app.on('will-quit', () => {
	// Unregister all shortcuts.
	Electron.globalShortcut.unregisterAll()
})