<p align="center">
  <img src="/client/src/assets/mm.png" alt="Elite Care Travel" width="180"/>
</p>

<h1 align="center">🌍 ELITE CARE TRAVEL</h1>
<p align="center">
  Excellence in Medical Tourism in Tunisia
</p>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Node.js-≥18.0.0-green?logo=node.js" alt="Node Badge"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License Badge"/>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status Badge"/>
</p>

---

## ✨ Overview
Elite Care Travel supports international patients for medical stays in Tunisia, whether for cosmetic or general surgery.  
Our mission: to provide a **safe, comfortable, and personalized journey**, combining medical expertise with high-end services.

---

## 🛎️ Features / Services
### 👩‍⚕️ Personalized Assistance
From your first contact, we guide you through every step of your project.  
An expert surgeon reviews your file and provides a medical opinion along with a detailed quote.

### 🛬 Arrival and Medical Stay
Our team welcomes you at the airport and takes you directly to the clinic.  
We handle all administrative formalities and ensure your comfort from arrival to recovery.

### 🏨 Recovery in a Prestigious Setting
After the procedure, you stay in a 5-star hotel where rest and serenity are guaranteed.  
A qualified nurse provides daily care and ensures your well-being.

### 🛫 Safe Return Home
On departure day, we accompany you to the airport and remain available even after you return to monitor your recovery.

---

## 💻 Tech Stack

### **Frontend**
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v7
- **UI Components:** Custom components with Flowbite React
- **Language Management:** React Context API with custom hooks
- **Translation:** Auto-translation system with caching

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js v5
- **ORM:** Sequelize
- **Database:** MySQL / SQLite (development)
- **Translation API:** MyMemory API (FREE, 10k words/day)
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **HTTP Client:** Axios

### **Key Features**
- 🌐 **Multi-language Support:** French (default), English, Arabic with RTL support
- 🔄 **Real-time Translation:** AutoTranslate component with in-memory caching
- 📱 **Fully Responsive:** Mobile-first design, works on all devices
- 🎨 **Modern UI:** Gradient backgrounds, smooth animations, glassmorphism effects
- 🔐 **Secure Admin Panel:** JWT-based authentication
- 🚀 **Fixed Navbar:** Scroll-aware navigation with backdrop blur
- 💾 **Caching System:** Smart translation caching to minimize API calls
- 📧 **Contact Forms:** Dynamic country selection with phone code integration

### **Translation System Architecture**
```
Client (React) → API Request → Express Server → MyMemory API
                                    ↓
                            Translation Cache (In-Memory)
                                    ↓
                            Response to Client
                                    ↓
                            LocalStorage Cache
```  

---

## 📋 Prerequisites
- **Node.js:** ≥18.0.0 (LTS recommended)
- **npm:** ≥9.0.0 (or yarn/pnpm)

> **Note:** This project is configured to work with multiple Node.js versions. The `.nvmrc` file specifies Node 18, and `.npmrc` ensures compatibility across different environments.

## ⚡ Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/ELITE-CARE-TRAVEL/Website-ELITE-CARE-TRAVEL.git
   ```

2. **Use the correct Node.js version (optional but recommended)**
   ```bash
   # If you have nvm installed
   nvm use
   # This will use Node 18 as specified in .nvmrc
   ```

3. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Server .env file (optional - defaults work fine)
   cd server
   # No .env needed for MyMemory API (it's free!)
   ```

5. **Run the application**
   ```bash
   # Terminal 1 - Run backend (port 3000)
   cd server
   npm run dev
   
   # Terminal 2 - Run frontend (port 5173)
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

---

## 🔧 Compatibility & Configuration

### **Node.js Version Management**
This project includes configuration files for maximum compatibility:

- **`.nvmrc`** - Specifies Node.js 18 (use with `nvm use`)
- **`.npmrc`** - Configured for flexible dependency installation:
  - `engine-strict=false` - Allows installation with different Node versions
  - `legacy-peer-deps=true` - Better compatibility with older packages
  
### **Supported Node.js Versions**
- ✅ Node.js 18.x (LTS) - Recommended
- ✅ Node.js 20.x (LTS) - Tested
- ✅ Node.js 22.x - Compatible

### **Package Manager Support**
- npm ≥9.0.0
- yarn ≥1.22.0
- pnpm ≥8.0.0

---

## 🌐 Translation System Usage

### **How It Works**
The website automatically translates all French text to English or Arabic when you switch languages using the flag buttons in the navbar.

### **For Developers**
Wrap any text you want to translate with the `AutoTranslate` component:

```tsx
import AutoTranslate from '../components/AutoTranslate';

// For headings
<AutoTranslate as="h1" className="text-4xl">
  Votre texte en français
</AutoTranslate>

// For paragraphs
<AutoTranslate as="p" className="text-lg">
  Votre texte en français
</AutoTranslate>

// For inline text
<button>
  <AutoTranslate>Cliquez ici</AutoTranslate>
</button>
```

### **Translation API**
- **Provider:** MyMemory Translation API
- **Cost:** FREE (10,000 words/day)
- **Languages:** French ↔ English ↔ Arabic
- **Caching:** Automatic (reduces API calls)
- **Endpoint:** `/api/translate`

---

## 📁 Project Structure

```
Website-ELITE-CARE-TRAVEL/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── AutoTranslate.tsx      # Translation wrapper
│   │   │   ├── LanguageSwitcher.tsx   # Language selector
│   │   │   ├── Navbar.tsx             # Navigation bar
│   │   │   └── Footer.tsx             # Footer component
│   │   ├── context/          # React Context providers
│   │   │   └── LanguageContext.tsx    # Language state management
│   │   ├── hooks/            # Custom React hooks
│   │   │   └── useTranslation.ts      # Translation hook
│   │   ├── pages/            # Page components
│   │   └── assets/           # Images and static files
│   └── package.json
│
├── server/                    # Express backend
│   ├── controllers/          # Route controllers
│   │   ├── Translation.js    # Translation endpoint
│   │   ├── Admin.js          # Admin auth
│   │   └── Event.js          # Event management
│   ├── services/             # Business logic
│   │   └── translationService.js  # MyMemory API integration
│   ├── routes/               # API routes
│   ├── models/               # Database models
│   └── package.json
│
└── README.md                  # This file
```

---

## 🚀 Deployment

### **Frontend (Vercel/Netlify)**
```bash
cd client
npm run build
# Deploy the dist/ folder
```

### **Backend (Heroku/Railway)**
```bash
cd server
npm start
# Set PORT environment variable
```

---

## 📝 License
This project is licensed under the MIT License.

---

## 👥 Team
**Elite Care Travel** - Medical Tourism Excellence in Tunisia

---

## 📞 Contact
For more information, visit our website or contact us through the platform.
