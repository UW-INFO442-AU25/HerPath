# Testing Protocol

This document outlines the testing procedures for HerPath, including how to test each key feature, expected results, and workarounds for known bugs.

## Testing Environment Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection
- Firebase account with project configured
- Test user account (email/password)

### Initial Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Configure Firebase environment variables in `.env`
4. Run `npm run dev` to start development server
5. Navigate to `http://localhost:5173`

---

## Feature Testing

### 1. User Authentication

#### Test Case 1.1: User Registration

**Steps:**

1. Navigate to `/login` page
2. Click "Sign Up" or toggle to registration mode
3. Enter email address
4. Enter password (minimum 6 characters)
5. Click "Sign Up" button

**Expected Result:**

- User account is created successfully
- User is redirected to home page or modules page
- User is logged in automatically
- Navbar shows user profile icon and logout button

**Known Issues:**

- None

**Workarounds:**

- If registration fails, check Firebase Console for error messages
- Ensure email is valid format
- Ensure password meets Firebase requirements (minimum 6 characters)

#### Test Case 1.2: User Login

**Steps:**

1. Navigate to `/login` page
2. Enter registered email address
3. Enter password
4. Click "Sign In" button

**Expected Result:**

- User is authenticated successfully
- User is redirected to home page
- Navbar shows authenticated user options
- Profile icon displays in navbar

**Known Issues:**

- None

**Workarounds:**

- If login fails, verify credentials are correct
- Check browser console for Firebase authentication errors
- Ensure Firebase Authentication is enabled in Firebase Console

#### Test Case 1.3: User Logout

**Steps:**

1. While logged in, click "Log Out" button in navbar
2. Confirm logout

**Expected Result:**

- User is logged out
- User is redirected to home page
- Navbar shows "Sign In" button instead of user options
- Session is cleared

**Known Issues:**

- None

**Workarounds:**

- If logout doesn't work, refresh the page
- Clear browser cache and cookies if session persists

---

### 2. Navigation

#### Test Case 2.1: Desktop Navigation

**Steps:**

1. While logged in, verify all navigation links are visible
2. Click each link: Home, Modules, Progress, Settings
3. Verify page navigation works correctly

**Expected Result:**

- All navigation links are visible and clickable
- Each link navigates to correct page
- Active page is visually indicated
- Profile icon appears on far right

**Known Issues:**

- None

**Workarounds:**

- If links don't work, check browser console for routing errors
- Ensure React Router is properly configured

#### Test Case 2.2: Mobile Navigation (Hamburger Menu)

**Steps:**

1. Resize browser to mobile width (< 768px) or use mobile device
2. Click hamburger menu icon
3. Verify menu opens with all options
4. Click each menu item
5. Verify menu closes after navigation

**Expected Result:**

- Hamburger menu icon appears on mobile
- Menu opens with all navigation options
- Profile icon is visible next to hamburger menu
- Menu closes after clicking a link
- Navigation works correctly

**Known Issues:**

- None

**Workarounds:**

- If menu doesn't open, check browser console for JavaScript errors
- Refresh page if menu state gets stuck

---

### 3. Modules Page

#### Test Case 3.1: Viewing Modules

**Steps:**

1. Navigate to `/modules` page
2. Verify all 12 sections are displayed
3. Click on a section to expand it
4. Verify modules within section are displayed

**Expected Result:**

- All sections are visible in accordion format
- Sections can be expanded/collapsed
- Modules are displayed in grid layout
- Module cards show title, video count, and completion status

**Known Issues:**

- None

**Workarounds:**

- If sections don't expand, check browser console for errors
- Refresh page if accordion state is stuck

#### Test Case 3.2: Opening Module Content

**Steps:**

1. Click on a module card
2. Verify modal opens
3. Verify module content is displayed (videos, text, action items)
4. Scroll through module content
5. Click close button or outside modal to close

**Expected Result:**

