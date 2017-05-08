var express = require('express');
var app = express();
var port = 8000;
var bookRouter = express.Router();

app.use(express.static(__dirname + '/public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/', bookRouter);

app.get('/', function(req, res) {
  res.render('index.ejs', {
    title: "hello",
    nav: [{
      Links: '/books',
      text: 'Book'
    }, {
      Links: '/author',
      text: 'Author'
    }, {
      Links: '/contact',
      text: 'Contact'
    }]
  });

});

bookRouter.route('/books')
.get(function(req,res){
	res.render('bookList.ejs', {
    title: "hello",
    nav: [{
      Links: '/books',
      text: 'Book'
    }, {
      Links: '/author',
      text: 'Author'
    }, {
      Links: '/contact',
      text: 'Contact'
    }]
  });

});
bookRouter.route('/author')
.get(function(req,res){
	res.render('author.ejs', {
    title: "hello",
    nav: [{
      Links: '/books',
      text: 'Book'
    }, {
      Links: '/author',
      text: 'Author'
    }, {
      Links: '/contact',
      text: 'Contact'
    }]
  });
});

	bookRouter.route('/contact')
.get(function(req,res){
	res.render('contact.ejs', {
    title: "hello",
    nav: [{
      Links: '/books',
      text: 'Book'
    }, {
      Links: '/author',
      text: 'Author'
    }, {
      Links: '/contact',
      text: 'Contact'
    }]
  });

})

/*app.get('/books', function(req, res) {
  res.send("Books");
});*/
/*app.get('/', function(req,res){
	res.send("hello");
});
app.get('/books', function(req,res){
	res.send("hello books");
});*/
app.listen(port, function(err) {
  console.log("server running" + port);
});