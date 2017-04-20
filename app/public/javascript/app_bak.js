// $(document).ready(function(){
	
	// $("#orgCode").keypress(function(e){
	// 	if(e.keyCode === 13){
	// 		$("#orgCodeBtn").click();
	// 	} else {
	// 		return;
	// 	}
	// });

	$("#orgCodeBtn").on("click", function(){
alert('hello');

		var userInput = {
			orgCode: $("#orgCode").val().trim(),
			region: $("#regionSelect option:selected").val().trim()
		};
		// var orgCode = $("#orgCode").val().trim(),
		// 	region = $("#regionSelect option:selected").val().trim(),
		// 	//apiURL = "http://production-"+region+"-proxy.tnew.info/"+orgCode+"/tessitura.asmx"
		// 	apiUrl = "http://staging-"+region+"-proxy.tnew.info/"+orgCode+"/tessitura.asmx"
		// 	seatServerUrl = apiUrl + "/WebSeatServerConnectionCount";
		// 	//discovered when making calls through the proxy, all parameters are required instead of only the required parameters defined in the documentation
		// 	//the following query works in the RAMP environment, but not through the proxy
		// 	getProductions = apiUrl + "/GetProductions?iVenueID=-1&iModeOfSale=12&iBusinessUnit=-1"

			//console.log(getProductions);
alert(userInput);
		$.get('/', userInput, function(data){
			alert(data);
		});		

		// apiCall(seatServerUrl);
	});

	// function apiCall(url){}//@todo using node stuff below
// });
// var https = require('https');
// var parseString = require('xml2js').parseString;

// https.get('https://staging-na-proxy.tnew.info/lajp/tessitura.asmx/WebSeatServerConnectionCount', function(res){
// 	console.log('--------------------')	
// 	console.log('statusCode:', res.statusCode);
// 	console.log('--------------------')
// 	//console.log('headers:', res.headers);

// 	res.on('data', function(d){
// 		process.stdout.write(d);

// 		parseString(d, function(err, res){
// 			console.log('--------------------')
// 			console.log(res.int._);
// 			console.log('--------------------')		
// 		});
// 	});
// }).on('error', function(e){
// 	console.error(e);
