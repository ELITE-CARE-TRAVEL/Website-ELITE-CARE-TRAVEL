// Test server startup and route loading
console.log('=== SERVER STARTUP DIAGNOSTIC ===\n');

const express = require('express');
const app = express();

// Enable JSON parsing
app.use(express.json());

console.log('1. Testing translation routes loading...');
try {
  const translationRoutes = require('./routes/Translation');
  console.log('✅ Translation routes file loaded successfully');
  console.log('   Type:', typeof translationRoutes);
  
  // Mount the routes
  app.use('/api', translationRoutes);
  console.log('✅ Translation routes mounted on /api');
  
  // Get all registered routes
  console.log('\n2. Checking registered routes:');
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push({
        path: middleware.route.path,
        methods: Object.keys(middleware.route.methods)
      });
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const path = middleware.regexp.source.replace('\\/?', '').replace('(?=\\/|$)', '');
          routes.push({
            path: path + handler.route.path,
            methods: Object.keys(handler.route.methods)
          });
        }
      });
    }
  });
  
  console.log('   Found', routes.length, 'routes:');
  routes.forEach((route) => {
    console.log(`   ${route.methods.join(', ').toUpperCase()} ${route.path}`);
  });
  
  const hasTranslateRoute = routes.some(r => r.path.includes('translate'));
  
  if (hasTranslateRoute) {
    console.log('\n✅ SUCCESS! /api/translate route is registered!\n');
    console.log('Your server SHOULD work now. Make sure to:');
    console.log('1. Stop your current server (Ctrl+C)');
    console.log('2. Start it again: npm run dev');
    console.log('3. Test: curl -X POST http://localhost:3000/api/translate -H "Content-Type: application/json" -d \'{"text":"Bonjour","sourceLang":"fr","targetLang":"en"}\'');
  } else {
    console.log('\n❌ ERROR: /api/translate route NOT found in registered routes!');
    console.log('This indicates a problem with the route registration.');
  }
  
} catch (error) {
  console.error('\n❌ ERROR loading translation routes:');
  console.error(error.message);
  console.error('\nFull error:');
  console.error(error);
  process.exit(1);
}