- Modal opens with module content
- Videos are embedded and playable
- Text content is readable
- Action items are displayed at bottom
- Modal closes when clicking close or outside

**Known Issues:**

- None

**Workarounds:**

- If modal doesn't open, check browser console for errors
- If videos don't load, verify YouTube URLs are correct
- Refresh page if modal gets stuck open

#### Test Case 3.3: Module Completion Tracking

**Steps:**

1. Log in as a user
2. Open a module
3. Scroll down through the module content (at least 80% of the way)
4. Close the module
5. Verify green checkmark appears on module card
6. Navigate away and back to modules page
7. Verify checkmark persists

**Expected Result:**

- Module is marked as complete when scrolled 80% down
- Green checkmark appears on module card
- Checkmark persists after page refresh
- Progress is saved to Firebase

**Known Issues:**

- Scroll detection may not trigger if content is very short
- Checkmark may not appear immediately (requires Firebase save)

**Workarounds:**

- If checkmark doesn't appear, ensure you've scrolled at least 80% through content
- Wait a few seconds for Firebase save to complete
- Refresh page to see updated status
- Check browser console for Firebase errors

#### Test Case 3.4: Section Completion Status

**Steps:**

1. Complete all modules in a section
2. Verify section card shows green styling
3. Verify "Complete!" badge appears
4. Verify checkmark icon replaces section number

**Expected Result:**

- Section card has green border and background when all modules complete
- "Complete!" badge is visible
- Checkmark icon appears in section number circle
- Green progress bar shows 100%

**Known Issues:**

- None

**Workarounds:**

- If styling doesn't update, refresh the page
- Ensure all modules in section are actually completed

---

### 4. Progress Page

#### Test Case 4.1: Viewing Progress Visualization

**Steps:**

1. Navigate to `/progress` page
2. Verify snake-path visualization is displayed
3. Verify completed modules show green checkmarks
4. Verify progress statistics are displayed

**Expected Result:**

- Snake-path game board is visible
- Completed modules have green glow and checkmarks
- Progress percentage is displayed
- Module count (completed/total) is shown
- Path connects all modules visually

**Known Issues:**

- Progress may not update immediately after completing modules
- SVG path may render differently on different screen sizes

**Workarounds:**

- Refresh page to see latest progress
- Scroll horizontally if path extends beyond viewport
- Check browser console for rendering errors

#### Test Case 4.2: Progress Statistics

**Steps:**

1. Complete several modules
2. Navigate to progress page
3. Verify statistics are accurate
4. Verify progress bar shows correct percentage

**Expected Result:**

- Progress percentage matches completed modules
- Module count is accurate
- Progress bar fills to correct percentage
- Statistics update in real-time

**Known Issues:**

- Statistics may be cached and require refresh

**Workarounds:**

- Refresh page to see updated statistics
- Check Firebase Console to verify data is saved correctly

#### Test Case 4.3: Section Breakdown

**Steps:**

1. Scroll down on progress page
2. Verify section breakdown cards are displayed
3. Verify each section shows completion percentage
4. Click on a section card

**Expected Result:**

- All 12 sections are displayed in grid
- Each card shows section title and progress
- Completed sections have green styling and trophy icon
- Clicking card navigates to modules page

**Known Issues:**

- None

**Workarounds:**

- If cards don't appear, check browser console for errors
- Refresh page if data doesn't load

---

### 5. Settings Page

#### Test Case 5.1: Viewing Profile

**Steps:**

1. Navigate to `/settings` page
2. Verify user profile information is displayed
3. Verify progress summary is shown

**Expected Result:**

- User email is displayed
- Profile section shows progress statistics
- Progress bar is visible
- Avatar selection section is displayed

**Known Issues:**

- None

**Workarounds:**

- If profile doesn't load, verify user is logged in
- Check browser console for Firebase errors

#### Test Case 5.2: Changing Avatar

**Steps:**

