import express = require("express");

const app: express.Application = express();
app.use(require("cors")());
app.use(express.json());
require("./db/index")(app);
require("./router/index")(app);

app.listen(3000, function () {
  console.log("Example app listening on http://localhost:3000");
});
