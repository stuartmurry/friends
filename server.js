var express = require("express");
var path = require("path");


var engines = require("consolidate");

var app = express();

// needed by Express Post
var bodyparser = require("body-parser");
app.use(bodyparser.json()); // support json encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

app.set("views", __dirname + "/public");
app.engine("html", engines.mustache);
app.set("view engine", "html");

// Config
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
