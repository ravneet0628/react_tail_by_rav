import{r as N,j as e}from"./iframe-WWlJSg8F.js";import{c as k}from"./index-cjPtjWgh.js";const _={xs:"h-1",sm:"h-1.5",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},E={xs:16,sm:20,md:24,lg:32,xl:40,"2xl":48},B={primary:"bg-primary-600",secondary:"bg-gray-600",success:"bg-green-600",warning:"bg-yellow-600",error:"bg-red-600",info:"bg-blue-600",gray:"bg-gray-600",neutral:"bg-neutral-600"},W=["w-full","bg-gray-200","rounded-full","overflow-hidden"].join(" "),F=["h-full","transition-all","duration-300","ease-in-out"].join(" "),T=["animate-pulse","bg-gradient-to-r","from-transparent","via-current","to-transparent"].join(" ");function O(a,s,l){return{container:`${W} ${_[a]}`,bar:[F,B[s],l&&T].filter(Boolean).join(" ")}}function R(a){return{container:"relative inline-flex items-center justify-center",svg:E[a]}}const L="block text-sm font-medium text-gray-900 mb-2",X="text-sm font-medium text-gray-900 text-center mt-1",I="w-full",r=N.forwardRef(({variant:a="linear",size:s="md",color:l="primary",value:n=0,max:c=100,showValue:i=!1,formatValue:u,label:d,indeterminate:o=!1,thickness:j=4,className:z,...S},U)=>{const V=Math.min(Math.max(n/c*100,0),100),C=u?u(n,c):`${Math.round(V)}%`;if(a==="circular"){const{container:M,svg:t}=R(s),P=(t-j*2)/2,m=2*Math.PI*P,D=o?m*.25:m-V/100*m;return e.jsxs("div",{ref:U,className:k(I,z),...S,children:[d&&e.jsx("div",{className:L,children:d}),e.jsxs("div",{className:M,children:[e.jsxs("svg",{width:t,height:t,className:o?"animate-spin":"",children:[e.jsx("circle",{cx:t/2,cy:t/2,r:P,fill:"none",stroke:"currentColor",strokeWidth:j,className:"text-gray-200"}),e.jsx("circle",{cx:t/2,cy:t/2,r:P,fill:"none",stroke:"currentColor",strokeWidth:j,strokeLinecap:"round",strokeDasharray:m,strokeDashoffset:D,className:A(l),style:{transform:"rotate(-90deg)",transformOrigin:"50% 50%",transition:o?"none":"stroke-dashoffset 0.3s ease-in-out"}})]}),i&&!o&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-sm font-medium text-gray-900",children:C})})]})]})}const{container:$,bar:q}=O(s,l,o);return e.jsxs("div",{ref:U,className:k(I,z),...S,children:[d&&e.jsx("div",{className:L,children:d}),e.jsx("div",{className:$,role:"progressbar","aria-valuenow":n,"aria-valuemax":c,children:e.jsx("div",{className:q,style:{width:o?"100%":`${V}%`}})}),i&&!o&&e.jsx("div",{className:X,children:C})]})});r.displayName="Progress";function A(a){const s={primary:"text-primary-600",secondary:"text-gray-600",success:"text-green-600",warning:"text-yellow-600",error:"text-red-600",info:"text-blue-600",gray:"text-gray-600",neutral:"text-neutral-600"};return s[a]||s.primary}try{r.displayName="Progress",r.__docgenInfo={description:"Progress component for showing completion status",displayName:"Progress",props:{variant:{defaultValue:{value:"linear"},description:"Progress variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"circular"'}]}},size:{defaultValue:{value:"md"},description:"Progress size",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},color:{defaultValue:{value:"primary"},description:"Progress color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"gray"'},{value:'"neutral"'}]}},value:{defaultValue:{value:"0"},description:"Progress value (0-100)",name:"value",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},showValue:{defaultValue:{value:"false"},description:"Whether to show value text",name:"showValue",required:!1,type:{name:"boolean"}},formatValue:{defaultValue:null,description:"Custom value formatter",name:"formatValue",required:!1,type:{name:"(value: number, max: number) => string"}},label:{defaultValue:null,description:"Progress label",name:"label",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate state (loading without known progress)",name:"indeterminate",required:!1,type:{name:"boolean"}},thickness:{defaultValue:{value:"4"},description:"Progress bar thickness (for circular variant)",name:"thickness",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const K={title:"Components/Progress",component:r,parameters:{docs:{description:{component:"Progress component for showing completion status with linear and circular variants."}}},argTypes:{variant:{control:{type:"select"},options:["linear","circular"],description:"Progress variant"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Progress size"},color:{control:{type:"select"},options:["primary","secondary","success","warning","error","info"],description:"Progress color"},value:{control:{type:"number",min:0,max:100},description:"Progress value (0-100)"},showValue:{control:{type:"boolean"},description:"Show progress value"},indeterminate:{control:{type:"boolean"},description:"Indeterminate loading state"}},args:{variant:"linear",size:"md",color:"primary",value:50,showValue:!1,indeterminate:!1}},g={args:{variant:"linear",label:"Upload Progress",value:75,showValue:!0}},p={args:{variant:"circular",label:"Loading",value:60,showValue:!0}},v={args:{variant:"linear",label:"Processing...",indeterminate:!0}},x={args:{variant:"circular",label:"Loading...",indeterminate:!0}},h={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{color:"primary",value:70,label:"Primary",showValue:!0}),e.jsx(r,{color:"success",value:85,label:"Success",showValue:!0}),e.jsx(r,{color:"warning",value:45,label:"Warning",showValue:!0}),e.jsx(r,{color:"error",value:25,label:"Error",showValue:!0}),e.jsx(r,{color:"info",value:60,label:"Info",showValue:!0})]}),parameters:{docs:{description:{story:"Progress bars with different semantic colors."}}}},f={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{size:"xs",value:30,label:"Extra Small"}),e.jsx(r,{size:"sm",value:45,label:"Small"}),e.jsx(r,{size:"md",value:60,label:"Medium (default)"}),e.jsx(r,{size:"lg",value:75,label:"Large"}),e.jsx(r,{size:"xl",value:85,label:"Extra Large"}),e.jsx(r,{size:"2xl",value:95,label:"2X Large"})]}),parameters:{docs:{description:{story:"Linear progress bars in different sizes."}}}},y={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{variant:"circular",size:"xs",value:30,showValue:!0}),e.jsx(r,{variant:"circular",size:"sm",value:45,showValue:!0}),e.jsx(r,{variant:"circular",size:"md",value:60,showValue:!0}),e.jsx(r,{variant:"circular",size:"lg",value:75,showValue:!0}),e.jsx(r,{variant:"circular",size:"xl",value:85,showValue:!0}),e.jsx(r,{variant:"circular",size:"2xl",value:95,showValue:!0})]}),parameters:{docs:{description:{story:"Circular progress indicators in different sizes."}}}};function G(){const[a,s]=N.useState(0),[l,n]=N.useState(!1),c=()=>{n(!0),s(0);const i=setInterval(()=>{s(u=>u>=100?(clearInterval(i),n(!1),100):u+Math.random()*15)},200)};return e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"font-medium",children:"File Upload"}),e.jsx("button",{onClick:c,disabled:l,className:"px-4 py-2 bg-primary-600 text-white rounded disabled:opacity-50",children:l?"Uploading...":"Start Upload"})]}),e.jsx(r,{value:a,label:"Upload Progress",showValue:!0,formatValue:i=>`${Math.round(i)}%`}),a===100&&!l&&e.jsx("p",{className:"text-sm text-green-600",children:"Upload completed!"})]})}const b={render:()=>e.jsx(G,{}),parameters:{docs:{description:{story:"Interactive upload progress simulation."}}}},w={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"System Status"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{label:"CPU Usage",value:68,color:"warning",showValue:!0,formatValue:a=>`${a}%`}),e.jsx(r,{label:"Memory Usage",value:45,color:"success",showValue:!0,formatValue:a=>`${a}%`}),e.jsx(r,{label:"Disk Usage",value:85,color:"error",showValue:!0,formatValue:a=>`${a}%`}),e.jsx(r,{label:"Network Usage",value:32,color:"info",showValue:!0,formatValue:a=>`${a}%`})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Project Progress"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"circular",value:75,color:"primary",showValue:!0,size:"lg"}),e.jsx("p",{className:"mt-2 text-sm font-medium",children:"Frontend"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"circular",value:90,color:"success",showValue:!0,size:"lg"}),e.jsx("p",{className:"mt-2 text-sm font-medium",children:"Backend"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"circular",value:45,color:"warning",showValue:!0,size:"lg"}),e.jsx("p",{className:"mt-2 text-sm font-medium",children:"Testing"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"circular",value:20,color:"error",showValue:!0,size:"lg"}),e.jsx("p",{className:"mt-2 text-sm font-medium",children:"Documentation"})]})]})]})]}),parameters:{docs:{description:{story:"Dashboard example showing various progress indicators for system monitoring and project tracking."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'linear',
    label: 'Upload Progress',
    value: 75,
    showValue: true
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    label: 'Loading',
    value: 60,
    showValue: true
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'linear',
    label: 'Processing...',
    indeterminate: true
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    label: 'Loading...',
    indeterminate: true
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Progress color="primary" value={70} label="Primary" showValue />
      <Progress color="success" value={85} label="Success" showValue />
      <Progress color="warning" value={45} label="Warning" showValue />
      <Progress color="error" value={25} label="Error" showValue />
      <Progress color="info" value={60} label="Info" showValue />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Progress bars with different semantic colors.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Progress size="xs" value={30} label="Extra Small" />
      <Progress size="sm" value={45} label="Small" />
      <Progress size="md" value={60} label="Medium (default)" />
      <Progress size="lg" value={75} label="Large" />
      <Progress size="xl" value={85} label="Extra Large" />
      <Progress size="2xl" value={95} label="2X Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Linear progress bars in different sizes.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <Progress variant="circular" size="xs" value={30} showValue />
      <Progress variant="circular" size="sm" value={45} showValue />
      <Progress variant="circular" size="md" value={60} showValue />
      <Progress variant="circular" size="lg" value={75} showValue />
      <Progress variant="circular" size="xl" value={85} showValue />
      <Progress variant="circular" size="2xl" value={95} showValue />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Circular progress indicators in different sizes.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <UploadProgress />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive upload progress simulation.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">System Status</h3>
        
        <div className="space-y-3">
          <Progress label="CPU Usage" value={68} color="warning" showValue formatValue={value => \`\${value}%\`} />
          
          <Progress label="Memory Usage" value={45} color="success" showValue formatValue={value => \`\${value}%\`} />
          
          <Progress label="Disk Usage" value={85} color="error" showValue formatValue={value => \`\${value}%\`} />
          
          <Progress label="Network Usage" value={32} color="info" showValue formatValue={value => \`\${value}%\`} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Project Progress</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <Progress variant="circular" value={75} color="primary" showValue size="lg" />
            <p className="mt-2 text-sm font-medium">Frontend</p>
          </div>
          
          <div className="text-center">
            <Progress variant="circular" value={90} color="success" showValue size="lg" />
            <p className="mt-2 text-sm font-medium">Backend</p>
          </div>
          
          <div className="text-center">
            <Progress variant="circular" value={45} color="warning" showValue size="lg" />
            <p className="mt-2 text-sm font-medium">Testing</p>
          </div>
          
          <div className="text-center">
            <Progress variant="circular" value={20} color="error" showValue size="lg" />
            <p className="mt-2 text-sm font-medium">Documentation</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Dashboard example showing various progress indicators for system monitoring and project tracking.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const Q=["Linear","Circular","Indeterminate","IndeterminateCircular","Colors","LinearSizes","CircularSizes","InteractiveUpload","Dashboard"];export{p as Circular,y as CircularSizes,h as Colors,w as Dashboard,v as Indeterminate,x as IndeterminateCircular,b as InteractiveUpload,g as Linear,f as LinearSizes,Q as __namedExportsOrder,K as default};
