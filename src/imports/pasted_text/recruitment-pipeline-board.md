TASK: monday.com Product landing — Recruitment pipeline board with Onboarding buddy panel
The first screen users see after onboarding completes. The board loads fully first, then the "Onboarding buddy" sidekick panel slides in from the right as a second state.

CONTEXT:
- Use Case: User has just finished the loader screen and lands inside the actual monday.com product for the first time — their board is pre-built and ready, and the AI Onboarding buddy immediately surfaces to guide next steps
- Brand Reference: monday.com full product UI — production fidelity
- Platform: Web, 1440×900px desktop viewport

LAYOUT — STATE 1 (board only, no sidekick):
┌────────────────────────────────────────────────────────────────┐
│  Global top bar (56px) — logo, search, nav icons, avatar       │
├──────┬──────────────────┬──────────────────────────────────────┤
│ Icon │  Left sidebar    │  Board main area                     │
│ nav  │  (296px)         │  Title + actions                     │
│(64px)│                  │  View tabs                           │
│      │  MY SPACE        │  Board table:                        │
│      │  My work         │  • Screening (orange)                │
│      │  Recents         │  • Interviews (blue)                 │
│      │  Agents:         │  • Contract negotiation (pink)       │
│      │  • Onb buddy     │                                      │
│      │  • Cand screen   │                                      │
│      │  • Int analyst   │                                      │
│      │  Favorites:      │                                      │
│      │  • Recruit pipe  │                                      │
│      │  • Exec overview │                                      │
└──────┴──────────────────┴──────────────────────────────────────┘

LAYOUT — STATE 2 (board + sidekick panel):
┌────────────────────────────────────────────────────────────────┐
│  Global top bar (56px)                                         │
├──────┬──────────────────┬───────────────────┬──────────────────┤
│ Icon │  Left sidebar    │  Board (narrowed) │  Sidekick panel  │
│ nav  │  (296px)         │  (700px)          │  (380px)         │
│(64px)│                  │                   │  Onboarding buddy│
│      │  [same as above] │  [board content]  │  Welcome message │
│      │                  │                   │  5 action cards  │
│      │                  │                   │  Prompt input    │
└──────┴──────────────────┴───────────────────┴──────────────────┘

ELEMENTS:

**Global top bar** (1440×56px)
- Background: white
- Left: monday.com logo mark (32×32px circular) + wordmark
- Centre: Search bar (400×32px) — "Search or ask anything..." placeholder, rounded pill
- Right: 4 icon buttons (notification bell, inbox, person-add, help/?) + grid dots (app switcher) + monday mark icon + user avatar button (32×32px)

**Icon nav** (64×844px, left strip)
- Same as all previous onboarding screens
- 7 icon buttons: Home, Person, Workspace, divider, Vibe, Workflow, Agents, divider, one more
- No active highlight on this screen — neutral state

**Left sidebar** (296×844px)
- Background: white
- Border-right: 0.5px solid #E7E9EF
- Section header: "MY SPACE" — all caps, 12px, #676879, y=12
- Navigation items (32px tall each, padding left 8px):
  - "My work" with clock icon
  - "Recents" with arrow icon + chevron right
- Section header: "Agents" — 12px, #676879
- Agent list items (52px tall each):
  - **Onboarding buddy** — green circular avatar (20×20px), name "Onboarding buddy", status "Available, 5 assets available" in secondary text
  - **Candidate screener** — orange/red circular avatar, "Candidate screener", "Ready to start"
  - **Interviews analyst** — purple circular avatar, "Interviews analyst", "Ready to start"
