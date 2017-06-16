
"use strict";

var port       =    8080;
var express    =    require('express');
var app        =    express();

require('./router.js')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/assets', express.static('public'))

app.listen(port,function(){
    console.log("App is running on port", port);
});