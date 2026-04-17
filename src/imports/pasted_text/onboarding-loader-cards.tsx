TASK: monday.com Onboarding — Full loader screen with 3 solution cards
The "building your workspace" screen — shown after the conversation completes. Displays a large heading, a subtitle, and 3 side-by-side product preview cards. Each card shows a live monday.com board/sidekick mockup above, and a solution title + description below. In the loading state, the title/description area shows skeleton placeholders. In the complete state, real content appears and a CTA button appears at the bottom.

CONTEXT:
- Use Case: The moment the AI has finished processing — users see what's being built for them before landing in the product. High-anticipation, high-delight moment.
- Brand Reference: monday.com product UI — same shell. Cards look like actual product windows.
- Platform: Web, 1440×900px desktop viewport, border-radius 8px app frame

LAYOUT:
┌──────────────────────────────────────────────────────────────┐
│  Top bar (56px) — monday logo + "AI work platform"           │
├──────┬───────────────────────────────────────────────────────┤
│ Left │              Main Area (1376px)                        │
│ Nav  │                                                        │
│(64px)│   ┌────────────────────────────────────────────────┐  │
│      │   │  Heading (40px tall, centred, 680px wide)      │  │
│      │   │  Subtitle (22px tall, full-width)              │  │
│      │   │                                                │  │
│      │   │  ┌──────────┐ ┌──────────┐ ┌──────────┐      │  │
│      │   │  │ Card 1   │ │ Card 2   │ │ Card 3   │      │  │
│      │   │  │ (301px)  │ │ (301px)  │ │ (301px)  │      │  │
│      │   │  │          │ │          │ │          │      │  │
│      │   │  │ [Board   │ │ [Board   │ │ [Board   │      │  │
│      │   │  │  mockup] │ │  mockup] │ │  mockup] │      │  │
│      │   │  │          │ │          │ │          │      │  │
│      │   │  │ [Title   │ │ [Title   │ │ [Title   │      │  │
│      │   │  │  skele-  │ │  skele-  │ │  skele-  │      │  │
│      │   │  │  ton]    │ │  ton]    │ │  ton]    │      │  │
│      │   │  └──────────┘ └──────────┘ └──────────┘      │  │
│      │   │                                                │  │
│      │   │  [CTA button — hidden in loading, shown when  │  │
│      │   │   ready]                                       │  │
│      │   └────────────────────────────────────────────────┘  │
└──────┴───────────────────────────────────────────────────────┘
Total: 1440×900px

ELEMENTS:
- [ ] Top bar, Left nav, Main area shell — same as all previous screens
- [ ] Content area: offset 140px from left within main area, centred column
- [ ] Large animated heading (loading state) / static heading (complete state)
- [ ] Subtitle text (full width)
- [ ] 3 solution cards side by side, each 301px wide, 376px tall, gap between them
- [ ] Each card: upper section (206px) = product mockup; lower section = title + description
- [ ] Loading state: lower section shows 3 skeleton rectangles (shimmer animation)
- [ ] Complete state: lower section shows real title + description text
- [ ] CTA button (192×48px): hidden in loading state, visible in complete state
- [ ] Cards row container: 1000px wide, 48px padding on each side within a 1096px frame

COMPONENT SPECS:

**Shell** — identical to all previous onboarding screens. Reuse exactly.

**Content area frame** (1096px wide, 844px tall)
- Offset: x=140px from left edge of main area
- Inner content starts at y=68px

**Header block** (680px wide, 82px tall, centred within 1096px)
- x=208px within the content frame (centres 680 in 1096)

**Loading state heading**
- Text: "Now preparing monday for you..."
- Font: Poppins or large display — 40px tall text block, 512px wide, centred
- This text should animate: typewriter effect or fade-in word by word, or pulse

**Complete state heading**
- Text: "Here's what you'll start with"
- Same size and position — replaces loading heading on completion

**Subtitle** (722px wide)
- Text: "Based on what you shared, these solutions can help you manage your hiring process more efficiently."
- Font: Figtree Regular, 16px, line-height 22px, #323338
- Position: y=54 within header block (below heading)
- x=-21 relative to header block (slightly wider than heading — 722px total)

**Cards row container** (1096×472px, y=124 within content frame)
- Inner frame: 1000×376px at x=48, y=48 within container
- Cards positioned at x=0, 341, 682 within a 642px centred sub-frame (x=178.5)
- Wait — actual layout: 3 cards at x=0, 341, 682, each 301px wide

**Each solution card** (301×376px)
- No border/background on the outer card — it's a transparent container
- Upper section (301×206px) = "Sidekick" — product mockup window
  - Contains a miniature monday.com board view (table/timeline/board)
  - Rendered as a detailed product screenshot at small scale
  - Has a small "Sidekick icon" (AI sparkle) in the upper area
  - Background: white rounded rectangle
  - Shows real board content: columns, items, status pills
- Lower section (257×70–118px, x=24, y=230) = card info
  - Loading state: 3 skeleton rounded rectangles:
    - Rectangle 1: 139×22px (title placeholder)
    - Rectangle 2: 257×16px (description line 1)
    - Rectangle 3: 257×16px (description line 2)
    - All use shimmer animation (skeleton loading style)
    - Fill: #E8EAF0 or similar light grey, animated with moving highlight
  - Complete state: real text replaces skeletons

**Card 1 content (complete state)**
- Title: "Recruitment Board" — Figtree SemiBold 16px, #323338
- Description: "Where you'll track candidates across stages with a structured hiring pipeline."
- Font: Figtree Regular 14px, line-height 22px, #323338
- Description block: 257×66px

**Card 2 content (complete state)**
- Title: "AI Hiring Agents" — Figtree SemiBold 16px, #323338
- Description: "Who will work for you - automating screening, giving you interview insights, and optimizing your workflow."
- Description block: 257×88px

