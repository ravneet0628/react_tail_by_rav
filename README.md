# Modern React Component Library

A professional, accessible React component library built with TypeScript, Tailwind CSS, and modern best practices for 2025. Designed with accessibility-first principles and optimized for developer experience.

## ✨ Features

- 🎨 **Modern Design System** - Consistent, beautiful components with standardized variants
- ♿ **Accessibility First** - WCAG 2.1 AA compliant with proper ARIA attributes
- 📱 **Touch Target Optimized** - 44px optimal touch targets following accessibility guidelines
- 🎯 **TypeScript Native** - Full type safety with comprehensive interfaces
- 🎭 **Storybook Integrated** - Interactive documentation and development environment
- 🌙 **Dark Mode Ready** - Built-in dark mode support with Tailwind CSS
- 📦 **Tree Shakeable** - Optimized bundle size with selective imports
- 🔧 **Developer Friendly** - Consistent API patterns and excellent IntelliSense

## 🚀 Quick Start

```bash
npm install react_tail_by_rav
# or
yarn add react_tail_by_rav
```

```tsx
import { Button, Card, Input, Table } from 'react_tail_by_rav';

function App() {
  return (
    <Card variant="elevated" padding="lg">
      <Card.Header>Welcome</Card.Header>
      <Card.Body>
        <Input 
          label="Email" 
          type="email" 
          placeholder="you@example.com" 
        />
      </Card.Body>
      <Card.Footer>
        <Button variant="solid" color="primary">
          Get Started
        </Button>
      </Card.Footer>
    </Card>
  );
}
```

## 📚 Documentation

Visit our [Storybook documentation](https://your-storybook-url.com) for interactive examples and comprehensive API documentation.

## 🎨 Design System

### Size System
All components follow a consistent 6-size system optimized for accessibility:

- `xs` - 32px (minimum touch target)
- `sm` - 40px (comfortable mobile)
- `md` - 44px (optimal default)
- `lg` - 48px (comfortable desktop)
- `xl` - 56px (large emphasis)
- `2xl` - 64px (maximum recommended)

### Color Palette
Semantic color system with consistent contrast ratios:

- `primary` - Main brand actions (Blue)
- `secondary` - Secondary actions (Gray)
- `success` - Positive feedback (Green)
- `warning` - Caution states (Yellow)
- `error` - Danger/errors (Red)
- `info` - Informational (Cyan)
- `gray` - Neutral states
- `neutral` - Alternative neutral

### Variants
Standardized visual variants across components:

- `solid` - Filled background (default)
- `outline` - Transparent with border
- `ghost` - Minimal styling
- `elevated` - Enhanced with shadows (select components)

## 🧩 Components

### Core Components
- **Button** - Primary action component with loading states
- **Input** - Form inputs with validation and accessibility
- **Card** - Content containers with compound components
- **Badge** - Status indicators and labels
- **Alert** - Notification messages with variants

### Data Display
- **Table** - Comprehensive data tables with sorting and selection
- **Avatar** - User profile images with status indicators
- **Loading** - Loading states and progress indicators

### Navigation
- **Navigation** - Horizontal, vertical, breadcrumb, and tab navigation
- **Dropdown** - Select, multiselect, and searchable dropdowns
- **Tabs** - Tab interfaces with various styles

### Layout
- **Modal** - Accessible dialog overlays
- **Accordion** - Collapsible content sections
- **Footer** - Page footer with multiple layouts

### Forms
- **ContactForm** - Complete contact form implementation
- **LikeButton** - Interactive like/favorite button

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build library
npm run build

# Run tests
npm run test

# Type checking
npm run type-check
```

## 📖 Usage Examples

### Button Component
```tsx
// Basic usage
<Button variant="solid" color="primary" size="md">
  Click me
</Button>

// With loading state
<Button loading onClick={handleSubmit}>
  Save Changes
</Button>

// With icon
<Button 
  icon={<Save size={16} />} 
  iconPosition="left"
  fullWidth
>
  Save Document
</Button>
```

### Table Component
```tsx
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'status', label: 'Status', align: 'center' },
];

<Table
  variant="striped"
  columns={columns}
  data={userData}
  sortable
  selectable
  onSort={handleSort}
  onRowSelect={handleSelection}
/>
```

### Card with Compound Components
```tsx
<Card variant="elevated" clickable onClick={handleClick}>
  <Card.Header>Product Title</Card.Header>
  <Card.Body>
    Product description and details go here.
  </Card.Body>
  <Card.Footer>
    <Button variant="outline">Learn More</Button>
    <Button variant="solid">Buy Now</Button>
  </Card.Footer>
</Card>
```

### Form Components
```tsx
<form onSubmit={handleSubmit}>
  <Input
    label="Email Address"
    type="email"
    required
    error={errors.email}
    helperText="We'll never share your email"
  />
  
  <Dropdown
    variant="searchable"
    options={countries}
    label="Country"
    placeholder="Search countries..."
    onChange={setCountry}
  />
  
  <Button type="submit" loading={isSubmitting} fullWidth>
    Create Account
  </Button>
</form>
```

## 🎯 Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios (4.5:1+)
- Focus management and visible indicators
- Touch target compliance (44px minimum)

## 🎨 Customization

The library uses Tailwind CSS for styling. You can customize the design system by extending your Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

## 📦 Bundle Size

The library is optimized for tree-shaking. Import only what you need:

```tsx
// ✅ Recommended - Tree-shakeable
import { Button } from 'react_tail_by_rav';

// ❌ Avoid - Imports entire library
import * as Components from 'react_tail_by_rav';
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Follow the component architecture patterns
4. Add comprehensive tests and stories
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🙏 Acknowledgments

Built with modern tools and best practices:

- React 19 with latest features
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for fast development
- Storybook for documentation
- Lucide React for icons

---

**Ready to build amazing user interfaces?** Get started with our component library and focus on what matters most - your application logic.