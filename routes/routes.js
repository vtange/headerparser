// routes.js
module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
		console.log("got '/'")
        res.render('index.ejs'); // load the index.ejs file
    });
	app.get('/api/whoami', function(req, res) {
		var headers = req.headers;
		var ip = req.connection.remoteAddress;
        res.send(ip); // load the index.ejs file
    });
}