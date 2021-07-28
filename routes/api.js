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
			success: true,
			message: data
		});
	})
});

router.get("/sections/take", (req, res) => {
	if(!req.query.email || !req.query.section){
		res.json({
			success: false,
			message: "parameter email or section is not provided"
		})
		return;
	}
	sectionsController.take(req.query.email, req.query.section, (data, err) => {
		if(err){
			res.json({
				success: false,
				message: err
			});
			return;
		}
		res.render('redirector', {destination: '/login'})
	})
});


router.get("/sections/view", (req, res) => {
	if(!req.query.section){
		res.json({
			success: false,
			message: "parameter section is not provided"
		})
		return;
	}
	sectionsController.students(req.query.section, (data, err) => {
		if(err){
			res.json({
				success: false,
				message: err
			});
			return;
		}
		res.send(data)
	})
});

module.exports = router;
