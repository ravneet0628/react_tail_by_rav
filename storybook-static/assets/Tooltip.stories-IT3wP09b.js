import{r as n,j as e}from"./iframe-WWlJSg8F.js";import{c as k}from"./index-cjPtjWgh.js";const V=["absolute","z-50","px-3","py-2","text-sm","text-white","bg-gray-900","rounded-md","shadow-lg","whitespace-nowrap","pointer-events-none","opacity-0","transition-opacity","duration-200"].join(" "),q="opacity-100",W={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2",left:"right-full top-1/2 transform -translate-y-1/2 mr-2",right:"left-full top-1/2 transform -translate-y-1/2 ml-2"},_={top:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900",bottom:"absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900",left:"absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900",right:"absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"};function F(o,i){return[V,W[o],i?q:""].join(" ").trim()}function L(o){return _[o]}const B="relative inline-block",t=n.forwardRef(({content:o,position:i="top",trigger:h="hover",delay:v=200,disabled:w=!1,arrow:N=!0,maxWidth:T="320px",children:b,className:j,...C},R)=>{const[x,f]=n.useState(!1),r=n.useRef(null),y=n.useId();if(w)return e.jsx(e.Fragment,{children:b});const a=()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{f(!0)},v)},s=()=>{r.current&&clearTimeout(r.current),f(!1)},S={...h==="hover"&&{onMouseEnter:a,onMouseLeave:s,onFocus:a,onBlur:s},...h==="click"&&{onClick:()=>{x?s():a()}},...h==="focus"&&{onFocus:a,onBlur:s},"aria-describedby":x?y:void 0};return e.jsxs("div",{ref:R,className:k(B,j),...C,children:[e.jsx("div",{...S,children:b}),e.jsxs("div",{id:y,role:"tooltip",className:F(i,x),style:{maxWidth:T},children:[o,N&&e.jsx("div",{className:L(i)})]})]})});t.displayName="Tooltip";try{t.displayName="Tooltip",t.__docgenInfo={description:"Tooltip component for displaying contextual information",displayName:"Tooltip",props:{content:{defaultValue:null,description:"Tooltip content",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"Tooltip position relative to trigger",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},trigger:{defaultValue:{value:"hover"},description:"How the tooltip is triggered",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'}]}},delay:{defaultValue:{value:"200"},description:"Delay before showing tooltip (ms)",name:"delay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Whether tooltip is disabled",name:"disabled",required:!1,type:{name:"boolean"}},arrow:{defaultValue:{value:"true"},description:"Custom arrow display",name:"arrow",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"320px"},description:"Maximum width of tooltip",name:"maxWidth",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Element that triggers the tooltip",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},color:{defaultValue:{value:"'primary'"},description:"Component color theme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"gray"'},{value:'"neutral"'}]}}}}}catch{}const H={title:"Components/Tooltip",component:t,parameters:{docs:{description:{component:"Tooltip component for displaying contextual information on hover, focus, or click."}}},argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"],description:"Tooltip position relative to trigger"},trigger:{control:{type:"select"},options:["hover","click","focus"],description:"How the tooltip is triggered"},delay:{control:{type:"number"},description:"Delay before showing tooltip (ms)"},arrow:{control:{type:"boolean"},description:"Whether to show arrow"}},args:{position:"top",trigger:"hover",delay:200,arrow:!0}},l={args:{content:"This is a helpful tooltip",children:e.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded",children:"Hover me"})}},c={args:{content:"This is a much longer tooltip with more detailed information that spans multiple lines.",maxWidth:"200px",children:e.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded",children:"Long tooltip"})}},p={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-8",children:[e.jsx("div",{className:"text-center",children:e.jsx(t,{content:"Top tooltip",position:"top",children:e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded",children:"Top"})})}),e.jsx("div",{className:"text-center",children:e.jsx(t,{content:"Bottom tooltip",position:"bottom",children:e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded",children:"Bottom"})})}),e.jsx("div",{className:"text-center",children:e.jsx(t,{content:"Left tooltip",position:"left",children:e.jsx("button",{className:"px-4 py-2 bg-yellow-600 text-white rounded",children:"Left"})})}),e.jsx("div",{className:"text-center",children:e.jsx(t,{content:"Right tooltip",position:"right",children:e.jsx("button",{className:"px-4 py-2 bg-red-600 text-white rounded",children:"Right"})})})]}),parameters:{docs:{description:{story:"Tooltips can be positioned on any side of the trigger element."}}}},d={args:{content:"Click to toggle tooltip",trigger:"click",children:e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded",children:"Click me"})}},u={args:{content:"Focus to show tooltip",trigger:"focus",children:e.jsx("input",{className:"px-3 py-2 border rounded",placeholder:"Focus this input"})}},m={args:{content:"Tooltip without arrow",arrow:!1,children:e.jsx("button",{className:"px-4 py-2 bg-gray-600 text-white rounded",children:"No arrow"})}},g={args:{content:e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"Rich Content"}),e.jsx("div",{className:"text-sm",children:"You can include any React content"})]}),maxWidth:"250px",children:e.jsx("button",{className:"px-4 py-2 bg-indigo-600 text-white rounded",children:"Rich tooltip"})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a helpful tooltip',
    children: <button className="px-4 py-2 bg-primary-600 text-white rounded">Hover me</button>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a much longer tooltip with more detailed information that spans multiple lines.',
    maxWidth: '200px',
    children: <button className="px-4 py-2 bg-primary-600 text-white rounded">Long tooltip</button>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-8">
      <div className="text-center">
        <Tooltip content="Top tooltip" position="top">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Top</button>
        </Tooltip>
      </div>
      
      <div className="text-center">
        <Tooltip content="Bottom tooltip" position="bottom">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Bottom</button>
        </Tooltip>
      </div>
      
      <div className="text-center">
        <Tooltip content="Left tooltip" position="left">
          <button className="px-4 py-2 bg-yellow-600 text-white rounded">Left</button>
        </Tooltip>
      </div>
      
      <div className="text-center">
        <Tooltip content="Right tooltip" position="right">
          <button className="px-4 py-2 bg-red-600 text-white rounded">Right</button>
        </Tooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be positioned on any side of the trigger element.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Click to toggle tooltip',
    trigger: 'click',
    children: <button className="px-4 py-2 bg-purple-600 text-white rounded">Click me</button>
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Focus to show tooltip',
    trigger: 'focus',
    children: <input className="px-3 py-2 border rounded" placeholder="Focus this input" />
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip without arrow',
    arrow: false,
    children: <button className="px-4 py-2 bg-gray-600 text-white rounded">No arrow</button>
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: <div>
        <div className="font-semibold">Rich Content</div>
        <div className="text-sm">You can include any React content</div>
      </div>,
    maxWidth: '250px',
    children: <button className="px-4 py-2 bg-indigo-600 text-white rounded">Rich tooltip</button>
  }
}`,...g.parameters?.docs?.source}}};const A=["Default","LongContent","Positions","ClickTrigger","FocusTrigger","WithoutArrow","RichContent"];export{d as ClickTrigger,l as Default,u as FocusTrigger,c as LongContent,p as Positions,g as RichContent,m as WithoutArrow,A as __namedExportsOrder,H as default};
