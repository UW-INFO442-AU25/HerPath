# Firebase Setup Guide

## ✅ Firebase Project Already Configured!

Your Firebase project is already set up:

- **Project ID**: `herpath-8d991`
- **App URL**: https://herpath-8d991.web.app

## Next Steps

### 1. Enable Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **herpath-8d991**
3. Go to **Authentication** > **Sign-in method**
4. Enable **Google** sign-in provider
5. Add authorized domains:
   - `localhost` (for development)
   - `herpath-8d991.web.app` (for production)
   - `herpath-8d991.firebaseapp.com` (for production)

### 2. Create Firestore Database

1. Go to **Firestore Database** in Firebase Console
2. Click "Create database" (if not already created)
3. Start in **test mode** (for development) or set up security rules
4. Choose a location for your database (recommended: us-central1)

### 3. Firebase Config Already Set Up ✅

Your Firebase configuration is already in `src/lib/firebase.js` with your project credentials.

**Optional**: If you want to use environment variables for different environments:

1. Create a `.env` file in the `HerPath` directory
2. Add your Firebase config (currently using defaults):

```env
VITE_FIREBASE_API_KEY=AIzaSyAkJcKWWCq6BX-p71px_VSO3kyE3zNnBjA
VITE_FIREBASE_AUTH_DOMAIN=herpath-8d991.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=herpath-8d991
VITE_FIREBASE_STORAGE_BUCKET=herpath-8d991.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=239602036380
VITE_FIREBASE_APP_ID=1:239602036380:web:30b24aeb773cf5bb004759
```

### 4. Set Up Firestore Security Rules ⚠️ **IMPORTANT - DO THIS NOW!**

Go to **Firestore Database** > **Rules** in Firebase Console and replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // User progress - users can only read/write their own progress
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // User profiles - users can only read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

**Steps:**

1. Go to Firebase Console: https://console.firebase.google.com/project/herpath-8d991/firestore/rules
2. Click "Edit rules"
3. Paste the rules above
4. Click "Publish"
5. Wait a few seconds for rules to propagate

**If you're still in test mode**, you can temporarily use these rules (less secure, for testing only):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

⚠️ **The permission error you're seeing is because these rules aren't set up yet!**

### 5. Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### 6. Login to Firebase

```bash
firebase login
```

### 7. Initialize Firebase Hosting (if not already done)

```bash
firebase init
```

When prompted:

- Select **Hosting**
- Use existing project: **herpath-8d991**
- Public directory: **dist** (Vite's build output)
- Configure as single-page app: **Yes**
- Set up automatic builds: **No** (or Yes if using GitHub Actions)

### 8. Deploy Your App

Build and deploy:

```bash
npm run build
firebase deploy
```

Or use the convenience script:

```bash
npm run deploy
```

Your app will be live at: **https://herpath-8d991.web.app**

### 9. Test the Setup

1. Run `npm run dev`
2. Navigate to `/login`
3. Try signing in with Google
4. Check Firebase Console to see if user was created
5. Open a module and check if progress is saved in Firestore

## Data Structure

### Firestore Collections

**userProgress/{userId}**

```json
{
  "completedModules": ["module-1-1", "module-1-2", ...],
  "lastUpdated": "2025-01-XX..."
}
```

**users/{userId}**

```json
{
  "avatar": 1,
  "lastUpdated": "2025-01-XX..."
}
```

## Troubleshooting

- **"Firebase: Error (auth/popup-closed-by-user)"**: User closed the popup - this is normal
- **"Firebase: Error (auth/unauthorized-domain)"**: Add your domain to authorized domains in Firebase Console
- **Progress not saving**: Check Firestore security rules and ensure user is authenticated
- **Module completion not tracking**: Ensure user is logged in (progress only saves for authenticated users)

## Notes

- Modules are accessible to everyone (public)
- Progress tracking only works for logged-in users
- Settings page requires authentication
- Progress is automatically saved when modules are opened
