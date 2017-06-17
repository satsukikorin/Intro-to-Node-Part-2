var categoryService = require("./services/categories.js"); 
var bookService = require("./services/books.js"); 

module.exports = function(app){
     
     app.get('/',function(req,res){
          
          categoryService.get().then(function(categories){
               
              var viewModel = {
    	               category: "",
    	               categories: categories
    	          };
    	          
        		res.render('index.html',viewModel);
        		
          })
          .catch(function(err) {
               console.error(err);
        		res.render('Sorry, there was an error. Please hit Back in your browser and try again.');
          });          
     });
     
     
     app.get("/mystery", function(req, res) {
                    
          var getCategories = categoryService.get();
          var getBooks = bookService.getByCategory("mystery");
          
          Promise.all([getCategories,getBooks]).then(function(values) {
               
               // "values" is an array, with each element in that array
               // being the object retuned by those 2 promises, in that
               // order.  So, we can pull those out with "shift" and 
               // get the things we want to work with...
               
               var categories = values.shift(); 
               var books = values.shift(); 
               
    	          var viewModel = {
    	               categories: categories,
                    category:categories["mystery"],
    	               books: books
    	          };
    	          
        		res.render('index.html',viewModel);
        	});
        	
     });
     
     app.get("/fantasy", function(req, res) {
          
          var getCategories = categoryService.get();
          var getBooks = bookService.getByCategory("fantasy");
          
          Promise.all([getCategories,getBooks]).then(function(values) {
               
               // "values" is an array, with each element in that array
               // being the object retuned by those 2 promises, in that
               // order.  So, we can pull those out with "shift" and 
               // get the things we want to work with...
               
               var categories = values.shift(); 
               var books = values.shift(); 
               
    	          var viewModel = {
    	               categories: categories,
                    category:categories["fantasy"],
    	               books: books
    	          };
    	          
        		res.render('index.html',viewModel);
        	});
          
     });
     
     app.get("/children", function(req, res) {
          showCategory("children", req, res);
     });
     
     app.get("/computing", function(req, res) {
          showCategory("computing", req, res);
     });
     
     app.get("/memoir", function(req, res) {
          showCategory("memoir", req, res);
     });
     
     // app.get('/:category', function (req, res) {
     //      var category = req.params.category;
     //      showCategory(category, req, res);
     // });
     
     
     function showCategory(category = "", req, res) {
          
          var getCategories = categoryService.get();
          var getBooks = bookService.getByCategory(category);
          
          Promise.all([getCategories,getBooks]).then(function(values) {
               
               // "values" is an array, with each element in that array
               // being the object retuned by those 2 promises, in that
               // order.  So, we can pull those out with "shift" and 
               // get the things we want to work with...
               
               var categories = values.shift(); 
               var books = values.shift(); 
               
    	          var viewModel = {
    	               categories: categories,
                    category:categories[category],
    	               books: books
    	          };
    	          
        		res.render('index.html',viewModel);
        	});
          
     };
     
};