1. Navigate to settings page
2. Click on a different avatar emoji
3. Verify "Save Changes" button appears
4. Click "Save Changes" button
5. Verify success message appears
6. Navigate to navbar and verify avatar icon updated

**Expected Result:**

- Avatar selection highlights chosen avatar
- "Save Changes" button appears when selection changes
- Avatar saves successfully
- Navbar profile icon updates to new avatar
- Avatar persists after page refresh

**Known Issues:**

- Avatar may not update immediately in navbar
- Save button may not appear if no changes made

**Workarounds:**

- Refresh page to see updated avatar in navbar
- Ensure you've actually changed the selection before saving
- Check browser console for Firebase save errors

#### Test Case 5.3: Resetting Progress

**Steps:**

1. Navigate to settings page
2. Scroll to "Reset Progress" section
3. Click "Reset Progress" button
4. Confirm reset in dialog
5. Verify progress is cleared

**Expected Result:**

- Confirmation dialog appears
- Progress is reset to 0%
- All module checkmarks are cleared
- Progress page shows no completed modules

**Known Issues:**

- None

**Workarounds:**

- If reset doesn't work, check browser console for Firebase errors
- Refresh page after reset to see updated status

---

### 6. Home Page

#### Test Case 6.1: Viewing Home Page

**Steps:**

1. Navigate to `/` (home page)
2. Verify hero section is displayed
3. Scroll through page sections
4. Verify all sections render correctly

**Expected Result:**

- Hero section with headline and CTA buttons
- Features section with 4 feature cards
- Topics section with topic pills
- Quote section with Malala image
- Mission section
- Team section with 4 team members
- CTA section
- Footer

**Known Issues:**

- Floating animations may cause performance issues on older devices
- Large images may load slowly

**Workarounds:**

- If animations are slow, they can be disabled in browser settings
- Wait for images to load completely
- Check network connection if content doesn't load

#### Test Case 6.2: Navigation from Home

**Steps:**

1. Click "Start Learning" button
2. Click "Explore Features" link
3. Click navigation links in header

**Expected Result:**

- "Start Learning" navigates to modules page
- "Explore Features" scrolls to features section
- Header navigation works correctly

**Known Issues:**

- None

**Workarounds:**

- If navigation doesn't work, check browser console for errors

---

### 7. Responsive Design

#### Test Case 7.1: Mobile Viewport

**Steps:**

1. Resize browser to mobile width (375px) or use mobile device
2. Navigate through all pages
3. Verify layout is responsive
4. Verify hamburger menu works

**Expected Result:**

- All pages are readable on mobile
- Text is appropriately sized
- Images scale correctly
- Hamburger menu functions properly
- Touch targets are appropriately sized

**Known Issues:**

- Some sections may require horizontal scrolling on very small screens
- Progress visualization may be difficult to view on small screens

**Workarounds:**

- Use landscape orientation for progress page on mobile
- Zoom out if content is too large

#### Test Case 7.2: Tablet Viewport

**Steps:**

1. Resize browser to tablet width (768px)
2. Verify layout adapts appropriately
3. Test navigation and interactions

**Expected Result:**

- Layout adapts to tablet size
- Navigation is accessible
- Content is readable and well-spaced

**Known Issues:**

- None

**Workarounds:**

- None

#### Test Case 7.3: Desktop Viewport

**Steps:**

1. View on desktop (1920px width)
2. Verify layout uses available space effectively
3. Verify all features are accessible

**Expected Result:**

- Content is well-spaced
- Navigation is horizontal
- All features are easily accessible

**Known Issues:**

- None

**Workarounds:**

- None

---

### 8. Firebase Integration

#### Test Case 8.1: Data Persistence

**Steps:**

1. Log in and complete several modules
2. Log out
3. Log back in
4. Verify progress is still saved

**Expected Result:**

- Progress persists after logout
- Progress loads when logging back in
- Avatar selection persists
- All user data is saved correctly

**Known Issues:**

- Progress may take a few seconds to load
- Data may not sync immediately

**Workarounds:**

