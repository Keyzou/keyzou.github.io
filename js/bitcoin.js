$(document).ready(function(){
    function queryMubiz(url, selector, jsonElem){
        $.ajax({
            type: "GET",
            url: "http://bitcoin.mubiz.com/"+url,
            dataType: 'json'
        }).done(function(data){
            $(selector).append(data[jsonElem]);
        });
    }

    queryMubiz("blockchaininfo", "#blocks", "blocks");
    queryMubiz("blockchaininfo", "#difficulty", "difficulty");
    queryMubiz("blockchaininfo", "#chain", "chain");
    queryMubiz("blockchaininfo", "#bestblockhash", "bestblockhash");
    queryMubiz("blockchaininfo", "#headers", "headers");

    $("#formAdresse :input").change(function(){
        if(/^[0-9a-zA-Z]{34}$/.test($("#address").val())){
            if($("#groupAddress").hasClass("has-danger")){
            $("#groupAddress").removeClass("has-danger");
            $("#address").removeClass("form-control-danger");
        }
            $("#groupAddress").addClass("has-success");
            $("#address").addClass("form-control-success");
        }else {
            if($("#groupAddress").hasClass("has-success")){
                $("#groupAddress").removeClass("has-success");
                $("#address").removeClass("form-control-success");
            }
            $("#groupAddress").addClass("has-danger");
            $("#address").addClass("form-control-danger");
        }

    });

    $("#formAdresse").submit(function(event){
        if(/^[0-9a-zA-Z]{34}$/.test($("#address").val())){
            alert("ok!");
        }else{
            $("#groupAddress").addClass("has-danger");
            $("#address").addClass("form-control-danger");
            event.preventDefault();
        }
    })

});