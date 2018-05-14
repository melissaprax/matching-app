// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

let petsData = require("../data/pets");

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

  let userResponses = userInput.scores;
		// console.log('userResponses = ' + userResponses);

		// for pet match
		let name = '';
		let photo = '';
		let totalDifference = 10000; 

		for (let i = 0; i < pets.length; i++) {

			let diff = 0;
			for (let j = 0; j < userResponses.length; j++) {
				diff += Math.abs(pets[i].scores[j] - userResponses[j]);
			}

			if (diff < totalDifference) {
				

				totalDifference = diff;
				name = pets[i].name;
				photo = pets[i].photo;
			}
		}

		// Add new user
		pets.push(userInput);

		res.json({status: 'OK', name: name, photo: photo});

}