module.exports = function(vitreum, config){

	console.log(config);

	return `
<!DOCTYPE html>
<html>
	<head>
		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
		<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />
		<link rel="icon" href="/assets/homebrew/favicon.ico" type="image/x-icon" />

		<title>Entropy</title>
		<link rel="stylesheet" type="text/css" href="temp/bundle.css" />
	</head>
	<body>
		<main id="reactRoot">${vitreum.body}</main>
	</body>
	<script src="libs.js"></script>
	<script src="temp/bundle.js"></script>
	<script>
		(function(){
			var root = document.getElementById('reactRoot');
			if(!root) throw "Vitreum: Could not find element with id 'reactRoot' to mount into";
			var element = require('react').createElement(temp, {"env":"local"});
			require('react-dom').render(element, root);
		})();
	</script>
	<script>require('electron-connect').client.create()</script>
</html>
`;
}



