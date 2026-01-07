const express = require('express');
const router = express.Router();
const anatomy = require('../data/anatomy.json');

// GET all anatomy sections
router.get('/', (req, res) => {
  res.json(anatomy);
});

// GET specific section by id
router.get('/section/:id', (req, res) => {
  const section = anatomy.sections.find(s => s.id === req.params.id);
  if (!section) {
    return res.status(404).json({ error: 'Section not found' });
  }
  res.json(section);
});

// GET specific topic within a section
router.get('/section/:id/topic/:topicIndex', (req, res) => {
  const section = anatomy.sections.find(s => s.id === req.params.id);
  if (!section) {
    return res.status(404).json({ error: 'Section not found' });
  }
  
  const topicIndex = parseInt(req.params.topicIndex);
  if (topicIndex < 0 || topicIndex >= section.topics.length) {
    return res.status(404).json({ error: 'Topic not found' });
  }
  
  res.json(section.topics[topicIndex]);
});

module.exports = router;
