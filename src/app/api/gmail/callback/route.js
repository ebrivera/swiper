// src/app/api/gmail/callback/route.js
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/api/gmail/callback" // Change this to your redirect URL
);

export async function GET(req, res) {
  const { code } = req.query;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Save the tokens in a session or database if necessary

    res.redirect("/home"); // Redirect to the home page after successful authentication
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to authenticate" });
  }
}
