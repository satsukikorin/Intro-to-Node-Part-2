var bookServiceEndpoint = "http://www.mocky.io/v2/593a06041100003004a9557c";

var request = require('request-promise');

module.exports = {
    
    getByCategory: function(category) {
        
        var options = {
            uri: bookServiceEndpoint,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        var servicePromise = new Promise((resolve, reject) => {
            
            var fetch = request(options) || undefined;
            
            fetch.then(function(books){
                
                if ( books[category] ) {
                    resolve( books[category] );
                }
                else {
                    reject(
                        { 
                            error: "No Books Found"
                        }
                    );
                }
            
            });
            
        });

        return servicePromise;
    }
	
}