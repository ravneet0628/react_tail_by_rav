import{j as n}from"./iframe-WWlJSg8F.js";import{useMDXComponents as t}from"./index-C7g0Hw8R.js";import{M as r}from"./index-BsUmS0iK.js";import"./index-D-bqnVKH.js";import"./index-72wPkfki.js";import"./index-f5spyehB.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Design System/Accessibility"}),`
`,n.jsx(e.h1,{id:"accessibility-guide",children:"Accessibility Guide"}),`
`,n.jsx(e.p,{children:"Our component library is built with accessibility as a core principle. Every component follows WCAG 2.1 AA guidelines to ensure an inclusive experience for all users, including those who rely on assistive technologies."}),`
`,n.jsx(e.h2,{id:"-accessibility-principles",children:"🎯 Accessibility Principles"}),`
`,n.jsx(e.p,{children:"We follow the four main principles of web accessibility (POUR):"}),`
`,n.jsx(e.h3,{id:"1-perceivable",children:"1. Perceivable"}),`
`,n.jsx(e.p,{children:"Information and UI components must be presentable to users in ways they can perceive."}),`
`,n.jsx(e.h4,{id:"color-and-contrast",children:"Color and Contrast"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text contrast"}),": All text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus indicators"}),": Clear, high-contrast focus rings with minimum 3:1 contrast ratio"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Color independence"}),": Color is never the only means of conveying information"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pattern support"}),": Additional visual cues beyond color (icons, patterns, text)"]}),`
`]}),`
`,n.jsx(e.h4,{id:"alternative-text-and-labels",children:"Alternative Text and Labels"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Interactive elements"}),": All buttons, links, and form controls have accessible names"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon accessibility"}),": Icons include appropriate ",n.jsx(e.code,{children:"aria-label"})," or are marked as decorative"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Form labeling"}),": All form inputs have proper labels or aria-labelledby associations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Image alternatives"}),": Meaningful images have descriptive alt text"]}),`
`]}),`
`,n.jsx(e.h3,{id:"2-operable",children:"2. Operable"}),`
`,n.jsx(e.p,{children:"UI components and navigation must be operable by all users, regardless of input method."}),`
`,n.jsx(e.h4,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Full keyboard support"}),": All interactive elements accessible via keyboard"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Logical tab order"}),": Sequential navigation follows visual layout"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom shortcuts"}),": Standard keyboard conventions (Enter, Space, Escape, Arrow keys)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus management"}),": Focus trapped within modals, returned to triggering element"]}),`
`]}),`
`,n.jsx(e.h4,{id:"touch-targets",children:"Touch Targets"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Minimum size"}),": 44×44px touch targets following accessibility guidelines"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Adequate spacing"}),": Minimum 8px between adjacent interactive elements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Large target areas"}),": Generous click/tap areas for all controls"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile optimization"}),": Touch-friendly sizing across all breakpoints"]}),`
`]}),`
`,n.jsx(e.h3,{id:"3-understandable",children:"3. Understandable"}),`
`,n.jsx(e.p,{children:"Information and operation of UI must be understandable to users."}),`
`,n.jsx(e.h4,{id:"clear-communication",children:"Clear Communication"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Descriptive errors"}),": Error messages explain what went wrong and how to fix it"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Form guidance"}),": Clear instructions and validation feedback"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Status announcements"}),": Dynamic changes announced to screen readers via live regions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent language"}),": Simple, clear language throughout the interface"]}),`
`]}),`
`,n.jsx(e.h4,{id:"predictable-interaction",children:"Predictable Interaction"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent behavior"}),": Similar functionality behaves identically across components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Expected patterns"}),": Navigation and interaction patterns follow established conventions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Change of context"}),": No unexpected context changes without user initiation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent identification"}),": Components with same functionality have consistent names"]}),`
`]}),`
`,n.jsx(e.h3,{id:"4-robust",children:"4. Robust"}),`
`,n.jsx(e.p,{children:"Content must be robust enough to be interpreted by assistive technologies."}),`
`,n.jsx(e.h4,{id:"semantic-html",children:"Semantic HTML"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Proper elements"}),": Using correct HTML elements (button, link, heading, etc.)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Valid markup"}),": Well-formed HTML with proper nesting and attributes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Progressive enhancement"}),": Core functionality works without JavaScript"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Standards compliance"}),": Following HTML5 and ARIA specifications"]}),`
`]}),`
`,n.jsx(e.h4,{id:"aria-support",children:"ARIA Support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Supplemental ARIA"}),": ARIA attributes enhance semantic HTML when needed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Live regions"}),": Dynamic content updates announced appropriately"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Proper roles"}),": Custom components use appropriate ARIA roles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"State management"}),": ARIA states reflect current component status"]}),`
`]}),`
`,n.jsx(e.h2,{id:"️-component-specific-guidelines",children:"🛠️ Component-Specific Guidelines"}),`
`,n.jsx(e.h3,{id:"button-component",children:"Button Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - Accessible button with clear text
<Button variant="solid" color="primary" onClick={handleClick}>
  Save Changes
</Button>

// ✅ Good - Button with icon and accessible text
<Button 
  variant="outline" 
  icon={<Save size={16} />} 
  onClick={handleSave}
>
  Save Document
</Button>

// ✅ Good - Icon-only button with aria-label
<Button 
  variant="ghost" 
  size="sm"
  icon={<X size={16} />}
  onClick={handleClose}
  aria-label="Close dialog"
/>

// ❌ Avoid - Button without accessible text
<Button icon={<Save size={16} />} onClick={handleSave} />

// ❌ Avoid - Non-descriptive text
<Button onClick={handleSubmit}>Click here</Button>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Accessibility Features:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Semantic ",n.jsx(e.code,{children:"<button>"})," element with proper type attribute"]}),`
`,n.jsx(e.li,{children:"Visible focus indicator with high contrast"}),`
`,n.jsx(e.li,{children:"Disabled state properly communicated to assistive technologies"}),`
`,n.jsx(e.li,{children:"Loading state announced with aria-live region"}),`
`,n.jsx(e.li,{children:"Support for keyboard activation (Enter and Space)"}),`
`]}),`
`,n.jsx(e.h3,{id:"form-components",children:"Form Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - Properly labeled input with validation
<Input
  label="Email Address"
  type="email"
  required
  value={email}
  onChange={setEmail}
  error={emailError}
  helperText="We'll use this for account notifications"
  aria-describedby="email-hint email-error"
/>

// ✅ Good - Switch with descriptive labels
<Switch
  checked={emailNotifications}
  onChange={setEmailNotifications}
  label="Email notifications"
  description="Receive updates about your account activity"
/>

// ✅ Good - Fieldset for related inputs
<fieldset>
  <legend>Contact Preferences</legend>
  <Switch label="Email notifications" checked={email} onChange={setEmail} />
  <Switch label="SMS notifications" checked={sms} onChange={setSms} />
  <Switch label="Push notifications" checked={push} onChange={setPush} />
</fieldset>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Accessibility Features:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Labels properly associated with form controls via htmlFor/id"}),`
`,n.jsx(e.li,{children:"Required fields indicated both visually and for screen readers"}),`
`,n.jsx(e.li,{children:"Error messages linked to inputs with aria-describedby"}),`
`,n.jsx(e.li,{children:"Helper text provides context without overwhelming users"}),`
`,n.jsx(e.li,{children:"Fieldsets group related form controls with descriptive legends"}),`
`]}),`
`,n.jsx(e.h3,{id:"navigation-components",children:"Navigation Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - Semantic navigation with proper ARIA
<Navigation 
  variant="horizontal"
  aria-label="Main navigation"
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'about', label: 'About', href: '/about' }
  ]}
  activeItem="home"
/>

// ✅ Good - Breadcrumb navigation
<Navigation
  variant="breadcrumb"
  aria-label="Breadcrumb"
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'current', label: 'Current Page', href: '/products/item', current: true }
  ]}
/>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Accessibility Features:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Semantic ",n.jsx(e.code,{children:"<nav>"})," element with descriptive aria-label"]}),`
`,n.jsx(e.li,{children:"Current page indication with aria-current attribute"}),`
`,n.jsx(e.li,{children:"Keyboard navigation with arrow keys (where appropriate)"}),`
`,n.jsx(e.li,{children:"Screen reader announcements for page changes"}),`
`,n.jsx(e.li,{children:"Skip links provided for lengthy navigation"}),`
`]}),`
`,n.jsx(e.h3,{id:"modal-components",children:"Modal Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - Accessible modal with proper focus management
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Confirm Deletion"
  size="md"
>
  <Modal.Body>
    <p>
      Are you sure you want to delete this item? This action cannot be undone.
    </p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="outline" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="solid" color="error" onClick={handleDelete}>
      Delete Item
    </Button>
  </Modal.Footer>
</Modal>

// ✅ Good - Modal with form
<Modal isOpen={isOpen} onClose={handleClose} title="Add New User">
  <Modal.Body>
    <form id="user-form" onSubmit={handleSubmit}>
      <Input label="Full Name" required />
      <Input label="Email" type="email" required />
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="outline" onClick={handleClose}>
      Cancel
    </Button>
    <Button type="submit" form="user-form">
      Add User
    </Button>
  </Modal.Footer>
</Modal>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Accessibility Features:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Focus trapped within modal when open"}),`
`,n.jsx(e.li,{children:"Focus returned to triggering element when closed"}),`
`,n.jsx(e.li,{children:"Escape key closes modal"}),`
`,n.jsx(e.li,{children:"Background click handling (configurable)"}),`
`,n.jsx(e.li,{children:'Proper ARIA attributes (role="dialog", aria-labelledby, aria-describedby)'}),`
`]}),`
`,n.jsx(e.h3,{id:"data-display-components",children:"Data Display Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - Accessible table with proper headers
<Table
  caption="User Management - List of all registered users"
  columns={[
    { key: 'name', label: 'Full Name', sortable: true },
    { key: 'email', label: 'Email Address', sortable: true },
    { key: 'role', label: 'User Role' },
    { key: 'status', label: 'Account Status' }
  ]}
  data={users}
  sortable
  onSort={handleSort}
  aria-label="Users table"
/>

// ✅ Good - Badge with meaningful text
<Badge variant="solid" color="success" aria-label="Account status: Active">
  Active
</Badge>

// ✅ Good - Avatar with proper alt text
<Avatar
  src="https://example.com/user.jpg"
  alt="Profile picture of John Doe"
  fallback="JD"
  size="md"
/>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Accessibility Features:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Table captions describe table purpose"}),`
`,n.jsx(e.li,{children:"Column headers properly associated with data cells"}),`
`,n.jsx(e.li,{children:"Sort state announced to screen readers"}),`
`,n.jsx(e.li,{children:"Row selection state clearly communicated"}),`
`,n.jsx(e.li,{children:"Alternative text for images and icons"}),`
`]}),`
`,n.jsx(e.h2,{id:"-testing-for-accessibility",children:"🔍 Testing for Accessibility"}),`
`,n.jsx(e.h3,{id:"automated-testing-tools",children:"Automated Testing Tools"}),`
`,n.jsx(e.h4,{id:"browser-extensions",children:"Browser Extensions"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"axe DevTools"})," - Comprehensive accessibility testing with detailed explanations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"WAVE"})," - Web accessibility evaluation with visual feedback"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lighthouse"})," - Built-in Chrome accessibility audit"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility Insights"})," - Microsoft's accessibility testing extension"]}),`
`]}),`
`,n.jsx(e.h4,{id:"testing-libraries",children:"Testing Libraries"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';

expect.extend(toHaveNoViolations);

test('Button should be accessible', async () => {
  const { container } = render(
    <Button onClick={jest.fn()}>Save Changes</Button>
  );
  
  // Automated accessibility testing
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  
  // Keyboard accessibility testing
  const user = userEvent.setup();
  const button = screen.getByRole('button', { name: /save changes/i });
  
  await user.tab();
  expect(button).toHaveFocus();
  
  await user.keyboard('[Enter]');
  // Assert button click behavior
});

test('Form should be accessible', async () => {
  const { container } = render(
    <form>
      <Input label="Email" type="email" required />
      <Button type="submit">Submit</Button>
    </form>
  );
  
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  
  // Test form labeling
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeRequired();
});
`})}),`
`,n.jsx(e.h3,{id:"manual-testing-checklist",children:"Manual Testing Checklist"}),`
`,n.jsx(e.h4,{id:"keyboard-navigation-testing",children:"Keyboard Navigation Testing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Tab navigation"}),": All interactive elements reachable via Tab key"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Shift+Tab"}),": Reverse navigation works correctly"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Enter/Space"}),": Buttons and controls activate properly"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Escape"}),": Closes modals, dropdowns, and overlays"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Arrow keys"}),": Navigate within component groups (menus, tabs, etc.)"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Home/End"}),": Jump to first/last items in lists"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Page Up/Down"}),": Scroll through long content areas"]}),`
`]}),`
`,n.jsx(e.h4,{id:"screen-reader-testing",children:"Screen Reader Testing"}),`
`,n.jsx(e.p,{children:"Test with multiple screen readers to ensure compatibility:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Windows:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"NVDA"})," (Free, widely used)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"JAWS"})," (Commercial, enterprise standard)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"macOS:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"VoiceOver"})," (Built-in, activate with Cmd+F5)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Mobile:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TalkBack"})," (Android, built-in)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"VoiceOver"})," (iOS, built-in)"]}),`
`]}),`
`,n.jsx(e.h4,{id:"screen-reader-test-scenarios",children:"Screen Reader Test Scenarios"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Content reading"}),": All text content announced correctly"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Navigation"}),": Landmarks and headings provide structure"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Form interaction"}),": Labels, errors, and instructions clear"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Dynamic content"}),": Live regions announce changes"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Interactive elements"}),": Purpose and state communicated"]}),`
`]}),`
`,n.jsx(e.h4,{id:"visual-testing",children:"Visual Testing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Focus indicators"}),": Visible and high contrast on all interactive elements"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Color contrast"}),": Text meets WCAG AA requirements (4.5:1 normal, 3:1 large)"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Zoom testing"}),": Interface usable at 200% zoom level"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Color blindness"}),": Interface works without color (use browser tools)"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"High contrast mode"}),": Components remain functional in high contrast modes"]}),`
`]}),`
`,n.jsx(e.h4,{id:"touchmobile-testing",children:"Touch/Mobile Testing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Touch targets"}),": Minimum 44×44px for all interactive elements"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Spacing"}),": Adequate space between adjacent touch targets"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Orientation"}),": Works in both portrait and landscape"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Zoom"}),": Pinch-to-zoom doesn't break layout"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Voice control"}),": Compatible with voice navigation tools"]}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility-testing-workflow",children:"Accessibility Testing Workflow"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Development Phase"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use automated tools during development"}),`
`,n.jsx(e.li,{children:"Include accessibility tests in unit tests"}),`
`,n.jsx(e.li,{children:"Regular keyboard navigation checks"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Review Phase"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Run comprehensive automated scans"}),`
`,n.jsx(e.li,{children:"Manual keyboard navigation testing"}),`
`,n.jsx(e.li,{children:"Screen reader spot checks on key flows"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"QA Phase"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Full screen reader testing across platforms"}),`
`,n.jsx(e.li,{children:"Mobile accessibility testing"}),`
`,n.jsx(e.li,{children:"User testing with assistive technology users"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Continuous Monitoring"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Automated accessibility testing in CI/CD"}),`
`,n.jsx(e.li,{children:"Regular audits of new components"}),`
`,n.jsx(e.li,{children:"User feedback integration"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"-additional-resources",children:"📚 Additional Resources"}),`
`,n.jsx(e.h3,{id:"standards-and-guidelines",children:"Standards and Guidelines"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.w3.org/WAI/WCAG21/quickref/",rel:"nofollow",children:"WCAG 2.1 Guidelines"})," - Official accessibility standards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/",rel:"nofollow",children:"WAI-ARIA Authoring Practices"})," - ARIA implementation patterns"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.section508.gov/",rel:"nofollow",children:"Section 508"})," - US federal accessibility requirements"]}),`
`]}),`
`,n.jsx(e.h3,{id:"testing-tools",children:"Testing Tools"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/dequelabs/axe-core",rel:"nofollow",children:"axe-core"})," - Accessibility testing engine"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://pa11y.org/",rel:"nofollow",children:"Pa11y"})," - Command line accessibility tester"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://accessibilityinsights.io/",rel:"nofollow",children:"Accessibility Insights"})," - Microsoft's testing tools"]}),`
`]}),`
`,n.jsx(e.h3,{id:"learning-resources",children:"Learning Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://webaim.org/",rel:"nofollow",children:"WebAIM"})," - Web accessibility education and resources"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.a11yproject.com/",rel:"nofollow",children:"A11y Project"})," - Community-driven accessibility resources"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://inclusive-components.design/",rel:"nofollow",children:"Inclusive Components"})," - Accessible component patterns"]}),`
`]}),`
`,n.jsx(e.p,{children:"Remember: Accessibility is not a checklist—it's an ongoing commitment to inclusive design that benefits all users. Regular testing, user feedback, and continuous improvement ensure our components remain accessible to everyone."})]})}function u(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{u as default};
