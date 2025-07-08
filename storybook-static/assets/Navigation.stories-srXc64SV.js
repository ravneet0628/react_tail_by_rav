import{r as w,j as a}from"./iframe-WWlJSg8F.js";import{c as t}from"./index-cjPtjWgh.js";import{X as D}from"./x-BC4_H0FJ.js";import{c as H}from"./createLucideIcon-B5M5C6C2.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],O=H("menu",A),E=t("w-full"),L={horizontal:t("bg-white border-b border-gray-200","shadow-sm"),vertical:t("bg-white border-r border-gray-200","w-64 h-full"),breadcrumb:t("py-2"),tabs:t("border-b border-gray-200")},P=t("inline-flex items-center px-3 py-2","text-sm font-medium","transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2","rounded-md"),I={default:"text-gray-700 hover:text-primary-600 hover:bg-gray-50",active:"text-primary-600 bg-primary-50",disabled:"text-gray-400 cursor-not-allowed opacity-50"};function R(r){return t(E,L[r])}function C(r,s=!1,o=!1){const l=[P];return o?l.push(I.disabled):s?l.push(I.active):l.push(I.default),r==="vertical"&&l.push("w-full justify-start"),r==="breadcrumb"&&l.push("p-1 text-primary-600 hover:underline"),r==="tabs"&&l.push("border-b-2 border-transparent",s&&"border-primary-500"),t(...l)}function K(){return t("md:hidden p-2 rounded-md","text-gray-400 hover:text-gray-500 hover:bg-gray-100","focus:outline-none focus:ring-2 focus:ring-primary-500")}function X(){return t("mx-2 text-gray-400")}const N=w.forwardRef(({variant:r="horizontal",items:s,activeItem:o,onItemClick:l,logo:k,actions:M,className:z,...d},c)=>{const m=w.useId(),[j,_]=w.useState(!1),b=e=>{e.disabled||(e.href&&(e.target==="_blank"?window.open(e.href,"_blank","noopener,noreferrer"):window.location.href=e.href),l?.(e),r==="horizontal"&&_(!1))},V=(e,n)=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),b(n))},S=(e=!1)=>s.map(n=>{const i=n.id===o,T=C(r,i,n.disabled);return a.jsxs("button",{type:"button",className:t(T,e&&"w-full justify-start"),onClick:()=>b(n),onKeyDown:q=>V(q,n),disabled:n.disabled,"aria-current":i?"page":void 0,"aria-label":n["aria-label"]||n.label,children:[n.icon&&a.jsx("span",{className:"mr-2 w-4 h-4","aria-hidden":"true",children:n.icon}),n.label]},n.id)}),B=()=>s.map((e,n)=>{const i=n===s.length-1;return a.jsxs("div",{className:"flex items-center",children:[n>0&&a.jsx("span",{className:X(),children:"/"}),a.jsx("button",{type:"button",className:C(r,!1,i||e.disabled),disabled:i||e.disabled,onClick:()=>!i&&b(e),"aria-current":i?"page":void 0,children:e.label})]},e.id)}),u=t(R(r),z);return r==="breadcrumb"?a.jsx("nav",{ref:c,id:m,className:u,"aria-label":"Breadcrumb",...d,children:a.jsx("div",{className:"flex items-center space-x-0",children:B()})}):r==="vertical"?a.jsx("nav",{ref:c,id:m,className:u,"aria-label":"Sidebar navigation",...d,children:a.jsx("div",{className:"p-4 space-y-2",children:S()})}):r==="tabs"?a.jsx("nav",{ref:c,id:m,className:u,role:"tablist",...d,children:a.jsx("div",{className:"flex space-x-8",children:s.map(e=>{const n=e.id===o;return a.jsxs("button",{type:"button",role:"tab","aria-selected":n,className:C(r,n,e.disabled),onClick:()=>b(e),disabled:e.disabled,children:[e.icon&&a.jsx("span",{className:"mr-2 w-4 h-4",children:e.icon}),e.label]},e.id)})})}):a.jsxs("nav",{ref:c,id:m,className:u,"aria-label":"Main navigation",...d,children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between h-16",children:[k&&a.jsx("div",{className:"flex items-center",children:k}),a.jsx("div",{className:"hidden md:flex md:items-center md:space-x-8",children:S()}),M&&a.jsx("div",{className:"flex items-center space-x-4",children:M}),a.jsx("div",{className:"md:hidden flex items-center",children:a.jsx("button",{type:"button",className:K(),onClick:()=>_(!j),"aria-label":"Toggle mobile menu",children:j?a.jsx(D,{size:24}):a.jsx(O,{size:24})})})]})}),j&&a.jsx("div",{className:"md:hidden",children:a.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200",children:S(!0)})})]})});N.displayName="Navigation";try{N.displayName="Navigation",N.__docgenInfo={description:"Simplified Navigation component focusing on essential patterns",displayName:"Navigation",props:{variant:{defaultValue:{value:"horizontal"},description:"Navigation style variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"breadcrumb"'},{value:'"tabs"'}]}},items:{defaultValue:null,description:"Navigation items",name:"items",required:!0,type:{name:"NavigationItem[]"}},activeItem:{defaultValue:null,description:"Currently active item ID",name:"activeItem",required:!1,type:{name:"string"}},onItemClick:{defaultValue:null,description:"Item click handler",name:"onItemClick",required:!1,type:{name:"(item: NavigationItem) => void"}},logo:{defaultValue:null,description:"Optional logo/brand element",name:"logo",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"Optional action elements (buttons, etc.)",name:"actions",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}}}catch{}const U={title:"Components/Navigation",component:N},p={args:{items:[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],activeItem:"home"}},g={args:{variant:"vertical",items:[{id:"dashboard",label:"Dashboard"},{id:"settings",label:"Settings"},{id:"profile",label:"Profile"}]},parameters:{layout:"centered"}},f={args:{variant:"breadcrumb",items:[{id:"home",label:"Home"},{id:"library",label:"Library"},{id:"data",label:"Data"}]},parameters:{layout:"padded"}},h={args:{variant:"tabs",activeItem:"tab1",items:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}]}},v={args:{variant:"pagination",activeItem:"2",items:[{id:"prev",label:"‹",disabled:!0},{id:"1",label:"1"},{id:"2",label:"2"},{id:"3",label:"3"},{id:"next",label:"›"}]},parameters:{layout:"centered"}},y={args:{variant:"mobile",items:[{id:"home",label:"Home"},{id:"services",label:"Services"},{id:"contact",label:"Contact"}],logo:a.jsx("span",{className:"font-bold",children:"Brand"})},parameters:{viewport:{defaultViewport:"mobile2"}}},x={args:{variant:"mega",items:[{id:"solutions",label:"Solutions",children:[{id:"analytics",label:"Analytics"},{id:"commerce",label:"Commerce"},{id:"marketing",label:"Marketing"},{id:"insights",label:"Insights"}]},{id:"company",label:"Company",children:[{id:"about",label:"About"},{id:"blog",label:"Blog"},{id:"careers",label:"Careers"}]}]},parameters:{layout:"fullscreen"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'about',
      label: 'About'
    }, {
      id: 'contact',
      label: 'Contact'
    }],
    activeItem: 'home'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'vertical',
    items: [{
      id: 'dashboard',
      label: 'Dashboard'
    }, {
      id: 'settings',
      label: 'Settings'
    }, {
      id: 'profile',
      label: 'Profile'
    }]
  },
  parameters: {
    layout: 'centered'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'breadcrumb',
    items: [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'library',
      label: 'Library'
    }, {
      id: 'data',
      label: 'Data'
    }]
  },
  parameters: {
    layout: 'padded'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tabs',
    activeItem: 'tab1',
    items: [{
      id: 'tab1',
      label: 'Tab 1'
    }, {
      id: 'tab2',
      label: 'Tab 2'
    }, {
      id: 'tab3',
      label: 'Tab 3'
    }]
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pagination',
    activeItem: '2',
    items: [{
      id: 'prev',
      label: '‹',
      disabled: true
    }, {
      id: '1',
      label: '1'
    }, {
      id: '2',
      label: '2'
    }, {
      id: '3',
      label: '3'
    }, {
      id: 'next',
      label: '›'
    }]
  },
  parameters: {
    layout: 'centered'
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mobile',
    items: [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'services',
      label: 'Services'
    }, {
      id: 'contact',
      label: 'Contact'
    }],
    logo: <span className="font-bold">Brand</span>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mega',
    items: [{
      id: 'solutions',
      label: 'Solutions',
      children: [{
        id: 'analytics',
        label: 'Analytics'
      }, {
        id: 'commerce',
        label: 'Commerce'
      }, {
        id: 'marketing',
        label: 'Marketing'
      }, {
        id: 'insights',
        label: 'Insights'
      }]
    }, {
      id: 'company',
      label: 'Company',
      children: [{
        id: 'about',
        label: 'About'
      }, {
        id: 'blog',
        label: 'Blog'
      }, {
        id: 'careers',
        label: 'Careers'
      }]
    }]
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...x.parameters?.docs?.source}}};const W=["Horizontal","Vertical","Breadcrumb","Tabs","Pagination","Mobile","Mega"];export{f as Breadcrumb,p as Horizontal,x as Mega,y as Mobile,v as Pagination,h as Tabs,g as Vertical,W as __namedExportsOrder,U as default};
