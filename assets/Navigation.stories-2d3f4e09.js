import{b as ae,a as o,c as l,j as a}from"./index-c845a5d8.js";import{r as A}from"./index-8b3efc3f.js";import{X as re}from"./x-fe9534fd.js";import"./_commonjsHelpers-de833af9.js";import"./createLucideIcon-4b38f524.js";const ne="w-full",te={horizontal:"flex items-center justify-between space-x-4",vertical:"flex flex-col space-y-2",breadcrumb:"flex space-x-2 text-sm",tabs:"flex space-x-4 border-b",pagination:"inline-flex space-x-1",mobile:"flex items-center justify-between",mega:"relative"};function le(t){const{variant:s}=t;return ae(ne,{variant:te},{variant:s})}const M=A.forwardRef(({variant:t="horizontal",items:s,activeItem:u,onItemClick:r,logo:p,actions:g,className:d,...c},b)=>{var _,q;const[k,V]=A.useState(!1),[T,y]=A.useState(null),m=le({variant:t});if(t==="mobile")return o("nav",{ref:b,className:l(m,d,"relative"),"aria-label":"Mobile Navigation",...c,children:[o("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700",children:[p&&a("div",{className:"flex-shrink-0",children:p}),o("button",{type:"button",className:"p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500","aria-controls":"mobile-menu","aria-expanded":k,onClick:()=>V(e=>!e),children:[k?a(re,{className:"w-6 h-6","aria-hidden":"true"}):a("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 6h18M3 12h18M3 18h18"})}),a("span",{className:"sr-only",children:"Toggle navigation"})]})]}),k&&a("div",{id:"mobile-menu",className:"absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md",children:o("ul",{className:"flex flex-col py-2 list-none m-0 p-0",role:"menu",children:[s.map(e=>a("li",{children:o("button",{type:"button",role:"menuitem",className:l("w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",e.id===u&&"bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"),onClick:()=>{V(!1),r==null||r(e)},disabled:e.disabled,children:[e.icon&&a("span",{className:"mr-2 inline-flex",children:e.icon}),e.label]})},e.id)),g&&a("li",{className:"border-t border-gray-200 dark:border-gray-700 mt-2 px-4 py-2",children:g})]})})]});if(t==="mega")return o("nav",{ref:b,className:l(m,d,"relative"),"aria-label":"Mega Navigation",onMouseLeave:()=>y(null),...c,children:[a("ul",{role:"menubar",className:"flex items-center space-x-4 px-4 py-3 list-none m-0 p-0",children:s.map(e=>{const n=Array.isArray(e.children)&&e.children.length>0;return a("li",{className:"relative",children:a("button",{type:"button",role:"menuitem",className:l("px-2 py-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors",e.id===u&&"text-primary-600 dark:text-primary-400"),onMouseEnter:()=>n&&y(e.id),onFocus:()=>n&&y(e.id),onClick:()=>{n||r==null||r(e)},children:e.label})},e.id)})}),T&&a("div",{className:"absolute left-0 top-full w-full bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 py-6 z-10","data-testid":"mega-panel",children:a("div",{className:"max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6",children:(q=(_=s.find(e=>e.id===T))==null?void 0:_.children)==null?void 0:q.map(e=>a("a",{href:e.href,className:"block text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400",onClick:n=>{n.preventDefault(),r==null||r(e),y(null)},children:e.label},e.id))})})]});const C=e=>{const n=e.id===u,i=l("px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors",n?"bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300":"text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50");return a("li",{children:o("button",{type:"button",className:i,onClick:()=>r==null?void 0:r(e),disabled:e.disabled,children:[e.icon&&a("span",{className:"mr-2 inline-flex",children:e.icon}),e.label]})},e.id)};if(t==="breadcrumb")return a("nav",{ref:b,"aria-label":"Breadcrumb",className:l(m,d),...c,children:a("ol",{className:"flex space-x-2 text-sm list-none m-0 p-0",children:s.map((e,n)=>{const i=n===s.length-1,ee=l("inline-flex items-center",!i&&"text-primary-600 hover:underline dark:text-primary-400",i&&"text-gray-500 dark:text-gray-300 cursor-default");return o("li",{className:"inline-flex items-center",children:[n>0&&a("span",{className:"mx-1 text-gray-400",children:"/"}),a("button",{type:"button",className:ee,disabled:i||e.disabled,onClick:()=>!i&&(r==null?void 0:r(e)),children:e.label})]},e.id)})})});if(t==="tabs")return a("nav",{ref:b,className:l(m,d),"aria-label":"Tabs",...c,children:a("ul",{role:"tablist",className:"flex space-x-4 list-none m-0 p-0",children:s.map(e=>{const n=e.id===u,i=l("px-4 py-2 text-sm font-medium focus:outline-none transition-colors",n?"text-primary-600 border-b-2 border-primary-600 dark:text-primary-400":"text-gray-600 hover:text-primary-600 border-b-2 border-transparent dark:text-gray-300 dark:hover:text-primary-400");return a("li",{children:a("button",{role:"tab",type:"button",className:i,"aria-selected":n,onClick:()=>r==null?void 0:r(e),disabled:e.disabled,id:`tab-${e.id}`,children:e.label})},e.id)})})});if(t==="pagination")return a("nav",{ref:b,className:l(m,d),"aria-label":"Pagination",...c,children:a("ul",{className:"inline-flex items-center space-x-1 list-none m-0 p-0",children:s.map(e=>{const n=e.id===u,i=l("px-3 py-1.5 text-sm rounded-md",n?"bg-primary-600 text-white":"bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700");return a("li",{children:a("button",{type:"button",className:i,onClick:()=>r==null?void 0:r(e),disabled:e.disabled,"aria-current":n?"page":void 0,children:e.label})},e.id)})})});const I=t==="vertical"?"flex flex-col items-start space-y-1 list-none m-0 p-0":"flex-1 flex items-center space-x-2 list-none m-0 p-0";return o("nav",{ref:b,className:l(m,d),...c,children:[p&&a("div",{className:t==="vertical"?"mb-4":"flex-shrink-0 mr-6",children:p}),a("ul",{className:I,children:s.map(C)}),g&&a("div",{className:t==="vertical"?"mt-4 flex items-center space-x-2":"ml-6 flex items-center space-x-2",children:g})]})});M.displayName="Navigation";try{M.displayName="Navigation",M.__docgenInfo={description:"Navigation component – currently implements the horizontal variant.",displayName:"Navigation",props:{variant:{defaultValue:{value:"horizontal"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"mobile"'},{value:'"breadcrumb"'},{value:'"tabs"'},{value:'"pagination"'},{value:'"mega"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NavigationItem[]"}},activeItem:{defaultValue:null,description:"",name:"activeItem",required:!1,type:{name:"string"}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!1,type:{name:"((item: NavigationItem) => void)"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},testId:{defaultValue:null,description:"Test ID for testing purposes",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const be={title:"Components/Navigation",component:M},h={args:{items:[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],activeItem:"home"}},x={args:{variant:"vertical",items:[{id:"dashboard",label:"Dashboard"},{id:"settings",label:"Settings"},{id:"profile",label:"Profile"}]},parameters:{layout:"centered"}},v={args:{variant:"breadcrumb",items:[{id:"home",label:"Home"},{id:"library",label:"Library"},{id:"data",label:"Data"}]},parameters:{layout:"padded"}},f={args:{variant:"tabs",activeItem:"tab1",items:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}]}},N={args:{variant:"pagination",activeItem:"2",items:[{id:"prev",label:"‹",disabled:!0},{id:"1",label:"1"},{id:"2",label:"2"},{id:"3",label:"3"},{id:"next",label:"›"}]},parameters:{layout:"centered"}},S={args:{variant:"mobile",items:[{id:"home",label:"Home"},{id:"services",label:"Services"},{id:"contact",label:"Contact"}],logo:a("span",{className:"font-bold",children:"Brand"})},parameters:{viewport:{defaultViewport:"mobile2"}}},w={args:{variant:"mega",items:[{id:"solutions",label:"Solutions",children:[{id:"analytics",label:"Analytics"},{id:"commerce",label:"Commerce"},{id:"marketing",label:"Marketing"},{id:"insights",label:"Insights"}]},{id:"company",label:"Company",children:[{id:"about",label:"About"},{id:"blog",label:"Blog"},{id:"careers",label:"Careers"}]}]},parameters:{layout:"fullscreen"}};var z,B,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var j,D,L;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(D=x.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,O,E;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(O=v.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var R,F,W;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(F=f.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var X,$,G;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(G=($=N.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const me=["Horizontal","Vertical","Breadcrumb","Tabs","Pagination","Mobile","Mega"];export{v as Breadcrumb,h as Horizontal,w as Mega,S as Mobile,N as Pagination,f as Tabs,x as Vertical,me as __namedExportsOrder,be as default};
