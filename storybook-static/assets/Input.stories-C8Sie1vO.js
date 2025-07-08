import{j as e}from"./iframe-WWlJSg8F.js";import{I as a}from"./Input-Bc1tuKzh.js";import{U as m}from"./user-BoVg1Vsh.js";import{c as h}from"./createLucideIcon-B5M5C6C2.js";import{S as g}from"./search-CW3TpS0c.js";import"./index-cjPtjWgh.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],x=h("lock",v);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],b=h("mail",f),P={title:"Forms/Input",component:a,parameters:{docs:{description:{component:"Versatile input component supporting multiple types and validation states. Includes built-in accessibility features and icon support."}}},argTypes:{variant:{control:{type:"select"},options:["text","email","password","textarea","select"],description:"Input type variant"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Input size following touch target standards"},label:{control:{type:"text"},description:"Input label text"},placeholder:{control:{type:"text"},description:"Placeholder text"},helperText:{control:{type:"text"},description:"Helper text shown below input"},error:{control:{type:"text"},description:"Error message (overrides helperText)"},required:{control:{type:"boolean"},description:"Marks field as required"},disabled:{control:{type:"boolean"},description:"Disables input interaction"},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of icon relative to input"}},args:{variant:"text",size:"md"}},r={args:{label:"Name",placeholder:"Enter your name",variant:"text"}},s={args:{label:"Email",placeholder:"you@example.com",variant:"email"}},t={args:{label:"Password",placeholder:"Enter password",variant:"password"}},l={args:{label:"Message",placeholder:"Enter your message...",variant:"textarea",rows:4}},o={args:{label:"Country",variant:"select",options:[{value:"",label:"Select a country"},{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"}]}},i={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(a,{size:"xs",label:"Extra Small",placeholder:"32px height"}),e.jsx(a,{size:"sm",label:"Small",placeholder:"40px height"}),e.jsx(a,{size:"md",label:"Medium",placeholder:"44px height (optimal)"}),e.jsx(a,{size:"lg",label:"Large",placeholder:"48px height"}),e.jsx(a,{size:"xl",label:"Extra Large",placeholder:"56px height"}),e.jsx(a,{size:"2xl",label:"2X Large",placeholder:"64px height"})]}),parameters:{docs:{description:{story:"Input sizes from 32px (xs) to 64px (2xl) height, following accessibility touch target guidelines."}}}},n={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(a,{label:"Username",placeholder:"Enter username",icon:e.jsx(m,{}),iconPosition:"left"}),e.jsx(a,{label:"Email",placeholder:"you@example.com",variant:"email",icon:e.jsx(b,{}),iconPosition:"left"}),e.jsx(a,{label:"Password",placeholder:"Enter password",variant:"password",icon:e.jsx(x,{}),iconPosition:"left"}),e.jsx(a,{label:"Search",placeholder:"Search...",icon:e.jsx(g,{}),iconPosition:"right"})]}),parameters:{docs:{description:{story:"Inputs with icons positioned on the left or right side."}}}},d={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(a,{label:"Valid Input",placeholder:"This field is valid",helperText:"This field looks good!"}),e.jsx(a,{label:"Required Field",placeholder:"This field is required",required:!0,helperText:"Please fill out this field"}),e.jsx(a,{label:"Error Field",placeholder:"This field has an error",error:"This field is required"})]}),parameters:{docs:{description:{story:"Different validation states including helper text and error messages."}}}},c={render:()=>e.jsxs("form",{className:"space-y-6 max-w-md",children:[e.jsx("div",{children:e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contact Form"})}),e.jsx(a,{label:"Full Name",placeholder:"John Doe",required:!0,icon:e.jsx(m,{}),iconPosition:"left"}),e.jsx(a,{label:"Email Address",placeholder:"john@example.com",variant:"email",required:!0,icon:e.jsx(b,{}),iconPosition:"left",helperText:"We'll never share your email"}),e.jsx(a,{label:"Password",placeholder:"Enter a secure password",variant:"password",required:!0,icon:e.jsx(x,{}),iconPosition:"left",helperText:"Minimum 8 characters"}),e.jsx(a,{label:"Message",placeholder:"Tell us about your project...",variant:"textarea",rows:4,helperText:"Optional: Describe your requirements"}),e.jsx(a,{label:"Budget Range",variant:"select",required:!0,options:[{value:"",label:"Select budget range"},{value:"1k-5k",label:"$1,000 - $5,000"},{value:"5k-10k",label:"$5,000 - $10,000"},{value:"10k-25k",label:"$10,000 - $25,000"},{value:"25k+",label:"$25,000+"}]})]}),parameters:{docs:{description:{story:"Complete form example showing various input types working together."}}}},p={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(a,{label:"Default State",placeholder:"Normal input"}),e.jsx(a,{label:"Disabled State",placeholder:"Cannot interact",disabled:!0}),e.jsx(a,{label:"Required Field",placeholder:"This field is required",required:!0})]}),parameters:{docs:{description:{story:"Different input states including disabled and required states."}}}},u={args:{label:"Playground Input",placeholder:"Enter text...",variant:"text",size:"md",required:!1,disabled:!1,helperText:"",error:"",icon:void 0,iconPosition:"left"},parameters:{docs:{description:{story:"Interactive playground to test different input configurations."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    variant: 'text'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    variant: 'email'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    variant: 'password'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    variant: 'textarea',
    rows: 4
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    variant: 'select',
    options: [{
      value: '',
      label: 'Select a country'
    }, {
      value: 'us',
      label: 'United States'
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France'
    }]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input size="xs" label="Extra Small" placeholder="32px height" />
      <Input size="sm" label="Small" placeholder="40px height" />
      <Input size="md" label="Medium" placeholder="44px height (optimal)" />
      <Input size="lg" label="Large" placeholder="48px height" />
      <Input size="xl" label="Extra Large" placeholder="56px height" />
      <Input size="2xl" label="2X Large" placeholder="64px height" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input sizes from 32px (xs) to 64px (2xl) height, following accessibility touch target guidelines.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Username" placeholder="Enter username" icon={<User />} iconPosition="left" />
      <Input label="Email" placeholder="you@example.com" variant="email" icon={<Mail />} iconPosition="left" />
      <Input label="Password" placeholder="Enter password" variant="password" icon={<Lock />} iconPosition="left" />
      <Input label="Search" placeholder="Search..." icon={<Search />} iconPosition="right" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Inputs with icons positioned on the left or right side.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Valid Input" placeholder="This field is valid" helperText="This field looks good!" />
      <Input label="Required Field" placeholder="This field is required" required helperText="Please fill out this field" />
      <Input label="Error Field" placeholder="This field has an error" error="This field is required" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different validation states including helper text and error messages.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Form</h3>
      </div>
      
      <Input label="Full Name" placeholder="John Doe" required icon={<User />} iconPosition="left" />
      
      <Input label="Email Address" placeholder="john@example.com" variant="email" required icon={<Mail />} iconPosition="left" helperText="We'll never share your email" />
      
      <Input label="Password" placeholder="Enter a secure password" variant="password" required icon={<Lock />} iconPosition="left" helperText="Minimum 8 characters" />
      
      <Input label="Message" placeholder="Tell us about your project..." variant="textarea" rows={4} helperText="Optional: Describe your requirements" />
      
      <Input label="Budget Range" variant="select" required options={[{
      value: '',
      label: 'Select budget range'
    }, {
      value: '1k-5k',
      label: '$1,000 - $5,000'
    }, {
      value: '5k-10k',
      label: '$5,000 - $10,000'
    }, {
      value: '10k-25k',
      label: '$10,000 - $25,000'
    }, {
      value: '25k+',
      label: '$25,000+'
    }]} />
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Complete form example showing various input types working together.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Default State" placeholder="Normal input" />
      <Input label="Disabled State" placeholder="Cannot interact" disabled />
      <Input label="Required Field" placeholder="This field is required" required />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different input states including disabled and required states.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Playground Input',
    placeholder: 'Enter text...',
    variant: 'text',
    size: 'md',
    required: false,
    disabled: false,
    helperText: '',
    error: '',
    icon: undefined,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different input configurations.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const T=["Text","Email","Password","Textarea","Select","Sizes","WithIcons","ValidationStates","FormExample","States","Playground"];export{s as Email,c as FormExample,t as Password,u as Playground,o as Select,i as Sizes,p as States,r as Text,l as Textarea,d as ValidationStates,n as WithIcons,T as __namedExportsOrder,P as default};
