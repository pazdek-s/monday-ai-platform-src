# Guidelines

## General rules

* Use responsive, well-structured layouts with flexbox and grid
* Only use absolute positioning when strictly necessary (overlapping layers, decorative elements)
* Keep code clean — put reusable components in separate files
* Never hardcode hex colour values — always use the CSS variables defined below
* Never write raw HTML elements when a Vibe component exists for that use case
* Always load Figtree as the primary UI font and Poppins for display headings
* All font sizes, weights and line-heights must match the type scale below exactly

---

## Fonts

Load from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&family=Poppins:wght@300;500&display=swap" rel="stylesheet">
```

| Role | Family | Weight | Size | Line height |
|---|---|---|---|---|
| Display / H1 | Poppins | 500 | 32px | 40px |
| Tagline | Poppins | 300 | 17–18px | ~21px |
| UI body | Figtree | 400 | 16px | 22px |
| UI body small | Figtree | 400 | 14px | 20px |
| UI label | Figtree | 600 | 14px | 20px |
| Caption | Figtree | 400 | 12px | 16px |
| Bold label | Figtree | 700 | 14px | 1.5 |

---

## Colour tokens (CSS variables)

These variables are the monday.com design system tokens. Use them everywhere — never substitute raw hex values.

```css
/* Primary */
--primary-color: #0073EA;
--primary-hover-color: #0060C0;
--primary-active-color: #004FA3;

/* Backgrounds */
--primary-background-color: #FFFFFF;
--secondary-background-color: #FFFFFF;
--primary-background-hover-color: rgba(103, 104, 121, 0.1);
--primary-surface-color: #EDF1FC;

/* Text */
--primary-text-color: #323338;
--secondary-text-color: #676879;
--placeholder-color: #676879;
--text-color-on-inverted: #FFFFFF;
--fixed-light-color: #FFFFFF;
--disabled-text-color: rgba(50, 51, 56, 0.38);

/* Borders */
--ui-border-color: #C3C6D4;
--layout-border-color: #D0D4E4;
--ui-background-color: #E7E9EF;

/* Semantic */
--disabled-background-color: #ECEDF5;

/* Brand */
--brand-red: #FB275D;
--brand-yellow: #FFCC00;
--brand-green: #00CA72;

/* Spacing */
--space-4: 4px;
--space-8: 8px;
--space-12: 12px;
--space-16: 16px;
--space-24: 24px;
--space-32: 32px;

/* Border radius */
--border-radius-small: 4px;
--border-radius-medium: 8px;
--border-radius-large: 12px;
--border-radius-xl: 16px;
```

---

## Vibe component library

Import components from the monday Vibe system — never recreate them in raw HTML/CSS.

```tsx
import { Button, IconButton, TextField, Divider, Avatar, Tooltip } from "@vibe/core";
import {
  Home, Person, Workspace, MondayVibeLogo, Workflow,
  DropdownChevronDown, DropdownChevronRight, DropdownChevronLeft,
  CloseSmall, CloseRound, MoveArrowUp, Add, AI, AIAgent, AISkills,
  DataLoad, Mention, Microphone, AttachSlanted, NewChat,
  Idea, Email, AllBoards, Attach, Activity
} from "@mondaydotcomorg/icons";
```

### Button

```tsx
// Primary CTA
<Button kind="primary" size="large">Continue</Button>

// Secondary / outline
<Button kind="secondary" size="large">Continue with Google</Button>

// Small pill (board actions)
<Button kind="secondary" size="small">Integrate</Button>

// Disabled
<Button kind="primary" size="large" disabled>Continue</Button>
```

Rules:
- One primary button per screen maximum
- Full-width in single-column forms: `style={{ width: "100%" }}`
- Never use `<button>` tags directly

### IconButton

```tsx
<IconButton icon={CloseSmall} size="medium" ariaLabel="Close" />
<IconButton icon={NewChat} size="medium" ariaLabel="New chat" />
```

### TextField

```tsx
<TextField placeholder="email@yourwork.com" size="large" />
<TextField placeholder="Tell Sidekick what you want to do..." size="medium" />
```

Rules:
- Never write `<input>` tags directly for form fields
- Label goes above as a `<label>` element, not inside the TextField
- Active/focus border colour: `--primary-color`
- Default border: `--ui-border-color`

### Avatar / agent avatar

```tsx
// User avatar
<Avatar size="medium" src={imgUser} name="Noa" />

