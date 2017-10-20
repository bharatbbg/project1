
-<DOCTYPE! html>
-<html lang="en">
-<head>
-<link rel="stylesheet" href="style" type="text/css"/>
-<title>Skillatron_Home</title>
-  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
-  <style type="text/css" media="screen">
-    #editor { 
-        position: absolute;
-        top: 0;
-        right: 0;
-        bottom: 0;
-        left: 0;
-    }
-</style>
-  
-   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
-  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
-  
-  
-  
-</head>
-<body>
-  
-<header class="container">
-<div class="row">
-  <h1 class="col-sm-4">Skillatron</h1>
-  <nav class="col-sm-8 ">
-   <a href="index.html"> <p>Home</p>  </a>
-   <a href="sampl.html"> <p>About us</p> </a>
-  <a href="#">  <p>Register</p></a>
-  <a href="#">  <p>Sample Test</p></a>
-  <a href="#">  <p>Archives</p></a>
-  <a href="#">  <p>Learn</p></a>	
-  </nav>
-  </div>
-  </header>
-
-<script src="//cdn.jsdelivr.net/ace/1.1.01/min/ace.js"
-             type="text/javascript" charset="utf-8"></script>
-  
-  <div id="editor">function foo(items) {
-    var x = "All this is syntax highlighted";
-    return x;
-}</div>
-    
-<script src="/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
-<script>
-    var editor = ace.edit("editor");
-    editor.setTheme("ace/theme/monokai");
-    editor.getSession().setMode("ace/mode/javascript");
-</script>
-  
-  
-  
-  
-  
-</body>
-</html>




var express = require('express');
var router = express.Router();
var hackerRank = require('machinepack-hackerrank');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {language:"1",langCode:"c_cpp"});
});

router.post('/compile', function(req, res, next) {

hackerRank.submit({
	apiKey: 'hackerrank|918937-2068|0e1f4445e387e0d2a2bcb7ca41d9101ac5dde095',
	source: req.body.source,
	language: parseInt(req.body.language),
	testcases: JSON.parse(req.body.input),
	wait: true,
	callbackUrl: '',
	format: 'json',
	}).exec({
// An unexpected error occurred.
	error: function (err) {
		throw err;
	},
// OK.
	success: function (response) {
 	console.log(response)
	 res.json(response);
	},
	});

});

router.get('/changelang/:langCode/:language', function(req, res, next) {
var language = req.params.language.trim();
var langCode = req.params.langCode.trim();

res.render('index',{language:language,langCode:langCode});

});

module.exports = router;
