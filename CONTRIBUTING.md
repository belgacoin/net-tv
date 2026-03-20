# Contributing to NetTV

Thank you for your interest in contributing to NetTV! We welcome contributions from the community and are grateful for your help in making this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)
- [Questions](#questions)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nettv.git
   cd nettv
   ```

3. **Add the upstream remote:**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/nettv.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Create a branch for your changes:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Checkout your main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

### Making Changes

1. Create a new branch for each feature or bug fix
2. Make your changes in small, focused commits
3. Write or update tests as needed
4. Ensure all tests pass
5. Update documentation if needed

## 📤 Pull Request Process

### Before Submitting

- [ ] Code follows our coding standards
- [ ] All tests pass (`npm run test`)
- [ ] TypeScript compiles without errors (`npm run type-check`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Documentation is updated
- [ ] Commit messages follow our guidelines

### Submitting Your PR

1. **Push your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub

3. **Fill out the PR template** with:
   - Clear description of changes
   - Related issue numbers (if applicable)
   - Screenshots (for UI changes)
   - Testing instructions

4. **Wait for review** - maintainers will review your PR and provide feedback

### PR Review Process

- All PRs require at least one review before merging
- Address review comments promptly
- Be open to feedback and suggestions
- Squash commits if requested

## 💻 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Define explicit return types for functions
- Use interfaces over types for object shapes

```typescript
// Good
interface UserProps {
  name: string;
  email: string;
  age?: number;
}

function getUser(id: string): Promise<UserProps> {
  // implementation
}

// Avoid
function getUser(id) {
  // implementation
}
```

### React Components

- Use functional components with hooks
- Use named exports for components
- Keep components focused and single-purpose
- Use proper prop types

```typescript
// Good
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Styling with Tailwind CSS

- Use Tailwind utility classes
- Follow mobile-first approach
- Use custom classes sparingly
- Maintain consistent spacing

```tsx
// Good
<div className="flex flex-col gap-4 p-4 md:flex-row md:p-8">
  <div className="flex-1">Content</div>
  <div className="flex-1">Content</div>
</div>
```

### File Organization

```
src/
├── components/           # Reusable components
│   ├── ui/              # Basic UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page sections
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript types
└── data/                # Static data
```

### Naming Conventions

- **Components:** PascalCase (`UserCard.tsx`)
- **Hooks:** camelCase with `use` prefix (`useAuth.ts`)
- **Utilities:** camelCase (`formatDate.ts`)
- **Types/Interfaces:** PascalCase (`UserProps`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

### Examples

```
feat(components): add language switcher component

fix(i18n): correct Dutch translation for homepage title

docs(readme): update installation instructions

refactor(hooks): simplify useLocalStorage hook
```

## 🐛 Reporting Issues

### Before Reporting

- Search existing issues to avoid duplicates
- Check if the issue is already fixed in the latest version
- Try to reproduce with a minimal example

### How to Report

1. **Use the issue template**
2. **Provide clear information:**
   - Description of the issue
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, Node version)

### Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature request
- `documentation`: Documentation improvement
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed

## 💡 Feature Requests

We love new ideas! To request a feature:

1. Open an issue with the `enhancement` label
2. Describe the feature and its use case
3. Explain why it would be valuable
4. Be open to discussion and alternatives

## ❓ Questions

For questions:

- Check the documentation first
- Search existing issues
- Join our Discord community
- Open a discussion (not an issue)

## 🙏 Recognition

Contributors will be:

- Listed in our README.md
- Mentioned in release notes
- Added to our contributors page

Thank you for contributing to NetTV!
