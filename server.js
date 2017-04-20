var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	https = require('https'),
	parseString = require('xml2js').parseString,	
	path = require('path');

const PORT = 3000;

app.listen(PORT);

app.use(express.static(__dirname + '/app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

app.post('/', function(req, res){
	var orgCode = req.body.orgCode,
	region = req.body.region,
	apiUrl = "https://staging-" + region + "-proxy.tnew.info/" + orgCode + "/tessitura.asmx",
	seatServerUrl = apiUrl + "/WebSeatServerConnectionCount";

	https.get(seatServerUrl, function(res){
		res.on('data', function(data){
			parseString(data, function(err, res){
				console.log(res.int._);
			});
		});
	}).on('error', function(err){
		console.error(err);
	});

	res.send('Cant figure out how to send the response of the https call over to the client.');
});
