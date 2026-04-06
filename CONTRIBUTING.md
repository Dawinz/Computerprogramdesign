# Contributing to Factos

First off, thank you for considering contributing to Factos! It's people like you that make Factos such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to conduct@factos.dev.

### Our Pledge

- Be respectful and inclusive
- Welcome newcomers
- Be patient and helpful
- Accept constructive criticism gracefully
- Focus on what's best for the community

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher (recommended)
- Git
- A code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/factos.git
   cd factos
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/factos.git
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**Good bug reports include:**
- Clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)
- Relevant code snippets

**Bug Report Template:**
```markdown
## Description
[Clear description of the bug]

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
[What you expected to happen]

## Actual Behavior
[What actually happened]

## Environment
- OS: [e.g., macOS 13.0]
- Browser: [e.g., Chrome 120]
- Node: [e.g., 18.17.0]
- Factos Version: [e.g., 1.0.0]

## Screenshots
[If applicable]

## Additional Context
[Any other context about the problem]
```

### Suggesting Features

Feature requests are welcome! Please provide:
- Clear, descriptive title
- Detailed description of the proposed feature
- Use cases and benefits
- Potential implementation approach
- Mockups or examples (if applicable)

**Feature Request Template:**
```markdown
## Feature Description
[Clear description of the feature]

## Problem It Solves
[What problem does this solve?]

## Proposed Solution
[How would you like it to work?]

## Alternatives Considered
[What other solutions did you consider?]

## Additional Context
[Any other context, mockups, or examples]
```

### Contributing Code

We love pull requests! Here's how to contribute:

1. **Find or create an issue**
   - Check existing issues or create a new one
   - Discuss your approach before starting work

2. **Set up development environment**
   - Follow [Development Setup](#development-setup)

3. **Make your changes**
   - Write clean, readable code
   - Follow coding standards
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   - Ensure all tests pass
   - Test in multiple browsers if UI changes
   - Check for console errors

5. **Commit your changes**
   - Follow commit guidelines
   - Write clear commit messages

6. **Push and create PR**
   - Push to your fork
   - Create a pull request
   - Fill out the PR template

## Coding Standards

### TypeScript

```typescript
// ✅ Good
interface UserProps {
  name: string;
  age: number;
  isActive: boolean;
}

function UserCard({ name, age, isActive }: UserProps) {
  return <div>{name}</div>;
}

// ❌ Bad
function UserCard(props: any) {
  return <div>{props.name}</div>;
}
```

### React Components

```typescript
// ✅ Good - Functional component with TypeScript
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

// ❌ Bad - No types, default export
export default function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile`, `NavigationBar`)
- **Functions**: camelCase (e.g., `getUserData`, `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`, `API_URL`)
- **Files**: 
  - Components: PascalCase (e.g., `UserProfile.tsx`)
  - Utils: camelCase (e.g., `dateUtils.ts`)
  - Types: camelCase (e.g., `types.ts`)

### File Structure

```typescript
// Component file structure
import { useState } from 'react';
import { ExternalLibrary } from 'external-library';
import { InternalUtil } from '../utils';
import { ComponentType } from '../types';

// Constants
const DEFAULT_VALUE = 10;

// Types/Interfaces
interface MyComponentProps {
  title: string;
}

// Helper functions
function helperFunction() {
  // ...
}

// Main component
export function MyComponent({ title }: MyComponentProps) {
  const [state, setState] = useState(DEFAULT_VALUE);
  
  return <div>{title}</div>;
}
```

### CSS/Tailwind

```typescript
// ✅ Good - Organized, readable classes
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <Icon className="w-6 h-6 text-blue-500" />
  <span className="text-lg font-semibold text-gray-900">Title</span>
</div>

// ❌ Bad - Unorganized, hard to read
<div className="text-gray-900 bg-white shadow-md rounded-lg flex p-6 items-center text-lg gap-4 font-semibold">
  <Icon className="text-blue-500 w-6 h-6" />
  <span>Title</span>
</div>
```

### Comments

```typescript
// ✅ Good - Explains WHY, not WHAT
// Calculate fibonacci using memoization to avoid exponential time complexity
function fibonacci(n: number): number {
  // ...
}

// ❌ Bad - States the obvious
// This function calculates fibonacci
function fibonacci(n: number): number {
  // ...
}
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring (neither fixes a bug nor adds a feature)
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process or auxiliary tool changes
- **ci**: CI/CD configuration changes
- **revert**: Reverting a previous commit

### Examples

```bash
# Feature
feat(sidebar): add collapsible sidebar functionality

# Bug fix
fix(deployment): resolve deployment status update issue

# Documentation
docs(readme): update installation instructions

# Style
style(button): format button component code

# Refactor
refactor(auth): simplify authentication logic

# Multiple scopes
feat(sidebar, topbar): add coordinated collapse behavior
```

### Commit Body and Footer

```
feat(testing): add multi-agent concurrent testing

Implement support for simulating 10/100/1000 concurrent users
in the testing step. This allows for realistic load testing
scenarios during development.

Closes #123
Breaking change: TestConfig interface updated
```

## Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Branch is up to date with main

### PR Template

```markdown
## Description
[Describe what this PR does]

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Related Issue
Closes #[issue number]

## Screenshots (if applicable)
[Add screenshots here]

## Testing
- [ ] Tested locally
- [ ] Added unit tests
- [ ] Added integration tests
- [ ] Tested in multiple browsers

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Additional Notes
[Any additional information]
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs automatically
2. **Code Review**: At least one maintainer reviews the code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, a maintainer will merge
5. **Cleanup**: Delete your branch after merge

## Issue Guidelines

### Creating Issues

Use the appropriate template:
- Bug Report
- Feature Request
- Documentation Improvement
- Question

### Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on
- `duplicate`: This issue or pull request already exists
- `invalid`: This doesn't seem right

## Community

### Communication Channels

- **GitHub Discussions**: For questions and general discussion
- **GitHub Issues**: For bug reports and feature requests
- **Discord**: For real-time chat and community support
- **Email**: For private matters (team@factos.dev)

### Getting Help

- Check existing documentation
- Search existing issues
- Ask in GitHub Discussions
- Join our Discord community

### Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Invited to our contributor Discord channel
- Eligible for swag and recognition programs

## Development Tips

### Useful Commands

```bash
# Run dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm tsc --noEmit

# Format code
pnpm prettier --write src/

# Lint code
pnpm eslint src/
```

### VS Code Setup

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- GitLens

### Debugging

```typescript
// Use debugger statement
function complexFunction() {
  debugger; // Execution will pause here
  // ...
}

// Console logging best practices
console.log('User data:', { userId, userName }); // ✅ Good
console.log(userId, userName); // ❌ Less clear
```

## Thank You!

Your contributions make Factos better for everyone. We appreciate your time and effort! 🎉

---

**Questions?** Open a discussion or join our Discord!

**Found a security issue?** Please email security@factos.dev instead of opening a public issue.
