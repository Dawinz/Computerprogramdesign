# Factos Architecture Documentation

This document provides an in-depth look at the architecture and design decisions of Factos.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Routing Strategy](#routing-strategy)
- [Data Flow](#data-flow)
- [Styling Architecture](#styling-architecture)
- [Performance Optimization](#performance-optimization)
- [Future Considerations](#future-considerations)

## Overview

Factos is a single-page application (SPA) built with React and TypeScript. It follows a component-based architecture with a clear separation of concerns between layout, views, and UI components.

### Key Architectural Principles

1. **Component Composition**: Small, reusable components composed to build complex UIs
2. **Type Safety**: Comprehensive TypeScript types for all components and data structures
3. **Separation of Concerns**: Clear boundaries between layout, business logic, and presentation
4. **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with React
5. **Performance First**: Code splitting, lazy loading, and optimized rendering

## Technology Stack

### Core Technologies

```
┌─────────────────────────────────────────┐
│           React 18.3.1                  │
│  (UI Library with Concurrent Features)  │
├─────────────────────────────────────────┤
│         TypeScript 5.x                  │
│     (Type Safety & DX)                  │
├─────────────────────────────────────────┤
│           Vite 6.3.5                    │
│   (Build Tool & Dev Server)             │
├─────────────────────────────────────────┤
│        Tailwind CSS 4.1                 │
│      (Styling Framework)                │
└─────────────────────────────────────────┘
```

### Supporting Libraries

- **React Router 7**: Client-side routing
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Motion**: Animation library
- **Recharts**: Data visualization
- **Material UI**: Complex component patterns

## Project Structure

```
factos/
├── src/
│   ├── app/                      # Application code
│   │   ├── components/           # React components
│   │   │   ├── views/            # Step-specific views
│   │   │   ├── ui/               # Reusable UI components
│   │   │   ├── Sidebar.tsx       # Layout: Left navigation
│   │   │   ├── TopBar.tsx        # Layout: Top bar
│   │   │   ├── RightPanel.tsx    # Layout: Right panel
│   │   │   ├── BottomPanel.tsx   # Layout: Bottom panel
│   │   │   └── MainLayout.tsx    # Layout: Root wrapper
│   │   ├── data/                 # Mock data and constants
│   │   ├── types.ts              # TypeScript definitions
│   │   ├── routes.tsx            # Router configuration
│   │   └── App.tsx               # Root component
│   ├── styles/                   # Global styles
│   └── imports/                  # Static assets
├── package.json                  # Dependencies
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── postcss.config.mjs           # PostCSS configuration
```

### Directory Responsibilities

#### `/src/app/components/views/`
Contains step-specific view components. Each view is responsible for:
- Rendering step-specific UI
- Managing step-specific state
- Handling step-specific user interactions
- Displaying step-specific data

#### `/src/app/components/ui/`
Contains reusable UI components from Radix UI and custom components:
- Buttons, inputs, dialogs
- Cards, badges, tooltips
- Tables, tabs, accordions
- Generic, composable components

#### `/src/app/components/`
Layout components that structure the application:
- `MainLayout.tsx`: Root layout wrapper
- `Sidebar.tsx`: Navigation and step list
- `TopBar.tsx`: Current step and actions
- `RightPanel.tsx`: Project Brain panel
- `BottomPanel.tsx`: Terminal and logs

#### `/src/app/data/`
Mock data and application constants:
- `mockData.ts`: Sample projects, steps, logs, etc.
- Future: API client, data fetching utilities

#### `/src/styles/`
Global styles and theme configuration:
- `index.css`: Global styles and resets
- `theme.css`: CSS custom properties (design tokens)
- `tailwind.css`: Tailwind imports
- `fonts.css`: Font face declarations

## Component Architecture

### Component Hierarchy

```
App (RouterProvider)
└── MainLayout
    ├── Sidebar
    ├── TopBar
    ├── MainWorkspace (Outlet)
    │   ├── PlanningView
    │   ├── ExtractionView
    │   ├── DesignView
    │   ├── ArchitectureView
    │   ├── DevelopmentView
    │   ├── TestingView
    │   ├── SecurityView
    │   └── DeploymentView
    ├── RightPanel
    └── BottomPanel
```

### Component Patterns

#### 1. Presentational Components
Pure components that only render UI based on props.

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
}
```

#### 2. Container Components
Components that manage state and pass data to presentational components.

```typescript
export function UserProfileContainer() {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);
  
  if (!user) return <LoadingSpinner />;
  
  return <UserProfile user={user} />;
}
```

#### 3. Layout Components
Components that structure the page layout.

```typescript
export function MainLayout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  return (
    <div className="layout">
      <Sidebar isVisible={isSidebarVisible} />
      <MainContent />
      <RightPanel />
    </div>
  );
}
```

#### 4. View Components
Step-specific components that combine multiple components.

```typescript
export function PlanningView() {
  const [messages, setMessages] = useState<Message[]>([]);
  
  return (
    <div className="view">
      <ViewHeader title="Planning" />
      <ChatInterface messages={messages} />
      <SuggestionChips />
    </div>
  );
}
```

### Component Communication

```
┌─────────────────────────────────────┐
│          MainLayout                 │
│  (State: projectId, sidebarVisible) │
└────────────┬────────────────────────┘
             │
     ┌───────┴───────┐
     │               │
     ▼               ▼
┌─────────┐     ┌─────────┐
│ Sidebar │     │ TopBar  │
│ (Props) │     │ (Props) │
└─────────┘     └─────────┘

Props down, events up pattern
```

## State Management

### Current Approach: Local State

We use React's built-in state management:

```typescript
// Local component state
const [count, setCount] = useState(0);

// Shared state via props drilling
<Parent>
  <Child value={count} onChange={setCount} />
</Parent>
```

### State Location Strategy

1. **Component-local state**: UI state (modals, dropdowns, forms)
2. **Shared state in parent**: Data shared between siblings
3. **Context for global state**: Theme, auth (future)

### Example: Sidebar Collapse State

```typescript
// MainLayout.tsx (parent)
export function MainLayout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  return (
    <>
      <Sidebar 
        isVisible={isSidebarVisible}
        onToggle={() => setIsSidebarVisible(!isSidebarVisible)}
      />
      <TopBar isSidebarVisible={isSidebarVisible} />
    </>
  );
}
```

### Future: Context API for Global State

```typescript
// Future implementation
const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  
  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
```

## Routing Strategy

### React Router 7 Data Mode

We use React Router's modern data loading pattern:

```typescript
// routes.tsx
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: PlanningView },
      { path: "planning", Component: PlanningView },
      { path: "extraction", Component: ExtractionView },
      { path: "design", Component: DesignView },
      // ... more routes
    ],
  },
]);

