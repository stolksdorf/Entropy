const fse = require('fs-extra');
const template = require('./template.js');
const Proj = require('./project.json');
const render = require('vitreum/steps/render.js');

module.exports = (isProd=false)=>{
	return render(Proj.root.name, template, {}, {
			env : process.env.NODE_ENV,
			isProd
		}, {useStatic : true})
		.then((renderedPage)=>{
			return new Promise((resolve, reject)=>{
				fse.writeFile('./build/entropy.interface.html', renderedPage, resolve)
			})
		})
}