
var path = require("path");




module.exports = function(app) {


  //app.get("/tables", function(req, res) {
   // res.sendFile(path.join(__dirname, "../public/tables.html"));
 // });

  app.get("/chat", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chat.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};