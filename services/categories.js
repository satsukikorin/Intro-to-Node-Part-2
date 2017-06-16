var categoryServiceEndpoint = "http://www.mocky.io/v2/594418951200000b0dfcb574";
var request = require('request-promise');

module.exports = {
    
    get: function(category) {
        
        let options = {
            uri: categoryServiceEndpoint,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        let servicePromise = new Promise((resolve, reject) => {
            
            var fetch = request(options) || undefined;
            
            fetch.then(function(categories){
                
                var categoryList = {};
                
                if ( typeof categories === "object" ) {
                    
                    if ( category ) {
                        
                        if ( categories[category] ) { 
                            
                            categoryList = categories[category];
                            
                        }
                        
                    }
                    else {
                        categoryList = categories;
                    }
                    
                    resolve(categoryList);
                }
                else {
                    reject(
                        { 
                            error: "No Categories Found"
                        }
                    );
                }
                    
            });
            
        });

        return servicePromise;
    }
	
};