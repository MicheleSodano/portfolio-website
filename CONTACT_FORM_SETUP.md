# 📧 Contact Form Setup Guide

## 🚀 Quick Setup with Formspree (Recommended)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Click "Get Started" 
3. Sign up with your email (free plan: 50 forms/month)

### Step 2: Create New Form
1. Click "New Form"
2. Enter your email: `mikysodano@gmail.com`
3. Form name: "Portfolio Contact Form"
4. Copy the **Form ID** (e.g., `xpznvlqr`)

### Step 3: Configure Your Site

#### Option A: Environment Variable (Recommended)
1. In Vercel Dashboard → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_FORMSPREE_ID` = `your_form_id`
3. Redeploy the site

#### Option B: Direct Configuration
1. Edit `src/lib/config.ts`
2. Replace `YOUR_FORM_ID` with your actual form ID:
```typescript
formId: 'xpznvlqr', // Your actual form ID
```

### Step 4: Test the Form
1. Visit your live site
2. Fill out the contact form
3. Submit → You should receive an email!

## 🔄 Current Behavior

**Without Formspree configured:**
- Form uses `mailto:` link (opens email client)
- Works but less seamless

**With Formspree configured:**
- Form submits directly from website
- You receive formatted emails
- User gets success/error feedback
- Spam protection included

## 🛡️ Features Included

✅ **Spam Protection**: Formspree includes built-in spam filtering
✅ **Email Notifications**: Instant email when someone contacts you
✅ **Form Validation**: Client-side validation for required fields
✅ **Loading States**: Visual feedback during submission
✅ **Error Handling**: Graceful fallback to mailto if service fails
✅ **Mobile Friendly**: Works perfectly on all devices

## 🔧 Advanced Configuration

### Custom Email Template
In Formspree dashboard, you can customize:
- Email subject line
- Email template
- Auto-reply messages
- Redirect after submission

### Webhook Integration
For advanced users, Formspree supports webhooks to:
- Send data to other services
- Trigger automated workflows
- Integrate with CRM systems

## 🆓 Free Tier Limits

**Formspree Free Plan:**
- 50 submissions/month
- Basic spam filtering
- Email notifications
- Form analytics

**Upgrade if needed:**
- $8/month for 1000 submissions
- Advanced spam protection
- Custom redirects
- Priority support

## 🔍 Troubleshooting

### Form Not Working?
1. Check browser console for errors
2. Verify Form ID is correct
3. Ensure email is verified in Formspree
4. Test with simple message first

### Emails Not Arriving?
1. Check spam folder
2. Verify email in Formspree dashboard
3. Check Formspree submission logs
4. Whitelist `@formspree.io` in your email

### Still Having Issues?
- The form falls back to `mailto:` if Formspree fails
- Users can always email you directly
- Contact form is enhancement, not critical dependency

## 📱 Testing Checklist

- [ ] Form submits without errors
- [ ] Success message appears
- [ ] Email arrives in inbox
- [ ] Reply-to address is correct
- [ ] Mobile version works
- [ ] Spam protection active

**Your contact form is now professional and reliable!** 🎉
