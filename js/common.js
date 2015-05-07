//不要直接用这个Key来刷嘛...
//真爱的话，请亲自用手来...
appID="A6985415001094";
appKey="9CCB020E-F8D5-480E-4715-BA4371FA38E3";

$(document).ready(function(){
    $("#tianBtn").click(function(){
        var now = Date.now();
        var appKeyHash = sha1(appID+"UZ"+appKey+"UZ"+now)+"."+now
        $.ajax({
          "url": "https://d.apicloud.com/mcm/api/counts/doufunao",
          "method": "POST",
          "cache": false,
          "headers": {
            "X-APICloud-AppId": appID,
            "X-APICloud-AppKey": appKeyHash
          },
          "data": {
            "$inc": {
              "tian": 1
            },
            "_method": "PUT"
          }
        }).success(function (data){
    	  location.reload();
      });
    });
    $("#xianBtn").click(function(){
        var now = Date.now();
        var appKeyHash = sha1(appID+"UZ"+appKey+"UZ"+now)+"."+now
        $.ajax({
          "url": "https://d.apicloud.com/mcm/api/counts/doufunao",
          "method": "POST",
          "cache": false,
          "headers": {
            "X-APICloud-AppId": appID,
            "X-APICloud-AppKey": appKeyHash
          },
          "data": {
            "$inc": {
              "xian": 1
            },
            "_method": "PUT"
          }
        }).success(function (data){
    	  location.reload();
      });
    });
});