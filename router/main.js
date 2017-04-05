
var hello = require("../hello-world.js");

module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html',hello)
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}


