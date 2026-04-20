# Factos - Complete Visual Design Guide

**Every visual element documented in exact detail**

Version: 1.0.0  
Last Updated: April 6, 2026

---

## 📐 Layout Anatomy

### Full Application Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│                           Top Bar (64px)                               │
│  [Project: EduConnect] [Planning] [████░░] 12%  [MCP][AI][Ready] [...] │
├──────────┬─────────────────────────────────────────────────┬──────────┤
│          │                                                 │          │
│ Sidebar  │              Main Workspace                     │  Right   │
│ 264px    │            (Dynamic Content)                    │  Panel   │
│  or      │                                                 │  320px   │
│ 64px     │                                                 │          │
│          │                                                 │          │
│  [Logo]  │  ┌──────────────────────────────────────────┐  │ [Brain]  │
│          │  │                                          │  │          │
│ Projects │  │         Current Step View                │  │ [Stats]  │
│  • Edu   │  │      (Planning/Extract/Design/etc)       │  │          │
│  • Fin   │  │                                          │  │ [Links]  │
│  • Health│  │                                          │  │          │
│          │  │                                          │  │ [Logs]   │
│ Pipeline │  └──────────────────────────────────────────┘  │          │
│  💡 Plan │                                                 │          │
│  🔍 Extr │                                                 │          │
│  🎨 Dsgn │                                                 │          │
│  🏛️ Arch │  ┌──────────────────────────────────────────┐  │          │
│  💻 Dev  │  │        Bottom Panel (Terminal)           │  │          │
│  🧪 Test │  │  [Terminal] [Build] [Logs] [Tests]       │  │          │
│  🔒 Sec  │  │  > npm run dev                           │  │          │
│  🚀 Dep  │  │  Starting development server...          │  │          │
│          │  └──────────────────────────────────────────┘  │          │
└──────────┴─────────────────────────────────────────────────┴──────────┘
```

### Dimensions Summary

```
Full Width:     100vw (viewport width)
Full Height:    100vh (viewport height)

Top Bar:        full width × 64px
Sidebar:        264px × full height (expanded)
                64px × full height (collapsed)
Main Workspace: remaining width × (full height - 64px - bottom panel)
Right Panel:    320px × full height
Bottom Panel:   (full width - sidebar) × variable (200-400px)
```

---

## 🎨 Complete Color Palette

### Brand Colors

```css
/* Primary Gradient */
--gradient-brand: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);

/* Individual Brand Colors */
--purple-400: #c084fc;
--purple-500: #a855f7;  /* Primary purple */
--purple-600: #9333ea;
--blue-400:   #60a5fa;  /* Active blue */
--blue-500:   #3b82f6;  /* Primary blue */
--blue-600:   #2563eb;
```

### Background Colors

```css
/* Layered Backgrounds (darkest to lightest) */
--bg-layer-1: #000000;  /* Pure black - terminal, code */
--bg-layer-2: #0a0a0a;  /* Sidebar, panels */
--bg-layer-3: #0f0f0f;  /* Main background */
--bg-layer-4: #1a1a1a;  /* Elevated surfaces (cards, tooltips) */

/* Background with Opacity */
--bg-overlay-5:  rgba(255, 255, 255, 0.05);  /* Subtle backgrounds */
--bg-overlay-10: rgba(255, 255, 255, 0.10);  /* Default backgrounds */
--bg-overlay-15: rgba(255, 255, 255, 0.15);  /* Hover backgrounds */
```

### Text Colors

```css
/* White Text with Varying Opacity */
--text-primary:    #ffffff;                  /* Full white */
--text-secondary:  rgba(255, 255, 255, 0.60); /* 60% opacity */
--text-tertiary:   rgba(255, 255, 255, 0.40); /* 40% opacity */
--text-disabled:   rgba(255, 255, 255, 0.20); /* 20% opacity */

