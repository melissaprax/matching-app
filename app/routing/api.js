// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var petsData = require("../data/pets");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests


  app.get("/api/pets", function(req, res) {
    res.json(petsData);
  });



  // API POST Requests


  app.post("/api/pets", function(req, res) {

    if (petsData.length < 11) {
      petsData.push(req.body);
      res.json(true);
    }
  });

}