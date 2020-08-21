'use strict'

var express = require('express');
var PalindromoController = require('../controllers/palindromo');

var router = express.Router();

router.post('/palindrome', PalindromoController.palindrome);

module.exports = router;