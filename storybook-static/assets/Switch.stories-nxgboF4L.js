import{r as x,j as e}from"./iframe-WWlJSg8F.js";import{c as E}from"./index-cjPtjWgh.js";const q=["relative","inline-flex","flex-shrink-0","border-2","border-transparent","rounded-full","cursor-pointer","transition-colors","duration-200","ease-in-out","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-primary-500"].join(" "),I={xs:{container:"h-4 w-7",thumb:"h-3 w-3",translate:"translate-x-3"},sm:{container:"h-5 w-9",thumb:"h-4 w-4",translate:"translate-x-4"},md:{container:"h-6 w-11",thumb:"h-5 w-5",translate:"translate-x-5"},lg:{container:"h-7 w-12",thumb:"h-6 w-6",translate:"translate-x-5"},xl:{container:"h-8 w-14",thumb:"h-7 w-7",translate:"translate-x-6"}},R=["pointer-events-none","inline-block","rounded-full","bg-white","shadow","transform","ring-0","transition","duration-200","ease-in-out"].join(" ");function M(r,t,l){const s=I[r],i=[q,s.container,t?"bg-primary-600":"bg-gray-200",l&&"opacity-50 cursor-not-allowed"].filter(Boolean).join(" "),n=[R,s.thumb,t?s.translate:"translate-x-0"].join(" ");return{container:i,thumb:n}}const T="text-sm font-medium text-gray-900",V="text-sm text-gray-600 mt-1",_="text-sm text-red-600 mt-1",W="flex items-start",A="ml-3",F="text-sm text-gray-500",a=x.forwardRef(({size:r="md",label:t,helperText:l,error:s,checked:i=!1,disabled:n=!1,onChange:w,checkedLabel:g,uncheckedLabel:v,className:k,...j},N)=>{const S=x.useId(),y=x.useId(),{container:C,thumb:z}=M(r,i,n),L=D=>{w?.(D.target.checked)},c=i?g:v;return e.jsxs("div",{className:E("flex flex-col",k),children:[e.jsxs("div",{className:W,children:[e.jsxs("button",{type:"button",className:C,role:"switch","aria-checked":i,"aria-labelledby":t?`${S}-label`:void 0,"aria-describedby":l||s||c?y:void 0,disabled:n,onClick:()=>!n&&w?.(!i),children:[e.jsx("span",{className:z}),e.jsx("input",{ref:N,type:"checkbox",className:"sr-only",checked:i,onChange:L,disabled:n,...j})]}),(t||c)&&e.jsxs("div",{className:A,children:[t&&e.jsx("label",{id:`${S}-label`,className:T,children:t}),c&&e.jsx("div",{className:F,children:c})]})]}),(l||s)&&e.jsx("div",{id:y,className:s?_:V,children:s||l})]})});a.displayName="Switch";try{a.displayName="Switch",a.__docgenInfo={description:"Switch component for binary choices with smooth animations",displayName:"Switch",props:{size:{defaultValue:{value:"md"},description:"Switch size",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},label:{defaultValue:null,description:"Switch label",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Whether switch is checked",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether switch is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}},checkedLabel:{defaultValue:null,description:"Description to show when checked",name:"checkedLabel",required:!1,type:{name:"ReactNode"}},uncheckedLabel:{defaultValue:null,description:"Description to show when unchecked",name:"uncheckedLabel",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"'primary'"},description:"Component color theme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"gray"'},{value:'"neutral"'}]}}}}}catch{}const B={title:"Components/Switch",component:a,parameters:{docs:{description:{component:"Switch component for binary choices with smooth animations and accessibility features."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Switch size"},checked:{control:{type:"boolean"},description:"Whether switch is checked"},disabled:{control:{type:"boolean"},description:"Whether switch is disabled"}},args:{size:"md",checked:!1,disabled:!1}},o={args:{label:"Enable notifications"}},d={args:{label:"Auto-save enabled",checked:!0}},m={args:{label:"Disabled switch",disabled:!0}},u={args:{label:"Disabled checked",checked:!0,disabled:!0}},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{size:"xs",label:"Extra Small"}),e.jsx(a,{size:"sm",label:"Small"}),e.jsx(a,{size:"md",label:"Medium (default)"}),e.jsx(a,{size:"lg",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra Large"})]}),parameters:{docs:{description:{story:"Switches available in multiple sizes for different contexts."}}}};function P(){const[r,t]=x.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Email notifications",checked:r,onChange:t,helperText:"Receive email updates about your account"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Current state: ",r?"Enabled":"Disabled"]})]})}const p={render:()=>e.jsx(P,{}),parameters:{docs:{description:{story:"Interactive switch with state management."}}}},b={render:()=>e.jsxs("form",{className:"space-y-4 max-w-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Notification Preferences"}),e.jsx(a,{label:"Email notifications",helperText:"Receive updates via email",defaultChecked:!0}),e.jsx(a,{label:"Push notifications",helperText:"Receive push notifications on mobile"}),e.jsx(a,{label:"SMS notifications",helperText:"Receive SMS for important updates",error:"SMS service is currently unavailable"}),e.jsx(a,{label:"Marketing emails",helperText:"Receive promotional content",disabled:!0})]}),parameters:{docs:{description:{story:"Switches integrated into a form with validation and help text."}}}},f={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Dark mode",checkedLabel:"Dark theme enabled",uncheckedLabel:"Light theme enabled"}),e.jsx(a,{label:"Auto-backup",checkedLabel:"Files are automatically backed up",uncheckedLabel:"Manual backup required",defaultChecked:!0})]}),parameters:{docs:{description:{story:"Switches with contextual labels that change based on state."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Auto-save enabled',
    checked: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch size="xs" label="Extra Small" />
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium (default)" />
      <Switch size="lg" label="Large" />
      <Switch size="xl" label="Extra Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Switches available in multiple sizes for different contexts.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSwitch />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive switch with state management.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-4 max-w-md">
      <h3 className="text-lg font-medium">Notification Preferences</h3>
      
      <Switch label="Email notifications" helperText="Receive updates via email" defaultChecked />
      
      <Switch label="Push notifications" helperText="Receive push notifications on mobile" />
      
      <Switch label="SMS notifications" helperText="Receive SMS for important updates" error="SMS service is currently unavailable" />
      
      <Switch label="Marketing emails" helperText="Receive promotional content" disabled />
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Switches integrated into a form with validation and help text.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch label="Dark mode" checkedLabel="Dark theme enabled" uncheckedLabel="Light theme enabled" />
      
      <Switch label="Auto-backup" checkedLabel="Files are automatically backed up" uncheckedLabel="Manual backup required" defaultChecked />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Switches with contextual labels that change based on state.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const O=["Default","Checked","Disabled","DisabledChecked","Sizes","Interactive","FormIntegration","WithLabels"];export{d as Checked,o as Default,m as Disabled,u as DisabledChecked,b as FormIntegration,p as Interactive,h as Sizes,f as WithLabels,O as __namedExportsOrder,B as default};
