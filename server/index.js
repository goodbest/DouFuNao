var express = require('express')
// var cors = require('cors')
var app = express();
var sha1 = require('sha1');
var bodyParser = require('body-parser');
var request = require('request');
var appID="A6986565458137"
var appKey = require('./key.js').getKey();
// app.use(cors());

app.set('port', (process.env.PORT || 5007));
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    res.setHeader('Content-Type','application/json');
    next();
});
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/', function(req, response, next) {
    var post_item=req.body.item
    item_inc={}
    item_inc[post_item]=1
    
    var now = Date.now();
    var appKeyHash = sha1(appID+"UZ"+appKey+"UZ"+now)+"."+now;
    var data={        
        "$inc": item_inc,
        '_method':'PUT'
    }

    request({
        url: 'https://d.apicloud.com/mcm/api/counts/doufunao',
        method: "POST",
        json: data,
        headers: {
            'Content-Type':'application/json', 
            'X-APICloud-AppId': appID, 
            'X-APICloud-AppKey': appKeyHash
        }
            },
        function(err, res, body) {
            if (!err && res.statusCode == 200) {
                response.json(body);
            }
        });
});
app.get('/', function(req, response, next) {
    
    var now = Date.now();
    var appKeyHash = sha1(appID+"UZ"+appKey+"UZ"+now)+"."+now;

    request({
        url: 'https://d.apicloud.com/mcm/api/counts/doufunao',
        method: "GET",
        headers: {
            'Content-Type':'application/json', 
            'X-APICloud-AppId': appID, 
            'X-APICloud-AppKey': appKeyHash
        }
            },
        function(err, res, body) {
            if (!err && res.statusCode == 200) {
                response.json(JSON.parse(body));
            }
        });
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


