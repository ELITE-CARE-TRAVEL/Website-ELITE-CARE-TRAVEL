const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./database/connection');
const userRoutes = require('./routes/User');
const adminRoutes = require('./routes/Admin');
const eventRoutes = require('./routes/Event');
const adminProfileRoutes = require('./routes/AdminProfile');
const translationRoutes = require('./routes/Translation');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Use routes
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', eventRoutes);
app.use('/api', adminProfileRoutes);
app.use('/api', translationRoutes);

async function start() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Sync database and create tables
    await db.sequelize.sync({ force: false });
    console.log('Database synchronized successfully.');
    
    // Initialize admin after sync
    const { initializeAdmin } = require('./controllers/Admin');
    await initializeAdmin();
    
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();