// App.tsx
function App() {
  return <RouterProvider router={router} />;
}
```

### Benefits of Data Mode

1. **Centralized routing**: All routes in one file
2. **Type-safe navigation**: TypeScript knows all routes
3. **Nested layouts**: Automatic layout wrapping
4. **Code splitting**: Automatic route-based splitting (future)

### Navigation Patterns

```typescript
// Declarative navigation
<Link to="/planning">Go to Planning</Link>

// Programmatic navigation
import { useNavigate } from 'react-router';

function Component() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/planning');
  };
}

// Get current route
import { useLocation } from 'react-router';

function Component() {
  const location = useLocation();
  console.log(location.pathname); // "/planning"
}
```

## Data Flow

### Current: Mock Data Flow

```
┌──────────────┐
│  mockData.ts │
│  (Constants) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ MainLayout   │
│ (Imports)    │
└──────┬───────┘
       │
       ├─────────┐
       ▼         ▼
   Sidebar   RightPanel
   (Props)   (Props)
```

### Future: API Data Flow

```
┌──────────────┐
│  API Client  │
│ (Fetch Data) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   useQuery   │
│ (React Query)│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Component   │
│  (Renders)   │
└──────────────┘
```

### Data Loading Patterns

#### 1. Synchronous (Current)

```typescript
import { mockProjects } from '../data/mockData';

export function ProjectList() {
  return (
    <ul>
      {mockProjects.map(project => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}
```

#### 2. Asynchronous (Future)

```typescript
export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <LoadingSpinner />;
  
  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}
```

## Styling Architecture

### Tailwind CSS v4 Approach

We use utility-first CSS with Tailwind:

```typescript
// Component with Tailwind classes
<div className="flex items-center gap-4 p-6 bg-gray-900 rounded-lg">
  <Icon className="w-6 h-6 text-blue-500" />
  <span className="text-lg font-semibold">Title</span>
</div>
```

### Design Token System

Theme variables in `theme.css`:

```css
@layer base {
  :root {
    /* Colors */
    --color-bg-primary: #0f0f0f;
    --color-bg-secondary: #0a0a0a;
    --color-text-primary: #ffffff;
    
    /* Spacing */
    --spacing-unit: 4px;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
  }
}
```

### Component Styling Pattern

```typescript
// 1. Extract repeated patterns to constants
const buttonBaseClasses = "px-4 py-2 rounded-lg transition-colors";
const buttonVariants = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-700 hover:bg-gray-600 text-gray-100",
};

// 2. Use in component
<button className={`${buttonBaseClasses} ${buttonVariants.primary}`}>
  Click me
</button>

// 3. Or use clsx/cn for conditional classes
import { cn } from '../utils';

<button className={cn(
  buttonBaseClasses,
  isPrimary ? buttonVariants.primary : buttonVariants.secondary,
  isDisabled && "opacity-50 cursor-not-allowed"
)}>
  Click me
</button>
```

### Responsive Design

```typescript
// Mobile-first responsive classes
<div className="
  flex flex-col           /* Mobile: stack vertically */
  md:flex-row             /* Tablet+: horizontal */
  gap-4 md:gap-8          /* Responsive spacing */
  p-4 md:p-6 lg:p-8       /* Responsive padding */
">
  <Sidebar />
  <Main />
</div>
```

## Performance Optimization

### Current Optimizations

#### 1. React.memo for Pure Components

```typescript
export const ExpensiveComponent = React.memo(({ data }: Props) => {
  // Only re-renders when data changes
  return <div>{/* render */}</div>;
});
```

#### 2. useCallback for Function Stability

```typescript
const handleClick = useCallback(() => {
  // Function reference stays stable
  doSomething();
}, [dependency]);
```

#### 3. useMemo for Expensive Computations

```typescript
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value);
}, [data]);
```

### Future Optimizations

#### 1. Code Splitting

```typescript
// Lazy load view components
const PlanningView = lazy(() => import('./views/PlanningView'));
const ExtractionView = lazy(() => import('./views/ExtractionView'));

