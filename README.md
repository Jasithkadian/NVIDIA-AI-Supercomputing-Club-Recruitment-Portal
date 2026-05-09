# NVIDIA AI & Supercomputing Club - Recruitment Portal

Welcome to the official recruitment portal for the **NVIDIA AI & Supercomputing Club**. 

This application is a highly optimized, dynamically-routed, professional multi-step form built with React. It supports conditional domain branching, real-time Google Sheets webhook integration, and a premium Light Theme aesthetic tailored for modern tech communities.

## 🚀 Features

- **Multi-Step Architecture:** Smooth, step-by-step UX with an interactive progress bar.
- **Dynamic Routing:** Questions adjust automatically based on whether the applicant selects Core Team vs. General Member, and their specific Technical/Media/Design domain.
- **Real-Time Data Sync:** Form submissions instantly hit a Google Apps Script Webhook and populate an organized Google Sheet.
- **High Performance:** Built entirely on Vite & React for lightning-fast speeds.
- **Premium UI:** Handcrafted CSS with an immaculate minimal light mode aesthetic, smooth animations, and zero dependency bloat.
- **Mobile Optimized:** A clean, fully responsive layout.

## 📦 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Vanilla CSS (Custom properties, CSS Grid, Flexbox, Keyframes)
- **Database Backend:** Google Sheets + Google Apps Script Webhook API
- **Deployment Ready:** Configured explicitly for Vercel/Netlify environments

## 🛠️ Local Development

Ensure you have [Node.js](https://nodejs.org/) installed, then run the following commands:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Your app will be running at `http://localhost:5173`.

## 🌐 Deployment (Vercel)

This project has been thoroughly cleaned and strictly structured to be deployed on platforms like **Vercel**. 
1. Create a repository on your GitHub account.
2. Push this project to your `main` branch.
3. Import the repository into Vercel. 
4. The build settings should automatically be detected:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 🔒 Security

All secrets and build artifacts are explicitly ignored via `.gitignore` to prevent any sensitive data leakage during push/deploy.

---
*Built for the future of Accelerated Computing.*
