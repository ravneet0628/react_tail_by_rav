import{r as T,j as e}from"./iframe-WWlJSg8F.js";import{c as E}from"./index-cjPtjWgh.js";import{I as g,C as D,T as x,a as P}from"./triangle-alert-piroe68E.js";import{c as k}from"./createLucideIcon-B5M5C6C2.js";import{X as V}from"./x-BC4_H0FJ.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],w=k("bell",R),W=["rounded-lg","border","p-4","text-sm","flex","items-start","gap-3","leading-normal","transition-all","duration-200","ease-in-out"].join(" "),q={info:["bg-blue-50","border-blue-200","text-blue-800"].join(" "),success:["bg-green-50","border-green-200","text-green-800"].join(" "),warning:["bg-yellow-50","border-yellow-200","text-yellow-800"].join(" "),error:["bg-red-50","border-red-200","text-red-800"].join(" "),banner:["bg-gray-50","border-gray-200","text-gray-800","rounded-none","border-l-4","border-l-blue-500"].join(" "),toast:["bg-white","border-gray-200","text-gray-800","shadow-lg","shadow-gray-200/50"].join(" "),inline:["bg-transparent","border-transparent","text-gray-700","p-2"].join(" ")};function M(t){const r=typeof t=="string"?t:t.variant;return`${W} ${q[r]}`.trim()}function Y(t){const r={info:"text-blue-500",success:"text-green-500",warning:"text-yellow-500",error:"text-red-500",banner:"text-blue-500",toast:"text-gray-500",inline:"text-gray-500"};return`${["w-5","h-5","flex-shrink-0","mt-0.5"].join(" ")} ${r[t]}`}function _(){return["font-medium","text-base","leading-normal","mb-1"].join(" ")}function U(){return["text-sm","leading-normal","opacity-90"].join(" ")}function F(){return["ml-auto","pl-3","cursor-pointer","text-gray-400","hover:text-gray-600","focus:outline-none","focus:ring-2","focus:ring-gray-500","focus:ring-offset-2","rounded","transition-colors","duration-150","flex-shrink-0","w-5","h-5"].join(" ")}const L=F,$=U,s=T.forwardRef(({variant:t="info",title:r,dismissible:y=!1,icon:a=!0,onDismiss:j,children:b,className:A,...N},S)=>{const v=!!a,I=M({variant:t}),f=a?null:{info:g,success:P,warning:x,error:D,banner:w,toast:g,inline:g}[t],C=()=>{j?.()};return e.jsxs("div",{ref:S,className:E(I,A),role:"alert","aria-live":t==="error"?"assertive":"polite",...N,children:[v&&(a||f)&&e.jsx("div",{className:Y(t),children:a||f&&e.jsx(f,{className:"w-5 h-5"})}),y&&e.jsx("button",{type:"button",className:L(),onClick:C,"aria-label":"Dismiss alert",children:e.jsx(V,{className:"w-4 h-4"})}),e.jsxs("div",{className:v?"ml-2":"",children:[r&&e.jsx("div",{className:_(),children:r}),b&&e.jsx("div",{className:$(),children:b})]})]})});s.displayName="Alert";try{s.displayName="Alert",s.__docgenInfo={description:"Alert component for displaying important messages to users",displayName:"Alert",props:{variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},dismissible:{defaultValue:{value:"false"},description:"",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!1,type:{name:"() => void"}},icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}}}catch{}const G={title:"Components/Alert",component:s,parameters:{docs:{description:{component:"A versatile alert component for displaying important messages and notifications."}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"],description:"Semantic variant of the alert",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},title:{control:{type:"text"},description:"Alert title",table:{type:{summary:"string"}}},dismissible:{control:{type:"boolean"},description:"Whether the alert can be dismissed",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},icon:{control:{type:"boolean"},description:"Whether to show an icon",table:{type:{summary:"ReactNode | boolean"},defaultValue:{summary:"true"}}},children:{control:{type:"text"},description:"Alert content",table:{type:{summary:"ReactNode"}}}},args:{variant:"info",title:"",dismissible:!1,icon:!0,children:"This is an alert message."}},i={args:{variant:"info",title:"Information",children:"This is an informational alert message."},parameters:{docs:{description:{story:"Info alerts are used for general information and neutral messages."}}}},n={args:{variant:"success",title:"Success",children:"Your operation was completed successfully!"},parameters:{docs:{description:{story:"Success alerts indicate that an action was completed successfully."}}}},o={args:{variant:"warning",title:"Warning",children:"Please review the information before proceeding."},parameters:{docs:{description:{story:"Warning alerts draw attention to important information that needs consideration."}}}},l={args:{variant:"error",title:"Error",children:"An error occurred while processing your request."},parameters:{docs:{description:{story:"Error alerts indicate that something went wrong and needs attention."}}}},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"info",title:"Information",icon:!1,children:"This alert has no icon."}),e.jsx(s,{variant:"success",title:"Success",icon:!1,children:"This success alert has no icon."})]}),parameters:{docs:{description:{story:"Alerts can be displayed without icons for a cleaner look."}}}},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"info",title:"Custom Icon",icon:e.jsx(w,{className:"w-5 h-5"}),children:"This alert uses a custom icon."}),e.jsx(s,{variant:"warning",title:"Another Custom Icon",icon:e.jsx(x,{className:"w-5 h-5"}),children:"You can provide any React element as an icon."})]}),parameters:{docs:{description:{story:"You can provide custom icons by passing a React element to the icon prop."}}}},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"info",title:"Dismissible Info",dismissible:!0,onDismiss:()=>console.log("Info dismissed"),children:"You can dismiss this alert by clicking the X button."}),e.jsx(s,{variant:"warning",title:"Dismissible Warning",dismissible:!0,onDismiss:()=>console.log("Warning dismissed"),children:"This warning can also be dismissed."})]}),parameters:{docs:{description:{story:"Alerts can be made dismissible with a close button."}}}},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"info",title:"Title Only Alert"}),e.jsx(s,{variant:"success",children:"This alert has content but no title."}),e.jsx(s,{variant:"warning",title:"Rich Content",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"This alert contains rich content:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Multiple paragraphs"}),e.jsx("li",{children:"Lists and other elements"}),e.jsx("li",{children:"Complex formatting"})]})]})}),e.jsxs(s,{variant:"error",title:"Detailed Error Information",children:[e.jsx("p",{className:"mb-2",children:"An error occurred while processing your request. This could be due to several reasons:"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-1 mb-2",children:[e.jsx("li",{children:"Network connectivity issues"}),e.jsx("li",{children:"Server timeout"}),e.jsx("li",{children:"Invalid data format"})]}),e.jsx("p",{className:"text-sm",children:"Please try again later or contact support if the problem persists."})]})]}),parameters:{docs:{description:{story:"Alerts can contain various types of content including rich HTML."}}}},p={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Form Validation"}),e.jsxs(s,{variant:"error",title:"Validation Error",children:["Please correct the following fields:",e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Email address is required"}),e.jsx("li",{children:"Password must be at least 8 characters"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"System Status"}),e.jsx(s,{variant:"warning",title:"Scheduled Maintenance",dismissible:!0,children:"System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Success Feedback"}),e.jsx(s,{variant:"success",title:"Profile Updated",dismissible:!0,children:"Your profile information has been successfully updated."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Helpful Information"}),e.jsx(s,{variant:"info",title:"Pro Tip",children:"You can use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette."})]})]}),parameters:{docs:{description:{story:"Real-world examples of how alerts are used in different contexts."}}}},h={args:{variant:"info",title:"Playground Alert",children:"Use the controls below to experiment with different alert configurations.",dismissible:!1,icon:!0},parameters:{docs:{description:{story:"Use the controls below to experiment with different alert configurations."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Info alerts are used for general information and neutral messages.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your operation was completed successfully!'
  },
  parameters: {
    docs: {
      description: {
        story: 'Success alerts indicate that an action was completed successfully.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review the information before proceeding.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning alerts draw attention to important information that needs consideration.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    children: 'An error occurred while processing your request.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Error alerts indicate that something went wrong and needs attention.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert variant="info" title="Information" icon={false}>
        This alert has no icon.
      </Alert>
      <Alert variant="success" title="Success" icon={false}>
        This success alert has no icon.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be displayed without icons for a cleaner look.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert variant="info" title="Custom Icon" icon={<Bell className="w-5 h-5" />}>
        This alert uses a custom icon.
      </Alert>
      <Alert variant="warning" title="Another Custom Icon" icon={<AlertTriangle className="w-5 h-5" />}>
        You can provide any React element as an icon.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'You can provide custom icons by passing a React element to the icon prop.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert variant="info" title="Dismissible Info" dismissible onDismiss={() => console.log('Info dismissed')}>
        You can dismiss this alert by clicking the X button.
      </Alert>
      <Alert variant="warning" title="Dismissible Warning" dismissible onDismiss={() => console.log('Warning dismissed')}>
        This warning can also be dismissed.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be made dismissible with a close button.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {/* Title only */}
      <Alert variant="info" title="Title Only Alert" />
      
      {/* Content only */}
      <Alert variant="success">
        This alert has content but no title.
      </Alert>
      
      {/* Rich content */}
      <Alert variant="warning" title="Rich Content">
        <div>
          <p className="mb-2">This alert contains rich content:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Multiple paragraphs</li>
            <li>Lists and other elements</li>
            <li>Complex formatting</li>
          </ul>
        </div>
      </Alert>
      
      {/* Long content */}
      <Alert variant="error" title="Detailed Error Information">
        <p className="mb-2">
          An error occurred while processing your request. This could be due to several reasons:
        </p>
        <ol className="list-decimal list-inside space-y-1 mb-2">
          <li>Network connectivity issues</li>
          <li>Server timeout</li>
          <li>Invalid data format</li>
        </ol>
        <p className="text-sm">
          Please try again later or contact support if the problem persists.
        </p>
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts can contain various types of content including rich HTML.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {/* Form Validation */}
      <div>
        <h4 className="font-semibold mb-2">Form Validation</h4>
        <Alert variant="error" title="Validation Error">
          Please correct the following fields:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Email address is required</li>
            <li>Password must be at least 8 characters</li>
          </ul>
        </Alert>
      </div>
      
      {/* System Status */}
      <div>
        <h4 className="font-semibold mb-2">System Status</h4>
        <Alert variant="warning" title="Scheduled Maintenance" dismissible>
          System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST.
        </Alert>
      </div>
      
      {/* Success Feedback */}
      <div>
        <h4 className="font-semibold mb-2">Success Feedback</h4>
        <Alert variant="success" title="Profile Updated" dismissible>
          Your profile information has been successfully updated.
        </Alert>
      </div>
      
      {/* Information */}
      <div>
        <h4 className="font-semibold mb-2">Helpful Information</h4>
        <Alert variant="info" title="Pro Tip">
          You can use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette.
        </Alert>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of how alerts are used in different contexts.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Playground Alert',
    children: 'Use the controls below to experiment with different alert configurations.',
    dismissible: false,
    icon: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to experiment with different alert configurations.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const J=["Info","Success","Warning","Error","WithoutIcons","CustomIcons","Dismissible","ContentVariations","UsageExamples","Playground"];export{u as ContentVariations,d as CustomIcons,m as Dismissible,l as Error,i as Info,h as Playground,n as Success,p as UsageExamples,o as Warning,c as WithoutIcons,J as __namedExportsOrder,G as default};
