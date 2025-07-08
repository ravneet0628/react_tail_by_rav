import{j as e}from"./iframe-WWlJSg8F.js";import{B as t}from"./Button-RLJE7G7l.js";import{c as m}from"./createLucideIcon-B5M5C6C2.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],y=m("download",h);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],p=m("plus",f);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],b=m("trash",g),j={title:"Components/Button",component:t,parameters:{docs:{description:{component:"A versatile button component with multiple variants, sizes, and states."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"Visual style variant of the button",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the button",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},fullWidth:{control:{type:"boolean"},description:"Whether the button should take the full width of its container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:{type:"boolean"},description:"Shows loading spinner and disables the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the icon relative to the text",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},children:{control:{type:"text"},description:"Button text content",table:{type:{summary:"ReactNode"}}}},args:{variant:"primary",size:"md",fullWidth:!1,loading:!1,disabled:!1,iconPosition:"left",children:"Button"}},s={args:{children:"Primary Button",variant:"primary"},parameters:{docs:{description:{story:"Primary buttons are used for the main action on a page."}}}},a={args:{children:"Secondary Button",variant:"secondary"},parameters:{docs:{description:{story:"Secondary buttons are used for secondary actions."}}}},r={args:{children:"Outline Button",variant:"outline"},parameters:{docs:{description:{story:"Outline buttons are less prominent and used for secondary actions."}}}},o={args:{children:"Ghost Button",variant:"ghost"},parameters:{docs:{description:{story:"Ghost buttons are the least prominent and used for tertiary actions."}}}},n={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"Buttons come in three sizes: small, medium, and large."}}}},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{children:"Default"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(t,{loading:!0,children:"Loading"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"outline",children:"Default"}),e.jsx(t,{variant:"outline",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"outline",loading:!0,children:"Loading"})]})]}),parameters:{docs:{description:{story:"Buttons support different states including disabled and loading."}}}},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{icon:e.jsx(p,{className:"w-4 h-4"}),iconPosition:"left",children:"Add Item"}),e.jsx(t,{icon:e.jsx(y,{className:"w-4 h-4"}),iconPosition:"right",children:"Download"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"outline",icon:e.jsx(b,{className:"w-4 h-4"}),children:"Delete"}),e.jsx(t,{variant:"ghost",icon:e.jsx(p,{className:"w-4 h-4"})})]})]}),parameters:{docs:{description:{story:"Buttons can include icons positioned on the left or right side."}}}},l={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(t,{fullWidth:!0,children:"Full Width Primary"}),e.jsx(t,{variant:"outline",fullWidth:!0,children:"Full Width Outline"})]}),parameters:{docs:{description:{story:"Buttons can be made to take the full width of their container."}}}},c={args:{children:"Playground Button",variant:"primary",size:"md",fullWidth:!1,loading:!1,disabled:!1,icon:void 0,iconPosition:"left"},parameters:{docs:{description:{story:"Use the controls below to experiment with different button configurations."}}}},u={render:()=>e.jsxs("form",{className:"space-y-4 max-w-md",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"Enter your email"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Password"}),e.jsx("input",{type:"password",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"Enter your password"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{type:"submit",fullWidth:!0,children:"Sign In"}),e.jsx(t,{variant:"outline",type:"button",children:"Cancel"})]})]}),parameters:{docs:{description:{story:"Example of button usage in a form context."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons are used for the main action on a page.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons are used for secondary actions.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons are less prominent and used for secondary actions.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost buttons are the least prominent and used for tertiary actions.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in three sizes: small, medium, and large.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">Default</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="outline" loading>Loading</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons support different states including disabled and loading.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-4">
        <Button icon={<PlusIcon className="w-4 h-4" />} iconPosition="left">
          Add Item
        </Button>
        <Button icon={<DownloadIcon className="w-4 h-4" />} iconPosition="right">
          Download
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" icon={<TrashIcon className="w-4 h-4" />}>
          Delete
        </Button>
        <Button variant="ghost" icon={<PlusIcon className="w-4 h-4" />} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include icons positioned on the left or right side.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Button fullWidth>Full Width Primary</Button>
      <Button variant="outline" fullWidth>Full Width Outline</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be made to take the full width of their container.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Playground Button',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loading: false,
    disabled: false,
    icon: undefined,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to experiment with different button configurations.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your password" />
      </div>
      <div className="flex gap-2">
        <Button type="submit" fullWidth>Sign In</Button>
        <Button variant="outline" type="button">Cancel</Button>
      </div>
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Example of button usage in a form context.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const N=["Primary","Secondary","Outline","Ghost","Sizes","States","WithIcons","FullWidth","Playground","FormUsage"];export{u as FormUsage,l as FullWidth,o as Ghost,r as Outline,c as Playground,s as Primary,a as Secondary,n as Sizes,i as States,d as WithIcons,N as __namedExportsOrder,j as default};
