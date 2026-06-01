# Wholelychit Security Plan

This file sets baseline security rules for the Wholelychit project group.

Use this GitHub copy from any computer. Do not rely only on local paths.

## Main Security Rules

1. Never commit secrets.
   - No API keys.
   - No passwords.
   - No tokens.
   - No private account numbers.
   - No trading credentials.

2. No browser auto-click scripts in repositories.
   - Do not add scripts that click ChatGPT, Codex, browser, payment, ad, login, trading, or gambling buttons.
   - Automation must be explicit, reviewable, and project-specific.

3. Protect sensitive projects.
   - `spx-tastytrade-autotrader` must default to dry-run, logs, and manual review.
   - `slotsfreeusa.com` must avoid real-money gambling flows, misleading claims, and unreviewed affiliate/ad integrations.

4. Use small commits.
   - Fix one area at a time.
   - Avoid full rewrites unless explicitly requested.
   - Keep rollback easy.

5. Keep status files current.
   - Each repo should have `AGENTS.md` and `PROJECT-STATUS.md`.
   - Security-sensitive repos should also have `SECURITY.md`.

6. Review external services before adding them.
   - Analytics, ads, email forms, payment tools, AI APIs, affiliate tools, and trading APIs need review before live use.

7. Keep static sites simple.
   - HTML, CSS, and JavaScript sites should not gain frameworks or build tools without a clear reason.
   - Simpler sites are easier to audit and recover.

## Repo Security Priority

### Highest Priority

- `Wholelychit/spx-tastytrade-autotrader`
- `Wholelychit/slotsfreeusa.com`
- `Wholelychit/llm-chat-app-template`
- `Wholelychit/chanfana-openapi-template`

### Medium Priority

- `Wholelychit/readeasy30.com`
- `Wholelychit/matheasy30.com`
- `Wholelychit/restaurantaibot.com`
- `Wholelychit/marketing-system`

### Standard Priority

- `Wholelychit/my-petneeds`
- `Wholelychit/bransonblastusa.com`
- `Wholelychit/my-ozarkwebmasters`
- `Wholelychit/bubbles-ai-guide`

## Immediate Security Checklist

For each repo:

- Add or verify `AGENTS.md`.
- Add or verify `PROJECT-STATUS.md`.
- Add `SECURITY.md` for sensitive repos.
- Search for committed secrets before deploying.
- Check public links and sitemap.
- Review forms before collecting user data.
- Review analytics/tracking before enabling.
- Keep a clear rollback point after stable fixes.

## Sensitive Repo Extra Rules

### Trading Automation

- Dry-run must be the default.
- Live trading must require explicit configuration.
- No credentials in code or docs.
- Logs should not expose account IDs or tokens.
- Never promise profit or performance.

### Gambling-Adjacent Content

- No real-money gambling unless legally reviewed.
- No claims of guaranteed wins.
- No misleading bonus or payout language.
- Age and responsible-use language should be clear.

### AI Templates

- No hardcoded API keys.
- `.env` examples must use fake placeholder values.
- User input handling should be documented.
- Deployment instructions should warn about secrets.

## Recovery Rule

If a folder seems missing, do not assume deletion first. Check:

1. Current working folder.
2. `C:\Users\Carol\Documents\Codex` on the current computer.
3. GitHub repository source.
4. Recent local generated Codex folders.

Then rebuild the local directory from GitHub repo names if needed.

## Any-Computer Access Rule

The GitHub repo `Wholelychit/marketing-system` is the shared source for organization and process. Local folders are convenience copies only.
