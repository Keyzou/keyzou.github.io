$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://blockchain.info/fr/block-height/5?format=json",
        dataType: 'json'
    }).then(function(data){
        $(".blocks").html(data.blocks);
    });


});