// app/models/todo.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    header : String,
    body : String,
    date: { type: Date, default: Date.now },
    type: String
});

module.exports = mongoose.model('BlogPost', blogSchema);
