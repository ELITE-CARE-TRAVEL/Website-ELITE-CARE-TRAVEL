// Test if translation modules can be loaded
console.log('Testing translation module loading...\n');

try {
  console.log('1. Loading translation service...');
  const translationService = require('./services/translationService');
  console.log('✅ Translation service loaded successfully');
  console.log('   Exports:', Object.keys(translationService));
  
  console.log('\n2. Loading translation controller...');
  const translationController = require('./controllers/Translation');
  console.log('✅ Translation controller loaded successfully');
  console.log('   Exports:', Object.keys(translationController));
  
  console.log('\n3. Loading translation routes...');
  const translationRoutes = require('./routes/Translation');
  console.log('✅ Translation routes loaded successfully');
  console.log('   Type:', typeof translationRoutes);
  
  console.log('\n✅ ALL MODULES LOADED SUCCESSFULLY!\n');
  console.log('The translation system should work.');
  console.log('Make sure to restart your server with: npm run dev');
  
} catch (error) {
  console.error('\n❌ ERROR LOADING MODULES:');
  console.error(error.message);
  console.error('\nStack trace:');
  console.error(error.stack);
  process.exit(1);
}
