const request = require('request');

exports.getPaymentSession = function(req, res){
	
	console.log("Input : "+JSON.stringify(req.body));
	var jsonToAdyen = req.body;
	jsonToAdyen.reference = "HnB100011";
	jsonToAdyen.shopperReference = "yourShopperId_IOfW3k9G2PvXFu2j";
	jsonToAdyen.channel ="Web";
	jsonToAdyen.html = "true";
	jsonToAdyen.merchantAccount = "HnBECommTest";
	jsonToAdyen.sdkVersion = "1.3.2";
	console.log("Formatted input : "+JSON.stringify(req.body));
	
	 request({
		 url: 'https://checkout-test.adyen.com/v32/paymentSession',
		 headers : {
			 'X-API-Key' : 'AQEfhmfuXNWTK0Qc+iSesFABe1h8Cxd32qLHGNBZ+MzNyhDBXVsNvuR83LVYjEgiTGAH-+JQpLkHSDmliqvoYb33/PwvkQ8anUgghE9YykxS+Rlk=-GLKj7HYgxLgjN2d5',
			 'Content-Type' : 'application/json'
		 },
		 method: 'POST',	
		 json: jsonToAdyen
	 }, function (err, res, body) {
		 console.log(JSON.stringify(body));
	  });
	 res.render('index', { title: 'Nadannu' });
};