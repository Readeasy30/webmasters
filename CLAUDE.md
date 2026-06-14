# Webmasters — Project Context for Claude

## What This Repo Is
Central operations and coordination hub for all Readeasy30 web properties. NOT a deployable website — it is a flat collection of planning docs, templates, campaign trackers, and automation scripts used to manage multiple sites.

## Structure
- `README.md` — full project overview (17KB)
- `make_shorts.py` — Python script for generating short-form content
- `outreach-tracker.xlsx` — advertiser/outreach tracking spreadsheet
- `CAMPAIGNS/` — campaign briefs and assets
- `OUTREACH/` — outreach templates and contact lists
- `RestaurantAI/` — RestaurantAIBot-specific planning docs
- `STATUS-UPDATES/` — periodic status reports
- `automation/` — automation scripts and configs
- `avatar-system/` — avatar/brand persona assets
- `brand-rules/` — brand guidelines and style rules
- `campaigns/` — active campaign files
- `chrome-devtools-agent/` — Chrome DevTools automation
- `education-growth-system/` — growth playbooks for education sites
- `legal/` — legal templates (privacy policy, terms, disclosures)
- `prompt-library/` — reusable AI prompt templates
- `templates/` — HTML/content templates
- `video-system/` — video production workflow docs

## Sites This Repo Manages
| Site | Repo |
|------|------|
| readeasy30.com | readeasy30/readeasy30.com |
| matheasy30.com | readeasy30/matheasy30.com |
| petneeds.ai | readeasy30/my-petneeds |
| bransonblastusa.com | readeasy30/bransonblastusa.com |
| restaurantaibot.com | readeasy30/restaurantaibot.com |
| slotsfreeusa.com | readeasy30/slotsfreeusa.com |

## Important
- This repo is NOT deployed anywhere — it is ops/planning only
- Do not add `index.html`, `_headers`, or deployment files here
- Python scripts require Python 3.x: `python3 make_shorts.py`
