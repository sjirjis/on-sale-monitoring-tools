$(document).ready(function(){
    
    $("#orgCode").keypress(function(e){
        if(e.keyCode === 13){
            $("#orgCodeBtn").click();
        } else {
            return;
        }
    });

    $("#orgCodeBtn").on("click", function(event){
        var userInput = {
            region: $("#regionSelect option:selected").val().trim(),
            orgCode: $("#orgCode").val().trim()           
        };

        $.post('/', userInput, function(data){
            console.log(data);
        });     
    });
});