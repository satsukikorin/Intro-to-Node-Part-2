var bookServiceEndpoint = "http://www.mocky.io/v2/593a06041100003004a9557c";
var request = require('request-promise');

module.exports = {

    getByCategory: function(category) {

        var options = {
            uri: bookServiceEndpoint,
            json: true
        };

        return request(options).then(function(books){

                if ( books && books[category] ) {
                    return books[category]
                }
                else {
                    return {};
                }
            })
    }

    /**
     * If we don't use a promise-oriented plugin, we have to build a promise by hand, which is messier
     * although you can also be very detailed. It would look something like this (be warned -- this is
     * UNTESTED CODE that probably doesn't work as is):
    */
    // getByCategory: function (category) {

    //     var request = require('request');// This package uses callbacks instead of promises.

    //     var options = {
    //         uri: bookServiceEndpoint,
    //         json: true
    //     };

    //     return new Promise(function (resolve, reject) {

    //         request(options, function (error, response, body) {

    //             if (error) {

    //                 reject( new Error("Could not fetch books. " + error.message) )
    //             }
    //             else if (response.statusCode >= 400) {

    //                 reject( new Error("Could not fetch books. " + body) );
    //             }
    //             else {

    //                 var books = body;

    //                 if ( books[category] ) {

    //                     resolve( books[category] );
    //                 }
    //                 else {

    //                     reject( new Error("No Books Found") );
    //                 }
    //             }
    //         });
    //     });
    // }

}