/* Tailwind Classes */
text-white      /* #ffffff */
text-white/60   /* rgba(255, 255, 255, 0.6) */
text-white/40   /* rgba(255, 255, 255, 0.4) */
text-white/20   /* rgba(255, 255, 255, 0.2) */
```

### Status Colors

```css
/* Success/Completed */
--success-400:  #34d399;  /* Emerald-400 */
--success-500:  #10b981;  /* Emerald-500 */
--success-bg:   rgba(52, 211, 153, 0.10);

/* Active/Running */
--active-400:   #60a5fa;  /* Blue-400 */
--active-500:   #3b82f6;  /* Blue-500 */
--active-bg:    rgba(96, 165, 250, 0.10);

/* Warning */
--warning-400:  #facc15;  /* Yellow-400 */
--warning-500:  #eab308;  /* Yellow-500 */
--warning-bg:   rgba(250, 204, 21, 0.10);

/* Error/Failed */
--error-400:    #f87171;  /* Red-400 */
--error-500:    #ef4444;  /* Red-500 */
--error-bg:     rgba(248, 113, 113, 0.10);

/* Pending/Inactive */
--pending-400:  rgba(255, 255, 255, 0.20);
```

### Border Colors

```css
/* Borders with Opacity */
--border-subtle:    rgba(255, 255, 255, 0.05);  /* Barely visible */
--border-default:   rgba(255, 255, 255, 0.10);  /* Standard */
--border-emphasis:  rgba(255, 255, 255, 0.20);  /* Emphasized */

/* Tailwind Classes */
border-white/5   /* rgba(255, 255, 255, 0.05) */
border-white/10  /* rgba(255, 255, 255, 0.10) */
border-white/20  /* rgba(255, 255, 255, 0.20) */
```

---

## 📏 Typography System

### Font Families

```css
/* System Font Stack (No Custom Fonts) */
font-family: 
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  sans-serif,
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol";

/* Monospace (for code, terminal) */
font-family-mono:
  ui-monospace,
  SFMono-Regular,
  "SF Mono",
  Menlo,
  Monaco,
  Consolas,
  "Liberation Mono",
  "Courier New",
  monospace;
```

### Type Scale

```css
/* Font Sizes (Tailwind) */
text-xs:    12px   (0.75rem)    line-height: 1rem     (16px)
text-sm:    14px   (0.875rem)   line-height: 1.25rem  (20px)
text-base:  16px   (1rem)       line-height: 1.5rem   (24px)
text-lg:    18px   (1.125rem)   line-height: 1.75rem  (28px)
text-xl:    20px   (1.25rem)    line-height: 1.75rem  (28px)
text-2xl:   24px   (1.5rem)     line-height: 2rem     (32px)
text-3xl:   30px   (1.875rem)   line-height: 2.25rem  (36px)
text-4xl:   36px   (2.25rem)    line-height: 2.5rem   (40px)

/* Usage Map */
Section headers (uppercase):  text-xs
Body text, buttons:           text-sm
Default paragraph:            text-base
Subheadings:                  text-lg
Headings:                     text-xl, text-2xl
Hero text:                    text-3xl, text-4xl
Stats/metrics:                text-2xl, text-3xl
```

### Font Weights

```css
/* Font Weights (Tailwind) */
font-normal:     400  /* Body text */
font-medium:     500  /* Buttons, labels, headings */
font-semibold:   600  /* Emphasized headings */
font-bold:       700  /* Strong emphasis */

/* Usage Map */
Body text:        font-normal
Buttons:          font-medium
Labels:           font-medium
Headings:         font-semibold
Strong text:      font-bold
```

### Letter Spacing

```css
/* Letter Spacing (Tailwind) */
tracking-tighter:  -0.05em
tracking-tight:    -0.025em
tracking-normal:    0em
tracking-wide:      0.025em
tracking-wider:     0.05em   /* Used for uppercase labels */
tracking-widest:    0.1em

