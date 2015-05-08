$(document).ready(function(){
    $("#tianBtn").click(function(){
        $.ajax({
          "url": "http://doufunao.oschina.mopaas.com/",
          "method": "POST",
          "cache": false,
          "data": {
              "item":"tian"
          }
        }).success(function (data){
    	  location.reload();
      });
    });
    $("#xianBtn").click(function(){
        $.ajax({
          "url": "http://doufunao.oschina.mopaas.com/",
          "method": "POST",
          "cache": false,
          "data": {
              "item":"xian"
          }
        }).success(function (data){
    	  location.reload();
      });
    });
});