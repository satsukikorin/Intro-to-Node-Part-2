let bookServiceEndpoint = "http://www.mocky.io/v2/59306e67100000cb04995ed2";

const request = require('request-promise');

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
            
            let fetch = request(options) || undefined;
            
            fetch.then(function(books){
                
                if ( books[category] ) {
                    resolve( books[category] );
                }
                else {
                    reject( {} );
                }
            
            });
            
        });

        return servicePromise;
    },
    getByISBN: function(isbn) {
        
        var options = {
            uri: bookServiceEndpoint,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        var servicePromise = new Promise((resolve, reject) => {
            
            let fetch = request(options) || undefined;
            
            fetch.then(function(books){
                
                for( let category in books ) { 
                    for ( let book in books[category] ) { 
                        if ( book == isbn ) { 
                            resolve( books[category][book] );
                        }
                    }
                }
                
                reject( {} );
                
            });
            
        });

        return servicePromise;
    }
    
    
	
}