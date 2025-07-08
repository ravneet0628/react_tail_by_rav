import{r as j,j as e}from"./iframe-WWlJSg8F.js";import{B as l}from"./Button-RLJE7G7l.js";const a=j.forwardRef(({variant:c="default",padding:m="md",hoverable:p=!1,className:h="",children:u,...x},v)=>{const g="rounded-lg transition-all duration-200",f={default:"bg-white border border-gray-200",outline:"bg-transparent border-2 border-gray-300",shadow:"bg-white shadow-lg border border-gray-100"},b={none:"",sm:"p-4",md:"p-6",lg:"p-8"},y=p?"hover:shadow-md hover:scale-[1.02] cursor-pointer":"",N=`${g} ${f[c]} ${b[m]} ${y} ${h}`.trim();return e.jsx("div",{ref:v,className:N,...x,children:u})});a.displayName="Card";try{a.displayName="Card",a.__docgenInfo={description:"Card component for containing and organizing content with consistent styling",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"Visual variant of the card",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"default"'},{value:'"shadow"'}]}},padding:{defaultValue:{value:"md"},description:"Padding size",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},hoverable:{defaultValue:{value:"false"},description:"Whether card should be hoverable",name:"hoverable",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Components/Card",component:a,parameters:{docs:{description:{component:"A flexible container component for organizing and displaying content."}}},argTypes:{variant:{control:{type:"select"},options:["default","outline","shadow"],description:"Visual style variant of the card",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},padding:{control:{type:"select"},options:["none","sm","md","lg"],description:"Internal padding of the card",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},hoverable:{control:{type:"boolean"},description:"Whether the card should have hover effects",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:{type:"text"},description:"Card content",table:{type:{summary:"ReactNode"}}}},args:{variant:"default",padding:"md",hoverable:!1}},t={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Default Card"}),e.jsx("p",{className:"text-gray-600",children:"This is a default card with a subtle border."})]})},parameters:{docs:{description:{story:"The default card variant with a simple border and white background."}}}},r={args:{variant:"outline",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Outline Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a more prominent border and transparent background."})]})},parameters:{docs:{description:{story:"The outline variant with a more prominent border and transparent background."}}}},s={args:{variant:"shadow",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Shadow Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a drop shadow for more visual prominence."})]})},parameters:{docs:{description:{story:"The shadow variant with a drop shadow for elevated appearance."}}}},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{padding:"none",variant:"outline",children:e.jsx("div",{className:"bg-blue-50 p-2 text-center",children:"No Padding"})}),e.jsx(a,{padding:"sm",variant:"outline",children:e.jsx("div",{className:"text-center",children:"Small Padding"})}),e.jsx(a,{padding:"md",variant:"outline",children:e.jsx("div",{className:"text-center",children:"Medium Padding (Default)"})}),e.jsx(a,{padding:"lg",variant:"outline",children:e.jsx("div",{className:"text-center",children:"Large Padding"})})]}),parameters:{docs:{description:{story:"Different padding options for controlling internal spacing."}}}},i={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs(a,{variant:"shadow",hoverable:!0,onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Hoverable Card"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"This card has hover effects and is clickable."}),e.jsx(l,{size:"sm",children:"Learn More"})]}),e.jsxs(a,{variant:"outline",hoverable:!0,children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Interactive Content"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Cards can contain interactive elements."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(l,{size:"sm",variant:"primary",children:"Action"}),e.jsx(l,{size:"sm",variant:"outline",children:"Cancel"})]})]})]}),parameters:{docs:{description:{story:"Cards with hover effects and interactive content."}}}},n={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{variant:"shadow",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl",children:"JD"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:"John Doe"}),e.jsx("p",{className:"text-gray-600",children:"Software Engineer"}),e.jsx("p",{className:"text-sm text-gray-500",children:"john.doe@example.com"})]})]})}),e.jsxs(a,{variant:"default",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Statistics"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"127"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Projects"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:"89%"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Success Rate"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:"2.4k"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Hours"})]})]})]}),e.jsx(a,{variant:"outline",hoverable:!0,children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded"}),e.jsx("h3",{className:"text-lg font-semibold",children:"Article Title"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."}),e.jsxs("div",{className:"flex justify-between items-center text-sm text-gray-500",children:[e.jsx("span",{children:"March 15, 2024"}),e.jsx("span",{children:"5 min read"})]})]})})]}),parameters:{docs:{description:{story:"Real-world examples of card layouts for different use cases."}}}},o={args:{variant:"default",padding:"md",hoverable:!1,children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Playground Card"}),e.jsx("p",{className:"text-gray-600",children:"Use the controls below to experiment with different card configurations."})]})},parameters:{docs:{description:{story:"Use the controls below to experiment with different card configurations."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Default Card</h3>
        <p className="text-gray-600">This is a default card with a subtle border.</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'The default card variant with a simple border and white background.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Outline Card</h3>
        <p className="text-gray-600">This card has a more prominent border and transparent background.</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'The outline variant with a more prominent border and transparent background.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'shadow',
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Shadow Card</h3>
        <p className="text-gray-600">This card has a drop shadow for more visual prominence.</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'The shadow variant with a drop shadow for elevated appearance.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Card padding="none" variant="outline">
        <div className="bg-blue-50 p-2 text-center">No Padding</div>
      </Card>
      <Card padding="sm" variant="outline">
        <div className="text-center">Small Padding</div>
      </Card>
      <Card padding="md" variant="outline">
        <div className="text-center">Medium Padding (Default)</div>
      </Card>
      <Card padding="lg" variant="outline">
        <div className="text-center">Large Padding</div>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different padding options for controlling internal spacing.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card variant="shadow" hoverable onClick={() => alert('Card clicked!')}>
        <h3 className="text-lg font-semibold mb-2">Hoverable Card</h3>
        <p className="text-gray-600 mb-4">This card has hover effects and is clickable.</p>
        <Button size="sm">Learn More</Button>
      </Card>
      <Card variant="outline" hoverable>
        <h3 className="text-lg font-semibold mb-2">Interactive Content</h3>
        <p className="text-gray-600 mb-4">Cards can contain interactive elements.</p>
        <div className="flex gap-2">
          <Button size="sm" variant="primary">Action</Button>
          <Button size="sm" variant="outline">Cancel</Button>
        </div>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Cards with hover effects and interactive content.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {/* Profile Card */}
      <Card variant="shadow">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </Card>

      {/* Stats Card */}
      <Card variant="default">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">127</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">89%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">2.4k</div>
            <div className="text-sm text-gray-600">Hours</div>
          </div>
        </div>
      </Card>

      {/* Article Card */}
      <Card variant="outline" hoverable>
        <div className="space-y-3">
          <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <h3 className="text-lg font-semibold">Article Title</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>March 15, 2024</span>
            <span>5 min read</span>
          </div>
        </div>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of card layouts for different use cases.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    padding: 'md',
    hoverable: false,
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Playground Card</h3>
        <p className="text-gray-600">Use the controls below to experiment with different card configurations.</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to experiment with different card configurations.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","Outline","Shadow","PaddingVariations","InteractiveCards","LayoutExamples","Playground"];export{t as Default,i as InteractiveCards,n as LayoutExamples,r as Outline,d as PaddingVariations,o as Playground,s as Shadow,P as __namedExportsOrder,S as default};
