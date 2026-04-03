# EmailJS Setup Guide for Sachin.Dev Portfolio

## Step-by-Step Setup:

### 1. **Go to EmailJS Dashboard**
   - Visit: https://www.emailjs.com
   - Sign into your account

### 2. **Create Email Service**
   - Navigate to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail" (or your email provider)
   - Service name: Keep as is or name it "Gmail_Service"
   - **Copy the Service ID** (looks like: `Service_xxxxx`)

### 3. **Connect Gmail Account**
   - Select Gmail option
   - Click "Connect Account"
   - Sign in with your Gmail account (sachin.ca73@gmail.com)
   - Grant permissions
   - Save the service

### 4. **Create Email Template**
   - Go to "Email Templates" in left sidebar
   - Click "Create New Template"
   - Template name: `Contact_Form_Template` (or similar)
   
   **In the template, use these variables:**
   ```
   Subject: New Message from {{user_name}}
   
   Body:
   Name: {{user_name}}
   Email: {{user_email}}
   Message: {{message}}
   
   Recipient: {{to_email}}
   ```
   
   - **Copy the Template ID** (looks like: `template_xxxxx`)

### 5. **Get Your Public Key**
   - Go to "Account" → "API Keys"
   - Copy your **Public Key**

### 6. **Update Your Portfolio Code**
   Replace these values in Contact.js:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY_HERE");
   
   emailjs.send(
      'YOUR_SERVICE_ID_HERE',      // e.g., Service_abc123
      'YOUR_TEMPLATE_ID_HERE',     // e.g., template_xyz789
      templateParams,
      'YOUR_PUBLIC_KEY_HERE'
   )
   ```

### 7. **Test the Connection**
   - Open browser Developer Tools (F12)
   - Go to Console tab
   - Try sending a test email
   - Look for logs to debug issues

## Common Issues & Solutions:

| Issue | Solution |
|-------|----------|
| "Invalid credentials" | Check Service ID, Template ID, and Public Key match exactly |
| Emails not received | Check Gmail hasn't marked as spam; verify recipient email in template |
| "Template not found" | Verify Template ID is correct in code |
| CORS errors | Make sure Public Key is valid and account is active |
| Gmail not connected | Go to Email Services and re-connect your Gmail account |

## Quick Verification Checklist:

- [ ] Service ID from EmailJS matches code
- [ ] Template ID from EmailJS matches code  
- [ ] Public Key from EmailJS matches code
- [ ] Gmail is connected and verified in Email Services
- [ ] Email template has variables: {{user_name}}, {{user_email}}, {{message}}, {{to_email}}
- [ ] Recipient email set to sachin.ca73@gmail.com
- [ ] Check spam/promotions folder in Gmail

## Testing:
1. Open your portfolio locally or on the web
2. Open DevTools (F12) → Console tab
3. Fill out contact form
4. Submit and check console for logs
5. Check Gmail inbox (and spam folder)

If you still see errors, share the console log error message and I'll help debug!
