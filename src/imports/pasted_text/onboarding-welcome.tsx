TASK: monday.com Onboarding — "What brings you to monday.com?" screen
First onboarding question shown inside the product after account creation — an AI-powered free-text input with example suggestion cards below it.

CONTEXT:
- Use Case: New user's first interaction inside monday.com — AI sidekick asks what they want to accomplish, user types freely or picks a suggestion card
- Brand Reference: monday.com product UI — clean SaaS shell with minimal left nav, centred content area
- Platform: Web, 1440×900px desktop viewport, border-radius: 8px (app frame)

LAYOUT:
┌──────────────────────────────────────────────────────────────┐
│  Top bar (56px) — monday logo + "AI work platform"           │
├──────┬───────────────────────────────────────────────────────┤
│ Left │              Main Area (1376px wide)                   │
│ Nav  │                                                        │
│(64px)│         ┌─────────────────────────────────┐           │
│      │         │  [AI icon]                       │           │
│ Home │         │  "What brings you to monday?"    │           │
│ Person│        │  Subtitle text                   │           │
│ Works│         │                                  │           │
│ pace │         │  [Free-text input box, 680px]    │           │
│ ──── │         │  (bordered, purple, with cursor) │           │
│ Vibe │         │                                  │           │
│ Work-│         │  [5 suggestion cards, scrollable]│           │
│ flow │         └─────────────────────────────────┘           │
│ Agent│                                                        │
└──────┴───────────────────────────────────────────────────────┘
Total: 1440×900px

ELEMENTS:
- [ ] Top bar (56px): monday.com logo (left) + "AI work platform" tagline
- [ ] Left nav (64px wide): 7 icon buttons in a vertical strip — Home, Person (active/highlighted), Workspace, divider, MondayVibe, Workflow, Agents
- [ ] Main area: white surface, border-radius 16px top-left, 0.5px border, medium drop shadow
- [ ] Main content column (680px wide, centred): vertically centred in main area
- [ ] AI colored icon (20px) — multicolour monday AI mark above the question
- [ ] Question heading: "What brings you to monday.com?"
- [ ] Question subtitle: "The more details you share, the better we can tailor your setup."
- [ ] Free-text input box (680×136px): bordered with purple/AI gradient, cursor blinking, placeholder text, submit button
- [ ] "Add context" button (hidden/opacity 0 in default state) inside the input footer
- [ ] Submit button (32×32px, circular, disabled/grey) bottom-right of input
- [ ] 5 horizontally scrolling suggestion cards below the input
- [ ] Each suggestion card: lightbulb icon + title + description text

COMPONENT SPECS:

