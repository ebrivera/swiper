// src/app/api/gmail/route.js
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/api/gmail/callback" // Change this to your redirect URL
);

export async function GET(req, res) {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/gmail.readonly",
  });
  res.redirect(url);
}