**Card 3 content (complete state)**
- Title: "AI-made Vibe app" — Figtree SemiBold 16px, #323338
- Description: "Which will monitor hiring performance, speed, and risks in one place."
- Description block: 257×66px

**Product mockup window** (upper 206px of each card)
Each card shows a different monday.com product preview at small scale:
- Card 1: monday work management board — table view with items, columns (Name, Owner, Timeline, Status, Due Date), item rows
- Card 2: AI Sidekick / Agents interface — chat-style panel with "How can I help you today?", board visible behind
- Card 3: Vibe app / dashboard — data visualisation, charts, activity feed

The mockup windows should:
- Have a small top bar with board title and view tabs
- Show 5-7 item rows at reduced scale (~7px row height)
- Include a "Sidekick icon" (AI sparkle) floating in the upper portion
- Have a subtle drop shadow or border

**CTA button** (192×48px)
- Loading state: hidden (display: none or opacity 0)
- Complete state: visible, centred, at y≈660 within content frame (x=452 within 1096px = centred)
- Background: #0073EA (primary blue)
- Border-radius: 8px
- Label: "Let's go" or "Take me to monday" — Figtree SemiBold 16px, white
- Hover: background #0060C0
- Entrance animation: fade in + slide up (200ms ease-out) when complete state triggers

DESIGN SYSTEM:

**Colors** — same as all previous screens, plus:
| Token | Hex | Usage |
|---|---|---|
| Skeleton fill | #E8EAF0 | Skeleton rectangle base colour |
| Skeleton highlight | #F5F6FA | Shimmer highlight sweep colour |
| Card shadow | rgba(0,19,85,0.08) | Subtle card depth |

**Typography**
| Element | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Loading heading | Poppins | ~32px | 500 | 40px |
| Complete heading | Poppins | ~32px | 500 | 40px |
| Subtitle | Figtree | 16px | 400 | 22px |
| Card title | Figtree | 16px | 600 | 22px |
| Card description | Figtree | 14px | 400 | 22px |
| CTA button | Figtree | 16px | 600 | 22px |

**Spacing**
- Cards gap: 40px between each card (341 - 301 = 40px)
- Cards container left padding: 48px
- Content top: 68px from frame top within main area

BEHAVIOR:

**Loading → Complete transition sequence:**
1. Screen opens in loading state — heading shows "Now preparing monday for you..." with a subtle pulse or typewriter effect
2. Cards appear with skeleton placeholders in the lower section — shimmer animation running
3. Cards reveal one by one (staggered, ~400ms apart): skeleton fades out, real title + description fades in (300ms ease)
4. After all 3 cards are revealed: heading transitions to "Here's what you'll start with" (crossfade, 400ms)
5. CTA button fades in + slides up (200ms ease-out)
6. Total loading duration: ~3–4 seconds for the full sequence

**Skeleton shimmer animation:**
- CSS `@keyframes shimmer`: background moves from left to right
- `background: linear-gradient(90deg, #E8EAF0 25%, #F5F6FA 50%, #E8EAF0 75%)`
- `background-size: 200% 100%`
- `animation: shimmer 1.5s infinite linear`

**Card reveal:**
- Each card's lower section: opacity 0 + translateY(8px) in skeleton state
- On reveal: opacity 1 + translateY(0), 300ms ease-out
- Stagger: card 1 at 0ms, card 2 at 400ms, card 3 at 800ms

**CTA on hover:**
- Background: #0060C0, 150ms ease
- Slight scale(1.01)

**Nav icon (active):** Person icon has rgba(204,228,255,0.6) background — same as all screens

CONSTRAINTS:
| Spec | Value |
|---|---|
| Platform | Web |
| Viewport | 1440×900px |
| Font loading | Figtree + Poppins from Google Fonts |
| Accessibility | WCAG AA — CTA has sufficient contrast, skeleton has aria-busy=true |

**States required:**
- Loading (skeleton cards, "Now preparing..." heading, no CTA)
- Complete (real card content, "Here's what you'll start with", CTA visible)
- CTA hover

CONTENT:

**Loading state:**
- Heading: "Now preparing monday for you..."
- Subtitle: "Based on what you shared, these solutions can help you manage your hiring process more efficiently."
- 3 cards with skeleton placeholders

**Complete state:**
- Heading: "Here's what you'll start with"
- Subtitle: same
- Card 1: "Recruitment Board" / "Where you'll track candidates across stages with a structured hiring pipeline."
- Card 2: "AI Hiring Agents" / "Who will work for you - automating screening, giving you interview insights, and optimizing your workflow."
- Card 3: "AI-made Vibe app" / "Which will monitor hiring performance, speed, and risks in one place."
- CTA button: "Let's go" (or "Take me to monday")

NOTES:
1. The shell (top bar + left nav + main area) is identical to all previous screens — reuse exactly
2. The product mockup windows (upper 206px of each card) are the most visually complex part — render them as scaled-down monday.com product screenshots. They do NOT need to be interactive.
3. The skeleton rectangles use rounded corners (border-radius: 4px) and a moving shimmer gradient — this is the only animation in the loading state
4. The cards themselves have no visible card border/container — the product mockup window provides the visual boundary
5. The CTA button is at x=452 within the 1096px content frame, centering it: (1096 - 192) / 2 = 452px
6. The complete state transition should feel satisfying — the staggered card reveals and final CTA slide-in create a sense of something being built in real time
7. When you wire the prototype: this screen transitions FROM the "Thinking..." screen (previous screen) and TO the main product/home screen
8. The heading "Now preparing monday for you..." is 512px wide and x=84 from the header block start — suggesting it's not full-width and may be left-aligned within the centred header block