// app/models/todo.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var heroSchema = new Schema({
    id: Number,
    name: String,
});
/** @class Hero */
var Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
