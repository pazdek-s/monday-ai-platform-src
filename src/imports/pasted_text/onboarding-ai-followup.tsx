TASK: monday.com Onboarding — AI conversation with follow-up question card
The onboarding chat after the user has submitted their first answer — shows the original AI question, the user's reply bubble, the AI's response, and a structured clarifying question card with pill buttons.

CONTEXT:
- Use Case: Continuation of the onboarding conversation — AI acknowledges the user's answer and asks a follow-up question to personalise the workspace setup
- Brand Reference: monday.com product UI — same shell as previous screen, chat thread style
- Platform: Web, 1440×900px desktop viewport, border-radius 8px app frame

LAYOUT:
┌──────────────────────────────────────────────────────────────┐
│  Top bar (56px) — monday logo + "AI work platform"           │
├──────┬───────────────────────────────────────────────────────┤
│ Left │              Main Area (1376px wide)                   │
│ Nav  │                                                        │
│(64px)│    ┌────────────────────────────────────────────┐     │
│      │    │ [AI icon] Sidekick question (first)        │     │
│ Home │    │ What brings you to monday.com?             │     │
│Person│    │ Subtitle                                   │     │
│ (act)│    │                                            │     │
│ Work │    │              [Avatar N] User bubble →      │     │
│ spce │    │   "I'm leading a recruitment team..."      │     │
│ ──── │    │                                            │     │
│ Vibe │    │ [AI icon] Sidekick response                │     │
│ Flow │    │ "Great! I'm pretty sure monday has..."     │     │
│Agent │    │ "Before I build you a workspace..."        │     │
│      │    │                                            │     │
│      │    │ ┌──────────────────────────────────────┐  │     │
│      │    │ │ How many people are at your team?    │  │     │
│      │    │ │ ‹ 2 of 2 › Skip                      │  │     │
│      │    │ │ [Only me][1-5][6-10][11-15][16-25]   │  │     │
│      │    │ │ [51-100]                              │  │     │
│      │    │ └──────────────────────────────────────┘  │     │
│      │    └────────────────────────────────────────────┘     │
└──────┴───────────────────────────────────────────────────────┘
Total: 1440×900px

ELEMENTS:
- [ ] Top bar (56px): monday.com logo + "AI work platform" tagline — identical to previous screen
- [ ] Left nav (64px): same as previous screen — Home, Person (active), Workspace, divider, Vibe, Workflow, Agents
- [ ] Main area: same white surface, 0.5px border, border-radius 16px top-left, shadow
- [ ] Content column (680px wide, centred): padding top 64px, bottom 32px, gap 24px between sections
- [ ] Section 1: AI icon + first question text + subtitle (same as previous screen)
- [ ] Section 2: User message bubble — right-aligned, avatar "N" above, bubble with user's answer
- [ ] Section 3: AI follow-up — AI icon + response heading + subtitle, then question card below
- [ ] Question card: white, 2px dark border, rounded 16px, padded 20px — contains question + pagination + pill buttons
- [ ] Pagination: chevron left + "2 of 2" + chevron right + "Skip" link
- [ ] 6 pill-style answer buttons in a flex-row

COMPONENT SPECS:

**Top bar, Left nav, Main area** — identical to previous screen (10025:42437). Reuse exactly.

**Content column** (680px wide)
- Centred in main area
- Padding: top 64px, bottom 32px
- Gap: 24px between the 3 main sections

**Section 1 — Original AI question** (same as previous screen)
- AI colored icon (20px) in a "Sidekick message header" row
- Heading: "What brings you to monday.com?" — Figtree SemiBold 16px, #323338
- Subtitle: "The more details you share, the better we can tailor your setup." — Figtree Regular 14px, line-height 1.6, #323338

