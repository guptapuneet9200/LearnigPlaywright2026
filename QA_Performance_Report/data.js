// ============================================================================
// QA TEAM SPRINT REPORT — DATA
// ----------------------------------------------------------------------------
// Replace the sample data below with values from your real Jira export.
// Everything in this file drives the charts and tables in index.html.
// ============================================================================

window.QA_REPORT = {

  // --- Sprint context -------------------------------------------------------
  team: "QA Guild",
  sprint: "Sprint 12 — Regression & New Feature Validation",
  sprintRange: "2026-08-01 to 2026-08-12",
  generatedOn: "2026-08-12",

  // --- Burn-Down Chart ------------------------------------------------------
  // dates: each working day of the sprint.
  // remaining: story points / tasks still open at end of that day.
  // ideal: the straight "ideal" line from total scope to zero.
  burnDown: {
    dates: [
      "Aug 01", "Aug 04", "Aug 05", "Aug 06", "Aug 07",
      "Aug 08", "Aug 11", "Aug 12"
    ],
    remaining: [40, 34, 28, 24, 17, 12, 5, 2],
    ideal: [40, 35, 30, 25, 20, 15, 10, 5]
  },

  // --- Burn-Up Chart --------------------------------------------------------
  // completed: cumulative work finished by end of day.
  // total: total scope planned for the sprint (increases if scope was added).
  burnUp: {
    dates: [
      "Aug 01", "Aug 04", "Aug 05", "Aug 06", "Aug 07",
      "Aug 08", "Aug 11", "Aug 12"
    ],
    completed: [2, 8, 14, 18, 25, 30, 37, 40],
    total: [40, 40, 40, 40, 42, 42, 42, 42]
  },

  // --- Per-Member Performance ----------------------------------------------
  // Use whatever metrics you track in Jira. Adjust labels in index.html if needed.
  members: [
    {
      name: "Alice Chen",
      role: "Senior QA",
      issuesAssigned: 12,
      issuesResolved: 11,
      pointsCompleted: 14,
      bugsFound: 9,
      bugsMissed: 1,
      avgResolutionDays: 1.2,
      coveragePct: 92,
      reviewsDone: 6,
      trend: "+12% vs last sprint"
    },
    {
      name: "Bob Martinez",
      role: "QA Engineer",
      issuesAssigned: 10,
      issuesResolved: 9,
      pointsCompleted: 11,
      bugsFound: 7,
      bugsMissed: 2,
      avgResolutionDays: 1.8,
      coveragePct: 85,
      reviewsDone: 4,
      trend: "+5% vs last sprint"
    },
    {
      name: "Priya Nair",
      role: "Automation QA",
      issuesAssigned: 11,
      issuesResolved: 10,
      pointsCompleted: 13,
      bugsFound: 12,
      bugsMissed: 0,
      avgResolutionDays: 1.0,
      coveragePct: 96,
      reviewsDone: 8,
      trend: "+18% vs last sprint"
    },
    {
      name: "Sam Okafor",
      role: "QA Analyst",
      issuesAssigned: 9,
      issuesResolved: 8,
      pointsCompleted: 9,
      bugsFound: 6,
      bugsMissed: 3,
      avgResolutionDays: 2.1,
      coveragePct: 78,
      reviewsDone: 3,
      trend: "-4% vs last sprint"
    },
    {
      name: "Yuki Tanaka",
      role: "SDET",
      issuesAssigned: 13,
      issuesResolved: 12,
      pointsCompleted: 15,
      bugsFound: 10,
      bugsMissed: 1,
      avgResolutionDays: 1.1,
      coveragePct: 94,
      reviewsDone: 7,
      trend: "+9% vs last sprint"
    }
  ],

  // --- Sprint-Level Jira Summary -------------------------------------------
  jiraSummary: {
    totalIssues: 55,
    resolvedIssues: 50,
    completionPct: 91,
    bugsRaised: 44,
    bugsRejected: 5,
    escapedToProd: 2,
    openBugs: 7,
    scopeAddedPoints: 2,
    avgCycleDays: 1.4
  }
};
