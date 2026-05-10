# Quick Start Guide - Google Sheets Integration

## What I've Set Up

1. **Backend Server** (`/server`)
   - Express.js server with Google Sheets API integration
   - Endpoint: `POST /api/submit-form` to save responses
   - Uses your service account credentials

2. **Updated Frontend**
   - FormContainer now sends data to your backend
   - Automatically submits all form data to Google Sheets

## Quick Setup (5 minutes)

### Step 1: Create a Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. **Rename the sheet to "Responses"** (important!)
4. In the first row, add these headers:
   ```
   First Name | Last Name | Email | Major | Class Year | Domain | Communities | 
   Best Work | Outreach Task | Event Mgmt | Event Idea | Anything Else | 
   Technical Contrib | Weekly Availability | Timestamp
   ```

### Step 2: Share Sheet with Service Account
1. In your Google Sheet, click **Share**
2. Add this email: `attendance-bot@gen-lang-client-0275101905.iam.gserviceaccount.com`
3. Give **Editor** access
4. Click Share (don't send notification)

### Step 3: Get Your Spreadsheet ID
- Copy the ID from the URL: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
- Save it for the next step

### Step 4: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 5: Run Both Servers

**Terminal 1 - Backend:**
```bash
cd server
SPREADSHEET_ID="paste_your_id_here" npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

That's it! Your form should now save responses to Google Sheets.

## Testing

1. Go to `http://localhost:5173` (or whatever Vite shows)
2. Fill out the form completely
3. On the final page, click "Submit"
4. Check your Google Sheet - the response should appear!

## For Production

When you're ready to deploy:

1. **Deploy Backend** to Vercel:
   ```bash
   cd server
   vercel
   ```
   - Set `SPREADSHEET_ID` environment variable in Vercel dashboard

2. **Deploy Frontend** to Vercel:
   ```bash
   vercel
   ```
   - Create `.env` file with your production API URL:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app
   ```

## Files Created/Modified

### New Files:
- `/server/server.js` - Express backend
- `/server/package.json` - Backend dependencies
- `/server/credentials.json` - Your Google service account credentials
- `/SHEETS_SETUP.md` - Detailed setup guide
- `/.env.example` - Environment variables template

### Modified Files:
- `/src/components/FormContainer.jsx` - Updated to use Express backend

## Troubleshooting

**"Permission denied" error:**
- Make sure the service account email has Editor access to your Sheet
- Check the sheet is named "Responses"

**"Invalid Spreadsheet ID":**
- Copy the full ID from the URL (it's the long string between `/d/` and `/edit`)

**Form submission hangs:**
- Check that backend is running (`SPREADSHEET_ID=... npm start`)
- Check browser console for errors (F12)

**CORS errors:**
- Backend must be running on `http://localhost:5000`
- Check `REACT_APP_API_URL` is set correctly

Need help? Let me know!
