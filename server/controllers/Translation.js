const { translateText, translateBatch, getCacheStats } = require('../services/translationService');

/**
 * Translate a single text
 */
async function translate(req, res) {
  try {
    const { text, sourceLang = 'fr', targetLang = 'en' } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const translatedText = await translateText(text, sourceLang, targetLang);

    res.json({
      original: text,
      translated: translatedText,
      sourceLang,
      targetLang
    });
  } catch (error) {
    console.error('Translation controller error:', error);
    res.status(500).json({ error: 'Translation failed' });
  }
}

/**
 * Translate multiple texts in a batch
 */
async function translateBatchTexts(req, res) {
  try {
    const { texts, sourceLang = 'fr', targetLang = 'en' } = req.body;

    if (!texts || !Array.isArray(texts)) {
      return res.status(400).json({ error: 'Texts array is required' });
    }

    const translations = await translateBatch(texts, sourceLang, targetLang);

    res.json({
      original: texts,
      translated: translations,
      sourceLang,
      targetLang
    });
  } catch (error) {
    console.error('Batch translation controller error:', error);
    res.status(500).json({ error: 'Batch translation failed' });
  }
}

/**
 * Get cache statistics
 */
async function getStats(req, res) {
  try {
    const stats = getCacheStats();
    res.json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
}

module.exports = {
  translate,
  translateBatchTexts,
  getStats
};
