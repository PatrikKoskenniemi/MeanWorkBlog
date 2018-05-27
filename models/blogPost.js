// app/models/todo.js heroes

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title : String,
    content : String,
    date: { type: Date, default: Date.now },
    type: String
});
/** @class BlogPost */
var BlogPost = mongoose.model('blogposts', blogSchema);
module.exports = BlogPost;