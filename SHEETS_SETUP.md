# Google Sheets Setup Instructions

## Prerequisites
- Node.js 18+
- A Google Sheet you want to store responses in

## Steps

### 1. Set up your Google Sheet
1. Create a new Google Sheet at [sheets.google.com](https://sheets.google.com)
2. Copy the Spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
3. Add headers to row 1 of Sheet named "Responses":
   ```
   First Name | Last Name | Email | Major | Class Year | Domain | Communities | Best Work | Outreach Task | Event Mgmt | Event Idea | Anything Else | Technical Contrib | Weekly Availability | Timestamp
   ```

### 2. Share the Sheet with the service account
1. Copy the `client_email` from `server/credentials.json`
2. In your Google Sheet, click Share and paste the email
3. Give it Editor access
4. Don't require notification

### 3. Get your Spreadsheet ID
1. From your Sheet URL, extract the ID between `/d/` and `/edit`
2. Set `SPREADSHEET_ID` environment variable

### 4. Install and run the backend

```bash
cd server
npm install
SPREADSHEET_ID="your_spreadsheet_id" npm start
```

The server will run on `http://localhost:5000`

### 5. Run the frontend (in another terminal)

```bash
npm run dev
```

### 6. For Production Deployment

**Vercel (Recommended)**:
```bash
# From root directory
vercel
```

Set environment variable in Vercel dashboard:
- `SPREADSHEET_ID`: your Google Sheet ID

The backend will be deployed, and the frontend will automatically point to it.

## Environment Variables

**Frontend** (`.env`):
```
REACT_APP_API_URL=http://localhost:5000  # for dev
REACT_APP_API_URL=https://your-backend.vercel.app  # for production
```

**Backend** (set in deployment):
```
SPREADSHEET_ID=your_google_sheet_id
PORT=5000
```

## Troubleshooting

- **403 Permission Error**: Make sure the service account email has Editor access to your Google Sheet
- **Invalid Spreadsheet ID**: Check that you copied the ID correctly
- **CORS Error**: Make sure backend is running on the correct port
