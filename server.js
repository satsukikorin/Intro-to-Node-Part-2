
"use strict";

var express    =    require('express');
var app        =    express();

require('./router.js')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(process.env.PORT,function(){
    console.log("App is running on port", process.env.PORT);
});