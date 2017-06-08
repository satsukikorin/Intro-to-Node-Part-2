
var categoryService = require("./services/categories.js"); 
var bookService = require("./services/books.js"); 


module.exports = function(app){
     
     app.get('/',function(req,res){
          
     	let fetch = new Promise(
       		(resolve, reject) => {
            	     resolve(categoryService.get());
        	     }
    	     );

    	     fetch.then(function(categories){
    	          let viewModel = {
    	               category: "",
    	               categories: categories
    	          };
    	          
         		res.render('index.html',viewModel);
         	});
        
     });
     
     app.get('/category/:category', function (req, res) {
          
          let category = req.params.category || "";
          
          let fetch = new Promise(
       		(resolve, reject) => {
            	     resolve(bookService.get(category));
        	     }
    	     );

    	     fetch.then(function(books){
    	          let viewModel = {
                    category:category,
    	               books: books[category]
    	          };
    	          
         		res.render('index.html',viewModel);
         	});
          
     });
     
     
     app.get('/category/:category/isbn/:isbn', function (req, res) {
          res.send(req.params.isbn);
     });
     
};