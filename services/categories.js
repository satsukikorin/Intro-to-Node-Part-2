var categoryServiceEndpoint = "http://www.mocky.io/v2/594418951200000b0dfcb574";
var request = require('request-promise');

module.exports = {

    get: function(category) {

        var options = {
            uri: categoryServiceEndpoint,
            json: true
        };

        var servicePromise = request(options).then(function(categories){

            if ( typeof categories !== "object" ) {

                throw new Error("No Categories Found.");
            }

            var categoryResult = {};

            if ( category ) {

                if ( categories[category] ) {

                    categoryResult = categories[category];
                }
            }
            else {
                categoryResult = categories;
            }

            return categoryResult;
        });

        return servicePromise;
    }

};