/* Usage */
Uppercase section headers: tracking-wider
Default text: tracking-normal (implicit)
```

### Text Transform

```css
/* Text Transform */
uppercase    /* Section headers: "PROJECTS", "PIPELINE" */
lowercase    /* Rare */
capitalize   /* Rare */
normal-case  /* Default */
```

---

## 📐 Spacing System

### Base Unit: 4px

All spacing follows a 4px grid system (Tailwind default).

```css
/* Spacing Scale */
0:    0px     (0rem)
1:    4px     (0.25rem)
2:    8px     (0.5rem)
3:    12px    (0.75rem)
4:    16px    (1rem)
5:    20px    (1.25rem)
6:    24px    (1.5rem)
8:    32px    (2rem)
10:   40px    (2.5rem)
12:   48px    (3rem)
16:   64px    (4rem)
20:   80px    (5rem)
24:   96px    (6rem)
```

### Component Padding

```css
/* Small Components */
Buttons (default):       px-4 py-2     (16px 8px)
Buttons (small):         px-3 py-1.5   (12px 6px)
Buttons (large):         px-6 py-3     (24px 12px)
Input fields:            px-3 py-2     (12px 8px)

/* Medium Components */
Cards:                   p-6           (24px all sides)
Tooltips:                px-2 py-1     (8px 4px)
Badges:                  px-2.5 py-0.5 (10px 2px)

/* Large Components */
Panels (Sidebar, Right): p-6           (24px all sides)
Top Bar:                 px-6          (24px horizontal)
Section spacing:         space-y-4     (16px vertical)
                        or space-y-6  (24px vertical)
```

### Gap (Spacing Between Elements)

```css
/* Icon + Text */
gap-2:   8px   /* Standard icon-text gap */
gap-3:   12px  /* Larger icon-text gap */

/* Flex/Grid Items */
gap-1:   4px   /* Tight spacing */
gap-2:   8px   /* Compact spacing */
gap-3:   12px  /* Standard spacing */
gap-4:   16px  /* Default spacing */
gap-6:   24px  /* Generous spacing */
gap-8:   32px  /* Extra spacing */
```

### Margin

```css
/* Common Margins */
Top/Bottom margins:
  mt-2, mb-2:   8px
  mt-4, mb-4:   16px
  mt-6, mb-6:   24px

Left/Right margins:
  ml-2, mr-2:   8px
  ml-4, mr-4:   16px
  ml-auto:      auto (push to right)
  mr-auto:      auto (push to left)
```

---

## 🔲 Border System

### Border Widths

```css
/* Border Width */
border:    1px   /* Default */
border-2:  2px   /* Emphasis */
border-4:  4px   /* Strong emphasis */
border-0:  0px   /* No border */
```

### Border Radius

```css
/* Border Radius (Tailwind) */
rounded-none:  0px
rounded-sm:    2px     (0.125rem)
rounded:       4px     (0.25rem)
rounded-md:    6px     (0.375rem)
rounded-lg:    8px     (0.5rem)     /* Primary usage */
rounded-xl:    12px    (0.75rem)
rounded-2xl:   16px    (1rem)
rounded-full:  9999px  (circle/pill)

/* Usage Map */
Cards:              rounded-lg
Buttons:            rounded-lg
Badges:             rounded-full
Logo container:     rounded-lg
Toggle button:      rounded-full
Tooltips:           rounded (4px)
Inputs:             rounded-lg
```

### Border Positioning

```css
/* Specific Borders */
border-t:      Top border only
border-r:      Right border only
border-b:      Bottom border only
border-l:      Left border only

/* Multiple Borders */
border-x:      Left and right
border-y:      Top and bottom
border:        All sides

/* Usage */
Top bar bottom:        border-b border-white/5
Sidebar right:         border-r border-white/5
Section dividers:      border-t border-white/5
```

---

## 🎬 Animation Specifications

### Transition Durations

```css
/* Tailwind Duration Classes */
duration-75:    75ms
duration-100:   100ms
duration-150:   150ms   /* Quick interactions (hover, focus) */
duration-200:   200ms   /* Standard transitions */
duration-300:   300ms   /* Slower animations (sidebar collapse) */
duration-500:   500ms   /* Slow animations (progress bars) */
duration-700:   700ms
duration-1000:  1000ms

