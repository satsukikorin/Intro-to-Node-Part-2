
"use strict";

var express    =    require('express');
var app        =    express();

require('./router.js')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(8080,function(){
    console.log("Express is running on port 8080");
});


