import{r as t,j as e}from"./iframe-WWlJSg8F.js";import{c as j}from"./index-cjPtjWgh.js";const E=["w-full","bg-transparent","cursor-pointer","appearance-none","focus:outline-none"].join(" "),B={xs:{track:"h-1",thumb:"h-3 w-3"},sm:{track:"h-1.5",thumb:"h-4 w-4"},md:{track:"h-2",thumb:"h-5 w-5"},lg:{track:"h-2.5",thumb:"h-6 w-6"},xl:{track:"h-3",thumb:"h-7 w-7"}},P=["w-full","bg-gray-200","rounded-full","overflow-hidden"].join(" "),W=["h-full","bg-primary-600","transition-all","duration-150"].join(" "),R=["absolute","top-1/2","bg-white","border-2","border-primary-600","rounded-full","shadow-sm","transform","-translate-y-1/2","-translate-x-1/2","cursor-grab","active:cursor-grabbing","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-primary-500","transition-all","duration-150"].join(" ");function L(a,s){const l=B[a];return{container:"relative flex items-center",input:[E,s&&"cursor-not-allowed opacity-50"].filter(Boolean).join(" "),track:[P,l.track,s&&"bg-gray-100"].filter(Boolean).join(" "),progress:[W,s&&"bg-gray-300"].filter(Boolean).join(" "),thumb:[R,l.thumb,s&&"cursor-not-allowed border-gray-300"].filter(Boolean).join(" ")}}const F="block text-sm font-medium text-gray-900 mb-2",H="text-sm text-gray-600 mt-1",O="text-sm text-red-600 mt-1",G="text-sm font-medium text-gray-900 ml-3",J="flex justify-between text-xs text-gray-500 mt-1",r=t.forwardRef(({size:a="md",label:s,helperText:l,error:u,value:m=0,min:o=0,max:c=100,step:M=1,showValue:N=!1,showMinMax:z=!1,formatValue:n,onChange:C,disabled:y=!1,className:q,...$},D)=>{const w=t.useId(),S=t.useId(),I=t.useRef(null),[U,X]=t.useState(!1),i=L(a,y),V=(m-o)/(c-o)*100,T=_=>{const A=parseFloat(_.target.value);C?.(A)},k=n?n(m):m.toString();return e.jsxs("div",{className:j("w-full",q),children:[s&&e.jsx("label",{htmlFor:w,className:F,children:s}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:i.container,children:[e.jsx("div",{ref:I,className:i.track,children:e.jsx("div",{className:i.progress,style:{width:`${V}%`}})}),e.jsx("div",{className:i.thumb,style:{left:`${V}%`}}),e.jsx("input",{ref:D,id:w,type:"range",min:o,max:c,step:M,value:m,onChange:T,disabled:y,className:j(i.input,"absolute inset-0 opacity-0"),"aria-describedby":l||u?S:void 0,...$})]}),N&&e.jsx("span",{className:G,children:k})]}),z&&e.jsxs("div",{className:J,children:[e.jsx("span",{children:n?n(o):o}),e.jsx("span",{children:n?n(c):c})]}),(l||u)&&e.jsx("div",{id:S,className:u?O:H,children:u||l})]})});r.displayName="Slider";try{r.displayName="Slider",r.__docgenInfo={description:"Slider component for selecting numeric values from a range",displayName:"Slider",props:{size:{defaultValue:{value:"md"},description:"Slider size",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},label:{defaultValue:null,description:"Slider label",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:"Current value",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Minimum value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment",name:"step",required:!1,type:{name:"number"}},showValue:{defaultValue:{value:"false"},description:"Whether to show value",name:"showValue",required:!1,type:{name:"boolean"}},showMinMax:{defaultValue:{value:"false"},description:"Whether to show min/max labels",name:"showMinMax",required:!1,type:{name:"boolean"}},formatValue:{defaultValue:null,description:"Custom value formatter",name:"formatValue",required:!1,type:{name:"(value: number) => string"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"(value: number) => void"}},disabled:{defaultValue:{value:"false"},description:"Whether slider is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"'primary'"},description:"Component color theme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"gray"'},{value:'"neutral"'}]}}}}}catch{}const ee={title:"Components/Slider",component:r,parameters:{docs:{description:{component:"Slider component for selecting numeric values from a range with accessibility support."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Slider size"},value:{control:{type:"number"},description:"Current value"},min:{control:{type:"number"},description:"Minimum value"},max:{control:{type:"number"},description:"Maximum value"},step:{control:{type:"number"},description:"Step increment"},showValue:{control:{type:"boolean"},description:"Show current value"},showMinMax:{control:{type:"boolean"},description:"Show min/max labels"},disabled:{control:{type:"boolean"},description:"Whether slider is disabled"}},args:{size:"md",value:50,min:0,max:100,step:1,showValue:!1,showMinMax:!1,disabled:!1}},d={args:{label:"Volume",value:75}},p={args:{label:"Brightness",value:60,showValue:!0}},h={args:{label:"Temperature",value:22,min:16,max:30,showMinMax:!0,formatValue:a=>`${a}°C`}},f={args:{label:"Disabled slider",value:50,disabled:!0,showValue:!0}},x={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{size:"xs",label:"Extra Small",value:20,showValue:!0}),e.jsx(r,{size:"sm",label:"Small",value:40,showValue:!0}),e.jsx(r,{size:"md",label:"Medium (default)",value:60,showValue:!0}),e.jsx(r,{size:"lg",label:"Large",value:80,showValue:!0}),e.jsx(r,{size:"xl",label:"Extra Large",value:100,showValue:!0})]}),parameters:{docs:{description:{story:"Sliders available in multiple sizes for different contexts."}}}};function K(){const[a,s]=t.useState(75);return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx(r,{label:"Volume Control",value:a,min:0,max:100,onChange:s,showValue:!0,showMinMax:!0,formatValue:l=>`${l}%`,helperText:"Adjust the system volume level"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Current volume: ",a,"%"]})]})}const g={render:()=>e.jsx(K,{}),parameters:{docs:{description:{story:"Interactive volume control slider with percentage formatting."}}}};function Q(){const[a,s]=t.useState(250);return e.jsx("div",{className:"max-w-md space-y-4",children:e.jsx(r,{label:"Price Range",value:a,min:0,max:1e3,step:25,onChange:s,showValue:!0,showMinMax:!0,formatValue:l=>`$${l}`,helperText:"Select your budget range"})})}const v={render:()=>e.jsx(Q,{}),parameters:{docs:{description:{story:"Price range slider with custom formatting and step increments."}}}},b={render:()=>e.jsxs("form",{className:"max-w-md space-y-6",children:[e.jsx("h3",{className:"text-lg font-medium",children:"System Settings"}),e.jsx(r,{label:"Display Brightness",value:80,min:10,max:100,showValue:!0,showMinMax:!0,formatValue:a=>`${a}%`,helperText:"Adjust screen brightness"}),e.jsx(r,{label:"Audio Volume",value:65,min:0,max:100,step:5,showValue:!0,formatValue:a=>`${a}%`,helperText:"Set system volume level"}),e.jsx(r,{label:"Notification Delay",value:3,min:1,max:10,showValue:!0,showMinMax:!0,formatValue:a=>`${a}s`,helperText:"Delay before showing notifications"}),e.jsx(r,{label:"Auto-save Interval",value:5,min:1,max:30,step:1,showValue:!0,formatValue:a=>`${a} min`,error:"Auto-save requires premium subscription",disabled:!0})]}),parameters:{docs:{description:{story:"Multiple sliders integrated into a settings form with various configurations."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    value: 75
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Brightness',
    value: 60,
    showValue: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Temperature',
    value: 22,
    min: 16,
    max: 30,
    showMinMax: true,
    formatValue: value => \`\${value}°C\`
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled slider',
    value: 50,
    disabled: true,
    showValue: true
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <Slider size="xs" label="Extra Small" value={20} showValue />
      <Slider size="sm" label="Small" value={40} showValue />
      <Slider size="md" label="Medium (default)" value={60} showValue />
      <Slider size="lg" label="Large" value={80} showValue />
      <Slider size="xl" label="Extra Large" value={100} showValue />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Sliders available in multiple sizes for different contexts.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <VolumeControl />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive volume control slider with percentage formatting.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <PriceRange />,
  parameters: {
    docs: {
      description: {
        story: 'Price range slider with custom formatting and step increments.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <form className="max-w-md space-y-6">
      <h3 className="text-lg font-medium">System Settings</h3>
      
      <Slider label="Display Brightness" value={80} min={10} max={100} showValue showMinMax formatValue={value => \`\${value}%\`} helperText="Adjust screen brightness" />
      
      <Slider label="Audio Volume" value={65} min={0} max={100} step={5} showValue formatValue={value => \`\${value}%\`} helperText="Set system volume level" />
      
      <Slider label="Notification Delay" value={3} min={1} max={10} showValue showMinMax formatValue={value => \`\${value}s\`} helperText="Delay before showing notifications" />
      
      <Slider label="Auto-save Interval" value={5} min={1} max={30} step={1} showValue formatValue={value => \`\${value} min\`} error="Auto-save requires premium subscription" disabled />
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple sliders integrated into a settings form with various configurations.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const ae=["Default","WithValue","WithMinMax","Disabled","Sizes","VolumeSlider","PriceSlider","FormIntegration"];export{d as Default,f as Disabled,b as FormIntegration,v as PriceSlider,x as Sizes,g as VolumeSlider,h as WithMinMax,p as WithValue,ae as __namedExportsOrder,ee as default};
