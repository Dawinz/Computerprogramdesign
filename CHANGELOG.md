# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Real AI integration (OpenAI, Anthropic)
- Backend API implementation
- User authentication
- Database persistence
- Multi-user collaboration
- Plugin system

## [1.0.0] - 2026-04-06

### Added
- Initial release of Factos (formerly SaaS Factory OS)
- 8-step automated pipeline for SaaS development
- Professional dark mode UI with purple-to-blue gradients
- Collapsible sidebar with icon-only collapsed state
- Collapsible projects section in sidebar
- Project switcher with progress indicators
- Step-based navigation system
- Status indicators (pending, active, completed)
- Smooth animations and transitions throughout
- Hover tooltips on collapsed sidebar items

#### Step Views
- **Planning View**: AI chat interface for requirement gathering
- **Extraction View**: Structured data extraction and schema definition
- **Design View**: Design system creation with component preview
- **Architecture View**: System architecture diagrams and tech stack
- **Development View**: Live code generation with MCP integration
- **Testing View**: Multi-agent testing with concurrent user simulation
- **Security View**: Security validation and vulnerability scanning
- **Deployment View**: Deployment pipeline and monitoring

#### Layout Components
- `MainLayout`: Root layout orchestrator
- `Sidebar`: Collapsible navigation with projects and steps
- `TopBar`: Progress tracking and quick actions
- `RightPanel`: Project Brain with AI insights
- `BottomPanel`: Terminal, logs, and system output

#### Features
- Real-time status indicators
- Progress tracking across all steps
- Live terminal and log output
- Project Brain with AI context
- Multi-project support
- Responsive layout system
- Professional dark theme
- Icon library integration (Lucide React)

### Technical
- React 18.3.1 with TypeScript
- React Router 7.13 with Data Mode
- Tailwind CSS 4.1 for styling
- Vite 6.3.5 for build tooling
- Radix UI for accessible components
- Material UI for complex patterns
- Recharts for data visualization
- Motion for animations

### Documentation
- Comprehensive README with full project documentation
- CONTRIBUTING guide for contributors
- ARCHITECTURE documentation for developers
- MIT License
- Detailed inline code documentation

## [0.2.0] - 2026-04-06

### Changed
- Rebranded from "SaaS Factory OS" to "Factos"
- Updated all references to new brand name
- Updated logo and branding elements
- Refined initialization logs

### Fixed
- Sidebar collapse animation smoothness
- Projects section scrolling behavior
- Step status indicator accuracy

## [0.1.0] - 2026-04-05

### Added
- Initial project setup
- Basic layout structure
- Mock data system
- Routing configuration
- Dark theme implementation
- Step views scaffolding

---

## Version History

- **1.0.0** - Full featured release with complete 8-step pipeline
- **0.2.0** - Rebranding to Factos
- **0.1.0** - Initial development version

---

## Upgrade Guide

### From 0.2.0 to 1.0.0

No breaking changes. This is a feature addition release.

**New Features:**
- Collapsible sidebar
- Collapsible projects section
- Enhanced animations
- Better status indicators

**Migration Steps:**
1. Pull latest code
2. Run `pnpm install` to get any new dependencies
3. No code changes required

### From 0.1.0 to 0.2.0

**Breaking Changes:**
- Brand name changed from "SaaS Factory OS" to "Factos"

**Migration Steps:**
1. Update any references to "SaaS Factory OS" in your custom code
2. Update any hardcoded strings to use "Factos"
3. Clear browser cache to see updated branding

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this changelog.

### Changelog Guidelines

When contributing, please:
1. Add entries under `[Unreleased]`
2. Use the following categories:
   - `Added` for new features
   - `Changed` for changes in existing functionality
   - `Deprecated` for soon-to-be removed features
   - `Removed` for now removed features
   - `Fixed` for any bug fixes
   - `Security` for vulnerability fixes
3. Link to relevant issues/PRs
4. Keep descriptions concise and clear

---

**Note:** Dates are in YYYY-MM-DD format.
