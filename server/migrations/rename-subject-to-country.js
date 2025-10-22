const db = require('../database/connection');

async function migrateSubjectToCountry() {
  try {
    console.log('Starting migration: Renaming subject column to country...');
    
    // Check if the column exists
    const [results] = await db.sequelize.query(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = 'users' 
      AND COLUMN_NAME = 'subject'
    `);
    
    if (results.length > 0) {
      // Rename the column
      await db.sequelize.query(`
        ALTER TABLE users 
        RENAME COLUMN subject TO country
      `);
      console.log('✓ Successfully renamed subject column to country');
    } else {
      console.log('✓ Column already renamed or does not exist');
    }
    
    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateSubjectToCountry();
