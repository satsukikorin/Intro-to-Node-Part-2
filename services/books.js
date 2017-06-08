let bookServiceEndpoint = "http://www.mocky.io/v2/59306e67100000cb04995ed2";

const request = require('request-promise');

module.exports = {
    
    get: function(category) {
        
        var options = {
            uri: bookServiceEndpoint,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        return request(options);
    }
	
}