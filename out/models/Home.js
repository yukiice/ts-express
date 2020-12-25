"use strict";
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    title: {
        type: String,
    },
    time: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Home", schema);
