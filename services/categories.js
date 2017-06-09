let categoryServiceEndpoint = "http://www.mocky.io/v2/59303d221000006d02995e6e";
const request = require('request-promise');

module.exports = {
    
    get: function(category) {
        
        var options = {
            uri: categoryServiceEndpoint,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        var servicePromise = new Promise((resolve, reject) => {
            
            let fetch = request(options) || undefined;
            
            fetch.then(function(categories){
                
                let categoryList = category ? (categories[category] || undefined) : categories;
            
                if ( categoryList ) {
                    resolve( categoryList );
                }
                else {
                    reject( {} );
                }
            
            });
            
        });

        return servicePromise;
    }
	
};