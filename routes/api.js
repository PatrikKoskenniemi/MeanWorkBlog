var express = require('express');
var router = express.Router();

router.get('/heroes', function (req, res, next) {
    res.json([
        {id: 12, name: 'Bob'},
        {id: 11, name: 'Mr. Nice'},
        {id: 13, name: 'Peppe'}
        ]);
});



module.exports = router;
