# Master Review Queue

## Purpose

This queue gives Codex and AI helpers one clear pattern for checking active website repositories.

## Active Repositories

- `Wholelychit/readeasy30.com`
- `Wholelychit/matheasy30.com`
- `Wholelychit/my-petneeds`
- `Wholelychit/restaurantaibot.com`
- `Wholelychit/slotsfreeusa.com`
- `Wholelychit/spx-tastytrade-autotrader`
- `Wholelychit/marketing-system`

## Review Loop

For each repo:

1. Read the README.
2. Read AGENTS instructions when present.
3. Read project lock or checkpoint files when present.
4. Check homepage message.
5. Check navigation.
6. Check mobile layout.
7. Check links.
8. Check main user action.
9. Check support pages.
10. Check topic pages.
11. Record blockers.
12. Continue to the next repo.

## Common Checks

Look for:

- duplicate CSS
- wrong CSS paths
- wrong JavaScript paths
- broken links
- old starter app text
- React or Vite leftovers in non-React projects
- missing AGENTS instructions
- missing README instructions
- missing lock notes
- missing local run notes
- weak mobile layout

## Safe Direct Updates

Codex and AI helpers may update:

- HTML
- CSS
- JavaScript
- Markdown
- JSON
- YAML
- Python helper files

Use full-file updates when safer than tiny patches.

## Build Order

1. Homepage message
2. Navigation
3. Mobile layout
4. Broken links
5. Main app or user action
6. Support pages
7. Topic pages
8. Monetization later

## Blocker Log

Record blockers in the affected repo using this format:

- Date:
- Repo:
- File:
- Issue:
- Attempted fix:
- Needed owner action:
- Next safe task:

## Owner Routing Rule

Routine repository file work stays with Codex and AI helpers when tools allow it.

Owner action is only for browser prompts, visible screen errors, major business choices, or unclear repo state.