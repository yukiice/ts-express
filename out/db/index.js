"use strict";
module.exports = function (app) {
    var mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost:27017/ngserver", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
