var http = require('http');
var dt = require('./mydate');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true);

var qHost ="<p>Host is: "+ q.host+" done</p>";
var qPath = "<p>Host is: "+q.pathName+" done</p>";
var qSearch = "<p>Host is: "+q.search+" done</p>";;
var q1 = q.query;
	var txt = q1.year + " " + q1.month;
    res.write(qHost +qPath+qSearch+req.url+"\nThe date and time are currently: " + dt.myDateTime()+"  "+txt);
    res.end();
}).listen(8080);