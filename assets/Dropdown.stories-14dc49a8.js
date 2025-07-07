import{o as ye,a as c,c as C,j as a,F as he}from"./index-c845a5d8.js";import{r as o,R as xe}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const k=({variant:n="select",options:u=[],value:i,placeholder:p="Select…",label:_,onChange:t,className:ie,searchable:ce,renderOption:G,loadOptions:q})=>{const[m,b]=o.useState(!1),d=n==="multi",[s,v]=o.useState(i??(d?[]:void 0)),P=o.useRef(null),D=n==="searchable"||ce,[f,I]=o.useState(""),ue=n==="grouped",pe=n==="custom",T=n==="combobox",N=n==="async",[j,de]=o.useState(null),[B,F]=o.useState(!1),[me,R]=o.useState(typeof s=="string"?s:"");o.useEffect(()=>ye(P.current,()=>b(!1)),[]),o.useEffect(()=>{i!==void 0&&v(i)},[i]),o.useEffect(()=>{N&&m&&q&&(F(!0),q(f).then(e=>{de(e)}).finally(()=>F(!1)))},[N,m,f]);const $=(()=>{const e=N&&j?j:u;return ue?e.map(r=>"options"in r?{label:r.label,options:r.options}:{options:[r]}):[{options:e}]})(),be=e=>D?e.filter(r=>r.label.toLowerCase().includes(f.toLowerCase())):e,ve=$.flatMap(e=>e.options),A=d?void 0:ve.find(e=>e.value===s),fe=$.map(e=>({label:e.label,options:be(e.options)})),ge=e=>{if(T)R(e.label),v(e.value),t==null||t(e.value),b(!1);else if(d){const r=Array.isArray(s)?[...s]:[],l=r.indexOf(e.value);l>=0?r.splice(l,1):r.push(e.value),v(r),t==null||t(r)}else v(e.value),t==null||t(e.value),b(!1)},V=e=>d?s.includes(e):s===e;return c("div",{className:C("relative inline-block w-64",ie),ref:P,children:[_&&a("label",{className:"block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300",children:_}),c("button",{type:"button",className:"w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center justify-between",onClick:()=>b(e=>!e),"aria-haspopup":"listbox","aria-expanded":m,children:[T?a("input",{type:"text",value:me,onChange:e=>{R(e.target.value),I(e.target.value),m||b(!0)},placeholder:p,className:"flex-1 bg-transparent focus:outline-none"}):a("span",{className:C(d&&Array.isArray(s)&&s.length>0||A?"":"text-gray-400"),children:d?Array.isArray(s)&&s.length>0?`${s.length} selected`:p:A?A.label:p}),a("svg",{className:"w-4 h-4 text-gray-500 ml-2",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24","aria-hidden":"true",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 9l6 6 6-6"})})]}),m&&c("div",{children:[D&&a("div",{className:"p-2 border-b border-gray-200 dark:border-gray-700",children:a("input",{type:"text",value:f,onChange:e=>I(e.target.value),placeholder:"Search...",className:"w-full px-2 py-1 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})}),c("ul",{role:"listbox",className:"absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none",children:[B&&a("li",{className:"px-3 py-2 text-sm text-gray-500",children:"Loading..."}),!B&&fe.map((e,r)=>c(xe.Fragment,{children:[e.label&&a("li",{className:"px-3 py-1 text-xs font-semibold text-gray-500",role:"presentation",children:e.label}),e.options.map(l=>a("li",{role:"option","aria-selected":V(l.value),className:C("px-3 py-2 cursor-pointer select-none flex items-center gap-2",V(l.value)?"bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300":"hover:bg-gray-100 dark:hover:bg-gray-700"),onClick:()=>!l.disabled&&ge(l),children:pe&&G?G(l,V(l.value)):c(he,{children:[l.icon&&a("span",{className:"w-4 h-4",children:l.icon}),a("span",{children:l.label})]})},l.value))]},r))]})]})]})};try{k.displayName="Dropdown",k.__docgenInfo={description:"",displayName:"Dropdown",props:{variant:{defaultValue:{value:"select"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"combobox"'},{value:'"searchable"'},{value:'"select"'},{value:'"multi"'},{value:'"grouped"'},{value:'"custom"'},{value:'"async"'}]}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"DropdownOptionOrGroup[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | (string | number)[]"}},placeholder:{defaultValue:{value:"Select…"},description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},searchable:{defaultValue:null,description:"",name:"searchable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string | number | (string | number)[]) => void)"}},renderOption:{defaultValue:null,description:"custom render function used when variant is custom",name:"renderOption",required:!1,type:{name:"((option: DropdownOption, selected: boolean) => ReactNode)"}},loadOptions:{defaultValue:null,description:"async loader used for async variant; receives search term",name:"loadOptions",required:!1,type:{name:"((search: string) => Promise<DropdownOptionOrGroup[]>)"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},testId:{defaultValue:null,description:"Test ID for testing purposes",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const Ne={title:"Components/Dropdown",component:k},g={args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Choose",label:"Select an option"}},y={args:{variant:"multi",options:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],placeholder:"Fruits",label:"Pick fruits"}},h={args:{variant:"searchable",options:Array.from({length:20}).map((n,u)=>({label:`Item ${u+1}`,value:u+1})),placeholder:"Search items",label:"Searchable"}},x={args:{variant:"grouped",options:[{label:"Fruits",options:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"}]},{label:"Vegetables",options:[{label:"Carrot",value:"carrot"},{label:"Broccoli",value:"broccoli"}]}],placeholder:"Select item",label:"Grouped"}},S={args:{variant:"custom",options:[{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue"}],placeholder:"Pick color",renderOption:n=>c("div",{className:"flex items-center gap-2",children:[a("span",{className:"inline-block w-3 h-3 rounded-full",style:{backgroundColor:n.value}}),a("span",{children:n.label})]})}},w={render:()=>a(k,{variant:"async",placeholder:"Async",loadOptions:async u=>(await new Promise(i=>setTimeout(i,500)),Array.from({length:5}).map((i,p)=>({label:`${u||"Item"} ${p+1}`,value:p})))})},O={args:{variant:"combobox",options:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"},{label:"Python",value:"py"}],placeholder:"Type or select…",label:"Combobox"}};var L,E,M;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }],
    placeholder: 'Choose',
    label: 'Select an option'
  }
}`,...(M=(E=g.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var z,J,W;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'multi',
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Orange',
      value: 'orange'
    }, {
      label: 'Banana',
      value: 'banana'
    }],
    placeholder: 'Fruits',
    label: 'Pick fruits'
  }
}`,...(W=(J=y.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var H,K,Q;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'searchable',
    options: Array.from({
      length: 20
    }).map((_, i) => ({
      label: \`Item \${i + 1}\`,
      value: i + 1
    })),
    placeholder: 'Search items',
    label: 'Searchable'
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'grouped',
    options: [{
      label: 'Fruits',
      options: [{
        label: 'Apple',
        value: 'apple'
      }, {
        label: 'Orange',
        value: 'orange'
      }]
    }, {
      label: 'Vegetables',
      options: [{
        label: 'Carrot',
        value: 'carrot'
      }, {
        label: 'Broccoli',
        value: 'broccoli'
      }]
    }],
    placeholder: 'Select item',
    label: 'Grouped'
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'custom',
    options: [{
      label: 'Red',
      value: 'red'
    }, {
      label: 'Green',
      value: 'green'
    }, {
      label: 'Blue',
      value: 'blue'
    }],
    placeholder: 'Pick color',
    renderOption: opt => <div className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full" style={{
        backgroundColor: opt.value as string
      }} />
        <span>{opt.label}</span>
      </div>
  }
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,le,ne;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const load = async (search: string) => {
      await new Promise(r => setTimeout(r, 500));
      return Array.from({
        length: 5
      }).map((_, i) => ({
        label: \`\${search || 'Item'} \${i + 1}\`,
        value: i
      }));
    };
    return <Dropdown variant="async" placeholder="Async" loadOptions={load} />;
  }
}`,...(ne=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,oe,te;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: 'combobox',
    options: [{
      label: 'JavaScript',
      value: 'js'
    }, {
      label: 'TypeScript',
      value: 'ts'
    }, {
      label: 'Python',
      value: 'py'
    }],
    placeholder: 'Type or select…',
    label: 'Combobox'
  }
}`,...(te=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const Ae=["Select","Multi","Searchable","Grouped","Custom","Async","Combobox"];export{w as Async,O as Combobox,S as Custom,x as Grouped,y as Multi,h as Searchable,g as Select,Ae as __namedExportsOrder,Ne as default};
