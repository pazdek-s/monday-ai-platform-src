TASK: monday.com Account Details Screen
Step 2 of signup — user fills in their full name, account name, password, and optional phone number before continuing.

CONTEXT:
- Use Case: New user completing account setup after email entry — this is the details step, not the initial signup
- Brand Reference: monday.com — clean SaaS, similar to Linear and Notion
- Platform: Web, 1440×900px desktop viewport

LAYOUT:
┌──────────────────────────────┬──────────────────────────────┐
│   Left Panel (720px)          │   Right Panel (720px)        │
│   [identical to signup        │                              │
│    screen — product           │   [monday mark — 40px]       │
│    preview, board,            │                              │
│    icon bar, logo]            │   "Create your account"      │
│                               │   (Poppins 32px/500)         │
│                               │                              │
│                               │   [Full name input]          │
│                               │   [Account name input]       │
│                               │   [Password input]           │
│                               │   [Phone (country) + number] │
│                               │                              │
│                               │   [Continue btn — blue]      │
└──────────────────────────────┴──────────────────────────────┘
Total: 1440×900px

ELEMENTS:
- [ ] Left panel — identical to the signup screen (product preview, board mockup, icon bar, logo, MondayVibe block)
- [ ] Right panel: monday brand mark (circular, 40×40px) — centred
- [ ] Right panel: H1 "Create your account"
- [ ] Right panel: "Full name" labelled text input (full width)
- [ ] Right panel: "Account name" labelled text input (full width)
- [ ] Right panel: "Password" labelled text input with masked value (full width)
- [ ] Right panel: "Phone number (optional)" row — country code dropdown (134px) + phone number input (271px), aligned to baseline
- [ ] Right panel: "Continue" primary button (full width, blue)

COMPONENT SPECS:

**Right panel form column** (411px wide)
- Centred horizontally within 720px right panel (left: 157px)
- Top: 167px from frame top
- Vertical stack, gap: 40px between 3 sections (header, fields group, button)
- Fields group: gap 20px between each field

**monday brand mark** (40×40px)
- Circular, border-radius: 25px
- monday.com coloured logo mark (red #FB275D, yellow #FFCC00, green #00CA72)
- Centred horizontally

**H1 heading**
- Text: "Create your account"
- Font: Poppins Medium 500, 32px, line-height 40px, letter-spacing -0.4px
- Colour: #323338
- Alignment: centre

**Field label** (shared by all inputs)
- Font: Figtree Regular 400, 14px, line-height 20px
- Colour: #323338
- Margin-bottom: 4px
- No asterisk visible (optional indicator only shown on phone label in text)

**Text input container** (shared by all full-width inputs)
- Width: 411px (full column width)
- Height: 48px
- Background: white (#FFFFFF)
- Border: 1px solid #C3C6D4
- Border-radius: 4px
- Padding: 4px 4px 4px 16px
- Default state: grey border (#C3C6D4)
- Focus state: border #0073EA, focus ring 0 0 0 3px rgba(0,115,234,0.15)
- Placeholder/value font: Figtree Regular 16px, line-height 22px

**Full name input** (411×72px total including label)
- Label: "Full name"
- Input: empty, no placeholder shown
- Type: text

**Account name input** (411×72px total)
- Label: "Account name"
- Input: empty, no placeholder shown
- Type: text

**Password input** (411×72px total)
- Label: "Password"
- Input: shows masked dots "·········" in placeholder colour #676879
- Type: password
- No show/hide toggle visible in default state

**Phone number row** (411×72px total including shared label)
- Label: "Phone number (optional)" — Figtree Regular 14px, #323338
- Row layout: flex-row, gap 6px, align-items: flex-end
- Country code dropdown (134×48px):
  - Border: 1px solid #C3C6D4, border-radius 4px
  - Shows "(+972)" — Figtree Regular 16px, #676879
  - Dropdown chevron icon (DropdownChevronDown, 20px) right-aligned in a 40×40px icon button
  - Clicking opens country code selector
- Phone number input (271×48px):
  - Placeholder: "(123) 456-7890" — Figtree Regular 16px, #676879
  - No label (shares label with country dropdown)
  - Border: 1px solid #C3C6D4, border-radius 4px

**"Continue" primary button** (411×48px)
- Background: #0073EA
- Border-radius: 4px
- Label: "Continue" — Figtree Regular 16px, #FFFFFF
- Min-height + max-height: 48px
- Width: full column width (411px)
- Hover: background #0060C0
- Active: background #004FA3, scale(0.99)
- Disabled: opacity 0.4

DESIGN SYSTEM:

**Colors**
| Token | Hex | Usage |
|---|---|---|
| Primary | #0073EA | CTA button, active input border |
| Primary hover | #0060C0 | Button hover |
| Text primary | #323338 | Labels, heading |
| Placeholder | #676879 | Input placeholder text, masked password, phone placeholders |
| Background | #FFFFFF | Input backgrounds |
| Border UI | #C3C6D4 | Input borders (default) |
| Brand red | #FB275D | Logo mark |
| Brand yellow | #FFCC00 | Logo mark |
| Brand green | #00CA72 | Logo mark |

**Typography**
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Poppins | 32px | 500 | 40px | -0.4px |
| Field label | Figtree | 14px | 400 | 20px | 0 |
| Input value / placeholder | Figtree | 16px | 400 | 22px | 0 |
| Button label | Figtree | 16px | 400 | 22px | 0 |

**Spacing scale**
- 4px (xs), 8px (sm), 16px (md), 20px (field gap), 24px (lg), 40px (section gap)

**Border radius**
- Inputs: 4px
- Button: 4px
- Brand mark: 25px

BEHAVIOR:
- **Any input on focus**: Border #0073EA, focus ring 0 0 0 3px rgba(0,115,234,0.15), 150ms ease
- **Any input on blur with value**: Border returns to #C3C6D4
- **Country code dropdown on click**: Opens a dropdown list of country codes with search
- **Continue button on hover**: Background #0060C0, 150ms ease
- **Continue button on active**: Background #004FA3, scale(0.99)
- **Continue button disabled state**: Opacity 0.4, cursor not-allowed (shown when required fields empty)
- **Password field**: Mask input with bullet characters, no show/hide toggle in default state
- **All transitions**: 150ms ease

CONSTRAINTS:
| Spec | Value |
|---|---|
| Platform | Web |
| Viewport | 1440×900px |
| Min width | 1024px |
| Accessibility | WCAG AA, keyboard nav, tab order top-to-bottom through fields |
| Font loading | Poppins + Figtree from Google Fonts |
| Tab order | Full name → Account name → Password → Country code → Phone → Continue |

**States required:**
- Default, Focus, Filled, Disabled (Continue button only)

CONTENT:
- H1: "Create your account"
- Field 1 label: "Full name" — empty input
- Field 2 label: "Account name" — empty input
- Field 3 label: "Password" — shows "·········" as placeholder
- Field 4 label: "Phone number (optional)"
  - Country dropdown default: "(+972)"
  - Phone input placeholder: "(123) 456-7890"
- Button: "Continue"

NOTES:
1. The left panel is identical to the previous signup screen — reuse it exactly
2. The form is vertically centred in the right panel (top: 167px places it roughly centre for 900px height)
3. The phone row is the only field that breaks into two columns — country code (134px) + number (271px) with 6px gap
4. The country code field has a dropdown chevron icon button on the right — it's a selector, not a free-text input
5. No "Already have an account?" link on this screen — it was only on the email entry screen
6. No terms text on this screen — clean form only
7. The password field shows dots as placeholder, not as actual input value — the field is empty by default