# headerparser

Client posts a preset url, recieves header data from Server and shows it

## Tech
Express, Angular

## Niceties && Details

Header info extract: IP, Language, Software

```
		var langCapt = /([a-z]{2}-[A-Z]{2})/g;
		var softCapt = /\((.*)\)/g;
		var returnvalue = {
			"ipaddress": req.ip ||
					 req.connection.remoteAddress || 
					 req.socket.remoteAddress ||
					 req.connection.socket.remoteAddress ||
					req.headers['x-forwarded-for'],
			"language": req.headers['accept-language'].match(langCapt)[0],
			"software": softCapt.exec(req.headers['user-agent'])[1],
}
```
