# Process Stabilization Rule

Last updated: 2026-06-04

Purpose: Stop repeated planning loops. After every process, stabilize the work before moving to the next task.

## Rule

After each process, do not just keep going.

Stabilize first.

## Stabilize means

Before moving on, update or create the right status note showing:

1. What was completed.
2. What file was changed or created.
3. Commit SHA if available.
4. Current blocker.
5. Exact next action.
6. File to open first next time.
7. What must not be repeated.

## Required stabilization files

Use these files instead of rebuilding the plan:

```text
TODAY-MARKETING-ACTION.md
PROJECT-STATUS.md
EMAIL-NEXT-ACTION.md
EMAIL-30-DAY-QUOTA-PLAN.md
EMAIL-30-DAY-QUOTA-CALENDAR.csv
OUTREACH-DAILY-240-OPERATING-SYSTEM.md
OUTREACH-DAILY-240-TRACKER.csv
CAMPAIGN-PUBLISHING-TRACKER.md
```

## Process examples

### Email setup process

After email setup work, update:

```text
EMAIL-NEXT-ACTION.md
EMAIL-SENDER-SETUP-CHECKLIST.md
EMAIL-30-DAY-QUOTA-CALENDAR.csv
```

### Outreach list process

After building or sending an outreach list, update:

```text
OUTREACH-DAILY-240-TRACKER.csv
```

If only sources were prepared, create or update a research/source list and mark it research-only.

### Social posting process

After any social post, update:

```text
EDUCATION-BATCH-01-POSTING-LOG.md
CAMPAIGN-PUBLISHING-TRACKER.md
```

### Website support process

After website work, update:

```text
PROJECT-STATUS.md
CAMPAIGN-PUBLISHING-TRACKER.md
```

## Stop condition

If a process is blocked, record the blocker and the next action.

Do not keep creating new plans to work around the same blocker.

## Open first every day

```text
TODAY-MARKETING-ACTION.md
```

Then open the specific next-action file named there.

## Current priority order

1. Email setup and 30-day quota system.
2. Outreach Daily 240 source/contact preparation.
3. Social account setup.
4. Batch 01 social posting.

## Do not repeat

Do not rebuild the daily plan.
Do not create duplicate operating systems.
Do not create a second quota plan.
Do not change the daily target unless the campaign changes.
Do not mark emails sent unless they were actually sent.
Do not mark contacts verified unless the public contact route was checked.
