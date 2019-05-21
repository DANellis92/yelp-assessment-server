var express = require("express");
var app = express();
var food = require("./controller");

app.use(require("./middleware/headers"));

app.use("/food", food);
app.listen(3300, () => {
  console.log("On 3300");
});
