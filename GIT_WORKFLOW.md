# Git Workflow & GitHub Setup Guide

This guide will help you push Factos to GitHub and establish a solid Git workflow.

## Table of Contents

- [Initial GitHub Setup](#initial-github-setup)
- [Pushing to GitHub](#pushing-to-github)
- [Git Workflow](#git-workflow)
- [Branch Strategy](#branch-strategy)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [GitHub Features](#github-features)

## Initial GitHub Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub**
   - Navigate to [github.com](https://github.com)
   - Click the "+" icon → "New repository"

2. **Repository Settings**
   ```
   Repository name: factos
   Description: AI-Driven SaaS Factory OS - Automated pipeline for building SaaS products
   Visibility: Public (or Private)
   
   ❌ Do NOT initialize with:
   - README (we already have one)
   - .gitignore (we already have one)
   - License (we already have one)
   ```

3. **Create Repository**
   - Click "Create repository"
   - Copy the repository URL (e.g., `https://github.com/yourusername/factos.git`)

### Step 2: Initialize Local Git Repository

If you haven't already initialized Git:

```bash
# Navigate to project directory
cd factos

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - Factos v1.0.0"
```

### Step 3: Connect to GitHub

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/yourusername/factos.git

# Verify remote
git remote -v

# Expected output:
# origin  https://github.com/yourusername/factos.git (fetch)
# origin  https://github.com/yourusername/factos.git (push)
```

### Step 4: Push to GitHub

```bash
# Rename default branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main

# Expected output:
# Enumerating objects: X, done.
# Counting objects: 100% (X/X), done.
# Writing objects: 100% (X/X), X.XX MiB | X.XX MiB/s, done.
# Total X (delta 0), reused 0 (delta 0), pack-reused 0
```

### Verification

Visit your repository on GitHub:
```
https://github.com/yourusername/factos
```

You should see:
- ✅ All project files
- ✅ README.md displayed
- ✅ License badge
- ✅ File structure

## Pushing to GitHub

### First Time Push

```bash
# Stage all files
git add .

# Commit with message
git commit -m "feat: initial commit"

# Push to GitHub
git push -u origin main
```

### Subsequent Pushes

```bash
# Check status
git status

# Stage specific files
git add src/app/components/NewComponent.tsx

# Or stage all changes
git add .

# Commit
git commit -m "feat: add new component"

# Push
git push
```

### Common Git Commands

```bash
# Check status
git status

# View changes
git diff

# View commit history
git log --oneline

# View remote branches
git branch -r

# Pull latest changes
git pull origin main

# Discard local changes
git checkout -- filename.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## Git Workflow

### Daily Workflow

```bash
# 1. Start your day - pull latest changes
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/my-new-feature

# 3. Make changes
# ... edit files ...

# 4. Stage and commit frequently
git add .
git commit -m "feat: add user authentication"

# 5. Push to GitHub
git push -u origin feature/my-new-feature

# 6. Create Pull Request on GitHub

# 7. After PR is merged, clean up
git checkout main
git pull origin main
git branch -d feature/my-new-feature
```

### Working on Multiple Features

```bash
# Save current work without committing
git stash

# Switch to another branch
git checkout other-branch

# Come back and restore work
git checkout feature/my-feature
git stash pop
```

## Branch Strategy

### Branch Naming Convention

```bash
# Features
git checkout -b feature/sidebar-collapse
git checkout -b feature/add-testing-view

# Bug fixes
git checkout -b fix/deployment-status
git checkout -b fix/sidebar-animation

# Documentation
git checkout -b docs/update-readme
git checkout -b docs/add-architecture-guide

# Refactoring
git checkout -b refactor/simplify-auth
git checkout -b refactor/optimize-rendering

# Chores (maintenance)
git checkout -b chore/update-dependencies
git checkout -b chore/configure-ci
```

### Branch Types

1. **main** - Production-ready code
2. **develop** - Integration branch (optional)
3. **feature/** - New features
4. **fix/** - Bug fixes
5. **docs/** - Documentation
6. **refactor/** - Code refactoring
7. **test/** - Test additions
8. **chore/** - Maintenance tasks

### Example Workflow

```bash
# Create and switch to feature branch
git checkout -b feature/add-notifications

# Make changes
echo "// Notification component" > src/app/components/Notification.tsx

# Stage and commit
git add src/app/components/Notification.tsx
git commit -m "feat(notifications): add notification component"

# Push to GitHub
git push -u origin feature/add-notifications

# Create PR on GitHub
# After review and merge, delete branch
git checkout main
git pull origin main
git branch -d feature/add-notifications
```

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Test additions/changes
- `chore`: Build/tooling changes
- `ci`: CI/CD changes

### Examples

```bash
# Simple feature
git commit -m "feat: add user profile page"

# Feature with scope
git commit -m "feat(auth): add JWT authentication"

# Bug fix
git commit -m "fix: resolve sidebar collapse bug"

# Documentation
git commit -m "docs: update installation instructions"

# Breaking change
git commit -m "feat!: redesign API response format

BREAKING CHANGE: API now returns { data, error } instead of plain data"

# Multiple changes
git commit -m "feat: add notifications

- Add Notification component
- Add notification context
- Add toast integration
- Update TopBar with notification bell

Closes #123"
```

### Good vs Bad Commits

```bash
# ✅ Good - Clear, descriptive
git commit -m "feat(sidebar): add collapsible sidebar with icon-only state"

# ❌ Bad - Vague
git commit -m "update sidebar"

# ✅ Good - Specific scope
git commit -m "fix(deployment): resolve production build error"

# ❌ Bad - Too generic
git commit -m "fix bug"

# ✅ Good - Includes context
git commit -m "perf(testing): optimize test rendering with React.memo"

# ❌ Bad - No context
git commit -m "performance update"
```

## Pull Request Process

### Creating a Pull Request

1. **Push your branch**
   ```bash
   git push -u origin feature/my-feature
   ```

2. **Go to GitHub**
   - Navigate to your repository
   - Click "Compare & pull request" button

3. **Fill PR template**
   ```markdown
   ## Description
   Added collapsible sidebar with smooth animations
   
   ## Type of Change
   - [x] New feature
   - [ ] Bug fix
   - [ ] Breaking change
   
   ## Related Issue
   Closes #42
   
   ## Screenshots
   [Add before/after screenshots]
   
   ## Testing
   - [x] Tested locally
   - [x] All tests pass
   - [x] No console errors
   
   ## Checklist
   - [x] Code follows style guidelines
   - [x] Self-review completed
   - [x] Documentation updated
   ```

4. **Request reviewers**
   - Add team members as reviewers
   - Assign yourself
   - Add labels (feature, enhancement, etc.)

5. **Address feedback**
   ```bash
   # Make requested changes
   git add .
   git commit -m "fix: address PR feedback"
   git push
   ```

6. **Merge**
   - Once approved, click "Merge pull request"
   - Choose merge strategy:
     - **Merge commit**: Keep all commits (default)
     - **Squash and merge**: Combine into one commit
     - **Rebase and merge**: Linear history

### PR Best Practices

- Keep PRs small and focused
- Write clear descriptions
- Add screenshots for UI changes
- Link related issues
- Ensure CI passes before requesting review
- Respond to feedback promptly
- Don't force-push after reviews (unless required)

## GitHub Features

### 1. GitHub Issues

Create issue templates in `.github/ISSUE_TEMPLATE/`:

#### Bug Report Template

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Report a bug to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

## Description
A clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., macOS 13.0]
- Browser: [e.g., Chrome 120]
- Version: [e.g., 1.0.0]

## Screenshots
If applicable

## Additional Context
Any other information
```

#### Feature Request Template

Create `.github/ISSUE_TEMPLATE/feature_request.md`:

```markdown
---
name: Feature Request
about: Suggest a new feature
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

## Feature Description
Clear description of the feature

## Problem It Solves
What problem does this solve?

## Proposed Solution
How should it work?

## Alternatives Considered
What other solutions did you consider?

## Additional Context
Any other information
```

### 2. GitHub Actions (CI/CD)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Type check
        run: pnpm tsc --noEmit
      
      - name: Lint
        run: pnpm eslint src/
      
      - name: Build
        run: pnpm build
```

### 3. GitHub Projects

Organize work with GitHub Projects:

1. Go to repository → Projects
2. Create new project
3. Add columns:
   - 📋 Backlog
   - 🔜 To Do
   - 🏗️ In Progress
   - 👀 In Review
   - ✅ Done

### 4. Branch Protection

Settings → Branches → Add rule:

```
Branch name pattern: main

☑️ Require pull request reviews before merging
  - Required approvals: 1
☑️ Require status checks to pass before merging
  - Require branches to be up to date
  - Status checks: CI
☑️ Require conversation resolution before merging
☑️ Include administrators
```

### 5. GitHub Releases

Create releases for version tags:

```bash
# Create and push tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

Then on GitHub:
1. Go to Releases
2. Draft new release
3. Choose tag: v1.0.0
4. Add release notes
5. Publish release

## Common Scenarios

### Scenario 1: Made a Mistake in Last Commit

```bash
# Fix the mistake
git add .
git commit --amend --no-edit

# Or change commit message
git commit --amend -m "new message"

# Force push (only if not pushed yet)
git push --force-with-lease
```

### Scenario 2: Need to Undo Changes

```bash
# Discard uncommitted changes
git checkout -- filename.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Scenario 3: Sync Fork with Upstream

```bash
# Add upstream remote
git remote add upstream https://github.com/original/factos.git

# Fetch upstream
git fetch upstream

# Merge upstream main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

### Scenario 4: Resolve Merge Conflicts

```bash
# Pull latest changes
git pull origin main

# Conflicts detected!
# Edit conflicted files, look for:
# <<<<<<< HEAD
# your changes
# =======
# their changes
# >>>>>>> branch-name

# After resolving, stage and commit
git add .
git commit -m "fix: resolve merge conflicts"
git push
```

## Git Aliases (Optional)

Add to `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --oneline --graph --decorate --all
    amend = commit --amend --no-edit
```

Usage:
```bash
git st          # instead of git status
git co main     # instead of git checkout main
git visual      # see visual commit history
```

## Troubleshooting

### Problem: Large Files

```bash
# Install Git LFS
git lfs install

# Track large files
git lfs track "*.psd"
git lfs track "*.mp4"

# Commit .gitattributes
git add .gitattributes
git commit -m "chore: add Git LFS tracking"
```

### Problem: Accidentally Committed Secrets

```bash
# Remove file from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# Force push
git push origin --force --all
```

**Important**: Also rotate the exposed secrets!

### Problem: Can't Push

```bash
# Pull first
git pull origin main

# If conflicts, resolve them
# Then push
git push origin main
```

---

## Quick Reference

```bash
# Setup
git init
git remote add origin <url>
git push -u origin main

# Daily workflow
git checkout -b feature/my-feature
git add .
git commit -m "feat: description"
git push

# Sync
git checkout main
git pull origin main

# Clean up
git branch -d feature/my-feature
git fetch --prune
```

---

**Congratulations!** 🎉

Your project is now on GitHub with proper documentation and workflow!

**Next Steps:**
1. ✅ Add collaborators (Settings → Collaborators)
2. ✅ Set up branch protection
3. ✅ Configure GitHub Actions
4. ✅ Create project board
5. ✅ Add badges to README
6. ✅ Share with the community!
