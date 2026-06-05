# Brevo Fixed CSV Site Blocked Lock — 2026-06-05

Project: ReadEasy30 + MathEasy30 outreach

## Locked current file

The current Brevo-ready test file is:

```text
readeasy30_matheasy30_brevo_import_FIXED.csv
```

This file was created from verified public-email rows and uses Brevo-style headers:

```text
EMAIL
FIRSTNAME
LASTNAME
ORGANIZATION
SEGMENT
WEBSITE
SOURCE_URL
STATUS
NOTES
```

## Current blocker

Brevo site/upload is not working for Gerry right now.

Do not keep retrying the same upload loop.

## What not to use

Do not upload the raw master tracker workbook to Brevo:

```text
readeasy30_matheasy30_daily_outreach_mail_list_180.xlsx
```

That file is the master outreach tracker, not the clean import file.

## What to use when Brevo works again

Use:

```text
readeasy30_matheasy30_brevo_import_FIXED.csv
```

## Current status

| Item | Status |
|---|---|
| Sender | `free@readeasy30.com` locked |
| Brevo target | 300/day after account approval |
| Raw 180 workbook | Do not import directly |
| Fixed CSV | Created for test import |
| Brevo site/upload | Blocked / not working |
| Full 300-contact CSV | Not yet created |

## Next safe action

When Brevo is working again:

1. Upload `readeasy30_matheasy30_brevo_import_FIXED.csv`.
2. Confirm Brevo sees the `EMAIL` column.
3. Map custom fields only if Brevo asks.
4. Do not send yet.
5. First send should be a test only.

## If Brevo still fails

Do one of these:

1. Try Chrome hard refresh and sign back into Brevo.
2. Try a private/incognito Chrome window.
3. Try Edge browser.
4. Try uploading only the small fixed CSV again.
5. If still blocked, pause Brevo and use manual direct email testing only.

## Do not continue until

- Brevo accepts the fixed CSV,
- sender identity `free@readeasy30.com` is confirmed,
- one test send passes,
- suppression/do-not-contact handling is active.
