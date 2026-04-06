# Factos - AI-Driven SaaS Factory OS

<div align="center">

![Factos Logo](https://img.shields.io/badge/Factos-AI%20SaaS%20Builder-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**An intelligent platform for automating the entire SaaS product development lifecycle**

[Features](#-features) • [Getting Started](#-getting-started) • [Architecture](#-architecture) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Components](#-components)
- [Step-by-Step Pipeline](#-step-by-step-pipeline)
- [Design System](#-design-system)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Factos** (formerly SaaS Factory OS) is a comprehensive desktop application that revolutionizes SaaS product development by providing an AI-driven, automated 8-step pipeline. From initial planning to production deployment, Factos guides users through every critical phase of software creation with intelligent assistance, real-time monitoring, and professional tooling.

### Why Factos?

- **🚀 Accelerated Development**: Reduce months of work to days with AI-powered automation
- **🧠 Intelligent Guidance**: AI-driven planning and architecture recommendations
- **🔒 Built-in Security**: Automated security scanning and compliance validation
- **📊 Live Monitoring**: Real-time insights into every step of your pipeline
- **🎨 Design First**: Integrated design system creation and preview
- **⚡ Multi-Agent Testing**: Simulate 10/100/1000 concurrent users instantly
- **📦 One-Click Deployment**: Seamless deployment to production environments

---

## ✨ Features

### 🎯 Core Capabilities

#### **8-Step Automated Pipeline**
1. **Planning** - AI-powered chat-based ideation and requirement gathering
2. **Extraction** - Structured data extraction and schema definition
3. **Design** - Design system creation with live component preview
4. **Architecture** - Automated system architecture diagrams and tech stack recommendations
5. **Development** - Live code generation with MCP (Model Context Protocol) integration
6. **Testing** - Multi-agent testing with concurrent user simulation (10/100/1000 users)
7. **Security** - Comprehensive security validation and vulnerability scanning
8. **Deployment** - Automated deployment with health monitoring

#### **Professional UI/UX**
- 🎨 **Dark Mode Interface** - Professional dark theme inspired by Linear, Notion, and Vercel
- 🌈 **Purple-to-Blue Gradients** - Modern, visually appealing color scheme
- ✨ **Smooth Animations** - Polished transitions and micro-interactions
- 📱 **Responsive Layout** - Optimized for desktop workflows
- 🔄 **Real-time Updates** - Live status indicators and progress tracking

#### **Advanced Layout System**
- **Collapsible Sidebar** - Left navigation with icon-only collapsed state
- **Progress Top Bar** - Step tracking with status indicators
- **Dynamic Workspace** - Context-aware main panel that adapts to each step
- **Project Brain Panel** - Right panel showing live project context and AI insights
- **Terminal Panel** - Bottom panel for logs, build output, and system messages

---

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.x** - Type-safe development
- **Vite 6.3.5** - Lightning-fast build tool and dev server

### Routing & State
- **React Router 7.13** - Client-side routing with data mode pattern
- **React Hooks** - Local state management (useState, useEffect, etc.)

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Motion (Framer Motion)** - Animation library
- **Material UI 7.3** - Component library for complex UI elements

### Data Visualization
- **Recharts 2.15** - Composable charting library
- **React Flow** - Node-based architecture diagrams

### Additional Libraries
- **Canvas Confetti** - Celebration effects
- **Sonner** - Toast notifications
- **React DnD** - Drag and drop functionality
- **date-fns** - Date utilities
- **clsx & tailwind-merge** - Conditional class merging

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/factos.git
   cd factos
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
pnpm build
# or
npm run build
```

The production build will be in the `dist/` directory.

---

## 📁 Project Structure

```
factos/
├── src/
│   ├── app/
│   │   ├── components/           # React components
│   │   │   ├── views/            # Step view components
│   │   │   │   ├── PlanningView.tsx
│   │   │   │   ├── ExtractionView.tsx
│   │   │   │   ├── DesignView.tsx
│   │   │   │   ├── ArchitectureView.tsx
│   │   │   │   ├── DevelopmentView.tsx
│   │   │   │   ├── TestingView.tsx
│   │   │   │   ├── SecurityView.tsx
│   │   │   │   └── DeploymentView.tsx
│   │   │   ├── ui/               # Reusable UI components
│   │   │   ├── Sidebar.tsx       # Left navigation
│   │   │   ├── TopBar.tsx        # Top progress bar
│   │   │   ├── RightPanel.tsx    # Project Brain panel
│   │   │   ├── BottomPanel.tsx   # Terminal/logs panel
│   │   │   └── MainLayout.tsx    # Main layout wrapper
│   │   ├── data/
│   │   │   └── mockData.ts       # Mock data for development
│   │   ├── types.ts              # TypeScript type definitions
│   │   ├── routes.tsx            # React Router configuration
│   │   └── App.tsx               # Root application component
│   ├── styles/
│   │   ├── index.css             # Global styles
│   │   ├── theme.css             # Theme variables
│   │   ├── tailwind.css          # Tailwind imports
│   │   └── fonts.css             # Font imports
│   └── imports/                  # Static assets
├── package.json
├── vite.config.ts                # Vite configuration
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

---

## 🏗 Architecture

### Application Architecture

Factos follows a **component-based architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                     Main Layout                          │
├──────────┬─────────────────────────┬──────────┬─────────┤
│          │      Top Bar            │          │         │
│          │  (Progress Tracking)    │          │         │
│          ├─────────────────────────┤          │         │
│  Sidebar │                         │  Right   │         │
│  (Steps) │    Main Workspace       │  Panel   │         │
│          │   (Dynamic View)        │ (Brain)  │         │
│          │                         │          │         │
│          ├─────────────────────────┤          │         │
│          │   Bottom Panel          │          │         │
│          │ (Terminal/Logs)         │          │         │
└──────────┴─────────────────────────┴──────────┴─────────┘
```

### Data Flow

1. **User Interaction** → Component state updates
2. **State Changes** → UI re-renders
3. **Navigation** → React Router updates route
4. **Route Change** → Appropriate view component loads
5. **View Component** → Fetches/displays relevant data

### Routing Strategy

Factos uses **React Router 7** with the **Data Mode** pattern:

- Centralized route configuration in `src/app/routes.tsx`
- Nested routing with `MainLayout` as the root
- Route-based code splitting for optimal performance
- URL-driven navigation state

---

## 🧩 Components

### Layout Components

#### **Sidebar.tsx**
- **Purpose**: Primary navigation for steps and projects
- **Features**:
  - Collapsible design (full width ↔ icon-only)
  - Project switcher with progress indicators
  - 8-step pipeline navigation
  - Status indicators (pending, active, completed)
  - Smooth animations and tooltips
- **States**: Expanded (264px) | Collapsed (64px)

#### **TopBar.tsx**
- **Purpose**: Step context and quick actions
- **Features**:
  - Current project name and step
  - Progress percentage
  - Quick action buttons (Run, Test, Deploy, etc.)
  - AI Brain connection status
  - Terminal toggle
- **Height**: 64px (fixed)

#### **RightPanel.tsx**
- **Purpose**: Project Brain - AI context and insights
- **Features**:
  - Live AI recommendations
  - Project statistics
  - Active connections
  - System health status
  - Recent changes log
- **Width**: 320px (resizable)

#### **BottomPanel.tsx**
- **Purpose**: Terminal, logs, and system output
- **Features**:
  - Tab-based interface (Terminal, Build, Logs, Tests)
  - Auto-scroll with lock
  - Color-coded log levels
  - Clear and filter controls
  - Collapsible design
- **Height**: Variable (collapsible)

#### **MainLayout.tsx**
- **Purpose**: Orchestrates all layout components
- **Responsibilities**:
  - State management for layout
  - Project context provider
  - Route outlet rendering

### View Components

Each view corresponds to one step in the pipeline:

#### **1. PlanningView.tsx**
- Chat-based interface for AI-assisted planning
- Message history with user/AI differentiation
- Suggestion chips for common queries
- Rich text rendering with markdown support

#### **2. ExtractionView.tsx**
- Structured data extraction interface
- Field mapping and validation
- Schema preview with JSON/YAML output
- Auto-extraction suggestions

#### **3. DesignView.tsx**
- Design system builder
- Component library preview
- Color palette generator
- Typography scale configuration
- Live component rendering

#### **4. ArchitectureView.tsx**
- System architecture diagram
- Tech stack recommendations
- Database schema visualization
- API endpoint planning
- Microservices mapping

#### **5. DevelopmentView.tsx**
- Live code generation interface
- MCP (Model Context Protocol) status
- File tree explorer
- Code preview with syntax highlighting
- Real-time generation progress

#### **6. TestingView.tsx**
- Multi-agent testing dashboard
- Concurrent user simulation (10/100/1000)
- Test case management
- Performance metrics
- Coverage reports
- Real-time test execution

#### **7. SecurityView.tsx**
- Security validation dashboard
- Vulnerability scanning
- Dependency audit
- OWASP compliance checks
- Security score and recommendations

#### **8. DeploymentView.tsx**
- Deployment pipeline visualization
- Environment configuration
- Build status tracking
- Health monitoring
- Rollback controls

---

## 📊 Step-by-Step Pipeline

### Step 1: Planning 💡
**Goal**: Define what to build

- **AI Chat Interface**: Conversational requirement gathering
- **Smart Suggestions**: AI-powered feature recommendations
- **Document Generation**: Auto-create PRDs and user stories
- **Stakeholder Input**: Collaborative planning tools

### Step 2: Extraction 🔍
**Goal**: Extract and structure data

- **Field Mapping**: Define data models and relationships
- **Schema Generation**: Auto-generate database schemas
- **Validation Rules**: Set up data validation
- **API Contract**: Define API endpoints and responses

### Step 3: Design 🎨
**Goal**: Create the design system

- **Component Library**: Build reusable UI components
- **Style Guide**: Define colors, typography, spacing
- **Theme Configuration**: Set up light/dark modes
- **Preview**: Live component rendering

### Step 4: Architecture 🏛️
**Goal**: Design system architecture

- **Diagram Generation**: Visual system architecture
- **Tech Stack**: Recommended technologies
- **Database Design**: ER diagrams and schemas
- **API Planning**: RESTful/GraphQL endpoint design
- **Infrastructure**: Cloud architecture planning

### Step 5: Development 💻
**Goal**: Generate production-ready code

- **AI Code Generation**: Automated code creation
- **MCP Integration**: Model Context Protocol support
- **File Structure**: Organized, scalable codebase
- **Best Practices**: Industry-standard patterns
- **Real-time Progress**: Live generation tracking

### Step 6: Testing 🧪
**Goal**: Validate functionality and performance

- **Multi-Agent Testing**: Simulate concurrent users
- **Load Testing**: 10/100/1000 concurrent users
- **Unit Tests**: Automated test generation
- **Integration Tests**: End-to-end validation
- **Performance Metrics**: Response times, throughput

### Step 7: Security 🔒
**Goal**: Ensure application security

- **Vulnerability Scanning**: Automated security checks
- **Dependency Audit**: Check for known CVEs
- **OWASP Top 10**: Compliance validation
- **Penetration Testing**: Simulated attacks
- **Security Score**: Overall security rating

### Step 8: Deployment 🚀
**Goal**: Deploy to production

- **CI/CD Pipeline**: Automated deployment
- **Environment Config**: Production settings
- **Health Monitoring**: Live application status
- **Rollback**: Quick revert on issues
- **Analytics**: Usage and performance tracking

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--purple-500: #a855f7;
--blue-500: #3b82f6;
--emerald-400: #34d399;

/* Background Colors */
--bg-primary: #0f0f0f;
--bg-secondary: #0a0a0a;
--bg-tertiary: #1a1a1a;

/* Border Colors */
--border-subtle: rgba(255, 255, 255, 0.05);
--border-default: rgba(255, 255, 255, 0.10);

/* Text Colors */
--text-primary: #ffffff;
--text-secondary: rgba(255, 255, 255, 0.60);
--text-muted: rgba(255, 255, 255, 0.40);
```

### Typography

- **Font Family**: System fonts for optimal performance
- **Scale**: Tailwind's default scale (text-xs to text-4xl)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing

- Uses Tailwind's 4px-based spacing scale
- Consistent padding/margin throughout
- Component-specific spacing for visual hierarchy

### Animations

```css
/* Transition Timings */
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## 💻 Development

### Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm tsc --noEmit

# Lint code
pnpm eslint src/
```

### Code Style Guidelines

1. **TypeScript**: Use strict type checking
2. **Components**: Functional components with hooks
3. **Props**: Define interfaces for all component props
4. **Naming**: 
   - Components: PascalCase
   - Files: PascalCase for components, camelCase for utils
   - Variables: camelCase
   - Constants: UPPER_SNAKE_CASE

### Adding a New Step

1. Create view component in `src/app/components/views/`
2. Add route in `src/app/routes.tsx`
3. Add step metadata in `src/app/data/mockData.ts`
4. Update type definitions in `src/app/types.ts`

Example:
```typescript
// 1. Create NewStepView.tsx
export function NewStepView() {
  return (
    <div className="p-6">
      <h1>New Step</h1>
    </div>
  );
}

// 2. Add route
{
  path: "/new-step",
  Component: NewStepView
}

// 3. Add to steps array
{
  id: 'new-step',
  label: 'New Step',
  icon: 'icon-name',
  path: '/new-step',
  description: 'Description'
}
```

### Environment Variables

Create a `.env` file in the root:

```env
# API Configuration
VITE_API_URL=http://localhost:3000
VITE_MCP_ENDPOINT=ws://localhost:8080

# Feature Flags
VITE_ENABLE_AI=true
VITE_ENABLE_TELEMETRY=false
```

---

## 🚢 Deployment

### Production Build

```bash
pnpm build
```

Output: `dist/` directory

### Deployment Options

#### **Vercel** (Recommended)
```bash
vercel --prod
```

#### **Netlify**
```bash
netlify deploy --prod
```

#### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

#### **Static Hosting**
Upload `dist/` folder to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- GitHub Pages

### Environment-Specific Configuration

**Production checklist**:
- [ ] Set `VITE_API_URL` to production API
- [ ] Enable error tracking (Sentry, etc.)
- [ ] Configure analytics
- [ ] Set up CDN for assets
- [ ] Enable caching headers
- [ ] Configure CORS properly

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Contribution Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

### Code Review Process

1. All PRs require at least one review
2. CI/CD checks must pass
3. Code coverage should not decrease
4. Follow the existing code style

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration**: Linear, Notion, Vercel
- **UI Components**: Radix UI, Shadcn UI
- **Icons**: Lucide Icons
- **Community**: All contributors and users

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/factos/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/factos/discussions)
- **Email**: support@factos.dev
- **Discord**: [Join our community](https://discord.gg/factos)

---

## 🗺️ Roadmap

### Version 2.0 (Planned)
- [ ] Real AI integration (OpenAI, Anthropic)
- [ ] Backend API implementation
- [ ] Database persistence
- [ ] User authentication
- [ ] Multi-project workspaces
- [ ] Collaboration features
- [ ] Plugin system
- [ ] Custom theme builder
- [ ] Export to popular frameworks (Next.js, Remix, etc.)

### Future Enhancements
- [ ] Mobile app
- [ ] Cloud-hosted version
- [ ] Marketplace for templates
- [ ] Video tutorials
- [ ] AI training on custom codebases
- [ ] Integration with GitHub/GitLab
- [ ] Automated documentation generation

---

<div align="center">

**Built with ❤️ by the Factos Team**

[⬆ Back to Top](#factos---ai-driven-saas-factory-os)

</div>