/* Usage Map */
Button hover:           duration-200
Border color change:    duration-200
Tooltip fade:           duration-150
Sidebar collapse:       duration-300
Progress bar:           duration-500
Opacity changes:        duration-150 to duration-200
```

### Transition Timing

```css
/* Easing Functions */
ease-linear:    linear
ease-in:        cubic-bezier(0.4, 0, 1, 1)
ease-out:       cubic-bezier(0, 0, 0.2, 1)
ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1)  /* Most common */

/* Usage */
Default:        ease-in-out  (smooth start and end)
Width changes:  ease-in-out
Opacity:        ease-out
Position:       ease-in-out
```

### Transition Properties

```css
/* What Transitions */
transition-none:        none
transition-all:         all properties
transition-colors:      color, background-color, border-color
transition-opacity:     opacity
transition-transform:   transform

/* Usage Map */
Buttons:           transition-colors duration-200
Hover states:      transition-all duration-200
Sidebar:           transition-all duration-300
Tooltips:          transition-opacity duration-150
```

### Animation Classes

```css
/* Pulse Animation (for active states) */
animate-pulse:  
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
}

/* Usage */
AI Active indicator:  animate-pulse
MCP status dot:       animate-pulse
Active step radio:    animate-pulse
```

### Hover Effects

```css
/* Common Hover Patterns */

/* Background Hover */
.button {
  background: rgba(255, 255, 255, 0.05);
  transition: background 200ms ease-in-out;
}
.button:hover {
  background: rgba(255, 255, 255, 0.10);
}

/* Border Hover */
.card {
  border: 1px solid rgba(255, 255, 255, 0.10);
  transition: border-color 200ms ease-in-out;
}
.card:hover {
  border-color: rgba(255, 255, 255, 0.20);
}

/* Opacity Hover */
.icon {
  opacity: 0.6;
  transition: opacity 150ms ease-out;
}
.icon:hover {
  opacity: 1;
}

