const express = require('express');
const router = express.Router();

const buttonRoute = require('./controllers/buttonRoute');


router.use((req,res,next) => {
	console.log("TIME: ", Date.now());
	next();
});

router.get('/button', buttonRoute.buttonClicked);

module.exports = router;

