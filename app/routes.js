
var express = require('express');
var path    = require('path');

var router = express.Router();

//export the router
module.exports = router;

//Route our homepage
router.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname, '../index.html'));
});

//Route for about page
router.get('/about', function(req, res)
{
	res.sendFile(path.join(__dirname, '../about.html'));
});

router.get('/contact');

router.post('/contact');