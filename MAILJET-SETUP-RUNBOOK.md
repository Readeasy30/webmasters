# Mailjet Setup Runbook

Last updated: 2026-06-04

Campaign: **ReadEasy30 + MathEasy30**

Sender / reply email:

```text
free@readeasy30.com
```

Main campaign link:

```text
https://readeasy30.com/free-reading-and-math-practice.html
```

## Purpose

Prepare Mailjet for the 30-day email quota plan.

Mailjet is planned because its free tier is expected to cover most of the outreach volume:

```text
6,000 emails/month
200 emails/day
```

The remaining daily outreach actions stay manual/contact-form unless the plan changes.

## Setup steps

1. Create or open Mailjet account.
2. Add sender email: `free@readeasy30.com`.
3. Verify the sender email.
4. Add domain authentication for `readeasy30.com`.
5. Copy the DNS records Mailjet provides.
6. Add those records in Cloudflare DNS.
7. Wait for Mailjet verification.
8. Send one internal test email.
9. Send one verified public-contact test.
10. Begin the quota calendar warm-up.

## Daily sending plan after verification

Use:

```text
EMAIL-30-DAY-QUOTA-CALENDAR.csv
```

Warm-up pace:

```text
Days 1-3: manual/contact forms only
Days 4-7: 50 provider emails + 40 manual/form actions
Days 8-14: 100 provider emails + 40 manual/form actions
Days 15-21: 150 provider emails + 40 manual/form actions
Days 22-30: 200 provider emails + 40 manual/form actions
```

## Required files before sending

Open and use:

```text
EMAIL-30-DAY-QUOTA-PLAN.md
EMAIL-30-DAY-QUOTA-CALENDAR.csv
EMAIL-SENDER-SETUP-CHECKLIST.md
EMAIL-SUPPRESSION-LIST.csv
OUTREACH-DAILY-240-TRACKER.csv
OUTREACH-FIRST-EMAIL-BY-LIST.md
```

## Safety rules

Do not import scraped contacts.
Do not use purchased lists.
Do not send to private contacts.
Do not send to children.
Do not send to incarcerated people directly.
Do not skip opt-out tracking.
Do not store passwords or API keys in GitHub.
Do not exceed the provider quota.

## First test message

Send first to Gerry’s own inbox.

Then use one verified public organization contact form.

Do not mark a message `Sent` until it was actually submitted or sent.

## Status labels

Use only:

```text
Prepared
Queued
Sent
Form Submitted
Held for Review
Blocked
Bounced
No Contact Route
Duplicate
Not Fit
Follow Up Later
Opt Out
```
