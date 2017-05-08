var validOrgCodes = require ("../data/validOrgCodes"),
	https = require('https'),
	parseString = require('xml2js').parseString,	
	moment = require('moment'),
	path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, 'app/public/index.html'));
	});

	app.post('/', function(req, res){
		var orgCode = req.body.orgCode,
		region = req.body.region,
		environment = req.body.environment,
		apiUrl = "https://" + environment + "-" + region + "-proxy.tnew.info/" + orgCode + "/tessitura.asmx",
		seatServerUrl = apiUrl + "/WebSeatServerConnectionCount";

		if(validOrgCodes.indexOf(orgCode) >= 0){
			https.get(seatServerUrl, function(apiRes){
				apiRes.on('data', function(data){
					parseString(data, function(err, apiRes){
						res.send({ssCount: apiRes.int._, timeStamp: moment().format('MM/DD hh:mm')});
					});
				});
			}).on('error', function(err){
				console.error(err);
			});			
		} else {
			res.send('invalid org code');
		}
	});
};
