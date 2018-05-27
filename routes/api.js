var express = require('express');
var router = express.Router();
var BlogPost = require('../models/blogPost');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/blogPosts', function (req, res) {
    BlogPost.find({ title: /^TestTitle2/ }, function (err, blogposts) {
        if (err) return console.error(err);
        console.log(blogposts)
    });
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

router.get('/blogpost/:id', function (req, res) {
    console.log("PARAM: " + req.params.id);
    BlogPost.find({ _id: new ObjectId(req.params.id)}, function (err, blogposts) {
        if (err) return console.error(err);
        console.log(blogposts)
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
