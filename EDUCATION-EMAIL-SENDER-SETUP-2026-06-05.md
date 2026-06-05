# Education Email Sender Setup — 2026-06-05

Projects: ReadEasy30 + MathEasy30

## Locked sender

Use this sender for the education outreach campaign:

```text
free@readeasy30.com
```

This address is for both websites:

- ReadEasy30
- MathEasy30

Do not replace this with `wholelychit@gmail.com` unless there is a temporary authentication or recovery need.

## Sender identity

| Field | Value |
|---|---|
| From name | ReadEasy30 + MathEasy30 |
| From email | `free@readeasy30.com` |
| Reply-to email | `free@readeasy30.com` |
| Backup owner email | `wholelychit@gmail.com` |

## Sending platform plan

Use a compliant email platform, not a raw 5-second email blaster.

Preferred free/low-cost setup:

```text
Brevo free plan
```

Reason:

- Brevo states that once an account is approved for sending, the free plan can send up to 300 emails per day.
- It has list management and suppression/unsubscribe handling.
- It is safer for the sender reputation than rapid-fire manual Gmail sending.

## Daily target

```text
300 sends per day after Brevo sending approval
```

## Current list reality

The recovered list currently covers:

```text
180 rows recovered
```

To reach the new 300/day target, we need:

```text
120 additional good-fit contacts
```

## Daily target by segment

| Segment | Current recovered count | New target | Additional needed |
|---|---:|---:|---:|
| Public libraries | 30 | 50 | 20 |
| Preschools / daycares | 30 | 50 | 20 |
| Adult education / workforce | 30 | 50 | 20 |
| Tutors / homeschool helpers | 30 | 50 | 20 |
| Reentry / correctional education support | 30 | 50 | 20 |
| Churches / nonprofits / family centers | 30 | 50 | 20 |
| **Total** | **180** | **300** | **120** |

## Sending pace rule

Do not use a 5-second blast interval.

Use a controlled campaign send or a safer platform-managed send that protects the sender address and domain reputation.

Recommended daily operating pattern after approval:

| Batch | Count | Notes |
|---|---:|---|
| Segment batch 1 | 50 | Public libraries |
| Segment batch 2 | 50 | Preschools/daycares |
| Segment batch 3 | 50 | Adult education/workforce |
| Segment batch 4 | 50 | Tutors/homeschool helpers |
| Segment batch 5 | 50 | Reentry/correctional education support |
| Segment batch 6 | 50 | Churches/nonprofits/family centers |
| **Total** | **300** |  |

## Required list fields

Import the recovered outreach list and expanded contacts with these fields:

```text
Organization
Segment
Contact Email
Contact Route
Contact Source URL
Date Added
Date Sent
Status
Reply
Opt Out
Notes
```

## Required message elements

Every outreach message must include:

- `100% free`
- `30 minutes a day`
- `https://readeasy30.com/`
- `https://matheasy30.com/`
- clear opt-out wording
- sender: `free@readeasy30.com`

## Standard subject

```text
Free reading and math practice resource
```

## Standard message

```text
Hello,

I wanted to share two free learning resources that may help families, adult learners, tutors, or community members who need simple daily practice.

ReadEasy30.com offers calm reading practice.
MathEasy30.com offers simple math practice.

Both are 100% free and built around practicing about 30 minutes a day, one small step at a time.

They may be useful as a free link for families, learners, tutors, or community education resources.

Reading: https://readeasy30.com/
Math: https://matheasy30.com/

If this is not useful for your organization, reply “remove” and I will not contact you again.

Thank you,
Gerry
ReadEasy30 + MathEasy30
free@readeasy30.com
```

## Setup checklist

| Step | Action | Status |
|---:|---|---|
| 1 | Confirm `free@readeasy30.com` mailbox exists and can receive mail | Needed |
| 2 | Confirm `free@readeasy30.com` can send mail or can be authenticated in platform | Needed |
| 3 | Create Brevo account if not already created | Needed |
| 4 | Add sender identity `free@readeasy30.com` | Needed |
| 5 | Add domain authentication records if platform requests DNS setup | Needed |
| 6 | Import recovered 180-contact list as Batch A | Needed |
| 7 | Build and import 120 additional contacts as Batch B | Needed |
| 8 | Create suppression/do-not-contact list | Needed |
| 9 | Send one test to owner inbox | Needed |
| 10 | Send first segment only after test passes | Needed |
| 11 | Track daily count and replies | Needed |

## DNS/authentication notes

If Brevo or another platform asks for sender authentication, add the requested DNS records at Cloudflare for `readeasy30.com`.

Do not guess DNS records.

Only use exact values shown by the email platform.

Likely record types:

- SPF TXT
- DKIM CNAME or TXT
- DMARC TXT

## Important correction

Previous setup notes incorrectly suggested using `wholelychit@gmail.com` as the campaign sender.

Correct campaign sender is:

```text
free@readeasy30.com
```

`wholelychit@gmail.com` is only an owner/recovery backup, not the default campaign sender.

## Safety lock

No scraping.
No purchased lists.
No guessed emails.
No 5-second blast tool.
No private personal data in GitHub.
No direct contact with incarcerated people.
No promises of guaranteed learning improvement.
No claim that the sites replace teachers, tutors, schools, or professional help.
