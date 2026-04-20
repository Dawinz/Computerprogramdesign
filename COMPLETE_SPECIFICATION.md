# Factos - Complete Technical Specification

**Complete pixel-perfect documentation for exact recreation**

Last Updated: April 6, 2026  
Version: 1.0.0

---

## Table of Contents

1. [Color System](#1-color-system)
2. [Typography](#2-typography)
3. [Spacing & Layout](#3-spacing--layout)
4. [Components Specification](#4-components-specification)
5. [Data Structures](#5-data-structures)
6. [Animations & Transitions](#6-animations--transitions)
7. [Icons & Assets](#7-icons--assets)
8. [View Components Deep Dive](#8-view-components-deep-dive)
9. [State Management](#9-state-management)
10. [Routing Configuration](#10-routing-configuration)
11. [File-by-File Breakdown](#11-file-by-file-breakdown)

---

## 1. Color System

### 1.1 Primary Colors

```css
/* Purple-Blue Gradient (Primary Brand) */
--gradient-primary: linear-gradient(135deg, #a855f7, #3b82f6);
/* From: purple-500 (#a855f7) To: blue-500 (#3b82f6) */

/* Purple Shades */
--purple-400: #c084fc;
--purple-500: #a855f7;
--purple-600: #9333ea;

/* Blue Shades */
--blue-400: #60a5fa;
--blue-500: #3b82f6;
--blue-600: #2563eb;

/* Emerald (Success/Completed) */
--emerald-400: #34d399;
--emerald-500: #10b981;
```

### 1.2 Background Colors

```css
/* Dark Mode Backgrounds */
--bg-primary: #0f0f0f;     /* Main app background */
--bg-secondary: #0a0a0a;   /* Sidebar, panels */
--bg-tertiary: #1a1a1a;    /* Cards, tooltips */

/* Hex Values */
#0f0f0f - Main background
#0a0a0a - Sidebar background
#1a1a1a - Elevated surfaces
```

### 1.3 Border Colors

```css
/* White with opacity */
border-white/5   /* rgba(255, 255, 255, 0.05) - Subtle borders */
border-white/10  /* rgba(255, 255, 255, 0.10) - Default borders */
border-white/20  /* rgba(255, 255, 255, 0.20) - Hover borders */

/* Specific borders */
--border-subtle: rgba(255, 255, 255, 0.05);
--border-default: rgba(255, 255, 255, 0.10);
--border-emphasis: rgba(255, 255, 255, 0.20);
```

### 1.4 Text Colors

```css
/* White with opacity */
text-white       /* rgba(255, 255, 255, 1.0) - Primary text */
text-white/60    /* rgba(255, 255, 255, 0.6) - Secondary text */
text-white/40    /* rgba(255, 255, 255, 0.4) - Tertiary/muted text */
text-white/20    /* rgba(255, 255, 255, 0.2) - Disabled text */

/* Status Colors */
text-emerald-400   /* #34d399 - Success/completed */
text-blue-400      /* #60a5fa - Active/in-progress */
text-red-400       /* #f87171 - Error/failed */
text-yellow-400    /* #facc15 - Warning */
```

### 1.5 Status Colors

```css
/* Status Indicators */
--status-active: #60a5fa;     /* Blue-400 */
--status-completed: #34d399;  /* Emerald-400 */
--status-pending: rgba(255, 255, 255, 0.2);
--status-warning: #facc15;    /* Yellow-400 */
--status-error: #f87171;      /* Red-400 */
--status-running: #60a5fa;    /* Blue-400 */
```

### 1.6 Hover/Interactive States

```css
/* Background Hovers */
hover:bg-white/5    /* Subtle hover */
hover:bg-white/10   /* Default hover */

/* Border Hovers */
hover:border-white/20

/* Text Hovers */
hover:text-white       /* Full white on hover */
hover:text-white/60    /* Secondary hover */

/* Opacity Hovers */
hover:opacity-80       /* Slight fade */
```

---

## 2. Typography

### 2.1 Font Family

```css
/* System Font Stack */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif;

/* Applied via Tailwind - no custom fonts needed */
```

### 2.2 Font Sizes

```css
/* Tailwind Classes */
text-xs:    12px  (0.75rem)   /* Labels, small text */
text-sm:    14px  (0.875rem)  /* Body text, buttons */
text-base:  16px  (1rem)      /* Default text */
text-lg:    18px  (1.125rem)  /* Headings */
text-xl:    20px  (1.25rem)   /* Large headings */
text-2xl:   24px  (1.5rem)    /* Page titles */
text-3xl:   30px  (1.875rem)  /* Hero text */
text-4xl:   36px  (2.25rem)   /* Display text */

/* Usage in Components */
Sidebar step labels:        text-sm
Top bar title:              text-sm
Project names:              text-sm
Section headers:            text-xs (uppercase)
Button text:                text-sm
```

### 2.3 Font Weights

```css
/* Tailwind Classes */
font-normal:      400
font-medium:      500  /* Default for headings, buttons */
font-semibold:    600  /* Emphasis */
font-bold:        700  /* Strong emphasis */

/* Component Usage */
Headings:         font-semibold
Buttons:          font-medium
Body text:        font-normal
Labels:           font-medium
```

### 2.4 Line Heights

```css
/* Tailwind defaults - not explicitly set */
Default: 1.5 (150%)

/* Tight line height for compact text */
leading-tight:  1.25
leading-normal: 1.5
leading-relaxed: 1.625
```

### 2.5 Letter Spacing

```css
/* Uppercase labels */
tracking-wider: 0.05em

/* Usage */
.text-xs.uppercase.tracking-wider  /* Section headers */
```

---

## 3. Spacing & Layout

### 3.1 Layout Dimensions

```css
/* Sidebar */
Expanded:   264px (w-64)
Collapsed:  64px  (w-16)
Transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)

/* Top Bar */
Height:     64px  (h-16)
Fixed:      Yes

/* Right Panel */
Width:      320px (w-80)
Resizable:  Optional (future)

/* Bottom Panel */
Height:     Variable (collapsible)
Min:        200px
Max:        400px
```

### 3.2 Padding Scale

```css
/* Tailwind Spacing (px = 4 * value) */
p-0:    0px
p-1:    4px
p-2:    8px
p-3:    12px
p-4:    16px   /* Common component padding */
p-6:    24px   /* Panel padding */
p-8:    32px   /* Large padding */

/* Component Specific */
Sidebar padding:          p-6 (24px)
Card padding:             p-6 (24px)
Button padding:           px-4 py-2 (16px 8px)
Panel padding:            p-6 (24px)
```

### 3.3 Gap/Spacing Between Elements

```css
/* Tailwind Gap */
gap-1:  4px    /* Tight spacing */
gap-2:  8px    /* Default icon-text gap */
gap-3:  12px   /* Medium spacing */
gap-4:  16px   /* Standard spacing */
gap-6:  24px   /* Large spacing */

/* Common Uses */
Icon + Text:              gap-2 or gap-3
Flex items:               gap-4
Grid items:               gap-6
```

### 3.4 Border Radius

```css
/* Tailwind Radius */
rounded:       0.25rem (4px)
rounded-md:    0.375rem (6px)
rounded-lg:    0.5rem (8px)   /* Primary */
rounded-xl:    0.75rem (12px)
rounded-full:  9999px

/* Component Usage */
Cards:                rounded-lg
Buttons:              rounded-lg
Sidebar logo:         rounded-lg
Toggle button:        rounded-full
Tooltips:             rounded
```

### 3.5 Z-Index Layers

```css
z-0:    0     /* Base layer */
z-10:   10    /* Toggle button */
z-20:   20    /* Dropdowns */
z-30:   30    /* Modals */
z-40:   40    /* Tooltips */
z-50:   50    /* Tooltips (used) */

/* Component Layers */
Sidebar:              z-0
Toggle button:        z-10
Tooltips:             z-50
Modals:               z-30
```

---

## 4. Components Specification

### 4.1 Sidebar Component

**File:** `/src/app/components/Sidebar.tsx`

#### Dimensions
```
Expanded:   width: 264px (w-64)
Collapsed:  width: 64px (w-16)
Height:     100vh (h-screen)
```

#### States
1. **Expanded** - Full width with text visible
2. **Collapsed** - Icon-only mode with tooltips

#### Sections
1. **Logo Area**
   - Height: ~80px
   - Border bottom: `border-white/5`
   - Logo size: 32px × 32px (w-8 h-8)
   - Gradient: `from-purple-500 to-blue-500`
   - Font: 14px semibold

2. **Projects Section**
   - Collapsible: Yes
   - Header: "PROJECTS" (uppercase, text-xs, tracking-wider)
   - Padding: p-4
   - States: Expanded / Collapsed
   - Chevron rotation: 0deg / -90deg

3. **Pipeline Steps**
   - 8 steps total
   - Icon size: 16px × 16px (w-4 h-4)
   - Gap: gap-3
   - Padding: px-3 py-2.5
   - Connector line: 1px width, 16px height

#### Colors by State
```css
/* Active Step */
background: rgba(255, 255, 255, 0.1)
text: white
icon: current color

/* Completed Step */
text: #34d399 (emerald-400)
icon: CheckCircle2 (emerald-400)

/* Pending Step */
text: rgba(255, 255, 255, 0.4)
icon: Circle (white/20)

/* Hover (non-active) */
background: rgba(255, 255, 255, 0.05)
```

#### Toggle Button
```css
Position: absolute, -right-3, top-6
Size: 24px × 24px (w-6 h-6)
Background: #0a0a0a
Border: 1px solid rgba(255, 255, 255, 0.1)
Border radius: 50% (rounded-full)
Icon size: 14px × 14px (w-3.5 h-3.5)
Hover border: rgba(255, 255, 255, 0.2)
```

#### Tooltips (Collapsed State)
```css
Background: #1a1a1a
Border: 1px solid rgba(255, 255, 255, 0.1)
Padding: px-2 py-1
Font size: text-xs
Position: absolute, left-full, ml-2
Opacity: 0 (hidden)
Hover opacity: 1
Transition: opacity 150ms
Z-index: z-50
```

#### Step Icons Mapping
```javascript
{
  'lightbulb': LightbulbIcon,      // Planning
  'filter': FilterIcon,            // Extraction
  'palette': PaletteIcon,          // Design
  'layout': LayoutIcon,            // Architecture
  'code': CodeIcon,                // Development
  'flask-conical': FlaskConicalIcon, // Testing
  'shield-check': ShieldCheckIcon,   // Security
  'rocket': RocketIcon,            // Deployment
}
```

---

### 4.2 TopBar Component

**File:** `/src/app/components/TopBar.tsx`

#### Dimensions
```
Height: 64px (h-16)
Width: Full width minus sidebar
Padding: px-6
```

#### Layout
```
[Project Name] [Current Step] [Progress] [...........] [Quick Actions] [AI Status] [Terminal Toggle]
```

#### Sections

1. **Left Section**
   - Project name (text-sm font-semibold)
   - Separator (text-white/20): "/"
   - Current step (text-sm text-white/60)
   - Progress percentage (text-xs text-white/40)

2. **Center Section**
   - Empty (future: search, commands)

3. **Right Section**
   - Quick action buttons
   - AI Brain status indicator
   - Terminal toggle button

#### Quick Action Buttons
```css
Style: px-3 py-1.5 rounded-md
Background: rgba(255, 255, 255, 0.05)
Hover: rgba(255, 255, 255, 0.1)
Font: text-sm
Gap: gap-2
Border: 1px solid rgba(255, 255, 255, 0.1)

Actions:
- Run (Play icon)
- Test (Flask icon)
- Deploy (Rocket icon)
- Settings (Settings icon)
```

#### AI Brain Status
```css
Size: 8px × 8px (w-2 h-2)
Shape: rounded-full
Colors:
  - Active: #34d399 (emerald-400) with pulse animation
  - Inactive: rgba(255, 255, 255, 0.2)
```

---

### 4.3 RightPanel Component

**File:** `/src/app/components/RightPanel.tsx`

#### Dimensions
```
Width: 320px (w-80)
Height: 100vh
Padding: p-6
```

#### Sections

1. **Header**
   - Title: "Project Brain" (text-lg font-semibold)
   - AI status indicator
   - Close button (X icon)

2. **Stats Cards**
   ```css
   Background: rgba(255, 255, 255, 0.05)
   Padding: p-4
   Border radius: rounded-lg
   Gap: gap-3
   
   Icon size: 20px × 20px (w-5 h-5)
   Icon color: Varies (emerald, blue, purple)
   Label: text-xs text-white/40
   Value: text-2xl font-bold
   ```

3. **Active Connections**
   - List of connected services
   - Status indicators (green dot)
   - Connection strength bars

4. **Recent Changes**
   - Timestamped list
   - Icon per change type
   - Relative time (e.g., "2m ago")

5. **AI Insights**
   - Recommendations
   - Warnings
   - Optimizations

---

### 4.4 BottomPanel Component

**File:** `/src/app/components/BottomPanel.tsx`

#### Dimensions
```
Height: Variable (200-400px)
Width: Full width minus sidebar
Collapsible: Yes
```

#### Tabs
```
1. Terminal
2. Build
3. Logs
4. Tests
```

#### Tab Button Style
```css
Inactive:
  text-white/60
  hover:text-white

Active:
  text-white
  border-b: 2px solid blue-400
```

#### Terminal Content
```css
Background: #000000
Font: Monospace
Font size: text-sm
Line height: leading-relaxed
Color: #00ff00 (green terminal text)

Prompt:
  Color: #60a5fa (blue-400)
  Symbol: ">"
```

#### Log Entry
```css
Structure:
  [Timestamp] [Level] Message

Colors by level:
  INFO:    text-blue-400
  SUCCESS: text-emerald-400
  WARNING: text-yellow-400
  ERROR:   text-red-400

Timestamp: text-white/40
```

---

### 4.5 Button Component

**File:** `/src/app/components/ui/button.tsx`

#### Variants

1. **Primary**
   ```css
   background: linear-gradient(135deg, #a855f7, #3b82f6)
   color: white
   padding: px-4 py-2
   border-radius: rounded-lg
   font-weight: font-medium
   ```

2. **Secondary**
   ```css
   background: rgba(255, 255, 255, 0.05)
   border: 1px solid rgba(255, 255, 255, 0.1)
   color: white
   hover:background: rgba(255, 255, 255, 0.1)
   ```

3. **Ghost**
   ```css
   background: transparent
   color: text-white/60
   hover:background: rgba(255, 255, 255, 0.05)
   hover:color: white
   ```

4. **Destructive**
   ```css
   background: #dc2626 (red-600)
   color: white
   hover:background: #b91c1c (red-700)
   ```

#### Sizes
```css
sm:   px-3 py-1.5, text-sm
md:   px-4 py-2, text-sm (default)
lg:   px-6 py-3, text-base
icon: p-2 (square)
```

---

### 4.6 Card Component

**File:** `/src/app/components/ui/card.tsx`

```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
Border radius: rounded-lg
Padding: p-6
Hover: border-white/20 (optional)

Header:
  Padding bottom: pb-4
  Border bottom: border-white/5
  
Content:
  Padding top: pt-4
```

---

### 4.7 Badge Component

**File:** `/src/app/components/ui/badge.tsx`

```css
Padding: px-2.5 py-0.5
Border radius: rounded-full
Font size: text-xs
Font weight: font-medium

Variants:
  default:  bg-white/10 text-white
  success:  bg-emerald-500/10 text-emerald-400
  warning:  bg-yellow-500/10 text-yellow-400
  error:    bg-red-500/10 text-red-400
  info:     bg-blue-500/10 text-blue-400
```

---

## 5. Data Structures

### 5.1 TypeScript Interfaces

**File:** `/src/app/types.ts`

```typescript
export interface Step {
  id: string;
  label: string;
  path: string;
  icon: string;
  status: 'pending' | 'active' | 'completed';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  currentStep: string;
  progress: number;
  personas: Persona[];
  features: Feature[];
  externalDocs: string[];
  integrations: string[];
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface TestAgent {
  id: string;
  name: string;
  status: 'idle' | 'running' | 'passed' | 'failed';
  currentAction: string;
  avatar: string;
}

export interface SecurityCheck {
  id: string;
  name: string;
  status: 'passed' | 'warning' | 'failed';
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface DeploymentTarget {
  id: string;
  name: string;
  type: 'frontend' | 'backend' | 'database';
  status: 'pending' | 'deploying' | 'success' | 'failed';
  url?: string;
}
```

### 5.2 Mock Data

**File:** `/src/app/data/mockData.ts`

#### Steps Array
```javascript
[
  { id: '1', label: 'Planning', path: '/planning', icon: 'lightbulb', status: 'active' },
  { id: '2', label: 'Extraction', path: '/extraction', icon: 'filter', status: 'pending' },
  { id: '3', label: 'Design & Assets', path: '/design', icon: 'palette', status: 'pending' },
  { id: '4', label: 'Architecture', path: '/architecture', icon: 'layout', status: 'pending' },
  { id: '5', label: 'Development', path: '/development', icon: 'code', status: 'pending' },
  { id: '6', label: 'Testing', path: '/testing', icon: 'flask-conical', status: 'pending' },
  { id: '7', label: 'Security', path: '/security', icon: 'shield-check', status: 'pending' },
  { id: '8', label: 'Deployment', path: '/deployment', icon: 'rocket', status: 'pending' },
]
```

#### Mock Project
```javascript
{
  id: '1',
  name: 'EduConnect Platform',
  description: 'AI-powered learning management system for universities',
  currentStep: 'planning',
  progress: 12,
  personas: [
    { id: '1', name: 'Student', role: 'End User', description: '...' },
    { id: '2', name: 'Professor', role: 'Content Creator', description: '...' },
    { id: '3', name: 'Administrator', role: 'System Admin', description: '...' },
  ],
  features: [
    { id: '1', name: 'Course Management', description: '...', priority: 'high' },
    // ... more features
  ],
  externalDocs: ['https://docs.canvas.com/api', '...'],
  integrations: ['Stripe (Payments)', 'Zoom (Video)', 'AWS S3 (Storage)'],
}
```

---

## 6. Animations & Transitions

### 6.1 Transition Durations

```css
/* Standard durations */
duration-75:   75ms
duration-100:  100ms
duration-150:  150ms   /* Quick interactions */
duration-200:  200ms   /* Standard */
duration-300:  300ms   /* Sidebar collapse */
duration-500:  500ms   /* Slow animations */

/* Easing functions */
ease-in:     cubic-bezier(0.4, 0, 1, 1)
ease-out:    cubic-bezier(0, 0, 0.2, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)  /* Default */
```

### 6.2 Sidebar Collapse Animation

```css
Sidebar width:
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1)
  
Text opacity (when collapsing):
  transition: opacity 200ms ease-out
  
Projects section:
  max-height transition: 200ms ease-in-out
  opacity transition: 200ms ease-in-out
```

### 6.3 Hover Animations

```css
/* Button hover */
transition: all 200ms ease-in-out

/* Icon hover */
transition: transform 150ms ease-out
transform: scale(1.1)

/* Border hover */
transition: border-color 200ms ease-in-out
```

### 6.4 Pulse Animation (AI Status)

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### 6.5 Fade In Animation

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.fade-in {
  animation: fadeIn 300ms ease-out;
}
```

### 6.6 Slide Up Animation

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 7. Icons & Assets

### 7.1 Icon Library

**Package:** `lucide-react` v0.487.0

**Size Standards:**
```
Small icons:   14px × 14px (w-3.5 h-3.5)
Default icons: 16px × 16px (w-4 h-4)
Medium icons:  20px × 20px (w-5 h-5)
Large icons:   24px × 24px (w-6 h-6)
```

### 7.2 Step Icons

```javascript
import {
  Lightbulb,      // Planning
  Filter,         // Extraction
  Palette,        // Design
  Layout,         // Architecture
  Code,           // Development
  FlaskConical,   // Testing
  ShieldCheck,    // Security
  Rocket,         // Deployment
} from 'lucide-react';
```

### 7.3 Common Icons

```javascript
import {
  // Navigation
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  
  // Actions
  Plus,
  X,
  Check,
  Trash2,
  Edit,
  Save,
  
  // Status
  Circle,           // Pending
  Radio,            // Active (pulsing)
  CheckCircle2,     // Completed
  AlertCircle,      // Warning
  XCircle,          // Error
  
  // UI Elements
  Search,
  Settings,
  Menu,
  MoreVertical,
  MoreHorizontal,
  
  // Features
  Play,
  Pause,
  Terminal,
  FileCode,
  Folder,
  File,
  
  // Brand
  Factory,          // Logo
  
} from 'lucide-react';
```

### 7.4 Logo

```jsx
<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
  <Factory className="w-5 h-5 text-white" />
</div>
```

**Specifications:**
- Container: 32px × 32px
- Gradient: purple-500 to blue-500 (135deg)
- Border radius: 8px (rounded-lg)
- Icon size: 20px × 20px
- Icon color: white

---

## 8. View Components Deep Dive

### 8.1 PlanningView

**File:** `/src/app/components/views/PlanningView.tsx`

#### Layout
```
┌─────────────────────────────────────────────┐
│ Chat Interface                              │
│ ┌─────────────────────────────────────────┐ │
│ │ Message History (scrollable)            │ │
│ │                                         │ │
│ │ [User message]                          │ │
│ │         [AI response]                   │ │
│ │ [User message]                          │ │
│ │         [AI response with formatting]   │ │
│ │                                         │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ [Suggestion chip] [Suggestion chip]     │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ Type your message...          [Send]   │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

#### Message Styling

**User Message:**
```css
Background: rgba(59, 130, 246, 0.1)  /* Blue with opacity */
Border: 1px solid rgba(59, 130, 246, 0.2)
Border radius: rounded-lg rounded-br-none
Padding: p-4
Max width: max-w-[80%]
Alignment: ml-auto (right-aligned)
Text color: text-white
```

**AI Message:**
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
Border radius: rounded-lg rounded-bl-none
Padding: p-4
Max width: max-w-[80%]
Alignment: mr-auto (left-aligned)
Text color: text-white/90
```

#### Suggestion Chips
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
Padding: px-3 py-1.5
Border radius: rounded-full
Font size: text-sm
Hover: bg-white/10, border-white/20
Cursor: pointer
```

#### Input Area
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
Border radius: rounded-lg
Padding: p-3
Focus: border-blue-400, ring-2 ring-blue-400/20
```

---

### 8.2 ExtractionView

**File:** `/src/app/components/views/ExtractionView.tsx`

#### Layout
```
┌────────────────────┬─────────────────────┐
│ Field Definitions  │ Schema Preview      │
│                    │                     │
│ [Add Field]        │ {                   │
│                    │   "users": {        │
│ • name: string     │     "id": "uuid",   │
│ • email: string    │     "name": "str"   │
│ • role: enum       │   }                 │
│                    │ }                   │
│                    │                     │
│                    │ [Copy] [Export]     │
└────────────────────┴─────────────────────┘
```

#### Field Card
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
Padding: p-4
Border radius: rounded-lg
Gap: gap-3

Field name: text-sm font-medium
Field type: text-xs text-white/60
Actions: Edit, Delete icons
```

#### Schema Preview
```css
Background: #000000
Border: 1px solid rgba(255, 255, 255, 0.1)
Border radius: rounded-lg
Padding: p-4
Font: Monospace
Font size: text-sm
Color: #10b981 (emerald-500)
Max height: max-h-[600px]
Overflow: overflow-auto
```

---

### 8.3 DesignView

**File:** `/src/app/components/views/DesignView.tsx`

#### Layout
```
┌─────────────────────────────────────────────┐
│ Tabs: [Colors] [Typography] [Components]   │
├─────────────────────────────────────────────┤
│                                             │
│ Color Palette                               │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│ │      │ │      │ │      │ │      │       │
│ │ #xxx │ │ #xxx │ │ #xxx │ │ #xxx │       │
│ └──────┘ └──────┘ └──────┘ └──────┘       │
│                                             │
│ Component Preview                           │
│ ┌─────────────────────────────────────────┐ │
│ │ [Button Preview]                        │ │
│ │ [Card Preview]                          │ │
│ │ [Input Preview]                         │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

#### Color Swatch
```css
Width: 100px
Height: 100px
Border radius: rounded-lg
Border: 2px solid rgba(255, 255, 255, 0.1)
Hover: scale(1.05), shadow-lg

Label:
  Font size: text-xs
  Color: text-white/60
  Position: Below swatch
```

---

### 8.4 TestingView

**File:** `/src/app/components/views/TestingView.tsx`

#### Layout
```
┌─────────────────────────────────────────────┐
│ Concurrent Users: [10] [100] [1000]        │
│                                             │
│ Live Agents                                 │
│ ┌──────────────┐ ┌──────────────┐         │
│ │ Agent-001    │ │ Agent-002    │         │
│ │ 👨‍🎓 Running  │ │ 👨‍🏫 Running  │         │
│ │ Logging in   │ │ Creating...  │         │
│ └──────────────┘ └──────────────┘         │
│                                             │
│ Metrics                                     │
│ ┌─────────────────────────────────────────┐ │
│ │ Response Time: 245ms                    │ │
│ │ Success Rate:  98.5%                    │ │
│ │ Failed Tests:  2                        │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

#### Agent Card
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
Padding: p-4
Border radius: rounded-lg
Min width: 200px

Avatar: text-3xl
Name: text-sm font-medium
Status badge: Position absolute, top-right
Action: text-xs text-white/60
```

#### Status Colors
```css
Running:  border-blue-400, bg-blue-500/10
Passed:   border-emerald-400, bg-emerald-500/10
Failed:   border-red-400, bg-red-500/10
Idle:     border-white/20, bg-white/5
```

---

### 8.5 DeploymentView

**File:** `/src/app/components/views/DeploymentView.tsx`

#### Deployment Card
```css
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
Padding: p-6
Border radius: rounded-lg

Success border: border-emerald-400
Deploying border: border-blue-400 (animated)
Failed border: border-red-400

Icon size: 40px × 40px
Icon background: rgba(color, 0.1)
```

#### Status Indicator
```css
Dot size: 8px × 8px
Colors:
  Success:   bg-emerald-400
  Deploying: bg-blue-400 animate-pulse
  Failed:    bg-red-400
  Pending:   bg-white/20
```

#### Progress Bar
```css
Height: 4px (h-1)
Background: rgba(255, 255, 255, 0.1)
Fill: bg-blue-400
Border radius: rounded-full
Transition: width 300ms ease-in-out
```

---

## 9. State Management

### 9.1 Component State

**Sidebar State:**
```typescript
const [isVisible, setIsVisible] = useState(true);
const [isProjectsExpanded, setIsProjectsExpanded] = useState(true);
```

**MainLayout State:**
```typescript
const [currentProjectId, setCurrentProjectId] = useState('1');
const [isSidebarVisible, setIsSidebarVisible] = useState(true);
const [isTerminalVisible, setIsTerminalVisible] = useState(false);
```

**View State Examples:**
```typescript
// PlanningView
const [messages, setMessages] = useState<Message[]>(mockMessages);
const [inputValue, setInputValue] = useState('');

// TestingView
const [concurrentUsers, setConcurrentUsers] = useState(10);
const [agents, setAgents] = useState<TestAgent[]>(mockTestAgents);

// DeploymentView
const [deployments, setDeployments] = useState<DeploymentTarget[]>(mockDeploymentTargets);
```

### 9.2 Props Flow

```
App
└── RouterProvider
    └── MainLayout
        ├── Sidebar (props: projects, currentProjectId, onProjectSelect, isVisible, onToggle)
        ├── TopBar (props: project, currentStep, isSidebarVisible)
        ├── Outlet (renders current view)
        ├── RightPanel (props: project)
        └── BottomPanel (props: isVisible, onToggle)
```

---

## 10. Routing Configuration

**File:** `/src/app/routes.tsx`

```typescript
import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { PlanningView } from "./components/views/PlanningView";
import { ExtractionView } from "./components/views/ExtractionView";
import { DesignView } from "./components/views/DesignView";
import { ArchitectureView } from "./components/views/ArchitectureView";
import { DevelopmentView } from "./components/views/DevelopmentView";
import { TestingView } from "./components/views/TestingView";
import { SecurityView } from "./components/views/SecurityView";
import { DeploymentView } from "./components/views/DeploymentView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: PlanningView },
      { path: "planning", Component: PlanningView },
      { path: "extraction", Component: ExtractionView },
      { path: "design", Component: DesignView },
      { path: "architecture", Component: ArchitectureView },
      { path: "development", Component: DevelopmentView },
      { path: "testing", Component: TestingView },
      { path: "security", Component: SecurityView },
      { path: "deployment", Component: DeploymentView },
    ],
  },
]);
```

**Route Mapping:**
```
/ or /planning     -> PlanningView
/extraction        -> ExtractionView
/design            -> DesignView
/architecture      -> ArchitectureView
/development       -> DevelopmentView
/testing           -> TestingView
/security          -> SecurityView
/deployment        -> DeploymentView
```

---

## 11. File-by-File Breakdown

### 11.1 Core Application Files

#### `/src/app/App.tsx`
```typescript
Purpose: Root application component
Exports: default function App
Content: <RouterProvider router={router} />
```

#### `/src/app/routes.tsx`
```typescript
Purpose: React Router configuration
Exports: router (BrowserRouter)
Routes: 8 routes + index
Layout: MainLayout wrapper
```

#### `/src/app/types.ts`
```typescript
Purpose: TypeScript type definitions
Exports: All interfaces (Step, Project, Message, etc.)
Lines: ~100
```

#### `/src/app/data/mockData.ts`
```typescript
Purpose: Mock data for development
Exports: 
  - steps (8 steps)
  - mockProject
  - mockProjects (3 projects)
  - mockMessages
  - mockTestAgents (10 agents)
  - mockSecurityChecks (6 checks)
  - mockDeploymentTargets (3 targets)
```

### 11.2 Layout Components

#### `/src/app/components/MainLayout.tsx`
```typescript
Purpose: Main application layout orchestrator
State: currentProjectId, isSidebarVisible, isTerminalVisible
Children: Sidebar, TopBar, Outlet, RightPanel, BottomPanel
Dimensions: Full viewport
```

#### `/src/app/components/Sidebar.tsx`
```typescript
Purpose: Left navigation sidebar
Props: projects, currentProjectId, onProjectSelect, isVisible, onToggle
States: Expanded (264px) / Collapsed (64px)
Features: Collapsible projects, step navigation, tooltips
```

#### `/src/app/components/TopBar.tsx`
```typescript
Purpose: Top progress bar and actions
Height: 64px
Sections: Project info, Quick actions, AI status, Terminal toggle
```

#### `/src/app/components/RightPanel.tsx`
```typescript
Purpose: Project Brain panel
Width: 320px
Sections: Stats, Connections, Changes, Insights
```

#### `/src/app/components/BottomPanel.tsx`
```typescript
Purpose: Terminal and logs panel
Height: Variable (collapsible)
Tabs: Terminal, Build, Logs, Tests
```

### 11.3 View Components

#### `/src/app/components/views/PlanningView.tsx`
```typescript
Purpose: Step 1 - AI-powered planning
Features: Chat interface, Message history, Suggestions
State: messages[], inputValue
Mock data: mockMessages (4 messages)
```

#### `/src/app/components/views/ExtractionView.tsx`
```typescript
Purpose: Step 2 - Data extraction
Features: Field definitions, Schema preview, Export
Layout: 2-column (fields + preview)
```

#### `/src/app/components/views/DesignView.tsx`
```typescript
Purpose: Step 3 - Design system
Features: Color palette, Typography, Components
Tabs: Colors, Typography, Components
```

#### `/src/app/components/views/ArchitectureView.tsx`
```typescript
Purpose: Step 4 - System architecture
Features: Diagram, Tech stack, Database schema
Visualization: Node-based diagram
```

#### `/src/app/components/views/DevelopmentView.tsx`
```typescript
Purpose: Step 5 - Code generation
Features: Live generation, File tree, Code preview
MCP: Model Context Protocol integration
```

#### `/src/app/components/views/TestingView.tsx`
```typescript
Purpose: Step 6 - Multi-agent testing
Features: Concurrent users (10/100/1000), Live agents, Metrics
Mock data: mockTestAgents (10 agents)
```

#### `/src/app/components/views/SecurityView.tsx`
```typescript
Purpose: Step 7 - Security validation
Features: Vulnerability scan, Checks, Risk assessment
Mock data: mockSecurityChecks (6 checks)
```

#### `/src/app/components/views/DeploymentView.tsx`
```typescript
Purpose: Step 8 - Deployment
Features: Targets, Status, Monitoring, Health checks
Mock data: mockDeploymentTargets (3 targets)
```

### 11.4 UI Components (40+ files)

**Location:** `/src/app/components/ui/`

**Key Components:**
- `button.tsx` - Button with variants
- `card.tsx` - Card container
- `badge.tsx` - Status badges
- `dialog.tsx` - Modal dialogs
- `tabs.tsx` - Tab navigation
- `input.tsx` - Text inputs
- `select.tsx` - Dropdown selects
- `textarea.tsx` - Multi-line inputs
- `tooltip.tsx` - Hover tooltips
- `progress.tsx` - Progress bars
- `accordion.tsx` - Collapsible sections
- `alert.tsx` - Alert messages
- `avatar.tsx` - User avatars
- `checkbox.tsx` - Checkboxes
- `switch.tsx` - Toggle switches
- `slider.tsx` - Range sliders
- `table.tsx` - Data tables
- And 20+ more...

### 11.5 Style Files

#### `/src/styles/index.css`
```css
Purpose: Main CSS entry point
Imports: tailwind.css, theme.css, fonts.css
```

#### `/src/styles/theme.css`
```css
Purpose: CSS custom properties
Variables: 80+ CSS variables
Sections: Light mode, Dark mode, Tailwind theme
```

#### `/src/styles/tailwind.css`
```css
Purpose: Tailwind CSS imports
Content:
  @import "tailwindcss";
```

#### `/src/styles/fonts.css`
```css
Purpose: Custom font imports
Currently: Empty (using system fonts)
```

### 11.6 Configuration Files

#### `/package.json`
```json
Name: factos
Version: 1.0.0
Dependencies: 40+ packages
Scripts: dev, build, preview
```

#### `/vite.config.ts`
```typescript
Purpose: Vite configuration
Plugins: react, tailwindcss
Build: Output to dist/
```

#### `/tsconfig.json`
```json
Purpose: TypeScript configuration
Target: ES2020
Strict: true
JSX: react-jsx
```

#### `/postcss.config.mjs`
```javascript
Purpose: PostCSS configuration
Plugins: @tailwindcss/vite
```

#### `/.gitignore`
```
Ignores: node_modules, dist, .env, etc.
Lines: 60+
```

---

## 12. Exact Color Specifications

### 12.1 All Colors Used (Hex Values)

```css
/* Grays/Blacks */
#000000   - Pure black (terminal background)
#0a0a0a   - Sidebar background
#0f0f0f   - Main app background
#1a1a1a   - Elevated surfaces (tooltips, cards)

/* Purples */
#a855f7   - Purple-500 (gradient start)
#c084fc   - Purple-400 (lighter purple)
#9333ea   - Purple-600 (darker purple)

/* Blues */
#3b82f6   - Blue-500 (gradient end, active states)
#60a5fa   - Blue-400 (active indicators)
#2563eb   - Blue-600 (darker blue)

/* Greens */
#34d399   - Emerald-400 (completed/success)
#10b981   - Emerald-500 (darker green)
#22c55e   - Green-500 (alternative)

/* Reds */
#f87171   - Red-400 (errors)
#ef4444   - Red-500 (destructive)
#dc2626   - Red-600 (darker red)

/* Yellows */
#facc15   - Yellow-400 (warnings)
#eab308   - Yellow-500 (darker yellow)

/* White with Opacity */
rgba(255, 255, 255, 1.0)   - #ffffff (full white)
rgba(255, 255, 255, 0.9)   - #ffffffe6
rgba(255, 255, 255, 0.6)   - #ffffff99 (secondary text)
rgba(255, 255, 255, 0.4)   - #ffffff66 (tertiary text)
rgba(255, 255, 255, 0.2)   - #ffffff33 (disabled)
rgba(255, 255, 255, 0.1)   - #ffffff1a (borders)
rgba(255, 255, 255, 0.05)  - #ffffff0d (subtle backgrounds)
```

### 12.2 Gradient Specifications

```css
/* Primary Brand Gradient */
background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);

/* Alternative: using Tailwind */
bg-gradient-to-br from-purple-500 to-blue-500

/* Angle: 135 degrees (bottom-right direction) */
/* Start color: #a855f7 (purple-500) */
/* End color: #3b82f6 (blue-500) */
```

---

## 13. Exact Measurements

### 13.1 All Spacing Values

```css
/* Pixels to Tailwind */
0px   = p-0, m-0, gap-0
4px   = p-1, m-1, gap-1
8px   = p-2, m-2, gap-2
12px  = p-3, m-3, gap-3
16px  = p-4, m-4, gap-4
20px  = p-5, m-5, gap-5
24px  = p-6, m-6, gap-6
32px  = p-8, m-8, gap-8
64px  = p-16, m-16
```

### 13.2 Component Measurements

```
Sidebar:
  Expanded: 264px (66 × 4px = 264)
  Collapsed: 64px (16 × 4px = 64)
  Logo area: 32px × 32px
  Toggle button: 24px × 24px
  
TopBar:
  Height: 64px
  Padding horizontal: 24px
  
RightPanel:
  Width: 320px (80 × 4px)
  Padding: 24px
  
BottomPanel:
  Min height: 200px
  Max height: 400px
  Padding: 24px
  
Buttons:
  Small: padding 12px 12px
  Medium: padding 16px 16px
  Large: padding 24px 24px
  
Icons:
  Extra small: 14px
  Small: 16px
  Medium: 20px
  Large: 24px
  Extra large: 32px
```

---

## 14. Complete Dependencies List

### 14.1 Production Dependencies

```json
{
  "@emotion/react": "11.14.0",
  "@emotion/styled": "11.14.1",
  "@mui/icons-material": "7.3.5",
  "@mui/material": "7.3.5",
  "@popperjs/core": "2.11.8",
  "@radix-ui/react-accordion": "1.2.3",
  "@radix-ui/react-alert-dialog": "1.1.6",
  "@radix-ui/react-aspect-ratio": "1.1.2",
  "@radix-ui/react-avatar": "1.1.3",
  "@radix-ui/react-checkbox": "1.1.4",
  "@radix-ui/react-collapsible": "1.1.3",
  "@radix-ui/react-context-menu": "2.2.6",
  "@radix-ui/react-dialog": "1.1.6",
  "@radix-ui/react-dropdown-menu": "2.1.6",
  "@radix-ui/react-hover-card": "1.1.6",
  "@radix-ui/react-label": "2.1.2",
  "@radix-ui/react-menubar": "1.1.6",
  "@radix-ui/react-navigation-menu": "1.2.5",
  "@radix-ui/react-popover": "1.1.6",
  "@radix-ui/react-progress": "1.1.2",
  "@radix-ui/react-radio-group": "1.2.3",
  "@radix-ui/react-scroll-area": "1.2.3",
  "@radix-ui/react-select": "2.1.6",
  "@radix-ui/react-separator": "1.1.2",
  "@radix-ui/react-slider": "1.2.3",
  "@radix-ui/react-slot": "1.1.2",
  "@radix-ui/react-switch": "1.1.3",
  "@radix-ui/react-tabs": "1.1.3",
  "@radix-ui/react-toggle-group": "1.1.2",
  "@radix-ui/react-toggle": "1.1.2",
  "@radix-ui/react-tooltip": "1.1.8",
  "canvas-confetti": "1.9.4",
  "class-variance-authority": "0.7.1",
  "clsx": "2.1.1",
  "cmdk": "1.1.1",
  "date-fns": "3.6.0",
  "embla-carousel-react": "8.6.0",
  "input-otp": "1.4.2",
  "lucide-react": "0.487.0",
  "motion": "12.23.24",
  "next-themes": "0.4.6",
  "react-day-picker": "8.10.1",
  "react-dnd": "16.0.1",
  "react-dnd-html5-backend": "16.0.1",
  "react-hook-form": "7.55.0",
  "react-popper": "2.3.0",
  "react-resizable-panels": "2.1.7",
  "react-responsive-masonry": "2.7.1",
  "react-router": "7.13.0",
  "react-slick": "0.31.0",
  "recharts": "2.15.2",
  "sonner": "2.0.3",
  "tailwind-merge": "3.2.0",
  "tw-animate-css": "1.3.8",
  "vaul": "1.1.2"
}
```

### 14.2 Dev Dependencies

```json
{
  "@tailwindcss/vite": "4.1.12",
  "@vitejs/plugin-react": "4.7.0",
  "tailwindcss": "4.1.12",
  "vite": "6.3.5"
}
```

### 14.3 Peer Dependencies

```json
{
  "react": "18.3.1",
  "react-dom": "18.3.1"
}
```

---

## 15. Interaction Patterns

### 15.1 Sidebar Toggle

```
Initial state: Expanded (264px)
Click toggle button: Animates to collapsed (64px) over 300ms
Collapsed state: Shows only icons with tooltips on hover
Click toggle again: Animates back to expanded (264px) over 300ms

Animation:
  - Width transitions over 300ms cubic-bezier(0.4, 0, 0.2, 1)
  - Text fades out over first 150ms
  - Text fades in over last 150ms
  - Icon position adjusts automatically
```

### 15.2 Projects Collapse

```
Initial state: Expanded (shows all projects)
Click chevron: Collapses project list
Animation: max-height and opacity transition over 200ms
Chevron rotates: 0deg to -90deg
Click again: Expands back
```

### 15.3 Step Navigation

```
Click step: Navigates to step route
Active state: Blue background, white text
Hover (non-active): Subtle white/5 background
Completed steps: Green checkmark icon
Pending steps: Gray circle icon
Active step: Blue radio icon with pulse
```

### 15.4 Tooltip Display

```
Trigger: Mouse enters icon in collapsed sidebar
Delay: 0ms (instant)
Position: left-full ml-2 (2px to the right)
Animation: opacity 0 to 1 over 150ms
Background: #1a1a1a with white/10 border
Dismissal: Mouse leaves icon
```

---

## 16. Accessibility Features

### 16.1 ARIA Labels

```html
<!-- Toggle button -->
<button aria-label="Toggle sidebar">

<!-- Step links -->
<Link aria-current="page"> <!-- for active step -->

<!-- Icon buttons -->
<button aria-label="New project">
<button aria-label="Settings">
```

### 16.2 Keyboard Navigation

```
Tab: Focus next interactive element
Shift+Tab: Focus previous
Enter/Space: Activate button/link
Escape: Close modals/dialogs
Arrow keys: Navigate within dropdowns/menus
```

### 16.3 Focus States

```css
Default focus ring:
  ring-2 ring-blue-400/50
  outline-none
  
Custom focus:
  focus:border-blue-400
  focus:ring-2
  focus:ring-blue-400/20
```

---

## 17. Performance Specifications

### 17.1 Bundle Size Targets

```
Main bundle: < 500KB (gzipped)
Vendor bundle: < 300KB (gzipped)
CSS bundle: < 50KB (gzipped)
Total: < 850KB (gzipped)
```

### 17.2 Load Time Targets

```
First Contentful Paint: < 1.0s
Largest Contentful Paint: < 2.5s
Time to Interactive: < 3.0s
Cumulative Layout Shift: < 0.1
```

### 17.3 Rendering Optimization

```typescript
// Memoized components
React.memo() for static components

// Callback memoization
useCallback() for event handlers

// Value memoization
useMemo() for expensive calculations

// Virtual scrolling (future)
For lists > 100 items
```

---

## 18. Browser Support

```
Chrome: >= 90
Firefox: >= 88
Safari: >= 14
Edge: >= 90

Not supported:
Internet Explorer (all versions)
```

---

## 19. Deployment Configuration

### 19.1 Build Command

```bash
pnpm build
```

### 19.2 Output Directory

```
dist/
```

### 19.3 Environment Variables

```env
VITE_API_URL=https://api.factos.app
VITE_MCP_ENDPOINT=wss://mcp.factos.app
VITE_ENABLE_AI=true
```

---

## 20. Testing Specification

### 20.1 Unit Test Coverage Targets

```
Components: > 80%
Utilities: > 90%
Hooks: > 85%
Overall: > 80%
```

### 20.2 Test Files Location

```
__tests__/
  components/
    Sidebar.test.tsx
    TopBar.test.tsx
    ...
  utils/
    ...
```

---

This specification document contains every detail needed to recreate Factos exactly as built. Use this as the single source of truth for all design, development, and implementation decisions.

**Last updated:** April 6, 2026  
**Maintained by:** Factos Team  
**Contact:** docs@factos.dev
