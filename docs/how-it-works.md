# How it works

## The daily rhythm

| When | What runs | What I see |
|---|---|---|
| Every night | **Scout and research run:** re-checks every open posting, closes expired ones, finds new verified jobs, researches target companies, prepares approved applications, and answers my notes. | A short morning summary and an updated dashboard. |
| Hourly during the day | **Daytime check:** answers new notes and prepares anything I approved, so I don't wait overnight. It stops immediately if there's nothing new. | Replies on the job or in Talk to Claude, plus new PDFs. |
| Every Monday | **Application check-in:** lists every application, drafts follow-ups that are due and flags deadlines. | A weekly summary with follow-up drafts I send myself. |

## The master profile

Every agent reads one master profile before it does anything. It holds:

- **Verified facts:** roles, dates, education, licenses and skills, each confirmed by me.
- **Positioning:** the job tracks I'm exploring and how to present my background for each.
- **Writing rules:** my voice, preferred phrases, phrases to avoid, and how every cover letter should close.
- **Privacy rules:** what never appears in a public document (for example, addresses or property details).
- **An application log** with dates and follow-ups.

When I correct something ("count 14 projects, not 16", "say I was the primary developer"), the correction goes into the profile once, and every future document uses it.

## Rules the agents follow

- **Never invent experience, dates or numbers.** If something can't be supported by the profile, it's left out, and the agent says so.
- **Never submit an application or send a message.** Agents prepare; I act.
- **Confirm before showing.** A job is only shown after it's confirmed open on the employer's own careers page.
- **No duplicates.** Before building files, the agent checks whether they already exist.
- **PDF only**, saved to one folder, with a combined cover-letter-and-resume PDF for single-upload forms.

## The dashboard

`index.html` is one self-contained page. It reads and writes these collections:

| Collection | Holds |
|---|---|
| `jobs` | Each posting: fit, recommendation, research, stage (Found, Applying, Applied, Interviewing, Offer, Closed), files and follow-up dates |
| `tasks` | Things only I can do, with due dates and time estimates |
| `companies` | Target companies and research notes |
| `contacts` | People who can open a door, with a drafted next step |
| `messages` | Two-way notes between me and the agents |
| `agents` | Each agent's latest work, next step and suggestion |
| `profile`, `library` | Summary profile and the base resume library |

In this demo, `demo.js` provides fictional data and keeps every change in the browser tab.
