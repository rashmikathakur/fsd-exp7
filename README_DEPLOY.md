# Deploy Guide

## 1) GitHub upload
This project was cleaned to remove nested `.git` folders that were causing submodule errors.

## 2) Backend deploy
Deploy `backend` separately on Render/Railway.
Set environment variable:
- `MONGODB_URI` = your MongoDB Atlas connection string

Start command:
- `npm start`

## 3) Frontend deploy on Netlify
Deploy from this repo.
Netlify settings are already in `netlify.toml`:
- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `build`

Add environment variable in Netlify:
- `REACT_APP_API_URL` = your deployed backend URL
  example: `https://your-backend.onrender.com`
