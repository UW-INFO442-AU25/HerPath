# Deployment Guide

## Quick Deploy Steps

### 1. Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Initialize Firebase Hosting (first time only)

```bash
cd HerPath
firebase init
```

When prompted:

- ✅ Select **Hosting**
- ✅ Use existing project: **herpath-8d991**
- ✅ Public directory: **dist**
- ✅ Configure as single-page app: **Yes**
- ✅ Set up automatic builds: **No** (or Yes if using CI/CD)

### 4. Build and Deploy

**Option 1: Use the convenience script**

```bash
npm run deploy
```

**Option 2: Manual steps**

```bash
npm run build
firebase deploy
```

### 5. Your app is live! 🎉

Visit: **https://herpath-8d991.web.app**

---

## Before First Deploy Checklist

- [ ] Enable Google Authentication in Firebase Console
- [ ] Create Firestore Database
- [ ] Set up Firestore Security Rules (see FIREBASE_SETUP.md)
- [ ] Add authorized domains in Firebase Console:
  - `localhost` (for development)
  - `herpath-8d991.web.app`
  - `herpath-8d991.firebaseapp.com`

## Updating Your App

After making changes:

1. Test locally: `npm run dev`
2. Build: `npm run build`
3. Preview build: `npm run preview`
4. Deploy: `npm run deploy`

## Firebase Console

Manage your project at: https://console.firebase.google.com/project/herpath-8d991
