$(document).ready(function(){
    function queryMubiz(url, selector){
        $.ajax({
            type: "GET",
            url: "http://bitcoin.mubiz.com/"+url,
            dataType: 'json'
        }).done(function(data){
            $(selector).html(JSON.stringify(data, null, 2));
        });
    }

    queryMubiz("blockchaininfo", "#demo");

});