import{r,j as e}from"./iframe-WWlJSg8F.js";import{c as C}from"./index-cjPtjWgh.js";import{C as _,T as I,a as V,I as E}from"./triangle-alert-piroe68E.js";import{X as q}from"./x-BC4_H0FJ.js";import{r as A}from"./index-72wPkfki.js";import"./createLucideIcon-B5M5C6C2.js";import"./index-f5spyehB.js";const P=["max-w-sm","w-full","bg-white","border","rounded-lg","shadow-lg","pointer-events-auto","p-4","transition-all","duration-300","ease-in-out"].join(" "),D={info:["border-blue-200","bg-blue-50"].join(" "),success:["border-green-200","bg-green-50"].join(" "),warning:["border-yellow-200","bg-yellow-50"].join(" "),error:["border-red-200","bg-red-50"].join(" ")},W={"top-left":"top-4 left-4","top-center":"top-4 left-1/2 transform -translate-x-1/2","top-right":"top-4 right-4","bottom-left":"bottom-4 left-4","bottom-center":"bottom-4 left-1/2 transform -translate-x-1/2","bottom-right":"bottom-4 right-4"};function U(t){return`${P} ${D[t]}`.trim()}function $(t){return`fixed z-50 pointer-events-none ${W[t]} flex flex-col gap-2`.trim()}const z="w-5 h-5 flex-shrink-0",R="text-sm font-medium text-gray-900",B="text-sm text-gray-600 mt-1",X=["ml-auto","flex-shrink-0","rounded-md","p-1.5","text-gray-400","hover:text-gray-600","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-primary-500","transition-colors"].join(" "),Y=["text-sm","font-medium","text-primary-600","hover:text-primary-500","focus:outline-none","focus:underline","ml-auto","flex-shrink-0"].join(" "),m=r.forwardRef(({variant:t="info",title:s,description:o,dismissible:p=!0,duration:n=5e3,onDismiss:i,icon:c,action:d,className:T,...a},u)=>{r.useEffect(()=>{if(n>0&&i){const k=setTimeout(i,n);return()=>clearTimeout(k)}},[n,i]);const l=c===null?null:c||{info:E,success:V,warning:I,error:_}[t],j=()=>{i?.()};return e.jsx("div",{ref:u,className:C(U(t),T),role:"alert","aria-live":"polite",...a,children:e.jsxs("div",{className:"flex items-start",children:[l&&e.jsx("div",{className:C(z,M(t)),children:typeof l=="function"?e.jsx(l,{}):l}),e.jsxs("div",{className:"ml-3 flex-1",children:[s&&e.jsx("p",{className:R,children:s}),o&&e.jsx("div",{className:B,children:o})]}),e.jsxs("div",{className:"ml-4 flex flex-shrink-0 space-x-2",children:[d&&e.jsx("button",{type:"button",className:Y,onClick:d.onClick,children:d.label}),p&&e.jsx("button",{type:"button",className:X,onClick:j,"aria-label":"Dismiss notification",children:e.jsx(q,{className:"w-4 h-4"})})]})]})})});m.displayName="Toast";function M(t){const s={info:"text-blue-500",success:"text-green-500",warning:"text-yellow-500",error:"text-red-500"};return s[t]||s.info}try{m.displayName="Toast",m.__docgenInfo={description:"Toast component for displaying temporary notification messages",displayName:"Toast",props:{variant:{defaultValue:{value:"info"},description:"Toast variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},title:{defaultValue:null,description:"Toast title",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Toast description/content",name:"description",required:!1,type:{name:"ReactNode"}},dismissible:{defaultValue:{value:"true"},description:"Whether the toast can be dismissed",name:"dismissible",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"5000"},description:"Auto dismiss duration in milliseconds",name:"duration",required:!1,type:{name:"number"}},onDismiss:{defaultValue:null,description:"Dismiss callback",name:"onDismiss",required:!1,type:{name:"() => void"}},icon:{defaultValue:null,description:"Custom icon",name:"icon",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"Action button",name:"action",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},color:{defaultValue:{value:"'primary'"},description:"Component color theme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"gray"'},{value:'"neutral"'}]}}}}}catch{}const N=r.createContext(null);function O(){const t=r.useContext(N);if(!t)throw new Error("useToast must be used within a ToastProvider");return t}function S({children:t,position:s="top-right",maxToasts:o=5}){const[p,n]=r.useState([]),i=r.useCallback(a=>{const u=Math.random().toString(36).substring(2,9),f={...a,id:u};n(l=>[f,...l].slice(0,o))},[o]),c=r.useCallback(a=>{n(u=>u.filter(f=>f.id!==a))},[]),d=r.useCallback(()=>{n([])},[]),T={toasts:p,addToast:i,removeToast:c,clearToasts:d};return e.jsxs(N.Provider,{value:T,children:[t,typeof document<"u"&&A.createPortal(e.jsx("div",{className:$(s),children:p.map(a=>e.jsx(m,{...a,onDismiss:()=>c(a.id)},a.id))}),document.body)]})}try{S.displayName="ToastProvider",S.__docgenInfo={description:"",displayName:"ToastProvider",props:{position:{defaultValue:{value:"top-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'}]}},maxToasts:{defaultValue:{value:"5"},description:"",name:"maxToasts",required:!1,type:{name:"number"}}}}}catch{}const ee={title:"Components/Toast",component:m,parameters:{docs:{description:{component:"Toast component for displaying temporary notification messages with automatic dismissal and action support."}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"],description:"Visual style variant"},dismissible:{control:{type:"boolean"},description:"Whether the toast can be dismissed"},duration:{control:{type:"number"},description:"Auto dismiss duration in milliseconds"}},args:{variant:"info",dismissible:!0,duration:5e3}},g={args:{variant:"info",title:"Information",description:"This is an informational toast message."}},v={args:{variant:"success",title:"Success!",description:"Your changes have been saved successfully."}},h={args:{variant:"warning",title:"Warning",description:"Please review your input before continuing."}},b={args:{variant:"error",title:"Error",description:"Something went wrong. Please try again."}},y={args:{variant:"info",title:"Update Available",description:"A new version is available for download.",action:{label:"Update",onClick:()=>alert("Update clicked!")}}},x={args:{variant:"warning",title:"Important Notice",description:"This message cannot be dismissed.",dismissible:!1}};function F(){const{addToast:t}=O(),s=o=>{t({variant:o,title:`${o.charAt(0).toUpperCase()+o.slice(1)} Toast`,description:`This is a ${o} toast message.`})};return e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Toast System Demo"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Click buttons to show toasts"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>s("info"),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Show Info"}),e.jsx("button",{onClick:()=>s("success"),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"Show Success"}),e.jsx("button",{onClick:()=>s("warning"),className:"px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700",children:"Show Warning"}),e.jsx("button",{onClick:()=>s("error"),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"Show Error"})]})]})}const w={render:()=>e.jsx(S,{position:"top-right",children:e.jsx(F,{})}),parameters:{docs:{description:{story:"Complete toast notification system with provider and hook integration."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    description: 'This is an informational toast message.'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Your changes have been saved successfully.'
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Please review your input before continuing.'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    description: 'Something went wrong. Please try again.'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Update Available',
    description: 'A new version is available for download.',
    action: {
      label: 'Update',
      onClick: () => alert('Update clicked!')
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Important Notice',
    description: 'This message cannot be dismissed.',
    dismissible: false
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="top-right">
      <ToastExample />
    </ToastProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Complete toast notification system with provider and hook integration.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const te=["Info","Success","Warning","Error","WithAction","NonDismissible","ToastSystem"];export{b as Error,g as Info,x as NonDismissible,v as Success,w as ToastSystem,h as Warning,y as WithAction,te as __namedExportsOrder,ee as default};
