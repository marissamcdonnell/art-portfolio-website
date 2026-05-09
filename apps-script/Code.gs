/**
 * Google Apps Script — Contact Form Handler
 * ==========================================
 * Setup:
 *   1. Go to https://script.google.com → New Project
 *   2. Paste this entire file, replacing the default Code.gs
 *   3. Update RECIPIENT_EMAIL below to your Workspace address
 *   4. Click Deploy → New deployment → Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   5. Click Deploy, then copy the /exec URL
 *   6. Add the URL as APPS_SCRIPT_URL in your Vercel env vars + .env
 */

var RECIPIENT_EMAIL = "marissa@marissamcdonnell.com"; // ← change this

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var name = body.name || "(no name)";
    var email = body.email || "(no email)";
    var subject = body.subject || "New message from marissamcdonnell.com";
    var message = body.message || "(no message)";

    var emailBody = [
      "New contact form submission from marissamcdonnell.com",
      "",
      "From:    " + name,
      "Email:   " + email,
      "Subject: " + subject,
      "",
      "Message:",
      message,
    ].join("\n");

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: "Contact: " + subject,
      body: emailBody,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET handler — useful for testing the deployment is alive
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Contact form handler is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