// Router with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes />
</Suspense>
```

#### 2. Virtual Scrolling

```typescript
// For long lists (logs, test results)
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={500}
  itemCount={1000}
  itemSize={35}
>
  {Row}
</FixedSizeList>
```

#### 3. Image Optimization

```typescript
// Lazy load images
<img 
  src={url} 
  loading="lazy"
  decoding="async"
/>

// Or use next-gen formats
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="..." />
</picture>
```

### Bundle Size Optimization

```typescript
// Tree-shaking: Import only what you need
import { useState } from 'react';              // ✅ Good
import React from 'react';                     // ❌ Imports everything

import { Button } from '@mui/material';        // ✅ Good
import * as MUI from '@mui/material';          // ❌ Imports everything

// Named exports for better tree-shaking
export function Component() {}                 // ✅ Good
export default function Component() {}         // ❌ Harder to tree-shake
```

## Future Considerations

### Backend Integration

```typescript
// API client setup
const api = {
  projects: {
    list: () => fetch('/api/projects').then(r => r.json()),
    get: (id: string) => fetch(`/api/projects/${id}`).then(r => r.json()),
    create: (data: ProjectInput) => fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(r => r.json()),
  },
};

// React Query integration
const { data, isLoading } = useQuery({
  queryKey: ['projects'],
  queryFn: api.projects.list,
});
```

### Real-time Updates

```typescript
// WebSocket integration for live updates
useEffect(() => {
  const ws = new WebSocket('ws://localhost:8080');
  
  ws.onmessage = (event) => {
    const update = JSON.parse(event.data);
    // Update UI with real-time data
  };
  
  return () => ws.close();
}, []);
```

### Authentication

```typescript
// Auth context
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (credentials: Credentials) => {
    const user = await api.auth.login(credentials);
    setUser(user);
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### Testing Strategy

```typescript
// Unit tests with Vitest
describe('Button', () => {
  it('renders correctly', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Button label="Click me" onClick={onClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});

// Integration tests
describe('PlanningView', () => {
  it('sends message and receives response', async () => {
    render(<PlanningView />);
    
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByText('Send');
    
    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(sendButton);
    
    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument();
    });
  });
});
```

### Deployment Strategy

```typescript
// Environment-based configuration
const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  environment: import.meta.env.MODE, // 'development' | 'production'
};

// Feature flags
const features = {
  enableAI: import.meta.env.VITE_ENABLE_AI === 'true',
  enableTelemetry: import.meta.env.VITE_ENABLE_TELEMETRY === 'true',
};
```

## Architecture Decisions

### Why React?
- Large ecosystem and community
- Excellent TypeScript support
- Mature tooling and libraries
- Component-based architecture fits our needs

### Why TypeScript?
- Type safety prevents bugs
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring

### Why Tailwind CSS?
- Rapid prototyping
- Consistent design system
- Small bundle size (purged CSS)
- No naming conflicts

### Why Vite?
- Lightning-fast HMR
- Modern build tool
- Excellent TypeScript support
- Simple configuration

### Why React Router v7?
- Modern routing patterns
- Type-safe navigation
- Data loading integration
- Nested layouts

---

**This architecture is designed to be:**
- **Scalable**: Easy to add new features and components
- **Maintainable**: Clear structure and patterns
- **Performant**: Optimized for speed and bundle size
- **Developer-friendly**: Great DX with TypeScript and modern tooling

For questions about architecture decisions, open a discussion or contact the team.
