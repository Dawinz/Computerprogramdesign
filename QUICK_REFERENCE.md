# Factos - Quick Reference Card

**One-page reference for common tasks and commands.**

---

## 🚀 Push to GitHub (First Time)

```bash
# Create repo on GitHub first, then:
git init
git add .
git commit -m "feat: initial commit - Factos v1.0.0"
git branch -M main
git remote add origin https://github.com/USERNAME/factos.git
git push -u origin main
```

---

## 💻 Development Commands

```bash
pnpm install          # Install dependencies
pnpm dev             # Start dev server (http://localhost:5173)
pnpm build           # Build for production
pnpm preview         # Preview production build
```

---

## 📝 Git Workflow

```bash
# Create feature
git checkout -b feature/name
# ... make changes ...
git add .
git commit -m "feat: description"
git push -u origin feature/name

# Update from main
git checkout main
git pull origin main

# Delete branch
git branch -d feature/name
```

---

## 🎯 Commit Convention

```bash
feat:      # New feature
fix:       # Bug fix
docs:      # Documentation
style:     # Formatting
refactor:  # Code refactoring
perf:      # Performance
test:      # Tests
chore:     # Maintenance

# Example:
git commit -m "feat(sidebar): add collapse functionality"
```

---

## 📁 Key Files

```
README.md                    # Start here
GITHUB_SETUP_INSTRUCTIONS.md # Push to GitHub
CONTRIBUTING.md              # Contribution guide
ARCHITECTURE.md              # Technical details
DEPLOYMENT.md                # Deploy guide
```

---

## 🏗 Project Structure

```
src/app/
├── components/
│   ├── views/         # 8 step views
│   ├── ui/            # Reusable components
│   ├── Sidebar.tsx    # Navigation
│   ├── TopBar.tsx     # Progress bar
│   ├── RightPanel.tsx # Project Brain
│   └── BottomPanel.tsx # Terminal
├── data/
│   └── mockData.ts    # Mock data
├── routes.tsx         # Router config
└── App.tsx           # Root component
```

---

## 🎨 Style Guide

```typescript
// Component naming: PascalCase
export function MyComponent() {}

// Props interface
interface MyComponentProps {
  title: string;
  count: number;
}

// Tailwind classes
<div className="flex items-center gap-4 p-6">
  <span className="text-lg font-semibold">Text</span>
</div>
```

---

## 🔧 Common Tasks

### Add New Step

1. Create `src/app/components/views/NewStepView.tsx`
2. Add route in `src/app/routes.tsx`
3. Add step in `src/app/data/mockData.ts`

### Add New Component

1. Create `src/app/components/MyComponent.tsx`
2. Import: `import { MyComponent } from './components/MyComponent'`

### Update Dependencies

```bash
pnpm update
pnpm outdated  # Check for updates
```

---

## 🐛 Troubleshooting

```bash
# Clear cache
rm -rf node_modules dist .vite
pnpm install

# Reset git
git reset --hard HEAD
git clean -fd

# Check status
git status
git log --oneline
git remote -v
```

---

## 📚 Documentation Quick Links

- **Getting Started:** [README.md](README.md)
- **GitHub Setup:** [GITHUB_SETUP_INSTRUCTIONS.md](GITHUB_SETUP_INSTRUCTIONS.md)
- **Architecture:** [ARCHITECTURE.md](ARCHITECTURE.md)
- **Contributing:** [CONTRIBUTING.md](CONTRIBUTING.md)
- **Deployment:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Git Workflow:** [GIT_WORKFLOW.md](GIT_WORKFLOW.md)
- **Changelog:** [CHANGELOG.md](CHANGELOG.md)
- **Summary:** [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 🎯 The 8 Steps

1. **Planning** - AI chat for requirements
2. **Extraction** - Data schema definition
3. **Design** - Design system creation
4. **Architecture** - System architecture
5. **Development** - Code generation
6. **Testing** - Multi-agent testing
7. **Security** - Security validation
8. **Deployment** - Deploy to production

---

## ⚡ Keyboard Shortcuts (Future)

```
Ctrl/Cmd + K     - Command palette
Ctrl/Cmd + B     - Toggle sidebar
Ctrl/Cmd + J     - Toggle terminal
Ctrl/Cmd + P     - Quick file search
Ctrl/Cmd + ,     - Settings
```

---

## 🌐 URLs

```
Local Dev:       http://localhost:5173
GitHub:          https://github.com/USERNAME/factos
Docs:            https://github.com/USERNAME/factos#readme
Issues:          https://github.com/USERNAME/factos/issues
```

---

## 📊 Tech Stack Summary

- **React** 18.3.1 - UI Library
- **TypeScript** 5.x - Type Safety
- **Vite** 6.3.5 - Build Tool
- **Tailwind CSS** 4.1 - Styling
- **React Router** 7.13 - Routing
- **Radix UI** - Components
- **Lucide React** - Icons

---

## ✅ Pre-Push Checklist

- [ ] All files committed
- [ ] No console errors
- [ ] Build succeeds (`pnpm build`)
- [ ] No sensitive data
- [ ] .gitignore configured
- [ ] README updated
- [ ] Tests pass (if applicable)

---

## 🆘 Emergency Commands

```bash
# Abort merge
git merge --abort

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD

# Stash changes
git stash
git stash pop
```

---

**Print this page for quick reference!** 📄

---

**Version:** 1.0.0 | **Date:** April 6, 2026