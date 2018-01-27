var express = require('express');
var router = express.Router();
var BlogPost = require('../models/blogPost');

router.get('/heroes', function (req, res) {
    res.json(getFakeHeroes());
});

router.post('/blogPost', function (req, res) {
    var blogPost = new BlogPost({
        title : req.body.title,
        content : req.body.content,
        type: req.body.type
    });
    blogPost.save(function (err, blogPost) {
        if (err) return console.error(err);
        console.log("worked!");
        res.json(blogPost);
    });
});

router.get('/heroes/:id', function (req, res) {
    console.log("PARAM: " + req.params.id);
    getFakeHeroes().forEach(function (hero) {
        console.log(hero.id + "<= id, " + hero.name);
        if (hero.id === parseInt(req.params.id)) {
            console.log("match!")
            res.json(hero);
        }
    });
    if (!res.headersSent)
        res.sendStatus(400);
});

function getFakeHeroes() {
    return [
        {id: 12, name: 'Bob'},
        {id: 11, name: 'Mr. Nice'},
        {id: 13, name: 'Peppe'}
    ];
}

module.exports = router;
