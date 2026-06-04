# Mailjet Cloudflare DNS Checklist

Last updated: 2026-06-04

Campaign: **ReadEasy30 + MathEasy30**

Sender / reply email:

```text
free@readeasy30.com
```

Domain:

```text
readeasy30.com
```

## Purpose

Use this checklist when Mailjet gives DNS records for sender/domain verification.

Do not guess the DNS values. Copy the exact records Mailjet shows.

## Before editing DNS

Confirm:

- Mailjet account is created.
- Sender email is added.
- Domain verification is started in Mailjet.
- Mailjet shows the exact DNS records to add.
- Cloudflare account is open for `readeasy30.com`.

## Records Mailjet may provide

Mailjet may ask for one or more records such as:

```text
TXT
CNAME
SPF-related TXT
DKIM-related record
DMARC-related recommendation
```

Only add records that Mailjet actually provides.

## Cloudflare steps

1. Open Cloudflare.
2. Choose `readeasy30.com`.
3. Open DNS records.
4. Add each Mailjet record exactly as shown.
5. For Mailjet CNAME/TXT verification records, use DNS only when Cloudflare offers proxy options.
6. Save records.
7. Return to Mailjet and click verify/check status.
8. Wait if verification is pending.
9. Record final status in `EMAIL-SENDER-SETUP-CHECKLIST.md`.

## Important rule

Do not delete existing DNS records unless Mailjet or Cloudflare clearly identifies a conflict.

Existing website records should remain connected to Cloudflare Pages.

## Do not store here

Do not store Mailjet password.
Do not store Mailjet secret values beyond public DNS record names/values.
Do not store API keys.
Do not store private tokens.

## After verification

Run this sequence:

1. Send one internal test email.
2. Send one verified public contact-form message.
3. Check inbox replies.
4. Check bounces.
5. Update `EMAIL-30-DAY-QUOTA-CALENDAR.csv`.
6. Start warm-up, not full blast.

## Status labels

Use:

```text
Not Started
Pending Mailjet
Pending DNS
Pending Verification
Verified
Blocked
```
