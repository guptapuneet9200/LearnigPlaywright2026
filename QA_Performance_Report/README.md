# QA Team Performance Report

A self-contained, offline HTML report that visualizes QA team sprint performance:

- **Burn-Down Chart** — remaining scope vs ideal pace
- **Burn-Up Chart** — completed work vs total scope
- **Per-member bar chart** — points completed & bugs found
- **Member performance cards** — issues resolved, bugs missed, resolution time, coverage, trend
- **Jira summary table** — sprint-level metrics

## How to open

Just open `index.html` in any browser (Chrome, Edge, Firefox). No install or server needed.
Chart.js is loaded from a CDN, so an internet connection is required on first open.

## How to plug in real Jira data

1. Export the sprint you want from Jira:
   - **Issues**: Use the built-in **Sprint report** (burn-down) or **Reports → Control Chart / Burndown Chart**, or export the sprint board to CSV.
   - **Per-member stats**: Jira doesn't report these directly — pull them from a board filter grouped by Assignee, or from your tracking sheet.
2. Open `data.js` and replace the sample values with your real numbers.
3. Refresh `index.html`.

## What to update in data.js

| Field | Description |
| --- | --- |
| `team`, `sprint`, `sprintRange`, `generatedOn` | Report header text |
| `burnDown.dates / remaining / ideal` | Daily remaining points + the ideal straight line |
| `burnUp.dates / completed / total` | Daily cumulative completed points and total scope |
| `members[]` | One object per QA engineer with their metrics |
| `jiraSummary` | Sprint-level totals (completion %, bugs, cycle time…) |

## Metrics explained

- **Bugs missed** — bugs that escaped review and were found later (in production or by other teams). Lower is better.
- **Bugs rejected** — raised but closed as invalid/duplicate; a high number may indicate unclear requirements, not bad QA.
- **Coverage %** — estimated test coverage for assigned work.
- **Trend** — change in resolved points vs the previous sprint.

## Sharing with the team

- Print to PDF: `Ctrl+P` → Save as PDF, or email the file.
- Host it on any static file server / Confluence / SharePoint to share the link.
- Data is intentionally flat in `data.js` so you can regenerate it from a Jira CSV export via a small script.
