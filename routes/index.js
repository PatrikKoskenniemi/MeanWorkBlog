var express = require('express');
var router = express.Router();

router.get('/dashboard', function (req, res, next) {
    res.redirect('/')
    // res.render('index.html', { title: 'Express2' });
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.html', {title: 'Express'});
});


module.exports = router;
