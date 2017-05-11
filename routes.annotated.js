
// Dynamically load a "module".  This one happens to contain a simple javascript
// object that has a "phrase" in it.
var hello = require("./lib/hello-world.js");

module.exports = function(app) {
     
    // This "route" function will run anytime you request "/" in the browser
    app.get('/', function(request,response) {
    
         // We use the simple "send" method for the respone.  That method
         // just sends whatever you give it directly to the browser.
         // Here, we're "hard coding" a phrase
         
         response.send("Hello Boring World!");
    });     
    
    // This "route" function will run anytime you request "/fromLibrary" in the browser
    app.get('/fromLibrary', function(request,response) {
    
        // This time, instead of sending a hard coded word, we fetch a word
        // from the "hello-world" module.  Whatever phrase that module has in it
        // will now get "sent" to the browser
        
        response.send(hello.phrase);  
    });
    
    // This "route" function will run anytime you request "/fromTemplate" in the browser
    app.get('/fromTemplate',function(request,response){
    
         // This time, we're going to "render" instead of "send"
         // The "render" method asks you for 2 things: The file that has the HTML in it
         // and the things you want to stuff into it.  
         
         // In this case, we're going to draw (render) the "index" file, and send it
         // the "hello" object that we've been using.  The template will now display
         // whatever is in that object.
         
         // Using this technique, we can not only change what data we send by
         // messing with the hello-world module, but now with a template, we can
         // change  HOW it looks with normal HTML
         
         response.render('index.html', hello);
    });
    
    // This "route" function will run anytime you request "/withTemplate" in the browser
    app.get('/dynamic',function(request,response){
         
         // Here, we're copying the hello object into a variable called "sayThis"
         var sayThis = hello;
         
         // With express, we can look at the "request.query" object ... 
         // This is really anything after the "?" in the URL
         // Always those are key/value pairs (this=that)
         // In our case, we're looking to see if someone added phrase=something
         // If they did ... we'll use that to make an object that has the 
         // same "shape" as what the hello module has and assign that to the "sayThis" variable
         
         if ( request.query.phrase ) { 
              sayThis = {
                phrase:request.query.phrase
              };
         }
         
         // Finally, we'll render whatever "sayThis" is ... either what you put in the
         // browser, or it'll default to the hello module contents!
         
         response.render('index.html', sayThis);
    });
    
};