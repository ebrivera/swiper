// test-gmail-route.js
require("dotenv").config();
const { google } = require("googleapis");

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/api/gmail/callback" // Change this to your redirect URL
);

async function testGenerateAuthUrl() {
  try {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline", // Ensure refresh token is returned
      scope: "https://www.googleapis.com/auth/gmail.readonly", // Scope of access
    });
    console.log("Generated URL:", url);
  } catch (error) {
    console.error("Failed to generate OAuth2 URL:", error);
  }
}

testGenerateAuthUrl();
