module.exports = function(vitreum, config){
	const props = {};

	let connectScript = `<script>require('electron-connect').client.create({ logLevel: 0})</script>`;
	if(config.isProd) connectScript = '';

	return `
<!DOCTYPE html>
<html>
	<head>
		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
		<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />
		<link rel="icon" href="/assets/homebrew/favicon.ico" type="image/x-icon" />

		<title>Entropy</title>
		<link rel="stylesheet" type="text/css" href="entropy/bundle.css" />
	</head>
	<body>
		<main id="reactRoot">${vitreum.body}</main>
	</body>
	<script src="libs.js"></script>
	<script src="entropy/bundle.js"></script>
	<script>
		(function(){
			var root = document.getElementById('reactRoot');
			if(!root) throw "Vitreum: Could not find element with id 'reactRoot' to mount into";
			var element = require('react').createElement(entropy, ${JSON.stringify(props)});
			require('react-dom').render(element, root);
		})();
	</script>
	${connectScript}
</html>
`;
}



