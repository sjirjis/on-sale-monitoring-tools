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
			ssURL = "http://production-"+region+"-proxy.tnew.info/"+orgCode+"/tessitura.asmx/WebSeatServerConnectionCount";

		apiCall(ssURL);
	});

	function apiCall(url){
		$.ajax({URL: url, method: "GET"})
		.done(function(response){
			console.log('test');
			return response;
		})
	}
});