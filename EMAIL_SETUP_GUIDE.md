# Email Setup Guide for OTP Functionality

## The Problem
Gmail no longer accepts regular passwords for third-party applications. You must use an **App Password** instead.

## Solution: Generate a Gmail App Password

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Under "How you sign in to Google," select **2-Step Verification**
4. Follow the steps to enable it (if not already enabled)

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other (Custom name)** → Type "MERN Ecommerce"
4. Click **Generate**
5. Google will display a 16-character password (like: `abcd efgh ijkl mnop`)

### Step 3: Update Your .env File
Open `backend/.env` and replace the PASSWORD value:

```env
# Old (won't work):
PASSWORD="Addit@2003"

# New (use the 16-character app password):
PASSWORD="abcdefghijklmnop"
```

**Important:** Remove all spaces from the app password!

### Step 4: Restart Backend Server
```bash
cd backend
npm start
```

## Alternative: Use a Different Email Service

If you don't want to use Gmail, you can use services like:
- **SendGrid** (Free tier: 100 emails/day)
- **Mailgun** (Free tier: 5,000 emails/month)
- **Mailtrap** (For testing only)

### Example: Using SendGrid

1. Sign up at https://sendgrid.com/
2. Get your API key
3. Install SendGrid package:
   ```bash
   cd backend
   npm install @sendgrid/mail
   ```

4. Update `backend/utils/Emails.js`:
   ```javascript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   exports.sendMail = async(receiverEmail, subject, body) => {
     try {
       const msg = {
         to: receiverEmail,
         from: process.env.EMAIL, // Must be verified in SendGrid
         subject: subject,
         html: body,
       };
       await sgMail.send(msg);
       console.log('Email sent successfully');
     } catch (error) {
       console.error('Error sending email:', error);
       throw new Error(`Failed to send email: ${error.message}`);
     }
   };
   ```

5. Update `.env`:
   ```env
   SENDGRID_API_KEY="your_sendgrid_api_key"
   EMAIL="verified-sender@yourdomain.com"
   ```

## Testing Your Email Setup

After configuration, test by:
1. Sign up with a new user
2. Click "Get OTP" on the verification page
3. Check the email inbox (and spam folder)
4. Check backend console for detailed error messages

## Common Errors

### "Invalid login: 535-5.7.8 Username and Password not accepted"
- **Cause:** Using regular password instead of App Password
- **Fix:** Generate and use App Password (see Step 2 above)

### "Failed to send email: getaddrinfo ENOTFOUND smtp.gmail.com"
- **Cause:** Network/DNS issue
- **Fix:** Check internet connection or firewall settings

### "Error: Missing credentials for 'PLAIN'"
- **Cause:** EMAIL or PASSWORD not set in .env
- **Fix:** Verify both are set correctly in `backend/.env`

## Need Help?
- Check backend console for detailed error messages
- Verify .env file is in the correct location: `backend/.env`
- Ensure there are no quotes or spaces in the App Password
