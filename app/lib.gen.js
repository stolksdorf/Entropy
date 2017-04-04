const _ = require('lodash');
const Settings = require('./settings.json');
const fs = require('fs');
const path = require('path');

const ID3 = require('./id3.js');

//console.log(Settings);


const songs = _.reduce(Settings.library, (r, libPath)=>{

	return r.concat(_.map(fs.readdirSync(libPath), (song)=>path.join(libPath, song)));
}, []);

//console.log('songs', songs);


const parseSong = (filepath)=>{
	const stats = fs.statSync(filepath);

	//If no entropy ID exists,
	//  Add a Guid, read duration, add a date added, 0 play count,


	var read = ID3.read(filepath)
	console.log(read);
	//console.log(stats);

	const result = ID3.write(_.assign(read, {
		comment : { language: "eng", text: "mycomment"},
		contentGroup : 'test',
		playCounter : 3,
		test : 'NEATO'
	}), filepath)

	console.log('result', result);

}

const addSong = (filepath)=>{

}


//console.log(_.map(songs, parseSong));

parseSong(songs[0]);
