// routes.js
module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
		console.log("got '/'")
        res.render('index.ejs'); // load the index.ejs file
    });
	app.post('/api/whoami', function(req, res) {
		var returnvalue = {
			"ipaddress":req.connection.remoteAddress,
			"language": req.headers['accept-language'],
			"software": req.headers['user-agent'],
		}
        res.send(JSON.stringify(returnvalue)); // send STRING with JSON data inside
    });
}