# HerPath

HerPath is a comprehensive financial literacy education platform designed specifically for young women. The platform provides free, accessible financial education through interactive modules, progress tracking, and a supportive learning environment.

## Project Overview

HerPath empowers young women with the knowledge and confidence they need to take control of their financial futures. The platform offers 31 learning modules across 12 topic sections, covering everything from basic budgeting to advanced investing strategies.

## Features

- **12 Comprehensive Sections**: Financial Health, Banking, Savings, Financial Goals, Budgeting, Smart Spending, Credit Basics, Taxes, Saving & Building Wealth, Debt Fundamentals, Federal Financial Aid, and Investing
- **31 Interactive Modules**: Each module includes video content, text explanations, and actionable items
- **Progress Tracking**: Visual progress visualization with a snake-path game board design
- **User Authentication**: Secure email/password authentication via Firebase
- **Personalized Profiles**: Customizable avatars and profile settings
- **Responsive Design**: Fully responsive layout optimized for mobile and desktop devices

## Technology Stack

- **Frontend Framework**: React 19.1.1 with Vite
- **Routing**: React Router DOM 7.9.6
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Animations**: Framer Motion 12.23.24
- **Backend**: Firebase
  - Authentication: Email/Password
  - Database: Cloud Firestore
  - Hosting: Firebase Hosting
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd HerPath
```

2. Install dependencies:

```bash
npm install
```

3. Set up Firebase:

   - Create a Firebase project at https://console.firebase.google.com
   - Enable Email/Password authentication
   - Create a Firestore database
   - Copy your Firebase configuration

4. Create environment file:
   - Create `.env` in the root directory
   - Add your Firebase configuration:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Configure Firestore Security Rules:
   - Go to Firebase Console > Firestore Database > Rules
   - Update rules to allow authenticated users to read/write their own data
   - See `FIREBASE_SETUP.md` for detailed rules

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:

```bash
npm run build
```

The production build will be in the `dist` folder.

### Deployment

Deploy to Firebase Hosting:

```bash
firebase login
firebase deploy --only hosting
```

Or use the convenience script:

```bash
npm run deploy
```

The application will be live at: `https://herpath-8d991.web.app`

## Project Structure

```
HerPath/
├── public/                 # Static assets
│   └── favicon.svg        # Site favicon
├── src/
│   ├── assets/            # Images and media
│   │   ├── team/         # Team member photos
│   │   └── malala.jpg    # Featured image
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── HeaderComponent.jsx
│   │   └── YouTubeEmbed.jsx
│   ├── contexts/          # React contexts
│   │   └── AuthContext.jsx
│   ├── data/              # Data files
│   │   └── modulesData.js
│   ├── hooks/             # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useProgress.js
│   │   └── useUserAvatar.js
│   ├── lib/               # Utility libraries
│   │   ├── firebase.js
│   │   └── utils.js
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ModulesPage.jsx
│   │   ├── ProgressPage.jsx
│   │   └── SettingsPage.jsx
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── firebase.json
├── firebase.json          # Firebase configuration
├── package.json
└── README.md
```

## Key Features Documentation

### Authentication

- Email/password authentication via Firebase
- User sessions persist across browser sessions
- Protected routes for authenticated users

### Progress Tracking

- Automatic progress tracking when users complete modules
- Progress saved to Firestore database
- Visual progress visualization on Progress page
- Completion status persists across sessions

### Module System

- Accordion-style section navigation
- Scrollable modal for module content
- Embedded YouTube video players
- Action items for each module
- Completion checkmarks

### User Profiles

- Customizable avatar selection
- Profile settings page
- Progress statistics display

## Team

INFO 442 Group 6
University of Washington
2025

## License

This project is created for educational purposes as part of INFO 442 coursework.

## Additional Documentation

- `FIREBASE_SETUP.md`: Detailed Firebase configuration instructions
- `USER_PERSONAS.md`: User persona descriptions
- `TESTING_PROTOCOL.md`: Testing procedures and known issues