// AI agent avatar (circular, coloured background)
<div style={{
  width: 20, height: 20,
  borderRadius: "50%",
  background: "#00C875",
  overflow: "hidden",
  border: "0.625px solid var(--primary-background-color)"
}}>
  <img src={agentImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>
```

### Divider

```tsx
<Divider />  // horizontal rule, 1px, --ui-background-color
```

---

## Spacing scale

Always use these values — never arbitrary pixels.

| Token | Value |
|---|---|
| `--space-4` | 4px |
| `--space-8` | 8px |
| `--space-12` | 12px |
| `--space-16` | 16px |
| `--space-24` | 24px |
| `--space-32` | 32px |
| `--space-40` | 40px |
| `--space-64` | 64px |

---

## Border radius

| Use case | Value |
|---|---|
| Buttons, inputs, badges, pills | 4px (`--border-radius-small`) |
| Cards, icon containers, nav buttons | 8px (`--border-radius-medium`) |
| Chat bubbles, sidekick input | 12px (`--border-radius-large`) |
| Onboarding input box, cards | 16px (`--border-radius-xl`) |
| Avatars, send button | 50% (circular) |
| App frame | 8px |
| Main area (top-left only) | `border-top-left-radius: 16px` |

---

## Shadows

```css
/* Main area panel */
box-shadow: 0px 4px 32px 0px rgba(0, 19, 85, 0.08);

/* Onboarding input box */
box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.20);

/* Dropdown / floating */
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
```

---

## Layout patterns

### Global shell (all product screens)

```tsx
<div style={{ display: "flex", flexDirection: "column", height: "100vh", borderRadius: 8, overflow: "hidden" }}>
  <div style={{ height: 56, flexShrink: 0 }}><TopBar /></div>
  <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
    <div style={{ width: 64, flexShrink: 0 }}><IconNav /></div>
    <div style={{
      flex: 1,
      borderTopLeftRadius: 16,
      border: "0.5px solid var(--layout-border-color)",
      boxShadow: "0px 4px 32px 0px rgba(0,19,85,0.08)",
      overflow: "hidden"
    }}>
      {children}
    </div>
  </div>
</div>
```

### Signup split screen

```tsx
<div style={{ display: "flex", width: "100%", height: "100%" }}>
  <div style={{ width: 720, flexShrink: 0, overflow: "hidden" }}><LeftPanel /></div>
  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 411 }}><SignupForm /></div>
  </div>
</div>
```

### Onboarding chat column

```tsx
<div style={{
  display: "flex", flexDirection: "column", alignItems: "center",
  width: 680, margin: "0 auto",
  paddingTop: 64, paddingBottom: 32, gap: 24
}}>
  {children}
</div>
```

### Sidekick panel slide-in

```css
.sidekick-panel {
  width: 380px;
  flex-shrink: 0;
  transform: translateX(380px);
  transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.sidekick-panel.visible { transform: translateX(0); }
.board-area { transition: width 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94); }
```

---

## Specific patterns

### AI input box (onboarding question screen)

```tsx
<div style={{
  background: "var(--primary-background-color)",
  border: "1px solid #8181FF",
  borderRadius: 16,
  boxShadow: "0px 6px 20px 0px rgba(0,0,0,0.20)",
  padding: "16px 12px",
  display: "flex", flexDirection: "column", justifyContent: "space-between",
  height: 136, width: "100%"
}}>
  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <span style={{ animation: "blink 1s step-end infinite", fontFamily: "Inter" }}>|</span>
    <p style={{ color: "var(--placeholder-color)", fontSize: 16, marginLeft: 6 }}>
      For example: I'm managing a marketing team...
    </p>
  </div>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
    <div style={{
      width: 32, height: 32, borderRadius: "50%",
      background: "var(--disabled-text-color)",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <MoveArrowUp style={{ color: "white", width: 20, height: 20 }} />
    </div>
  </div>
</div>
<style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
```

### User chat bubble

```tsx
<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, paddingLeft: 24 }}>
  <Avatar size="small" name="N" />
  <div style={{
    background: "var(--primary-surface-color)",
    border: "0.5px solid var(--primary-background-color)",
    borderRadius: "12px 12px 12px 4px",
    padding: "10px 16px", maxWidth: 302,
    fontSize: 14, lineHeight: 1.5, color: "var(--primary-text-color)"
  }}>
    {message}
  </div>
