# Database Migration: Subject to Country

## Overview
This migration renames the `subject` column to `country` in the `users` table to support the new country selector feature.

## Changes
- **Column Rename**: `subject` → `country`
- **Data Type**: STRING (unchanged)
- **Required**: true (unchanged)

## How to Run

### Option 1: Using Node
```bash
cd server
node migrations/rename-subject-to-country.js
```

### Option 2: Manual SQL (if needed)
```sql
ALTER TABLE users RENAME COLUMN subject TO country;
```

## Rollback (if needed)
```sql
ALTER TABLE users RENAME COLUMN country TO subject;
```

## Affected Components
- ✅ Frontend: `client/src/pages/Contact.tsx` - Updated to use country selector
- ✅ Backend Model: `server/models/User.js` - Updated field name
- ✅ Backend Controller: `server/controllers/User.js` - Updated validation
- ✅ Admin Dashboard: `admin-dashboard/src/pages/Tables/BasicTables.tsx` - Updated display

## New Features
1. **Country Selector**: Users can now select from Tunisia, Libya, Algeria, or Canada
2. **Phone Code Prefix**: Phone field automatically shows country code based on selected country
3. **Flag Display**: Country flags are shown in both the form and admin dashboard
