// app/routes.js

// load the todo model
var Hero = require('./models/herodb');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/heroes', function(req, res) {

        // use mongoose to get all todos in the database
        BlogPost.find(function(err, blogPosts) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(blogPosts); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/blogPosts', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        BlogPost.create({
            header : req.body.header,
            body : req.body.body,
            type: req.body.type
        }, function(err, blogPost) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            BlogPost.find(function(err, blogPosts) {
                if (err)
                    res.send(err)
                res.json(blogPosts);
            });
        });

    });

    // delete a todo
    app.delete('/api/blogPosts/:blogPost_id', function(req, res) {
        BlogPost.remove({
            _id : req.params.blogPost_id
        }, function(err, blogPost) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            BlogPost.find(function(err, blogPosts) {
                if (err)
                    res.send(err)
                res.json(blogPosts);
            });
        });
    });
};