- Wait a few seconds for Firebase to load data
- Refresh page if data doesn't appear
- Check Firebase Console to verify data is saved
- Check browser console for Firebase permission errors

#### Test Case 8.2: Firebase Permissions

**Steps:**

1. Try to access settings page while logged out
2. Verify redirect to login page
3. Log in and verify access

**Expected Result:**

- Protected pages redirect to login
- Authenticated users can access all features
- Data is only accessible to the user who created it

**Known Issues:**

- None

**Workarounds:**

- If permissions errors occur, verify Firestore security rules
- Check Firebase Console for rule configuration

---

## Known Bugs and Issues

### Bug 1: Scroll Detection for Module Completion

**Description:** Module completion may not trigger if content is very short or if user scrolls too quickly.

**Severity:** Low

**Workaround:**

- Ensure you scroll slowly through the entire module
- If checkmark doesn't appear, reopen the module and scroll again
- Check browser console for scroll detection errors

### Bug 2: Progress Not Updating Immediately

**Description:** Progress page may show stale data until page refresh.

**Severity:** Low

**Workaround:**

- Refresh progress page after completing modules
- Wait a few seconds for Firebase to sync data
- Check browser console for Firebase errors

### Bug 3: Avatar Not Updating in Navbar Immediately

**Description:** Navbar avatar may not update immediately after saving in settings.

**Severity:** Low

**Workaround:**

- Refresh page to see updated avatar
- Avatar will update on next page navigation

### Bug 4: Large Bundle Size Warning

**Description:** Build process warns about large JavaScript bundle (>500KB).

**Severity:** Low (Performance)

**Workaround:**

- This is a performance optimization suggestion, not a bug
- Application still functions correctly
- Can be addressed with code splitting in future updates

---

## Browser Compatibility

### Tested Browsers

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Known Browser Issues

- None

---

## Performance Testing

### Test Case: Page Load Times

**Steps:**

1. Open browser developer tools
2. Navigate to each page
3. Check load times in Network tab

**Expected Result:**

- Initial page load: < 3 seconds
- Navigation between pages: < 1 second
- Image loading: Progressive

**Known Issues:**

- Large team member images may take time to load
- Initial bundle load may be slow on slow connections

**Workarounds:**

- Images are optimized but can be further compressed
- Consider lazy loading for images below the fold

---

## Security Testing

### Test Case: Authentication Security

**Steps:**

1. Attempt to access protected routes without authentication
2. Verify redirect to login page
3. Verify user can only access their own data

**Expected Result:**

- Protected routes require authentication
- Users cannot access other users' data
- Firebase security rules prevent unauthorized access

**Known Issues:**

- None

**Workarounds:**

- Verify Firestore security rules are correctly configured
- Check Firebase Console for security rule violations

---

## Accessibility Testing

### Test Case: Keyboard Navigation

**Steps:**

1. Navigate site using only keyboard (Tab, Enter, Arrow keys)
2. Verify all interactive elements are accessible
3. Verify focus indicators are visible

**Expected Result:**

- All links and buttons are keyboard accessible
- Focus indicators are visible
- Modal can be closed with Escape key

**Known Issues:**

- Some custom components may need additional keyboard support

**Workarounds:**

- Use mouse/touch for components that don't fully support keyboard
- Report accessibility issues for future improvements

---

## Testing Checklist

Before deployment, verify:

- [ ] All authentication flows work correctly
- [ ] All navigation links function properly
- [ ] Module completion tracking works
- [ ] Progress visualization displays correctly
- [ ] Settings page functions correctly
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Firebase data persists correctly
- [ ] No console errors appear
- [ ] All videos embed correctly
- [ ] All images load properly
- [ ] Favicon displays correctly

---

## Reporting Issues

If you encounter issues not listed here:

1. Note the browser and version
2. Note the steps to reproduce
3. Check browser console for errors
4. Check Firebase Console for database errors
5. Document the expected vs actual behavior
