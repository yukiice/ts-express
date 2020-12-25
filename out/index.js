"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(require("cors")());
app.use(express.json());
require("./db/index")(app);
require("./router/index")(app);
app.listen(3000, function () {
    console.log("Example app listening on http://localhost:3000");
});
