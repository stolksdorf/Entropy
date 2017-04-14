const label = 'dev';
console.time(label);

const fse = require('fs-extra');

const template = require('../client/temp/template.js');

const render = require('vitreum/steps/render.js');
const jsx = require('vitreum/steps/jsx.watch.js');
const less = require('vitreum/steps/less.watch.js');
const assets = require('vitreum/steps/assets.watch.js');
const server = require('vitreum/steps/server.watch.js');
const livereload = require('vitreum/steps/livereload.js');

const Proj = require('./project.json');
const watch  = require('chokidar').watch;

var electron = require('electron-connect').server.create({
	stopOnClose : true,
	logLevel : 0
});



const electronCheck = (state)=>{
	if(state == 'stopped'){
		process.exit();
	}
}

const electronWatch = ()=>{
	//If anything changes within /app
	watch('./app.js').on('change',()=>{
		console.log('app changed');
		electron.restart(electronCheck)
	})

	watch('./build').on('change',()=>{
		console.log('client changed');
		electron.reload(electronCheck)
	})
	console.log('setup electron watcher');
}

//todo break out into own file
const renderAppHtml = ()=>{
	return render(Proj.root.name, template, {}, {
			env : process.env.NODE_ENV
		}, {useStatic : true})
		.then((renderedPage)=>{
			return new Promise((resolve, reject)=>{
				fse.writeFile('./build/yo.html', renderedPage, resolve)
			})
		})
}



Promise.resolve()
	.then(()=>jsx(Proj.root.name, Proj.root.path, Proj.libs, Proj.common))
	.then((deps)=>less(Proj.root.name, Proj.common, deps))
	.then(()=>assets(Proj.assets, Proj.common))
	//.then(()=>livereload())
	//.then(()=>server('./server.js', ['server']))
	.then(()=>renderAppHtml())
	.then(()=>electron.start(electronCheck))
	.then(()=>electronWatch())
	.then(()=>console.timeEnd.bind(console, label))
	.catch(console.error)