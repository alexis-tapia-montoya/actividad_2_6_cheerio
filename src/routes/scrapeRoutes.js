const express = require('express');
const router = express.Router();
const { getScrapedData } = require('../controllers/scrapeController');

router.get('/scrape', getScrapedData);

module.exports = router;