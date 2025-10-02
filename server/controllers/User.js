const db = require('../database/connection');

exports.createContact = async (req, res) => {
  try {
    console.log('Contact form received:', req.body);
    const { name, email, phone, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      console.log('Missing required fields:', { name, email, subject, message });
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    console.log('Creating user in database...');
    const saved = await db.User.create({ name, email, phone, subject, message });
    console.log('User created successfully:', saved.dataValues);
    return res.status(201).json(saved);
  } catch (error) {
    console.error('createContact error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
