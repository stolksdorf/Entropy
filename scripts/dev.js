const label = 'dev';
console.time(label);

const Proj = require('./project.json');
const watch  = require('chokidar').watch;

const lib   = require('vitreum/steps/libs.js');
const jsx = require('vitreum/steps/jsx.watch.js');
const less = require('vitreum/steps/less.watch.js');
const assets = require('vitreum/steps/assets.watch.js');
const interface = require('./interface.build.js');


const electron = require('electron-connect').server.create({
	stopOnClose : true,
	logLevel : 0
});

const electronCheck = (state)=>{
	if(state == 'stopped') process.exit();
}
const electronWatch = ()=>{
	watch('./app').on('change',  ()=>electron.restart(electronCheck))
	watch('./build').on('change',()=>electron.reload(electronCheck))
}



Promise.resolve()
	.then(()=>lib(Proj.libs))
	.then(()=>jsx(Proj.root.name, Proj.root.path, Proj.libs, Proj.common))
	.then((deps)=>less(Proj.root.name, Proj.common, deps))
	.then(()=>assets(Proj.assets, Proj.common))
	.then(()=>interface())
	.then(()=>electron.start(electronCheck))
	.then(()=>electronWatch())
	.then(()=>console.timeEnd.bind(console, label))
	.catch(console.error)