$(document).ready(function(){
	
	$("#orgCode").keypress(function(e){
		if(e.keyCode === 13){
			$("#orgCodeBtn").click();
		} else {
			return;
		}
	});

	$("#orgCodeBtn").on("click", function(){
		var orgCode = $("#orgCode").val().trim(),
			region = $("#regionSelect option:selected").val().trim(),
			//apiURL = "http://production-"+region+"-proxy.tnew.info/"+orgCode+"/tessitura.asmx"
			apiUrl = "http://staging-"+region+"-proxy.tnew.info/"+orgCode+"/tessitura.asmx"
			seatServerUrl = apiUrl + "/WebSeatServerConnectionCount";
			//discovered when making calls through the proxy, all parameters are required instead of only the required parameters defined in the documentation
			//the following query works in the RAMP environment, but not through the proxy
			getProductions = apiUrl + "/GetProductions?iVenueID=-1&iModeOfSale=12&iBusinessUnit=-1"

			//console.log(getProductions);

		apiCall(seatServerUrl);
	});

	function apiCall(url){
		$.ajax({URL: url, method: "GET", dataType: "html"})
		.done(function(response){

			var parser, xmlDoc;

			parser = new DOMParser();
			xmlDoc = parser.parseFromString(response,"text/xml");

			$("#ssText").html('Seat Server Count: '
			+ xmlDoc.getElementsByTagName("int")[0].childNodes[0].nodeValue)

			//console.log(response);
			//getting error: 
			//XMLHttpRequest cannot load file:///C:/Users/Steven/Documents/toolbox/on-sale-monitoring-tools/index.html. 
			//Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.
			//so I pushed to Heroku and tried to run from there, but the markup ends up being the response 
		})
	}
});