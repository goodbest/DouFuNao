//不要直接用这个Key来刷嘛...
//真爱的话，请亲自用手来...
appID="A6985415001094";
appKey="9CCB020E-F8D5-480E-4715-BA4371FA38E3";

$(document).ready(function(){
    $("#tianBtn").click(function(){
        $.ajax({
          "url": "https://doufunao.herokuapp.com/",
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
          "url": "https://doufunao.herokuapp.com/",
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