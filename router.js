
var categoryService = require("./services/categories.js"); 


module.exports = function(app){
     app.get('/',function(req,res){

     	let fetch = new Promise(
        
       		(resolve, reject) => {
            	resolve(categoryService.get());
         
        	}
    	);

    	fetch.then(function(categories){
    		res.render('index.html',categories)
    	});
        
     });
     
}