- Section: "Favorites ˅" with ellipsis + search icons (right)
- Favorite items (32px tall):
  - **Recruitment pipeline** — grid icon, highlighted/active (light blue background #E8F0FE or similar), text #323338
  - **Executive overview** — vibe/heart icon

**Board area — State 1** (full width: 1376-296 = 1080px)

*Title & actions bar* (y=40 within board area, 968px wide)
- Left: "Recruitment pipeline" title — Poppins or heading font, ~24px, bold + dropdown chevron
- Right: "Integrate" button (pill, icon + label) + "Automate" button (pill, icon + label) + icon button + agent avatars group (3 overlapping circular agent avatars, 28px) + user avatar group + "New Item" blue button + icon button

*Board header / view tabs* (y=96, 40px tall)
- Tabs: "Main table" (active, blue pill background) + other views
- Action buttons: Search, Person, Filter, Sort

*Board table content* (y=160)
- 3 group sections, each with coloured left border:

**Group 1 — Screening** (orange #E44B23 left accent)
- Group header: orange "▾ Screening" text, orange border-left 3px
- Column headers row: checkbox | Task | AI Ag[ent] (truncated)
- 3 item rows + "+ Add Task" row
- Each row: 56px tall, checkbox | "Candidate name" | agent avatar (colourful circular 28px)
- Row border-bottom: 1px solid #E7E9EF

**Group 2 — Interviews** (blue #0073EA left accent)
- Same structure, blue "▾ Interviews" header
- 3 rows + "+ Add Task"

**Group 3 — Contract negotiation** (pink #FF007F or #E2445C left accent)
- Same structure, pink "▾ Contract negotiation" header
- 2 rows + "+ Add Task" (partial, cut off at bottom)

**Sidekick panel** (380×844px) — STATE 2 ONLY

*Header* (52px tall)
- Background: white, backdrop-blur: 40px, border-bottom: 1px solid #E7E9EF
- Left: Agent avatar (20×20px circular, green bg) + "Onboarding buddy" — Figtree SemiBold 14px + dropdown chevron (20px)
- Right: 3 icon buttons — NewChat (edit/pencil), Sidebar (column icon), Close (X)
- Padding: 10px 12px

*AI body* (flex-col, padding 12px, gap 16px, justify-end)
- Scrollable content area, content pushed to bottom

*Welcome message block*
- Agent avatar (20×20px circular, green) at top
- Text: "Welcome Noa!" bold line, then "Let me walk you through your first steps in the product and get you quick results."
- Font: Figtree Regular 14px, line-height 1.6, #323338

*Suggestions section*
- Label: "Choose how to start or write me anything" — Figtree SemiBold 14px, #676879
- 5 action cards (full width, 52px tall each, gap 8px):
  Each card: white bg, 0.5px border #C3C6D4, border-radius 8px, padding 12px, flex-row, gap 8px
  - Icon container (28×28px, rounded 4px, with coloured bg) + label text (Figtree Regular 14px)

  | Icon bg | Label |
  |---|---|
  | Gradient (white→#EDF1FC) | "Walk me through what you've build" |
  | rgba(102,204,255,0.2) light blue | "Import real data into my board" |
  | rgba(102,204,255,0.2) | "Prepare my agents to do the work for me" |
  | rgba(102,204,255,0.2) | "Continue building my Vibe app" |
  | Transparent | "Skip onboarding for now" |

*Prompt input* (bottom, sticky)
- Background: white, backdrop-blur 40px, border-radius 16px 16px 0 0
- Input container: white, border 1px solid #C3C6D4, border-radius 12px, padding 8px
  - Top row (44px): blinking cursor + placeholder "Tell Sidekick what you want to do..." — Figtree Regular 14px, #676879
  - Bottom row: 3 icon buttons left (Attach, Mention, AI Skills) + spacer + Microphone icon + Send button (24×24px circular, disabled grey #ECEDF5 bg)
- Footer text: "AI may be inaccurate, make sure to review it. " + "Learn more" in #1F76C2

DESIGN SYSTEM:

**Colors**
| Token | Hex | Usage |
|---|---|---|
| Primary | #0073EA | Active board tab, New Item button |
| Text primary | #323338 | All body text |
| Text secondary | #676879 | Muted labels, placeholder |
| Border | #E7E9EF | All UI borders |
| Border input | #C3C6D4 | Input, card borders |
| Sidebar active item | #EDF1FC | Active "Recruitment pipeline" row |
| Screening accent | #E44B23 | Group border-left |
| Interviews accent | #0073EA | Group border-left |
| Contract accent | #E2445C | Group border-left |
| Agent green | #00C875 | Onboarding buddy avatar bg |
| Link | #1F76C2 | "Learn more" |

**Typography**
| Element | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Board title | Poppins | 24px | 600 | 32px |
| Section headers | Figtree | 12px | 400 | 16px |
| Nav/sidebar items | Figtree | 14px | 400 | 20px |
| Agent name | Figtree | 14px | 600 | 20px |
| Agent status | Figtree | 12px | 400 | 16px |
| Group header | Figtree | 14px | 600 | 20px |
| Row item text | Figtree | 14px | 400 | 20px |
| Sidekick welcome | Figtree | 14px | 400 | 1.6 |
| Suggestion label | Figtree | 14px | 600 | 20px |
| Action card label | Figtree | 14px | 400 | 20px |

**Spacing** — 4, 8, 12, 16, 20, 24, 32px scale

**Border radius** — sidebar items 4px, cards 8px, sidekick panel header 0px, input 12px, send button 12px

BEHAVIOR — THE TRANSITION (critical):

**State 1 — Board only (initial load)**
- Render the full board with left sidebar at full width
- The board area fills the remaining width: 1440 - 64 (icon nav) - 296 (sidebar) = 1080px
- Hold for 800ms after component mounts (simulate page load feeling)

**State 2 — Sidekick slides in (triggered automatically)**
- After 800ms delay, the sidekick panel slides in from the right edge
- Animation: `translateX(380px) → translateX(0)`, 400ms ease-out
- Simultaneously: the board area smoothly compresses from 1080px → 700px (flex layout handles this naturally)
- The sidebar remains unchanged at 296px
- The sidekick panel overlays nothing — it pushes the board content left

**Transition spec:**
```css