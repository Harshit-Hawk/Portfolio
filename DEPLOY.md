# 🚀 Deployment Guide

You chose **Option A: Vercel Deployment**! This is the fastest way to get your site online.

## Step 1: Install Vercel CLI
If you haven't installed it yet, run:
```bash
npm i -g vercel
```

## Step 2: Deploy
Run the following command in your terminal:
```bash
npx vercel
```

## Step 3: Follow the Prompts
The CLI will ask you a few questions. Press **Enter** to accept the defaults:
1.  Set up and deploy? **Y**
2.  Which scope? **(Select your account)**
3.  Link to existing project? **N**
4.  Project name? **portfolio** (or your choice)
5.  In which directory? **./**
6.  Want to modify settings? **N**

---

### Alternative: Netlify Drop
If the command line fails, you can deploy manually:
1.  Run `npm run build`.
2.  Open [Netlify Drop](https://app.netlify.com/drop).
3.  Drag and drop the `dist` folder into the browser window.
