═══════════════════════════════════════════════════════════════
  HEMODYNAMIC DSS — PWA DEPLOYMENT GUIDE
  Medicover MICU · Bedside Clinical Decision Support System
═══════════════════════════════════════════════════════════════

FILES IN THIS PACKAGE:
  index.html        → Main application (open this in a browser)
  manifest.json     → PWA configuration (do not edit)
  sw.js             → Service worker for offline use (do not edit)
  icons/
    icon-192.png    → App icon (192×192 px)
    icon-512.png    → App icon (512×512 px)

═══════════════════════════════════════════════════════════════
  STEP-BY-STEP: DEPLOY VIA GITHUB PAGES (FREE, RECOMMENDED)
═══════════════════════════════════════════════════════════════

STEP 1 — Create a GitHub account
  1. Go to https://github.com
  2. Click "Sign up"
  3. Enter your email, create a password, choose a username
  4. Verify your email address

STEP 2 — Create a new repository
  1. After logging in, click the green "New" button (top left)
     OR go to: https://github.com/new
  2. Repository name: hemodynamic-dss
     (must be lowercase, hyphens only, no spaces)
  3. Set to "Public" (required for free GitHub Pages)
  4. Do NOT tick "Add a README file"
  5. Click "Create repository"

STEP 3 — Upload your files
  1. On the new repository page, click "uploading an existing file"
  2. Drag ALL files from this folder into the upload area:
       index.html
       manifest.json
       sw.js
       icons/ (the entire folder)
  3. IMPORTANT: For the icons folder:
       - Click "choose your files"
       - Navigate into the icons folder
       - Select both icon-192.png and icon-512.png
       - GitHub will automatically create the icons/ folder
  4. In the "Commit changes" box at the bottom, type:
       "Initial deployment of Hemodynamic DSS PWA"
  5. Click "Commit changes"

STEP 4 — Enable GitHub Pages
  1. In your repository, click "Settings" (top tab bar)
  2. In the left sidebar, click "Pages"
  3. Under "Source", select "Deploy from a branch"
  4. Under "Branch", select "main" and "/ (root)"
  5. Click "Save"
  6. Wait 2–5 minutes
  7. Refresh the page — you will see:
       "Your site is live at https://YOURUSERNAME.github.io/hemodynamic-dss"

STEP 5 — Test in browser
  1. Open the URL on your computer first to confirm it works
  2. You should see the Hemodynamic DSS app load correctly
  3. All 10 sections should be functional

═══════════════════════════════════════════════════════════════
  HOW TO INSTALL ON ANDROID PHONES/TABLETS
═══════════════════════════════════════════════════════════════

  1. Open Google Chrome on the Android device
  2. Go to: https://YOURUSERNAME.github.io/hemodynamic-dss
  3. Wait for the page to fully load
  4. A banner will appear at the bottom:
       "Install Hemo DSS — Add to home screen for offline use"
  5. Tap "Install"
  6. Alternatively: tap Chrome's three-dot menu (⋮) → "Add to Home Screen"
  7. The Hemo DSS icon now appears on the home screen
  8. Tap it — the app opens in fullscreen (no browser bars)
  9. The app works OFFLINE after the first load

═══════════════════════════════════════════════════════════════
  HOW TO INSTALL ON iPHONE / iPAD
═══════════════════════════════════════════════════════════════

  ⚠ MUST use Safari — Chrome on iOS does NOT support PWA install

  1. Open Safari on the iPhone or iPad
  2. Go to: https://YOURUSERNAME.github.io/hemodynamic-dss
  3. A hint banner will appear at the bottom of the screen:
       "Tap Share ⎙ at the bottom of Safari, then Add to Home Screen"
  4. Tap the Share button (rectangle with arrow ⎙) in the Safari toolbar
  5. Scroll down in the Share menu and tap "Add to Home Screen"
  6. Change the name if desired (default: "Hemo DSS")
  7. Tap "Add" in the top right
  8. The Hemo DSS icon appears on the home screen
  9. Tap it — the app opens fullscreen (no Safari bars)
  10. The app works OFFLINE after the first load

═══════════════════════════════════════════════════════════════
  ALTERNATIVE: HOSPITAL INTERNAL SERVER
═══════════════════════════════════════════════════════════════

  If your hospital has an internal web server with HTTPS:

  1. Copy ALL files to the web server root or a subfolder:
       /var/www/html/hemodynamic-dss/   (Linux/Apache)
       C:\inetpub\wwwroot\hemodynamic-dss\  (Windows/IIS)

  2. Ensure the server is accessible over HTTPS
     (PWA service workers require HTTPS — HTTP will not work)

  3. Access via: https://intranet.hospital.com/hemodynamic-dss

  4. Install on devices exactly as above (Android Chrome / iOS Safari)

  5. Advantage: Works on the hospital WiFi without internet access

═══════════════════════════════════════════════════════════════
  OFFLINE CAPABILITY
═══════════════════════════════════════════════════════════════

  After the first load on any device:
  - The entire app is cached locally on the device
  - It works completely offline (no WiFi needed at the bedside)
  - All clinical calculations run locally (no server needed)
  - Data entered in the app stays on the device only

═══════════════════════════════════════════════════════════════
  UPDATING THE APP
═══════════════════════════════════════════════════════════════

  When you receive an updated index.html file:
  1. Go to your GitHub repository
  2. Click on "index.html"
  3. Click the pencil icon (Edit) or "..." → Upload file
  4. Replace with the new version
  5. Commit the change
  6. GitHub Pages auto-deploys in 1–3 minutes
  7. When users open the app, a blue "Update available" banner
     appears at the top — they tap "Update" to get the new version

═══════════════════════════════════════════════════════════════
  TECHNICAL NOTES
═══════════════════════════════════════════════════════════════

  - All patient data is processed locally in the browser
  - No data is sent to any server
  - No backend, database, or API calls are made
  - The app is a self-contained single-file web application
  - Compatible: Chrome 80+, Safari 14+, Firefox 79+, Edge 80+

═══════════════════════════════════════════════════════════════
  SUPPORT
═══════════════════════════════════════════════════════════════

  If the install banner does not appear on Android:
  → Open Chrome settings → Site Settings → ensure "Add to home screen"
    is not blocked for this site

  If the app does not load offline on iOS:
  → iOS PWAs require Safari (not Chrome) for installation
  → Ensure the device was online during the first load

═══════════════════════════════════════════════════════════════
