import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load credentials
let credentials;
if (process.env.GOOGLE_CREDENTIALS) {
  credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
} else {
  const credentialsPath = path.join(__dirname, 'credentials.json');
  if (fs.existsSync(credentialsPath)) {
    credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
  } else {
    throw new Error('Google credentials not found in environment or credentials.json');
  }
}

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// You'll need to set these environment variables or update them here
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || 'YOUR_SPREADSHEET_ID';
const SHEET_NAME = 'Responses';

console.log('Environment Variables:');
console.log('SPREADSHEET_ID:', SPREADSHEET_ID);
console.log('---');

// Helper function to convert form data to rows
const flattenFormData = (data) => {
  const {
    fullName = '',
    universityEmail = '',
    personalEmail = '',
    phoneNumber = '',
    department = '',
    yearSemester = '',
    linkedin = '',
    github = '',
    domain = '',
    domainAnswers = {},
    motivationJoin = '',
    motivationCore = '',
    valueBring = '',
    goals = '',
    ecosystemContribution = '',
  } = data;

  return [
    fullName || '',
    universityEmail || '',
    personalEmail || '',
    phoneNumber || '',
    department || '',
    yearSemester || '',
    linkedin || '',
    github || '',
    domain || '',
    domainAnswers.communities || '',
    domainAnswers.bestWork || '',
    domainAnswers.outreachTask || '',
    domainAnswers.eventMgmt || '',
    domainAnswers.eventIdea || '',
    domainAnswers.anythingElse || '',
    domainAnswers.techContrib || '',
    domainAnswers.weeklyAvail || '',
    motivationJoin || '',
    motivationCore || '',
    valueBring || '',
    goals || '',
    ecosystemContribution || '',
    new Date().toLocaleString(),
  ];
};

// Endpoint to submit form
app.post('/api/submit-form', async (req, res) => {
  try {
    console.log('Form submission received...');
    
    if (!SPREADSHEET_ID || SPREADSHEET_ID === 'YOUR_SPREADSHEET_ID') {
      throw new Error('SPREADSHEET_ID environment variable is not set. Set it with: $env:SPREADSHEET_ID="your_id"');
    }

    const formData = req.body;
    const row = flattenFormData(formData);

    console.log('Appending row to sheet:', SHEET_NAME);
    
    try {
      // Append data to sheet - using just the sheet name is often more robust
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: SHEET_NAME,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [row],
        },
      });

      console.log('Successfully appended row:', response.data.updates.updatedRows);
      res.json({ success: true, message: 'Form submitted successfully!' });
    } catch (appendError) {
      console.error('Append error:', appendError.message);
      
      // If it's a range error, let's try to see what sheets actually exist
      if (appendError.message.includes('Unable to parse range')) {
        try {
          const spreadsheet = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
          });
          const sheetNames = spreadsheet.data.sheets.map(s => s.properties.title);
          console.log('Available sheets in this spreadsheet:', sheetNames);
          
          if (!sheetNames.includes(SHEET_NAME)) {
            throw new Error(`Sheet named "${SHEET_NAME}" not found. Available sheets: ${sheetNames.join(', ')}. Please rename your sheet to "${SHEET_NAME}" in Google Sheets.`);
          }
        } catch (getSheetsError) {
          console.error('Could not fetch spreadsheet info:', getSheetsError.message);
        }
      }
      throw appendError;
    }
  } catch (error) {
    console.error('Error submitting form:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Make sure SPREADSHEET_ID is set to your Google Sheet ID`);
});
