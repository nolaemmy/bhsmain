# DNS Records Setup for BHS Healthcare

## Email Security Records (SPF, DMARC, DKIM)

### SPF Record
Add this TXT record to your DNS:

**Record Type:** TXT
**Name:** @ (or your domain name)
**Value:** `v=spf1 include:_spf.google.com include:mailgun.org include:sendgrid.net -all`

### DMARC Record
Add this TXT record to your DNS:

**Record Type:** TXT
**Name:** _dmarc
**Value:** `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@bhshealthcares.com; ruf=mailto:dmarc-failures@bhshealthcares.com; fo=1`

### DKIM Record (Google Workspace)
If using Google Workspace, add this TXT record:

**Record Type:** TXT
**Name:** google._domainkey
**Value:** (This will be provided by Google Workspace when you set up DKIM)

### Additional Security Records

#### MX Records (if using Google Workspace)
**Priority 1:** ASPMX.L.GOOGLE.COM
**Priority 5:** ALT1.ASPMX.L.GOOGLE.COM
**Priority 5:** ALT2.ASPMX.L.GOOGLE.COM
**Priority 10:** ALT3.ASPMX.L.GOOGLE.COM
**Priority 10:** ALT4.ASPMX.L.GOOGLE.COM

#### CNAME Records for Email Security
**Record Type:** CNAME
**Name:** email
**Value:** ghs.googlehosted.com

## Website Performance & Security

### CAA Record (Certificate Authority Authorization)
**Record Type:** CAA
**Name:** @
**Value:** `0 issue "letsencrypt.org"`

### Additional CNAME Records
**Record Type:** CNAME
**Name:** www
**Value:** bhshealthcares.com

## Verification Records

### Google Search Console Verification
**Record Type:** TXT
**Name:** @
**Value:** `google-site-verification=YOUR_VERIFICATION_CODE`

### Microsoft Bing Webmaster Tools
**Record Type:** TXT
**Name:** @
**Value:** `msvalidate.01=YOUR_VERIFICATION_CODE`

## Implementation Instructions

1. **Access your domain registrar's DNS management panel**
2. **Add the SPF record first** - this prevents email spoofing
3. **Add the DMARC record** - this provides email authentication reporting
4. **Set up DKIM** through your email provider (Google Workspace, etc.)
5. **Verify all records** using online DNS checker tools
6. **Monitor DMARC reports** for any authentication issues

## Important Notes

- **DNS propagation** can take up to 48 hours
- **Test email authentication** after setup using tools like MXToolbox
- **HIPAA compliance** requires secure email handling - ensure your email provider is HIPAA compliant
- **Regular monitoring** of DMARC reports is essential for security

## Testing Your Setup

Use these tools to verify your DNS records:
- MXToolbox.com
- DNSChecker.org
- Google Admin Console (for Google Workspace)
- DMARC Analyzer tools

## Support

For assistance with DNS setup, contact your:
- Domain registrar support
- Email service provider support
- Web hosting provider support