</div>
```

### Question card (active, dark border)

```tsx
<div style={{
  background: "white", border: "2px solid var(--primary-text-color)",
  borderRadius: 16, padding: 20, width: "100%"
}}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
    <span style={{ fontWeight: 600, fontSize: 16 }}>{question}</span>
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <IconButton icon={DropdownChevronLeft} size="small" />
      <span style={{ fontWeight: 600, fontSize: 16 }}>2 of 2</span>
      <IconButton icon={DropdownChevronRight} size="small" />
      <span style={{ color: "var(--secondary-text-color)", marginLeft: 16, cursor: "pointer" }}>Skip</span>
    </div>
  </div>
  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
    {options.map(opt => (
      <button key={opt} style={{
        height: 32, padding: "0 8px",
        border: "1px solid var(--ui-border-color)",
        borderRadius: 4, background: "transparent", fontSize: 14, cursor: "pointer"
      }}>{opt}</button>
    ))}
  </div>
</div>
```

### Thinking fade text

```tsx
<p style={{
  background: "linear-gradient(88.44deg, #323338 2.99%, #FFFFFF 75.48%)",
  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  backgroundClip: "text", color: "transparent",
  fontSize: 14, lineHeight: 1.6
}}>
  I'm now preparing everything to build monday for you...
</p>
```

### Skeleton loading rectangle

```tsx
<div style={{
  width: 139, height: 22, borderRadius: 4,
  background: "linear-gradient(90deg, #E8EAF0 25%, #F5F6FA 50%, #E8EAF0 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite linear"
}} />
<style>{`
  @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
`}</style>
```

### Suggestion card (Sidekick action)

```tsx
<div style={{
  background: "var(--secondary-background-color)",
  border: "0.5px solid var(--ui-border-color)",
  borderRadius: 8, padding: 12,
  display: "flex", gap: 8, alignItems: "center",
  cursor: "pointer", width: "100%",
  transition: "background 150ms ease"
}}
  onMouseEnter={e => { e.currentTarget.style.background = "#F5F6FB"; e.currentTarget.style.borderColor = "var(--primary-color)"; }}
  onMouseLeave={e => { e.currentTarget.style.background = "var(--secondary-background-color)"; e.currentTarget.style.borderColor = "var(--ui-border-color)"; }}>
  <div style={{ background: iconBg, borderRadius: 4, padding: 4, flexShrink: 0 }}>
    <Icon style={{ width: 20, height: 20 }} />
  </div>
  <span style={{ fontSize: 14, color: "var(--primary-text-color)" }}>{label}</span>
</div>
```

### "Or" divider

```tsx
<div style={{ display: "grid", width: "100%" }}>
  <div style={{ gridColumn: 1, gridRow: 1, height: 1, background: "var(--layout-border-color)", alignSelf: "center" }} />
  <div style={{ gridColumn: 1, gridRow: 1, justifySelf: "center", background: "white", padding: "0 6px" }}>
    <span style={{ fontWeight: 700, fontSize: 16, color: "var(--secondary-text-color)" }}>Or</span>
  </div>
</div>
```

### Left icon nav

```tsx
<div style={{ width: 64, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
  <IconButton icon={Home} size="medium" ariaLabel="Home" />
  <IconButton icon={Person} size="medium" ariaLabel="My work"
    style={{ background: "rgba(204,228,255,0.6)", borderRadius: 8 }} />
  <IconButton icon={Workspace} size="medium" ariaLabel="Workspaces" />
  <Divider style={{ width: 20, margin: "0 auto" }} />
  <IconButton icon={MondayVibeLogo} size="medium" ariaLabel="Vibe" />
  <IconButton icon={Workflow} size="medium" ariaLabel="Workflows" />
</div>
```

---

## Do's and Don'ts

| ✅ Do | 🚫 Don't |
|---|---|
| Use `--primary-color` for all primary actions | Hardcode `#0073EA` anywhere |
| Use Vibe `Button` for all clickable actions | Write `<button>` tags directly |
| Use Vibe `TextField` for all inputs | Write `<input>` tags directly |
| Use Vibe `IconButton` for icon-only buttons | Write `<button><svg>` patterns |
| Use `--primary-text-color` for body text | Hardcode `#323338` |
| Import icons from `@mondaydotcomorg/icons` | Draw SVG icons inline |
| Use `var(--border-radius-medium)` | Hardcode `8px` for radius |
| Use `var(--ui-border-color)` for all borders | Hardcode `#C3C6D4` |
| Use Figtree for all UI text | Use system fonts or Inter |
| Use Poppins only for display headings | Use Poppins for body text |
| One primary `Button` per screen | Stack two primary buttons |
| Full-width buttons in single-column forms | Size buttons to content in forms |
