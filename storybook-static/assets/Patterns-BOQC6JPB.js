import{j as n}from"./iframe-WWlJSg8F.js";import{useMDXComponents as s}from"./index-C7g0Hw8R.js";import{M as r}from"./index-BsUmS0iK.js";import"./index-D-bqnVKH.js";import"./index-72wPkfki.js";import"./index-f5spyehB.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Design System/Patterns & Examples"}),`
`,n.jsx(e.h1,{id:"common-patterns--examples",children:"Common Patterns & Examples"}),`
`,n.jsx(e.p,{children:"This guide demonstrates how to combine components to create common UI patterns and complete user interfaces using the React Tail by Rav component library."}),`
`,n.jsx(e.h2,{id:"-form-patterns",children:"📋 Form Patterns"}),`
`,n.jsx(e.h3,{id:"basic-registration-form",children:"Basic Registration Form"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, Input, Button, Alert } from 'react_tail_by_rav';
import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic here
  };

  return (
    <Card variant="elevated" className="max-w-md mx-auto">
      <Card.Header>
        <h2 className="text-2xl font-bold">Create Account</h2>
      </Card.Header>
      
      <Card.Body>
        {Object.keys(errors).length > 0 && (
          <Alert variant="error" title="Please correct the following errors:" className="mb-4">
            <ul className="list-disc list-inside">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </Alert>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              error={errors.firstName}
              required
              size="md"
            />
            <Input
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              error={errors.lastName}
              required
              size="md"
            />
          </div>
          
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={errors.email}
            required
            size="md"
          />
          
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            error={errors.password}
            helperText="Must be at least 8 characters"
            required
            size="md"
          />
          
          <Input
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            error={errors.confirmPassword}
            required
            size="md"
          />
        </form>
      </Card.Body>
      
      <Card.Footer>
        <Button
          type="submit"
          variant="solid"
          color="primary"
          size="md"
          fullWidth
          loading={isSubmitting}
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </Card.Footer>
    </Card>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"settings-form-with-switches",children:"Settings Form with Switches"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, Switch, Button } from 'react_tail_by_rav';
import { useState } from 'react';

function SettingsForm() {
  const [settings, setSettings] = useState({
    orderUpdates: true,
    marketing: false,
    security: true,
    browser: false,
    mobile: true
  });

  const handleSave = () => {
    // Save settings logic
  };

  return (
    <Card variant="solid" className="max-w-2xl">
      <Card.Header>
        <h3 className="text-lg font-semibold">Notification Preferences</h3>
      </Card.Header>
      
      <Card.Body className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Email Notifications</h4>
          <div className="space-y-3">
            <Switch
              checked={settings.orderUpdates}
              onChange={(checked) => setSettings({...settings, orderUpdates: checked})}
              label="Order updates"
              description="Get notified when your order status changes"
            />
            <Switch
              checked={settings.marketing}
              onChange={(checked) => setSettings({...settings, marketing: checked})}
              label="Marketing emails"
              description="Receive promotional offers and product updates"
            />
            <Switch
              checked={settings.security}
              onChange={(checked) => setSettings({...settings, security: checked})}
              label="Security alerts"
              description="Important security notifications (recommended)"
              disabled
            />
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Push Notifications</h4>
          <div className="space-y-3">
            <Switch
              checked={settings.browser}
              onChange={(checked) => setSettings({...settings, browser: checked})}
              label="Browser notifications"
              description="Show notifications in your browser"
            />
            <Switch
              checked={settings.mobile}
              onChange={(checked) => setSettings({...settings, mobile: checked})}
              label="Mobile push"
              description="Send notifications to your mobile device"
            />
          </div>
        </div>
      </Card.Body>
      
      <Card.Footer className="flex gap-2">
        <Button variant="solid" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
        <Button variant="outline">
          Cancel
        </Button>
      </Card.Footer>
    </Card>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"-dashboard-patterns",children:"📊 Dashboard Patterns"}),`
`,n.jsx(e.h3,{id:"statistics-dashboard",children:"Statistics Dashboard"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, Badge } from 'react_tail_by_rav';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

function StatsDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '12,459',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Revenue',
      value: '$89,400',
      change: '+8%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Orders',
      value: '1,429',
      change: '-3%',
      changeType: 'negative',
      icon: ShoppingCart,
      color: 'yellow'
    },
    {
      title: 'Conversion',
      value: '3.2%',
      change: '+2%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} variant="elevated" className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
              <Badge 
                variant="solid" 
                color={stat.changeType === 'positive' ? 'success' : 'error'} 
                size="sm"
                className="mt-2"
              >
                {stat.change}
              </Badge>
            </div>
            <div className={\`w-12 h-12 bg-\${stat.color}-100 rounded-lg flex items-center justify-center\`}>
              <stat.icon className={\`w-6 h-6 text-\${stat.color}-600\`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"activity-feed",children:"Activity Feed"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, Badge, Avatar } from 'react_tail_by_rav';

function ActivityFeed() {
  const activities = [
    {
      id: 1,
      user: 'John Doe',
      avatar: 'https://via.placeholder.com/40',
      action: 'created a new project',
      target: 'React Dashboard',
      time: '2 minutes ago',
      type: 'create'
    },
    {
      id: 2,
      user: 'Sarah Wilson',
      avatar: null,
      initials: 'SW',
      action: 'completed task',
      target: 'Update user interface',
      time: '5 minutes ago',
      type: 'complete'
    },
    {
      id: 3,
      user: 'Mike Johnson',
      avatar: 'https://via.placeholder.com/40',
      action: 'commented on',
      target: 'Design System Review',
      time: '1 hour ago',
      type: 'comment'
    }
  ];

  const getActivityBadge = (type) => {
    const badges = {
      create: { color: 'success', text: 'Created' },
      complete: { color: 'primary', text: 'Completed' },
      comment: { color: 'info', text: 'Commented' }
    };
    return badges[type] || { color: 'gray', text: 'Activity' };
  };

  return (
    <Card variant="solid" className="max-w-md">
      <Card.Header>
        <h3 className="text-lg font-semibold">Recent Activity</h3>
      </Card.Header>
      
      <Card.Body className="space-y-4">
        {activities.map((activity) => {
          const badge = getActivityBadge(activity.type);
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <Avatar
                src={activity.avatar}
                fallback={activity.initials}
                size="sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" color={badge.color} size="xs">
                    {badge.text}
                  </Badge>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"-e-commerce-patterns",children:"🛒 E-commerce Patterns"}),`
`,n.jsx(e.h3,{id:"product-card-grid",children:"Product Card Grid"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, Button, Badge } from 'react_tail_by_rav';

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$199.99',
      originalPrice: '$249.99',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.5,
      reviews: 128,
      badge: 'Sale'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$299.99',
      image: 'https://via.placeholder.com/300x200',
      rating: 4.8,
      reviews: 89,
      badge: 'New'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} variant="elevated" className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            {product.badge && (
              <Badge 
                variant="solid" 
                color={product.badge === 'Sale' ? 'error' : 'success'}
                className="absolute top-2 left-2"
              >
                {product.badge}
              </Badge>
            )}
          </div>
          
          <Card.Body className="p-4">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg font-bold">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-1 mb-4">
              <div className="flex text-yellow-400">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews})</span>
            </div>
          </Card.Body>
          
          <Card.Footer className="p-4 pt-0">
            <Button variant="solid" color="primary" size="md" fullWidth>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"-mobile-patterns",children:"📱 Mobile Patterns"}),`
`,n.jsx(e.h3,{id:"mobile-navigation",children:"Mobile Navigation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Navigation, Button } from 'react_tail_by_rav';
import { Menu, Search, User } from 'lucide-react';

function MobileNavigation() {
  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="bg-white border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <Button variant="ghost" size="sm" icon={<Menu size={20} />} />
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" icon={<Search size={20} />} />
          <Button variant="ghost" size="sm" icon={<User size={20} />} />
        </div>
      </div>
      
      <Navigation
        variant="mobile"
        items={navItems}
        className="px-4 pb-3"
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"-best-practices",children:"🎯 Best Practices"}),`
`,n.jsx(e.h3,{id:"component-composition",children:"Component Composition"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use compound components"})," for complex UI patterns"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Combine simple components"})," to create more complex interfaces"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Maintain consistent spacing"})," using Tailwind's spacing scale"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Follow semantic structure"})," with proper heading hierarchy"]}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility-considerations",children:"Accessibility Considerations"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Provide proper labels"})," for all interactive elements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use semantic HTML"})," elements where appropriate"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ensure keyboard navigation"})," works correctly"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test with screen readers"})," to verify accessibility"]}),`
`]}),`
`,n.jsx(e.h3,{id:"performance-tips",children:"Performance Tips"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Import only needed components"})," to reduce bundle size"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use loading states"})," for async operations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Implement proper error boundaries"})," for error handling"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Optimize images"})," and use appropriate formats"]}),`
`]}),`
`,n.jsx(e.h3,{id:"responsive-design",children:"Responsive Design"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Start with mobile-first"})," approach"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use Tailwind's responsive utilities"})," consistently"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test on multiple screen sizes"})," during development"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consider touch targets"})," for mobile interfaces"]}),`
`]}),`
`,n.jsx(e.p,{children:"These patterns provide a foundation for building comprehensive user interfaces with the React Tail by Rav component library. Each pattern demonstrates proper component composition, accessibility considerations, and responsive design principles."})]})}function p(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{p as default};