**Section 2 — User message bubble**
- Layout: flex-col, align-items end, gap 4px, padding-left 24px
- Avatar (32×32px, circular): dark navy background (~#1C1F3B), white letter "N" — Figtree SemiBold 14px, white
- Bubble container: max-width 302px, padding 10px 16px
  - Background: #EDF1FC (light periwinkle)
  - Border: 0.5px solid white
  - Border-radius: 12px 12px 12px 4px (top-left, top-right, bottom-left = 12px; bottom-right = 4px — chat bubble tail)
  - Text: "I'm leading a recruitment team and need to hire faster and better candidates"
  - Font: Figtree Regular 14px, line-height 1.5, #323338, white-space: nowrap

**Section 3 — AI follow-up block** (gap 24px internally)
- Sub-section A: AI message
  - AI colored icon (20px)
  - Heading: "Great! I'm pretty sure monday has exactly what you need ;)" — Figtree SemiBold 16px, #323338
  - Subtitle: "Before I build you a workspace with all the tools, let me clarify a few things." — Figtree Regular 14px, line-height 1.6, #323338
- Sub-section B: Question card (gap 16px below AI message)

**Question card** (full width of column, 680px)
- Background: white
- Border: 2px solid #323338 (dark, prominent — indicates active/current question)
- Border-radius: 16px
- Padding: 20px
- Layout: flex-col, gap 28px between question row and buttons row

**Question card — header row**
- Layout: flex-row, space-between, align-items center
- Left: "How many people are at your team?" — Figtree SemiBold 16px, #323338, white-space nowrap
- Right: pagination + skip control
  - Pagination group: flex-row, gap 4px, align-items center
    - DropdownChevronLeft icon (20px, #323338)
    - "2 of 2" — Figtree SemiBold 16px, #323338
    - DropdownChevronRight icon (20px, #323338)
  - "Skip" — Figtree Regular 16px, #676879, cursor pointer, margin-left 16px from pagination
  - Right group total width: 271px

**Question card — pill buttons row**
- Layout: flex-row, gap 8px, flex-wrap: wrap
- 6 buttons: "Only me", "1-5", "6-10", "11-15", "16-25", "51-100"
- Each button:
  - Height: 32px, min-height 32px, max-height 32px
  - Padding: 0 8px
  - Border: 1px solid #C3C6D4
  - Border-radius: 4px
  - Background: transparent
  - Font: Figtree Regular 14px, line-height 20px, #323338
  - Hover: background #F5F6FB, border-color #8181FF, 150ms ease
  - Selected state: background #EDF1FC, border 2px solid #0073EA, font-weight 600

DESIGN SYSTEM:

**Colors**
| Token | Hex | Usage |
|---|---|---|
| Text primary | #323338 | All body text, headings, card border |
| Text secondary | #676879 | "Skip" link, muted text |
| Border UI | #C3C6D4 | Pill button default borders |
| Border active | #0073EA | Pill button selected state |
| Card border active | #323338 | Question card prominent border |
| User bubble bg | #EDF1FC | User chat bubble background |
| User bubble border | #FFFFFF | User chat bubble border |
| Layout border | #D0D4E4 | Main area border |
| Nav active bg | rgba(204,228,255,0.6) | Active nav icon |

**Typography**
| Element | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| AI heading | Figtree | 16px | 600 | 22px |
| AI subtitle | Figtree | 14px | 400 | 1.6 |
| User message | Figtree | 14px | 400 | 1.5 |
| Card question | Figtree | 16px | 600 | 22px |
| Pagination label | Figtree | 16px | 600 | 22px |
| Skip link | Figtree | 16px | 400 | 22px |
| Pill button | Figtree | 14px | 400 | 20px |
| Avatar initial | Figtree | 14px | 600 | 20px |

**Spacing**
- 4px, 8px, 10px, 12px, 16px, 20px, 24px, 28px, 32px, 64px

**Shadows**
- Main area: 0px 4px 32px 0px rgba(0,19,85,0.08)

**Border radius**
- App frame: 8px
- Nav buttons: 8px
- Main area: 16px top-left only
- User bubble: 12px 12px 12px 4px
- Question card: 16px
- Pill buttons: 4px
- Avatar: 100px (circular)

BEHAVIOR:
- **Pill button on hover**: background #F5F6FB, border-color #8181FF, 150ms ease
- **Pill button on click/selected**: background #EDF1FC, border 2px solid #0073EA, font-weight 600
- **Only one pill can be selected at a time** — clicking a new one deselects the previous
- **Chevron left/right on click**: navigates to previous/next question (pagination)
- **"Skip" on click**: advances to next question without selecting an answer
- **All transitions**: 150ms ease
- **Chevrons**: left is slightly dimmed if on first question, right dimmed if on last

CONSTRAINTS:
| Spec | Value |
|---|---|
| Platform | Web |
| Viewport | 1440×900px |
| Accessibility | WCAG AA, keyboard nav — Tab through pills, Enter to select |
| Font loading | Figtree + Poppins from Google Fonts |

**States required:**
- Pill default, Pill hover, Pill selected
- Chevron active, Chevron disabled (first/last)
- Card default (current question, dark border)

CONTENT:
- First AI question: "What brings you to monday.com?"
- First AI subtitle: "The more details you share, the better we can tailor your setup."
- User bubble: "I'm leading a recruitment team and need to hire faster and better candidates"
- Second AI heading: "Great! I'm pretty sure monday has exactly what you need ;)"
- Second AI subtitle: "Before I build you a workspace with all the tools, let me clarify a few things."
- Question card heading: "How many people are at your team?"
- Pagination: "2 of 2"
- Pill options: "Only me", "1-5", "6-10", "11-15", "16-25", "51-100"

NOTES:
1. The shell (top bar + left nav + main area) is identical to the previous screen — reuse it
2. The user bubble has an asymmetric border-radius: top-left/top-right/bottom-left = 12px, bottom-right = 4px — this creates the chat bubble "tail" on the bottom-right, indicating a sent message
3. The avatar sits above and to the right of the bubble (flex-col, align-items end), not beside it
4. The question card uses a 2px solid dark (#323338) border — much heavier than the regular 0.5px/1px borders elsewhere — to signal it's the active interactive element
5. The pagination "2 of 2" means this is the second of two clarifying questions — the right chevron should appear slightly muted/disabled
6. There is no input box on this screen — the user answers by clicking a pill button, not typing
7. After a pill is selected, show a "Continue" or similar primary action — this is not shown in the design but should be implied in the interactive prototype