/* Scale Hover (subtle) */
.clickable {
  transition: transform 150ms ease-out;
}
.clickable:hover {
  transform: scale(1.02);
}
```

---

## 🎨 Component Visual Specs

### Sidebar Logo

```
Container:
  Width: 32px
  Height: 32px
  Background: linear-gradient(135deg, #a855f7, #3b82f6)
  Border radius: 8px (rounded-lg)
  Display: flex
  Align items: center
  Justify content: center

Icon:
  Component: Factory from lucide-react
  Size: 20px × 20px (w-5 h-5)
  Color: white (#ffffff)

Text (when expanded):
  Title: "Factos"
    Font size: 14px (text-sm)
    Font weight: 600 (font-semibold)
    Color: white
  
  Subtitle: "AI SaaS Builder"
    Font size: 12px (text-xs)
    Color: rgba(255, 255, 255, 0.4)
```

### Progress Bar (Top Bar)

```
Container:
  Width: 192px (w-48)
  Height: 8px (h-2)
  Background: rgba(255, 255, 255, 0.05)
  Border radius: 9999px (rounded-full)
  Overflow: hidden

Fill:
  Height: 100%
  Background: linear-gradient(to right, #a855f7, #3b82f6)
  Border radius: 9999px (rounded-full)
  Width: Dynamic (0-100%)
  Transition: width 500ms ease-in-out

Label:
  Font size: 12px (text-xs)
  Color: rgba(255, 255, 255, 0.6)
  Font variant numeric: tabular-nums
```

### Status Indicators

```
Dot:
  Size: 6px × 6px (w-1.5 h-1.5)
  Border radius: 9999px (rounded-full)
  
  Colors:
    Active:   #34d399 (emerald-400)
    Running:  #60a5fa (blue-400)
    Error:    #f87171 (red-400)
    Inactive: rgba(255, 255, 255, 0.2)
  
  Animation: animate-pulse (when active)
  Shadow: shadow-lg shadow-{color}/50

Icon with Pulse:
  Size: 14px × 14px (w-3.5 h-3.5)
  Colors:
    AI Brain:  #c084fc (purple-400)
    MCP:       #34d399 (emerald-400)
    Terminal:  #60a5fa (blue-400)
  Animation: animate-pulse
```

### Step Indicators (Sidebar)

```
Active Step (Radio icon):
  Icon: Radio from lucide-react
  Size: 14px × 14px (w-3.5 h-3.5)
  Color: #60a5fa (blue-400)
  Animation: animate-pulse

Completed Step (CheckCircle icon):
  Icon: CheckCircle2 from lucide-react
  Size: 14px × 14px (w-3.5 h-3.5)
  Color: #34d399 (emerald-400)

Pending Step (Circle icon):
  Icon: Circle from lucide-react
  Size: 14px × 14px (w-3.5 h-3.5)
  Color: rgba(255, 255, 255, 0.2)
```

### Connector Lines (Between Steps)

```
Line:
  Width: 1px (w-px)
  Height: 16px (h-4)
  Position: absolute, left-1/2, top-6
  Transform: translateX(-50%)
  
  Colors:
    Completed path: rgba(52, 211, 153, 0.3)
    Default path:   rgba(255, 255, 255, 0.1)
```

### Tooltips (Collapsed Sidebar)

```
Container:
  Position: absolute, left-full, ml-2 (8px offset)
  Background: #1a1a1a
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Border radius: 4px (rounded)
  Padding: 8px 8px (px-2 py-1)
  Z-index: 50

Text:
  Font size: 12px (text-xs)
  Color: white
  White space: nowrap

States:
  Default: opacity-0, pointer-events-none
  Hover: opacity-100
  Transition: opacity 150ms ease-in-out
```

### Buttons

```
Primary (Gradient):
  Background: linear-gradient(to right, #a855f7, #3b82f6)
  Hover: linear-gradient(to right, #9333ea, #2563eb)
  Padding: 16px 16px (px-4 py-2)
  Border radius: 8px (rounded-lg)
  Font size: 14px (text-sm)
  Font weight: 500 (font-medium)
  Color: white
  Transition: all 200ms ease-in-out

Secondary:
  Background: rgba(255, 255, 255, 0.05)
  Hover: rgba(255, 255, 255, 0.10)
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Padding: 16px 16px (px-4 py-2)
  Border radius: 8px (rounded-lg)
  Font size: 14px (text-sm)
  Font weight: 500 (font-medium)
  Color: white
  Transition: colors 200ms ease-in-out

Icon + Text Gap: 8px (gap-2)
```

### Cards

```
Container:
  Background: rgba(255, 255, 255, 0.05)
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Border radius: 8px (rounded-lg)
  Padding: 24px (p-6)
  
  Hover (optional):
    Border color: rgba(255, 255, 255, 0.2)
    Transition: border-color 200ms ease-in-out

Header (if present):
  Padding bottom: 16px (pb-4)
  Border bottom: 1px solid rgba(255, 255, 255, 0.05)
  Margin bottom: 16px (mb-4)

Content:
  Padding top: 16px (pt-4)
```

### Badges

```
Default:
  Padding: 10px 2px (px-2.5 py-0.5)
  Border radius: 9999px (rounded-full)
  Font size: 12px (text-xs)
  Font weight: 500 (font-medium)
  
  Variants:
    Default:  bg-white/10, text-white
    Success:  bg-emerald-500/10, text-emerald-400
    Warning:  bg-yellow-500/10, text-yellow-400
    Error:    bg-red-500/10, text-red-400
    Info:     bg-blue-500/10, text-blue-400
```

---

## 📱 Responsive Behavior

### Breakpoints

```css
/* Tailwind Breakpoints */
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px

/* Factos is primarily desktop-focused */
Optimal viewport: 1440px × 900px or larger
Minimum viewport: 1024px × 768px
```

### Sidebar Responsive States

```
Desktop (>1024px):
  - Default expanded (264px)
  - Collapsible to icon-only (64px)
  - User toggle available

Tablet (768px-1024px):
  - Starts collapsed (64px)
  - Can expand on demand

Mobile (<768px):
  - Not optimized (desktop-first app)
  - Recommend desktop view
```

---

## 🎯 Shadow System

```css
/* Tailwind Shadows */
shadow-sm:    0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow:       0 1px 3px 0 rgba(0, 0, 0, 0.1)
shadow-md:    0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg:    0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl:    0 20px 25px -5px rgba(0, 0, 0, 0.1)
shadow-2xl:   0 25px 50px -12px rgba(0, 0, 0, 0.25)

/* Custom Colored Shadows */
shadow-emerald-400/50: 0 0 10px rgba(52, 211, 153, 0.5)
shadow-blue-400/50:    0 0 10px rgba(96, 165, 250, 0.5)

/* Usage */
Toggle button:        shadow-lg
Status indicators:    shadow-lg shadow-{color}/50
Elevated cards:       shadow-md (optional)
```

---

## 🔍 Focus States

```css
/* Default Focus Ring */
focus:outline-none
focus:ring-2
focus:ring-blue-400/50
focus:ring-offset-2
focus:ring-offset-[#0a0a0a]

/* Input Focus */
input:focus {
  border-color: #60a5fa;  /* blue-400 */
  ring: 2px rgba(96, 165, 250, 0.2);
  outline: none;
}

/* Button Focus */
button:focus {
  outline: none;
  ring: 2px rgba(96, 165, 250, 0.5);
}
```

---

## 📊 Data Visualization Colors

```css
/* Chart Colors (from theme.css) */
--chart-1: oklch(0.488 0.243 264.376)  /* Purple/Blue */
--chart-2: oklch(0.696 0.17 162.48)    /* Cyan/Teal */
--chart-3: oklch(0.769 0.188 70.08)    /* Orange */
--chart-4: oklch(0.627 0.265 303.9)    /* Magenta */
--chart-5: oklch(0.645 0.246 16.439)   /* Red */

/* Usage in Recharts */
Line colors: chart-1 through chart-5
Bar colors: chart-1 through chart-5
Area fills: chart colors with opacity
```

---

## ✨ Visual Hierarchy

### Z-Index Layers

```css
z-0:   Base layer (content)
z-10:  Sidebar toggle button
z-20:  Dropdowns
z-30:  Modals
z-40:  Notifications
z-50:  Tooltips

/* Component Z-Index */
Sidebar:              0
Toggle button:        10
Dropdown menus:       20
Modal overlays:       30
Toast notifications:  40
Tooltips:            50
```

### Elevation System

```css
/* Visual Elevation Layers */
Level 0 (Base):
  Background: #0f0f0f
  No shadow

Level 1 (Slightly elevated):
  Background: rgba(255, 255, 255, 0.05)
  Border: 1px solid rgba(255, 255, 255, 0.1)

Level 2 (Elevated):
  Background: #1a1a1a
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Optional: shadow-md

Level 3 (Floating):
  Background: #1a1a1a
  Border: 1px solid rgba(255, 255, 255, 0.2)
  Shadow: shadow-lg
  
/* Usage */
Main background:      Level 0
Cards, panels:        Level 1
Tooltips, popovers:   Level 2
Modals, dialogs:      Level 3
```

---

This guide contains every visual specification needed to recreate Factos with pixel-perfect accuracy. Use it alongside COMPLETE_SPECIFICATION.md for full technical details.

**Last Updated:** April 6, 2026  
**Version:** 1.0.0  
**Contact:** design@factos.dev
