const request = require('request');
const config = require('../config/config.json')

exports.getPaymentSession = function(req, res){
	
	console.log("Input received : "+JSON.stringify(req.body));
	var jsonToAdyen = req.body;
	jsonToAdyen.reference = config.adyen.reference;
	jsonToAdyen.shopperReference = config.adyen.shopperReference;
	jsonToAdyen.channel = config.adyen.channel;
	jsonToAdyen.html = config.adyen.html;
	jsonToAdyen.merchantAccount = config.adyen.merchantAccount;
	jsonToAdyen.sdkVersion = config.adyen.sdkVersion;
	console.log("Formatted input : "+JSON.stringify(req.body));
	var output = 'Test';
	
	 request({
		 url: config.adyen.sessionEndpoint,
		 headers : {
			 'X-API-Key' : config.adyen.xAPIKey,
			 'Content-Type' : 'application/json'
		 },
		 method: 'POST',	
		 json: jsonToAdyen
	 }, function (err2, res2, body2) {
		 console.log("Resp from Adyen : "+JSON.stringify(body2));
		 output = JSON.stringify(body2);
		 res.writeHead(200, {
			    'Content-Type': 'application/json',
			});
			 res.write(output);
			 res.end();		 
	  });
};