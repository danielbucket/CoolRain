const express = require('express');
const router = express.Router();

const buttonRoute = require('./controllers/buttonRoute.js');
const userlogin = require('./controllers/userlogin.js');


router.use((req,res,next) => {
	console.log("TIME: ", Date.now());
	next();
});

router.get('/button', buttonRoute.buttonClicked);
router.get('/login', userlogin.getUserCred);

module.exports = router;

