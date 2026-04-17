TASK: monday.com Signup Screen
Split-screen new account signup with a live product preview on the left and a clean signup form on the right.

CONTEXT:
- Use Case: New user creating a monday.com account for the first time — zero friction, no credit card
- Brand Reference: monday.com — clean SaaS style similar to Notion and Linear, with bold brand color accents
- Platform: Web, 1440×900px desktop viewport

LAYOUT:
┌──────────────────────────────┬──────────────────────────────┐
│   Left Panel (720px)          │   Right Panel (720px)        │
│                               │                              │
│  [monday logo + "AI work      │   [monday mark — 40px]       │
│   platform" — top left]       │                              │
│                               │   "Welcome to monday.com"    │
│  [MondayVibe logo +           │   (Poppins 32px/500)         │
│   "Build your app" block]     │                              │
│                               │   "Get started - it's free." │
│  [3 stacked product           │   (Figtree 16px/400)         │
│   screenshots, overlapping]   │                              │
│                               │   [Continue with Google btn] │
│  [monday board preview        │   ───────── Or ─────────     │
│   (table view, overflowing    │   [email@yourwork.com input] │
│   bottom of panel)]           │   [Continue btn — blue]      │
│                               │                              │
│  [Left pane icon bar:         │   "By proceeding, you agree" │
│   Sidekick, Vibe, Agents,     │   Terms · Privacy            │
│   Workflows — 22px icons]     │                              │
│                               │   "Already have an account?  │
│                               │    Log in"                   │
└──────────────────────────────┴──────────────────────────────┘
Total: 1440×900px

ELEMENTS:
- [ ] Full-width page split into two equal columns (720px each)
- [ ] Left panel: large rounded rectangle background container (680×821px), light background
- [ ] Left panel: monday.com logo + "AI work platform" tagline — top-left, absolute
- [ ] Left panel: MondayVibe logo + "Build your app" text block — upper area
- [ ] Left panel: 3 overlapping product screenshots (people/avatars visible, layered with z-offset)
- [ ] Left panel: monday board preview — table view with two item groups, columns for task name, Owner (avatar), Timeline (bar), Status (pill), Due Date — overflowing bottom edge
- [ ] Left panel: vertical icon strip (37px wide) with 4 icon buttons — Sidekick, Vibe, Agents, Workflows (22px each)
- [ ] Right panel: monday brand mark (circular, 40×40px) — centred top
- [ ] Right panel: H1 heading "Welcome to monday.com"
- [ ] Right panel: subtitle "Get started - it's free. No credit card needed."
- [ ] Right panel: "Continue with Google" secondary button (full width, with Google logo overlaid)
- [ ] Right panel: "Or" divider (horizontal rule + centred label with white background)
- [ ] Right panel: email text input (full width, active state border)
- [ ] Right panel: "Continue" primary button (full width, blue)
- [ ] Right panel: terms text with inline links (Terms of Service, Privacy Policy)
- [ ] Right panel: "Already have an account? Log in" — bottom, centred, semibold link

COMPONENT SPECS:

**Left panel background container** (680×821px)
- Background: #F5F6F8 (light grey-white)
- Border-radius: 16px
- Overflow: hidden (board preview clips at bottom)
- Position: absolute, top: 40px, right: 0 within left column

**Product screenshots (overlapping stack)**
- 3 rounded rectangle image frames, staggered with ~20px offsets
- Border-radius: 12px
- Each: ~196–231px wide, ~347–403px tall
- Layered with z-index, slightly rotated or offset for depth feel
- Show avatars/people thumbnails within

**Board preview (pltform)**
- Position: starts at y=260 within left panel, overflows intentionally
- White background: border-radius 8px, width ~1073px (clips to panel)
- Board header: board title text (Figtree 20px/600 #323338) + power-up pills on right
- Control bar: 3 view tabs (Main Table, Timeline, Chart) + add view icon
- Table: 2 item groups, each with ~7 rows, height 44px per row
- Columns: Item name (386px), Owner (87px), Timeline (174px), Status (174px), Due Date (152px), + button (26px)
- Each column header has a Sidekick (AI) icon (18px) to the right of the label
- Row height: 44px, border-bottom: 1px solid #E6E9EF

**Left pane icon bar** (37×276px)
- Position: absolute left: 13px, top: 61px
- 4 icon buttons, each 35×35px, border-radius 6px
- Icons: Sidekick (star/sparkle), Vibe (grid), Agents (robot), Workflows (flow)
- Icon size: 22px, colour: #676879
- Hover: background #ECEDF0

**monday logo + tagline (left panel)**
- Logo SVG: 95×16px
- Tagline: "AI work platform" — Poppins Light 18px, #323338, letter-spacing -0.73px
- Positioned: absolute, top: 20px, left: 20px

**Right panel form column** (411px wide)
- Centred horizontally within 720px right panel (left offset: 157px)
- Vertical stack, gap: 40px between 3 sections

**monday brand mark** (40×40px)
- Circular, border-radius: 25px
- Contains the monday.com coloured logo mark (red, yellow, green dots)
- Centred horizontally

**H1 heading**
- Text: "Welcome to monday.com"
- Font: Poppins Medium 32px, line-height 40px, letter-spacing -0.4px
- Colour: #323338
- Alignment: centre

**Subtitle**
- Text: "Get started - it's free. No credit card needed."
- Font: Figtree Regular 16px, line-height 22px
- Colour: #323338
- Alignment: centre

**"Continue with Google" button** (411×48px)
- Background: #FFFFFF
- Border: 1px solid #C3C6D4
- Border-radius: 4px
- Label: "Continue with Google" — Figtree Regular 16px, #323338
- Google logo (20px) overlaid on button using CSS grid (icon sits above the button background, left-aligned ~84px from left)
- Hover: background #F8F8F8

**"Or" divider**
- Full width horizontal rule: 1px solid #DCDFEC
- Centred label: white background rect (34×27px), text "Or" — Figtree Bold 16px, #676879
- Implement as CSS grid overlap

**Email input** (411×48px)
- Background: #FFFFFF
- Border: 1px solid #0073EA (active state)
- Border-radius: 4px
- Padding-left: 16px
- Placeholder: "email@yourwork.com" — Figtree Regular 16px, #323338
- No label, no helper text

**"Continue" primary button** (411×48px)
- Background: #0073EA
- Border-radius: 4px
- Label: "Continue" — Figtree Regular 16px, #FFFFFF
- Min-height + max-height: 48px
- Hover: background #0060C0
- Active: background #004FA3
- Disabled: opacity 0.4

**Terms text**
- Width: 272px, centred
- Line 1: "By proceeding, you agree to the" — Figtree Regular 16px, #323338
- Line 2: "Terms of Service" (#1F76C2) + " and " + "Privacy Policy" (#1F76C2) + "."
- Alignment: centre

**"Already have an account? Log in"**
- Position: absolute bottom, y=715
- "Already have an account? " — Figtree SemiBold 16px, #323338
- "Log in" — Figtree SemiBold 16px, #1F76C2
- Alignment: centre

DESIGN SYSTEM:

**Colors**
| Token | Hex | Usage |
|---|---|---|
| Primary | #0073EA | CTA button, active input border |
| Primary hover | #0060C0 | Button hover |
| Text primary | #323338 | All body text, headings |
| Text secondary | #676879 | Muted labels, "Or" divider |
| Link | #1F76C2 | Inline links |
| Background | #FFFFFF | Page, inputs, buttons |
| Surface | #F5F6F8 | Left panel background |
| Border UI | #C3C6D4 | Secondary button border |
| Border layout | #DCDFEC | Dividers, table rows |
| Brand red | #FB275D | Logo mark |
| Brand yellow | #FFCC00 | Logo mark |
| Brand green | #00CA72 | Logo mark |

**Typography**
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Poppins | 32px | 500 | 40px | -0.4px |
| Tagline | Poppins | 18px | 300 | 21px | -0.73px |
| Body / UI | Figtree | 16px | 400 | 22px | 0 |
| Bold label | Figtree | 16px | 700 | 22px | 0 |
| Semibold link | Figtree | 16px | 600 | 22px | 0 |

**Spacing scale**
- 4px (xs), 8px (sm), 12px (md), 16px (lg), 24px (xl), 40px (2xl)

**Border radius**
- Inputs / Buttons: 4px
- Cards / Panels: 16px
- Screenshots: 12px
- Board container: 8px
- Icon buttons: 6px
- Brand mark: 25px (circular)

BEHAVIOR:
- **Google button on hover**: Background shifts to #F8F8F8, 150ms ease
- **Email input on focus**: Border stays #0073EA, add focus ring 0 0 0 3px rgba(0,115,234,0.15)
- **Continue button on hover**: Background #0060C0, 150ms ease
- **Continue button on active**: Background #004FA3, scale(0.99)
- **"Log in" link on hover**: Underline appears
- **"Terms"/"Privacy" links on hover**: Underline appears
- **All transitions**: 150ms ease
- **Input on type**: border remains #0073EA, no validation until submit

CONSTRAINTS:
| Spec | Value |
|---|---|
| Platform | Web |
| Viewport | 1440×900px |
| Min width | 1024px |
| Accessibility | WCAG AA, keyboard navigation, focus indicators |
| Font loading | Poppins + Figtree from Google Fonts |

**States required:**
- Default, Hover, Focus, Active, Disabled (Continue button only)

CONTENT:
- Email placeholder: "email@yourwork.com"
- Heading: "Welcome to monday.com"
- Subtitle: "Get started - it's free. No credit card needed."
- Google button: "Continue with Google"
- CTA button: "Continue"
- Terms: "By proceeding, you agree to the Terms of Service and Privacy Policy."
- Bottom: "Already have an account? Log in"
- Board item names (group 1): "Launch email campaign", "Redesign homepage", "Q2 planning", "Competitor research", "Onboarding flow", "Design system update", "API integration"
- Board item names (group 2): "Hiring plan", "Budget review", "Roadmap update", "Stakeholder sync", "Product launch", "Analytics setup", "User interviews"

NOTES:
1. The Google icon overlays the button using CSS grid stacking — the icon sits in the same grid cell as the button, positioned from the left at ~84px
2. The "Or" divider uses the same grid trick — white background rect sits in the same cell as the horizontal rule, centred
3. The left panel board preview intentionally overflows below the panel boundary — it's clipped by the panel's overflow:hidden
4. The 3 product screenshots are decorative and should overlap each other with slight positional offsets, not a clean grid
5. Do not add form validation UI — this is a pure signup entry screen, no error states needed in the initial render
6. The left panel icon bar is purely decorative — no click actions needed