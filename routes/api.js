const express = require("express");
const router = express.Router();
const sectionsController = require('../src/db/controllers/sections');


router.get("/sections", (req, res) => {
	sectionsController.get((data, err) => {
		if(err){
			res.json({
				success: false,
				message: "Error to fetch data from db"
			});
			return;
		}
		res.json({
			success: false,
			message: data
		});

	})

});

module.exports = router;
