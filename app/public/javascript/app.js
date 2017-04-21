$(document).ready(function(){

    $('.modal').modal('hide');

    $("#orgCode").keypress(function(e){
        if(e.keyCode === 13){
            $("#orgInfoBtn").click();
        } else {
            return;
        }
    });

    var ssId = 1;

    $("#orgInfoBtn").on("click", function(event){
        $("#orgInfoBtn").attr("disabled", true);

        var userInput = {
            region: $("#regionSelect option:selected").val().trim(),
            orgCode: $("#orgCode").val().trim().toUpperCase()           
        };

        function ssCall(){
            $.post('/', userInput, function(data){  
                console.log(data);     
                if(data === 'invalid org code'){
                    clearInterval(ssCallInterval);
                    $('.modal').modal('show');
                    $("#orgInfoBtn").attr("disabled", false);
                } else {
                    $('#ssTable > tbody:last-child').prepend('<tr>'
                        +'<td>' + ssId + '</td>'
                        +'<td>' + data.timeStamp + '</td>'
                        +'<td>' + data.ssCount + '</td>'
                        + '</tr>'
                    );  
                    ssId++;  
                }        
            });
        };

        ssCall();
        var ssCallInterval = setInterval(function(){ssCall()}, 60000 * 3);  

        $("#stop").on("click", function(event){
            clearInterval(ssCallInterval);
            $("#orgInfoBtn").attr("disabled", false);
        });
    });
});

