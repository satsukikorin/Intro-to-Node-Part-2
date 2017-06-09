
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
     
     app.get('/:category', function (req, res) {
          
          let category = req.params.category || "";
          
          let fetchCategory = new Promise(
       		(resolve, reject) => {
            	     resolve(categoryService.get(category));
        	     }
    	     );
    	     
          let fetchBooks = new Promise(
       		(resolve, reject) => {
            	     resolve(bookService.getByCategory(category));
        	     }
    	     );

          Promise.all([fetchCategory,fetchBooks]).then( values => { 
               
               let category = values.shift(); 
               let books = values.shift(); 
               
    	          let viewModel = {
                    category:category,
    	               books: books
    	          };
    	          
        		res.render('index.html',viewModel);
        	});
          
     });
     
     
     app.get('/book/:isbn', function (req, res) {
          
          let isbn = req.params.isbn;
          
          let fetchBook = new Promise(
       		(resolve, reject) => {
            	     resolve(bookService.getByISBN(isbn));
        	     }
    	     );
    	     
    	     fetchBook.then(function(book){
    	          
    	          let viewModel = {
    	               category: "",
    	               isbn: isbn,
    	               book: book
    	          };
    	          
        		res.render('index.html',viewModel);
    	     });
        	
     });
     
};