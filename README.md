[![Build Status](https://github.com/ravneet0628/react_tail_by_rav/actions/workflows/ci.yml/badge.svg)](https://github.com/ravneet0628/react_tail_by_rav/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/react_tail_by_rav.svg)](https://www.npmjs.com/package/react_tail_by_rav)
[![npm downloads](https://img.shields.io/npm/dm/react_tail_by_rav.svg)](https://www.npmjs.com/package/react_tail_by_rav)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react_tail_by_rav)](https://bundlephobia.com/package/react_tail_by_rav)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/storybook-online-orange)](https://ravneet0628.github.io/react_tail_by_rav/)

# React Tailwind Component Library 2025

A **cutting-edge**, **production-ready**, and **accessible** collection of 17 React components built with **React 19**, **TailwindCSS v4.1**, **TypeScript 5.7**, and **2025 best practices**. Features OKLCH color system, container queries, micro-animations, and exceptional developer experience.

## 🚀 What's New in v2.0

- **🎨 TailwindCSS v4.1** - Latest CSS engine with OKLCH colors and container queries
- **⚛️ React 19** - Latest React with new hooks and Server Components support
- **⚡ Vite 6.0** - Lightning-fast development and builds (~70% faster)
- **🧪 Vitest 3.2** - Modern testing with V8 coverage
- **🎨 OKLCH Color System** - Perceptually uniform colors for better design
- **📱 Container Queries** - Element-based responsive design
- **✨ Micro-animations** - Smooth transitions with proper easing curves
- **🔧 ES2022** - Modern JavaScript with optimal tree-shaking

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Setup](#setup)
- [Components](#components)
- [Usage Examples](#usage-examples)
- [2025 Features](#2025-features)
- [TypeScript](#typescript)
- [Accessibility](#accessibility)
- [Development](#development)
- [Migration Guide](#migration-guide)
- [Contributing](#contributing)
- [License](#license)

## Features

- **17 Core Components** – Buttons, Cards, Tables, Modals, Forms, Navigation, and more
- **React 19 Ready** – Built with latest React features and Server Components support
- **TailwindCSS v4.1** – Pure CSS configuration with OKLCH color system
- **Dark Mode Support** – Automatic system preference detection with `useTheme` hook
- **Fully Typed** – 100% TypeScript 5.7 with comprehensive prop interfaces
- **Accessibility First** – WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Container Queries** – Element-based responsive design for complex layouts
- **Tree Shakeable** – Import only what you need for optimal bundle size
- **Storybook v8.4+** – Interactive component playground with React 19 compatibility
- **Vitest Testing** – Comprehensive unit and accessibility tests with V8 coverage

## Installation

```bash
npm install react_tail_by_rav
```

**Peer Dependencies (2025 Stack):**
```bash
npm install react@>=19.0.0 react-dom@>=19.0.0
```

## Setup

### 1. Configure TailwindCSS v4.1

Add the package to your `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react_tail_by_rav/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your custom theme extends our OKLCH color system
      colors: {
        // OKLCH colors are automatically included
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### 2. Import Styles

Import the CSS in your main file (e.g., `src/main.tsx`):

```tsx
import 'react_tail_by_rav/dist/styles.css';
```

### 3. Theme Provider (React 19)

For dark mode and system preference support:

```tsx
import { useTheme, ThemeProvider } from 'react_tail_by_rav';

function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'system')}>
      Current: {theme}
    </button>
  );
}
```

## Components

### Core Components
- **Button** - Multiple variants with loading states, icons, and micro-animations
- **Card** - Flexible containers with header/body/footer and container queries
- **Alert** - Notification messages with OKLCH-based severity colors
- **Loading** - Modern spinners with CSS animations

### Form Components
- **Input** - Text inputs, textareas with React 19 form features
- **Dropdown** - Advanced select with async options and accessibility

### Navigation
- **Navigation** - Responsive navigation with container query breakpoints
- **Tabs** - Tab interface with keyboard navigation
- **Accordion** - Collapsible sections with smooth animations

### Data Display
- **Table** - Sortable tables with modern styling
- **Avatar** - Profile pictures with OKLCH color fallbacks
- **Badge** - Status indicators with perceptual color uniformity

### Layout
- **Modal** - Dialog overlays with React 19 concurrent features
- **Footer** - Website footers with responsive container queries

## Usage Examples

### Modern Button with React 19

```tsx
import { Button } from 'react_tail_by_rav';
import { Download, Plus } from 'lucide-react';

function App() {
  // React 19 - no need to import React
  return (
    <>
      <Button variant="primary" size="md">
        Save Changes
      </Button>
      
      <Button variant="outline" icon={<Download />} iconPosition="left">
        Download
      </Button>
      
      <Button 
        variant="floating" 
        icon={<Plus />}
        className="@container hover:scale-105 transition-transform"
      />
    </>
  );
}
```

### Container Query Card

```tsx
import { Card, Button } from 'react_tail_by_rav';

function ResponsiveCard() {
  return (
    <Card 
      variant="elevated" 
      className="@container"
      padding="md"
    >
      <Card.Header className="@md:text-xl">
        Responsive Header
      </Card.Header>
      <Card.Body className="@lg:grid @lg:grid-cols-2 @lg:gap-4">
        <p>Content adapts to container size, not viewport!</p>
        <img 
          src="/image.jpg" 
          className="@md:aspect-video @lg:aspect-square" 
          alt="Responsive image"
        />
      </Card.Body>
    </Card>
  );
}
```

### Form with React 19 Features

```tsx
import { Input, Button } from 'react_tail_by_rav';
import { useActionState } from 'react';

async function submitForm(prevState: any, formData: FormData) {
  // Server action with React 19
  const name = formData.get('name');
  const email = formData.get('email');
  
  // Process form...
  return { success: true, message: 'Form submitted!' };
}

function ModernForm() {
  const [state, formAction, isPending] = useActionState(submitForm, null);
  
  return (
    <form action={formAction} className="space-y-4">
      <Input 
        name="name"
        label="Full Name"
        variant="text"
        placeholder="Enter your name"
        className="focus:ring-oklch-primary-500"
      />
      
      <Input 
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        required
      />
      
      <Button 
        type="submit" 
        variant="primary" 
        loading={isPending}
        fullWidth
      >
        {isPending ? 'Submitting...' : 'Send Message'}
      </Button>
      
      {state?.message && (
        <p className="text-oklch-success-600">{state.message}</p>
      )}
    </form>
  );
}
```

### OKLCH Color System

```tsx
import { Alert, Badge } from 'react_tail_by_rav';

function ColorShowcase() {
  return (
    <div className="space-y-4">
      <Alert variant="success" className="bg-oklch-success-50 border-oklch-success-200">
        OKLCH colors provide better perceptual uniformity
      </Alert>
      
      <div className="flex gap-2">
        <Badge className="bg-oklch-blue-500">Primary</Badge>
        <Badge className="bg-oklch-amber-500">Warning</Badge>
        <Badge className="bg-oklch-rose-500">Error</Badge>
      </div>
    </div>
  );
}
```

### Dark Mode with System Preference

```tsx
import { Button, useTheme } from 'react_tail_by_rav';
import { Moon, Sun, Monitor } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  
  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ];
  
  return (
    <div className="flex gap-2">
      {themeOptions.map(({ value, icon: Icon, label }) => (
        <Button
          key={value}
          variant={theme === value ? 'primary' : 'ghost'}
          icon={<Icon />}
          onClick={() => setTheme(value)}
          className="transition-all duration-200 ease-out"
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
```

## 2025 Features

### OKLCH Color System
```css
/* Automatic OKLCH color generation */
.bg-oklch-primary-500 { background: oklch(0.6 0.15 250); }
.text-oklch-success-600 { color: oklch(0.5 0.12 145); }
```

### Container Queries
```tsx
<div className="@container">
  <div className="@md:grid @md:grid-cols-2 @lg:grid-cols-3">
    {/* Responsive to container, not viewport */}
  </div>
</div>
```

### Modern CSS Features
```css
/* Color mixing for hover states */
.hover\:bg-mix-primary:hover {
  background: color-mix(in oklch, var(--primary) 90%, white);
}

/* Logical properties */
.margin-inline-auto { margin-inline: auto; }
.padding-block-4 { padding-block: 1rem; }
```

### Performance Optimizations
- **70% faster builds** with Vite 6.0
- **Tree-shaking** for smaller bundles
- **CSS-in-CSS** eliminates runtime overhead
- **Container queries** reduce JavaScript layout calculations

## TypeScript

Built with TypeScript 5.7 and modern patterns:

```tsx
import type { 
  ButtonProps, 
  CardProps, 
  InputProps,
  ThemeContextType 
} from 'react_tail_by_rav';

// Optional props are properly typed
const MyButton: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary',
  ...props 
}) => {
  return <Button className={className} variant={variant} {...props} />;
};

// Theme context is fully typed
const MyThemeComponent: React.FC = () => {
  const [theme, setTheme] = useTheme();
  // theme is typed as 'light' | 'dark' | 'system'
  
  return <div>Current theme: {theme}</div>;
};
```

## Accessibility

WCAG 2.1 AA compliant with modern accessibility features:

- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Screen Reader Support** - Proper ARIA labels and semantic HTML
- **Color Contrast** - OKLCH ensures perceptual color uniformity
- **Focus Management** - React 19 concurrent features for smooth focus transitions
- **Reduced Motion** - Respects `prefers-reduced-motion`

## Development

### Available Scripts (2025 Stack)

| Script | Description |
|--------|-------------|
| `npm run dev` | Vite development server |
| `npm run build` | TypeScript check + Vite build + declarations |
| `npm run test` | Vitest with V8 coverage |
| `npm run test:watch` | Watch mode testing |
| `npm run test:coverage` | Coverage reports |
| `npm run lint` | ESLint with 2025 rules |
| `npm run type-check` | TypeScript strict checking |
| `npm run build-storybook` | Build Storybook v8.4+ |
| `npm run clean` | Remove build artifacts |

### Local Development

1. **Clone** the repository
2. **Install** dependencies: `npm install`
3. **Start** development: `npm run dev`
4. **Open** [http://localhost:5173](http://localhost:5173)

### Testing with Vitest

```bash
npm test                    # Run all tests
npm run test:watch         # Watch mode
npm run test:coverage      # Coverage report
```

## Migration Guide

### From v1.x to v2.0

#### Dependencies
```bash
# Remove old dependencies
npm uninstall react@^18 react-dom@^18

# Install React 19
npm install react@^19.0.0 react-dom@^19.0.0
```

#### Theme Provider
```tsx
// Old (v1.x)
const [theme, setTheme] = useTheme(); // 'auto' option

// New (v2.0)
const [theme, setTheme] = useTheme(); // 'system' option
setTheme('system'); // replaces 'auto'
```

#### TailwindCSS Config
```js
// Old: tailwind.config.js
module.exports = { /* ... */ };

// New: tailwind.config.ts with OKLCH
export default { /* ... */ } satisfies Config;
```

#### Build System
```json
// Old: Rollup scripts
"build": "rollup -c",

// New: Vite scripts  
"build": "tsc && vite build && tsc --emitDeclarationOnly",
```

## Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Follow** 2025 patterns: React 19, TypeScript 5.7, OKLCH colors
4. **Add** Vitest tests and Storybook stories
5. **Ensure** `npm run type-check && npm test` passes
6. **Submit** a Pull Request

## Documentation

- **🔗 Live Storybook**: [https://ravneet0628.github.io/react_tail_by_rav/](https://ravneet0628.github.io/react_tail_by_rav/)
- **📚 Migration Guide**: [/docs/upgrade-plan-tailwind-4-react-19.md](docs/upgrade-plan-tailwind-4-react-19.md)
- **🧪 Component Testing**: `npm run test:watch`

## License

[MIT](LICENSE) © Ravneet Kaur

---

Built with ❤️ using **React 19**, **TypeScript 5.7**, **TailwindCSS v4.1**, **Vite 6.0**, and **2025 best practices**.