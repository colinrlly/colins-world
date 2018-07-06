'use strict';

//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var MVPDataSchema = new Schema({
    status: String,
    comment: String,
    name: String,
    timestamp: String,
    value: Number,
    attribute: String
});

//export our module to use in server.js
module.exports = mongoose.model('MVPData', MVPDataSchema);