**App frame**
- Background: white (#FFFFFF)
- Border-radius: 8px
- Overflow: hidden
- Size: full viewport

**Top bar** (full width × 56px)
- Background: white
- Padding: 8px 18px
- Content: monday.com logo SVG (90×16px) + "AI work platform" — Poppins Light 17px, #000000, letter-spacing -0.69px
- Both in a CSS grid overlap row, logo left, tagline to the right of logo

**Left nav** (64px wide × full height)
- Background: white
- Padding: 12px 16px
- Icon buttons: 32×32px each, border-radius 8px, gap 12px between icons
- Default icon button: transparent background, icon colour #676879 (20px icons)
- Active icon button (Person): background rgba(204,228,255,0.6) — soft blue highlight
- Icons top group: Home, Person (active), Workspace
- Divider: 1px horizontal line, 20px wide, colour rgba(103,104,121,0.1)
- Icons bottom group: MondayVibe Logo, Workflow, Agents Logo — same 32×32px style
- No labels — icons only
- Bottom: another divider

**Main area** (1376px × full height)
- Background: white (#FFFFFF)
- Border: 0.5px solid #D0D4E4
- Border-radius: 16px top-left only
- Shadow: 0px 4px 32px 0px rgba(0,19,85,0.08)
- Overflow: hidden
- Content: centred column, 680px wide, padding 32px top/bottom, gap 24px between sections

**AI colored icon** (20px × 20px)
- The monday AIColored icon — multicolour (4 quadrant colours: brand red, yellow, green, blue)
- Positioned above the question text as part of the "Sidekick message header" row

**Question heading**
- Text: "What brings you to monday.com?"
- Font: Figtree SemiBold 600, 16px, line-height 22px
- Colour: #323338

**Question subtitle**
- Text: "The more details you share, the better we can tailor your setup."
- Font: Figtree Regular 400, 14px, line-height 1.6 (≈22px)
- Colour: #323338

**Free-text input box** (680×136px)
- Background: white
- Border: 1px solid #8181FF (purple/AI colour)
- Border-radius: 16px
- Shadow: 0px 6px 20px 0px rgba(0,0,0,0.20)
- Padding: 16px 12px
- Layout: flex-col, space-between
- Top section: placeholder text + blinking text cursor
- Bottom section: "Add context" button (left, opacity 0 by default) + spacer + submit button (right)

**Input cursor**
- A blinking "|" text cursor — Inter Regular 16px, #323338
- Positioned at left: 0, top: 12px (vertical centre of first line)
- CSS animation: blink 1s step-end infinite

**Placeholder text**
- Text: "For example: I'm managing a marketing team, and want to plan campaigns, track performance, and manage content deadlines across the team."
- Font: Figtree Regular 16px, line-height 22px
- Colour: #676879 (placeholder colour)
- Position: left: 6px from cursor, top: 0 within text area

**"Add context" button** (inside input footer)
- Opacity: 0 (hidden in default/empty state)
- Has an attach/add icon + "Add context" label
- Font: Figtree Regular 16px, #323338
- Appears on input focus or when user starts typing

**Submit button** (32×32px)
- Background: rgba(50,51,56,0.38) — disabled grey
- Border-radius: 26px (fully circular)
- Icon: MoveArrowUp (up arrow), 20px, white
- Disabled state by default (no text entered)
- Active state (when text entered): background #0073EA, cursor pointer

**Suggestion cards row** (horizontally scrollable, 5 cards)
- Layout: flex-row, gap 16px, overflow-x: auto, no scrollbar visible
- Each card: 248px wide (last two 249px), 166px tall
- Card style: background white, border 1px solid #D0D4E4, border-radius 16px, padding 24px, gap 16px between icon+title and body text
- Backdrop-filter: blur(45px) — frosted glass feel

**Each suggestion card**
- Header: Idea icon (lightbulb, 20px, #323338) + title (Figtree SemiBold 16px, #323338) — flex-row, gap 8px (first card) or 4px (others)
- Body: Figtree Regular 14px, line-height 20px, #323338, text truncated with ellipsis if overflow

**Card content:**
| Title | Body |
|---|---|
| Content management | I'm a content marketing manager and need a way to plan and produce materials |
| Recruitment pipeline | I'm leading a recruitment team and need to hire faster and better candidates |
| Internal Legal Support | I'm a legal council and need to facilitate internal contract reviews, NDA approvals, and... |
| Customer Support | I'm a customer service lead and need tools to automate responses and track support tickets efficiently |
| Sales Pipeline | I'm a sales manager and need a system to monitor leads, forecast revenue, and streamline deal closures |

DESIGN SYSTEM:

**Colors**
| Token | Hex | Usage |
|---|---|---|
| Text primary | #323338 | All body text, headings |
| Placeholder | #676879 | Input placeholder, muted text |
| Border layout | #D0D4E4 | Card borders, main area border |
| Border input active | #8181FF | Input box border (AI purple) |
| Nav active bg | rgba(204,228,255,0.6) | Active nav icon background |
| Nav divider | rgba(103,104,121,0.1) | Left nav horizontal divider |
| Submit disabled | rgba(50,51,56,0.38) | Submit button disabled background |
| Submit active | #0073EA | Submit button when text present |
| Brand red | #FB275D | AI icon mark |
| Brand yellow | #FFCC00 | AI icon mark |
| Brand green | #00CA72 | AI icon mark |

**Typography**
| Element | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Question heading | Figtree | 16px | 600 (SemiBold) | 22px |
| Question subtitle | Figtree | 14px | 400 | 1.6 |
| Placeholder | Figtree | 16px | 400 | 22px |
| Card title | Figtree | 16px | 600 (SemiBold) | 22px |
| Card body | Figtree | 14px | 400 | 20px |
| Top bar tagline | Poppins | 17px | 300 (Light) | ~20px |
| Cursor char | Inter | 16px | 400 | 19px |

**Spacing**
- 4px, 8px, 12px, 16px, 18px, 24px, 32px

**Shadows**
- Main area: 0px 4px 32px 0px rgba(0,19,85,0.08)
- Input box: 0px 6px 20px 0px rgba(0,0,0,0.20)

**Border radius**
- App frame: 8px
- Nav icon buttons: 8px
- Input box: 16px
- Cards: 16px
- Submit button: 26px (fully circular)
- Main area: 16px top-left only (border-top-left-radius: 16px)

BEHAVIOR:
- **Input on click/focus**: "Add context" button fades in (opacity 0 → 1), 150ms ease
- **Input as user types**: Submit button background transitions from rgba(50,51,56,0.38) → #0073EA, 150ms ease; cursor: pointer
- **Submit button on hover** (when active): background #0060C0, scale(1.05)
- **Suggestion card on hover**: border-color changes to #8181FF, slight scale(1.01), 150ms ease
- **Suggestion card on click**: fills the input with the card's body text, card gets selected state (border #0073EA)
- **Cursor blink**: CSS animation, 1s step-end infinite, toggles opacity 0/1
- **Cards row**: horizontal scroll on overflow, no visible scrollbar (scrollbar-width: none)
- **All transitions**: 150ms ease

CONSTRAINTS:
| Spec | Value |
|---|---|
| Platform | Web |
| Viewport | 1440×900px |
| Accessibility | WCAG AA, keyboard nav, Tab enters the input |
| Font loading | Figtree + Poppins + Inter from Google Fonts |

**States required:**
- Input empty (default), Input focused, Input with text, Card default, Card hover, Card selected, Submit disabled, Submit active

CONTENT:
- Question: "What brings you to monday.com?"
- Subtitle: "The more details you share, the better we can tailor your setup."
- Placeholder: "For example: I'm managing a marketing team, and want to plan campaigns, track performance, and manage content deadlines across the team."
- 5 cards as per table above

NOTES:
1. The input box is NOT a standard `<textarea>` — it's a styled div with a visible blinking cursor positioned separately from the placeholder text. The cursor sits at the very start of the text area.
2. The "Add context" button is hidden (opacity: 0) by default and only appears on focus — do not remove it from the DOM
3. The submit button stays disabled (grey, no pointer) until the user types at least one character
4. The left nav "Person" icon button has a soft blue tinted background — this is the active state for this screen
5. The main area has border-radius only on the top-left corner (16px), not all corners — this is intentional
6. The suggestion cards row is wider than 680px (5 × 248px + gaps = ~1300px) — it overflows horizontally and should scroll without showing a scrollbar
7. The "Add context" button has an attach/paperclip icon — it's for uploading context files, not required to function in the Make prototype