import{r as t,j as e}from"./iframe-WWlJSg8F.js";import{c as p}from"./index-cjPtjWgh.js";import{C as oe}from"./chevron-down-mTHlZmkw.js";import{S as ne}from"./search-CW3TpS0c.js";import{c as P}from"./createLucideIcon-B5M5C6C2.js";import{U as ie}from"./user-BoVg1Vsh.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],de=P("check",ce);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ue=P("globe",pe);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],he=P("settings",me),c=({variant:s="select",options:n=[],value:l,placeholder:b="Select...",label:u,onChange:i,className:K,searchable:H=!1,renderOption:W,loadOptions:g,disabled:q=!1,error:E})=>{const R=t.useId(),I=t.useId(),J=t.useId(),[d,M]=t.useState(!1),[m,Q]=t.useState(""),[X,U]=t.useState([]),[_,F]=t.useState(!1),k=t.useRef(null),h=s==="multiselect",B=s==="searchable"||H,T=!!g;t.useEffect(()=>{const a=r=>{k.current&&!k.current.contains(r.target)&&M(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),t.useEffect(()=>{T&&d&&g&&(F(!0),g(m).then(U).catch(()=>U([])).finally(()=>F(!1)))},[T,d,m,g]);const y=(T?X:n).flatMap(a=>"options"in a?a.options:[a]),G=B&&m?y.filter(a=>a.label.toLowerCase().includes(m.toLowerCase())):y,f=h?y.filter(a=>Array.isArray(l)&&l.includes(a.value)):y.find(a=>a.value===l),Y=a=>{if(!a.disabled)if(h){const r=Array.isArray(l)?l:[],te=r.includes(a.value)?r.filter(le=>le!==a.value):[...r,a.value];i?.(te)}else i?.(a.value),M(!1)},Z=a=>h?Array.isArray(l)&&l.includes(a.value):l===a.value,ee=()=>{if(h){const r=Array.isArray(f)?f:[];return r.length>0?`${r.length} selected`:b}const a=f;return a?a.label:b},ae=p("w-full bg-white border border-gray-300 rounded-lg px-3 py-2","text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500","flex items-center justify-between cursor-pointer","transition-colors duration-200",q&&"bg-gray-100 cursor-not-allowed opacity-60",E&&"border-red-500 focus:ring-red-500","min-h-11"),se=p("absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg","max-h-60 overflow-auto focus:outline-none"),re=(a,r)=>p("px-3 py-2 cursor-pointer flex items-center justify-between","text-sm hover:bg-gray-50",r&&"bg-primary-50 text-primary-700",a.disabled&&"opacity-50 cursor-not-allowed");return e.jsxs("div",{className:p("relative w-full",K),ref:k,children:[u&&e.jsx("label",{id:I,htmlFor:R,className:"block mb-2 text-sm font-medium text-gray-700",children:u}),e.jsxs("button",{id:R,type:"button",className:ae,onClick:()=>!q&&M(!d),disabled:q,"aria-haspopup":"listbox","aria-expanded":d,"aria-labelledby":u?I:void 0,"aria-controls":J,children:[e.jsx("span",{className:p(!f&&"text-gray-500"),children:ee()}),e.jsx(oe,{className:p("w-4 h-4 text-gray-400 transition-transform duration-200",d&&"rotate-180")})]}),E&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:E}),d&&e.jsxs("div",{className:se,children:[B&&e.jsx("div",{className:"p-2 border-b border-gray-200",children:e.jsxs("div",{className:"relative",children:[e.jsx(ne,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),e.jsx("input",{type:"text",className:"w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"Search...",value:m,onChange:a=>Q(a.target.value)})]})}),e.jsxs("ul",{id:J,role:"listbox","aria-multiselectable":h,"aria-labelledby":u?I:void 0,children:[_&&e.jsxs("li",{className:"px-3 py-2 text-sm text-gray-500 flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 border-2 border-gray-300 border-t-primary-500 rounded-full animate-spin"}),"Loading..."]}),!_&&G.length===0&&e.jsx("li",{className:"px-3 py-2 text-sm text-gray-500",children:"No options found"}),!_&&G.map(a=>{const r=Z(a);return e.jsxs("li",{role:"option","aria-selected":r,className:re(a,r),onClick:()=>Y(a),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[a.icon&&e.jsx("span",{className:"w-4 h-4",children:a.icon}),e.jsx("span",{children:W?W(a,r):a.label})]}),r&&e.jsx(de,{className:"w-4 h-4 text-primary-600"})]},a.value)})]})]})]})};try{c.displayName="Dropdown",c.__docgenInfo={description:"Simplified Dropdown component with essential functionality",displayName:"Dropdown",props:{variant:{defaultValue:{value:"select"},description:"Dropdown variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"multiselect"'},{value:'"searchable"'}]}},options:{defaultValue:{value:"[]"},description:"Dropdown options (can be grouped)",name:"options",required:!1,type:{name:"(DropdownOption | DropdownOptionGroup)[]"}},value:{defaultValue:null,description:"Current value",name:"value",required:!1,type:{name:"string | number | (string | number)[]"}},placeholder:{defaultValue:{value:"Select..."},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"(value: string | number | (string | number)[]) => void"}},searchable:{defaultValue:{value:"false"},description:"Search functionality",name:"searchable",required:!1,type:{name:"boolean"}},renderOption:{defaultValue:null,description:"Custom option renderer",name:"renderOption",required:!1,type:{name:"(option: DropdownOption, isSelected: boolean) => ReactNode"}},loadOptions:{defaultValue:null,description:"Async option loader",name:"loadOptions",required:!1,type:{name:"(searchTerm: string) => Promise<DropdownOption[]>"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},color:{defaultValue:{value:"'primary'"},description:"Component color theme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"gray"'},{value:'"neutral"'}]}},children:{defaultValue:null,description:"Children content",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const we={title:"Components/Dropdown",component:c,parameters:{docs:{description:{component:"Flexible dropdown component supporting single selection, multiple selection, and searchable options. Optimized for accessibility and keyboard navigation."}}},argTypes:{variant:{control:{type:"select"},options:["select","multiselect","searchable"],description:"Dropdown behavior variant"},disabled:{control:{type:"boolean"},description:"Disable the dropdown"},searchable:{control:{type:"boolean"},description:"Enable search functionality"}},args:{variant:"select",placeholder:"Select an option...",disabled:!1,searchable:!1}},o=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"}],$=[{label:"Profile",value:"profile",icon:e.jsx(ie,{size:16})},{label:"Settings",value:"settings",icon:e.jsx(he,{size:16})},{label:"Language",value:"language",icon:e.jsx(ue,{size:16})}],v={args:{options:o,label:"Choose a fruit"}},x={args:{options:o,value:"banana",label:"Pre-selected option"}},S={args:{options:$,label:"Select action",placeholder:"Choose an action..."}},w={args:{variant:"multiselect",options:o,label:"Select multiple fruits",placeholder:"Choose one or more..."}},C={args:{variant:"searchable",options:o,label:"Searchable dropdown",placeholder:"Search and select..."}},N={render:()=>{const[s,n]=t.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:o,value:s,onChange:n,label:"Controlled dropdown",placeholder:"Select a fruit..."}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected value: ",e.jsx("code",{children:JSON.stringify(s)})]})]})}},j={render:()=>{const[s,n]=t.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{variant:"multiselect",options:o,value:s,onChange:l=>n(l),label:"Multi-select controlled",placeholder:"Select multiple fruits..."}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected values: ",e.jsx("code",{children:JSON.stringify(s)})]})]})}},O={args:{options:o,disabled:!0,value:"apple",label:"Disabled dropdown"}},V={args:{options:o,label:"Dropdown with error",error:"Please select a valid option",placeholder:"This field has an error..."}},D={args:{options:[],label:"Empty dropdown",placeholder:"No options available"}},z={args:{options:$,label:"Custom option rendering",renderOption:(s,n)=>e.jsxs("div",{className:"flex items-center gap-3",children:[s.icon,e.jsx("span",{className:n?"font-semibold":"",children:s.label}),n&&e.jsx("span",{className:"text-xs text-primary-600",children:"(selected)"})]})}},A={render:()=>{const[s,n]=t.useState(""),l=async b=>(await new Promise(i=>setTimeout(i,1e3)),["United States","Canada","United Kingdom","Germany","France","Japan","Australia","Brazil","India","China"].filter(i=>i.toLowerCase().includes(b.toLowerCase())).map(i=>({label:i,value:i.toLowerCase().replace(/\s+/g,"-")})));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{variant:"searchable",options:[],value:s,onChange:n,loadOptions:l,label:"Async country search",placeholder:"Type to search countries..."}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected: ",e.jsx("code",{children:s})]})]})}},L={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{options:o,size:"sm",label:"Small dropdown",placeholder:"Small size..."}),e.jsx(c,{options:o,size:"md",label:"Medium dropdown (default)",placeholder:"Medium size..."}),e.jsx(c,{options:o,size:"lg",label:"Large dropdown",placeholder:"Large size..."})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: 'Choose a fruit'
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    value: 'banana',
    label: 'Pre-selected option'
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    label: 'Select action',
    placeholder: 'Choose an action...'
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'multiselect',
    options: basicOptions,
    label: 'Select multiple fruits',
    placeholder: 'Choose one or more...'
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'searchable',
    options: basicOptions,
    label: 'Searchable dropdown',
    placeholder: 'Search and select...'
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number | (string | number)[]>('');
    return <div className="space-y-4">
        <Dropdown options={basicOptions} value={value} onChange={setValue} label="Controlled dropdown" placeholder="Select a fruit..." />
        <p className="text-sm text-gray-600">
          Selected value: <code>{JSON.stringify(value)}</code>
        </p>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
    return <div className="space-y-4">
        <Dropdown variant="multiselect" options={basicOptions} value={selectedValues} onChange={values => setSelectedValues(values as (string | number)[])} label="Multi-select controlled" placeholder="Select multiple fruits..." />
        <p className="text-sm text-gray-600">
          Selected values: <code>{JSON.stringify(selectedValues)}</code>
        </p>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    value: 'apple',
    label: 'Disabled dropdown'
  }
}`,...O.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: 'Dropdown with error',
    error: 'Please select a valid option',
    placeholder: 'This field has an error...'
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    label: 'Empty dropdown',
    placeholder: 'No options available'
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    options: optionsWithIcons,
    label: 'Custom option rendering',
    renderOption: (option, isSelected) => <div className="flex items-center gap-3">
        {option.icon}
        <span className={isSelected ? 'font-semibold' : ''}>{option.label}</span>
        {isSelected && <span className="text-xs text-primary-600">(selected)</span>}
      </div>
  }
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    const loadOptions = async (searchTerm: string): Promise<DropdownOption[]> => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan', 'Australia', 'Brazil', 'India', 'China'];
      return countries.filter(country => country.toLowerCase().includes(searchTerm.toLowerCase())).map(country => ({
        label: country,
        value: country.toLowerCase().replace(/\\s+/g, '-')
      }));
    };
    return <div className="space-y-4">
        <Dropdown variant="searchable" options={[]} // Options loaded async
      value={value} onChange={setValue} loadOptions={loadOptions} label="Async country search" placeholder="Type to search countries..." />
        <p className="text-sm text-gray-600">
          Selected: <code>{value}</code>
        </p>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Dropdown options={basicOptions} size="sm" label="Small dropdown" placeholder="Small size..." />
      <Dropdown options={basicOptions} size="md" label="Medium dropdown (default)" placeholder="Medium size..." />
      <Dropdown options={basicOptions} size="lg" label="Large dropdown" placeholder="Large size..." />
    </div>
}`,...L.parameters?.docs?.source}}};const Ce=["Default","WithValue","WithIcons","Multiselect","Searchable","Controlled","MultiselectControlled","Disabled","WithError","EmptyOptions","CustomRenderer","AsyncOptions","Sizes"];export{A as AsyncOptions,N as Controlled,z as CustomRenderer,v as Default,O as Disabled,D as EmptyOptions,w as Multiselect,j as MultiselectControlled,C as Searchable,L as Sizes,V as WithError,S as WithIcons,x as WithValue,Ce as __namedExportsOrder,we as default};
