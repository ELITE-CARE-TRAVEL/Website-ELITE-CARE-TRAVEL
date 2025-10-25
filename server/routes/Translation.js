const express = require('express');
const router = express.Router();
const { translate, translateBatchTexts, getStats } = require('../controllers/Translation');

// POST /api/translate - Translate a single text
router.post('/translate', translate);

// POST /api/translate/batch - Translate multiple texts
router.post('/translate/batch', translateBatchTexts);

// GET /api/translate/stats - Get cache statistics
router.get('/translate/stats', getStats);

module.exports = router;
