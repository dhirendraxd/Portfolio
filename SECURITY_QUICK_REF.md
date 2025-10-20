# 🔒 Security Quick Reference

## ⚠️ CRITICAL: Next Steps Required

### 1. Rotate Your Supabase Keys (URGENT!)

Your Supabase credentials were previously exposed in your Git history. Even though they're now in `.env`, they're still in your commit history.

**Steps to rotate:**

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project: `qpfukwkjznwmrpmwobfc`
3. Navigate to **Settings** → **API**
4. Click **Reset Project API keys**
5. Copy the new `anon/public` key
6. Update your `.env` file:
   ```bash
   VITE_SUPABASE_ANON_KEY=<new_key_here>
   ```
7. Commit and redeploy

### 2. Add Environment Variables to Vercel/Netlify

Since `.env` is not deployed, you need to add these to your hosting platform:

**Vercel:**
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add:
   - `VITE_SUPABASE_URL` = `https://qpfukwkjznwmrpmwobfc.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `<your_new_key>`
   - `VITE_EMAILJS_SERVICE_ID` = `<your_service_id>`
   - `VITE_EMAILJS_TEMPLATE_ID` = `<your_template_id>`
   - `VITE_EMAILJS_PUBLIC_KEY` = `<your_public_key>`
4. Redeploy

**Netlify:**
1. Site settings → Environment variables
2. Add the same variables as above
3. Redeploy

---

## 📝 Daily Development Checklist

- [ ] Never commit `.env` file
- [ ] Use `.env.example` for documentation
- [ ] Check `git status` before committing
- [ ] Review staged files: `git diff --cached`
- [ ] No hardcoded credentials in code
- [ ] Console.logs wrapped in `if (import.meta.env.DEV)`

---

## 🚨 What Was Fixed

| Issue | Status | File |
|-------|--------|------|
| Exposed Supabase credentials | ✅ Fixed | `src/integrations/supabase/client.ts` |
| Missing .env protection | ✅ Fixed | `.gitignore` |
| Debug logs in production | ✅ Fixed | `src/lib/emailjs.ts` |
| No .env file | ✅ Created | `.env` |
| No .env template | ✅ Created | `.env.example` |

---

## 🧪 Testing Your Changes

```bash
# 1. Check environment variables are loading
npm run dev
# Should start without errors

# 2. Verify .env is ignored
git status
# Should NOT show .env in the list

# 3. Test contact form
# Open http://localhost:8080 and try submitting the form

# 4. Build for production
npm run build
# Should complete without errors
```

---

## 📂 File Structure

```
Portfolio/
├── .env                          # ⚠️ NEVER COMMIT (ignored)
├── .env.example                  # ✅ Safe to commit (template)
├── .gitignore                    # ✅ Updated with .env patterns
├── src/
│   ├── integrations/supabase/
│   │   └── client.ts            # ✅ Now uses env vars
│   └── lib/
│       └── emailjs.ts           # ✅ Dev-only logging
└── SECURITY_AUDIT.md            # 📋 Full audit report
```

---

## 🔑 Environment Variables Reference

### Required for Development

```bash
# EmailJS (for contact form)
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx

# Supabase (for data storage)
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxx
```

### Where to Find Them

**EmailJS:**
1. [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Integration → Select your service
3. Copy Service ID, Template ID, and Public Key

**Supabase:**
1. [Supabase Dashboard](https://app.supabase.com/)
2. Project Settings → API
3. Copy Project URL and anon/public key

---

## 🛡️ Security Best Practices

### DO ✅
- Use environment variables for all secrets
- Add `.env` to `.gitignore`
- Validate all user inputs
- Implement rate limiting
- Use HTTPS everywhere
- Keep dependencies updated
- Enable Supabase RLS policies
- Use CSP headers

### DON'T ❌
- Commit `.env` files
- Hardcode credentials in code
- Trust user input without validation
- Log sensitive data
- Use `console.log` in production
- Expose internal errors to users
- Store passwords in plain text
- Skip security updates

---

## 🆘 If You Accidentally Commit Secrets

1. **Immediately rotate the exposed credentials**
2. **Remove from Git history:**
   ```bash
   # Use git filter-branch or BFG Repo-Cleaner
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch src/integrations/supabase/client.ts" \
     --prune-empty --tag-name-filter cat -- --all
   
   # Force push (⚠️ dangerous, coordinate with team)
   git push origin --force --all
   ```
3. **Verify on GitHub that secrets are removed**
4. **Update all team members**

---

## 📞 Need Help?

- [Supabase Docs](https://supabase.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [OWASP Security Guide](https://owasp.org/)

---

**Last Updated:** October 20, 2025  
**Status:** ✅ Secure (pending key rotation)
