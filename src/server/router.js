const express = require('express');
const router = express.Router();

router.use((requ,res,next) => {
	console.log("TIME: ", Date.now());
	next();
});

router.get('/', (req,res) => {
	console.log("Server at: \'/\'");
});

router.get('/about', (req,res,next) => {
	console.log('Server at: \'/about\'');
});

