import{r as s,j as e}from"./iframe-WWlJSg8F.js";import{c as z}from"./index-cjPtjWgh.js";import{c as u}from"./createLucideIcon-B5M5C6C2.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],B=u("facebook",P);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],V=u("github",I);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],R=u("twitter",q),M=["w-full","text-gray-600","bg-gray-50","border-t","border-gray-200"].join(" "),A={simple:"py-6","multi-column":"py-12",social:"py-8",newsletter:"py-10",corporate:"py-16"};function E({variant:r}){return`${M} ${A[r]}`}const c=s.forwardRef(({variant:r="simple",brand:a,columns:h=[],socials:p,newsletter:b,children:f,className:g,...y},v)=>{const N=s.useId(),j=z(E({variant:r}),g),w=()=>e.jsxs("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4",children:[a&&e.jsx("div",{className:"flex-shrink-0",children:a}),e.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," All rights reserved."]}),f&&e.jsx("div",{className:"text-sm",children:f})]}),C=m=>{const x=s.useId();return e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{id:x,className:"font-semibold text-gray-700 dark:text-gray-100 mb-2",children:m.title}),e.jsx("ul",{className:"space-y-1 list-none m-0 p-0","aria-labelledby":x,children:m.links.map(d=>{const F=s.useId();return e.jsx("li",{children:e.jsx("a",{id:F,href:d.href,className:"text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors",children:d.label})},d.href)})})]},m.title)},k=()=>e.jsxs("div",{className:"container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8",children:[a&&e.jsx("div",{className:"sm:col-span-2 lg:col-span-1",children:a}),h.map(C)]}),S=()=>e.jsxs("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4",children:[a&&e.jsx("div",{className:"flex-shrink-0",children:a}),p&&e.jsx("div",{className:"flex items-center space-x-3",children:p})]}),_=()=>{switch(r){case"multi-column":case"corporate":return k();case"social":return S();case"newsletter":return e.jsxs("div",{className:"container mx-auto px-4 space-y-6",children:[a&&e.jsx("div",{children:a}),b]});case"simple":default:return w()}};return e.jsx("footer",{id:N,ref:v,className:j,...y,children:_()})});c.displayName="Footer";try{c.displayName="Footer",c.__docgenInfo={description:'Footer component with a few flexible variants (simple, multi-column, social).\n\nExample:\n```tsx\n<Footer variant="simple" brand={<Logo />} />\n```',displayName:"Footer",props:{variant:{defaultValue:{value:"simple"},description:"Layout/visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"newsletter"'},{value:'"simple"'},{value:'"multi-column"'},{value:'"social"'},{value:'"corporate"'}]}},brand:{defaultValue:null,description:"Brand logo or name",name:"brand",required:!1,type:{name:"ReactNode"}},columns:{defaultValue:{value:"[]"},description:"Columns displayed in multi-column or corporate variants",name:"columns",required:!1,type:{name:"FooterColumn[]"}},socials:{defaultValue:null,description:"Social icons list",name:"socials",required:!1,type:{name:"ReactNode"}},newsletter:{defaultValue:null,description:"Newsletter form",name:"newsletter",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Extra content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},color:{defaultValue:{value:"'primary'"},description:"Component color theme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"gray"'},{value:'"neutral"'}]}}}}}catch{}const D={title:"Components/Footer",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","multi-column","social"]}}},l={args:{variant:"simple",brand:e.jsx("span",{className:"font-semibold text-lg",children:"Brand"})}},t={args:{variant:"multi-column",brand:e.jsx("span",{className:"font-semibold text-lg",children:"Brand"}),columns:[{title:"Company",links:[{label:"About",href:"#"},{label:"Careers",href:"#"},{label:"Press",href:"#"}]},{title:"Resources",links:[{label:"Blog",href:"#"},{label:"Docs",href:"#"},{label:"Support",href:"#"}]}]}},o={args:{variant:"social",brand:e.jsx("span",{className:"font-semibold text-lg",children:"Brand"}),socials:e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#",children:e.jsx(B,{size:20})}),e.jsx("a",{href:"#",children:e.jsx(R,{size:20})}),e.jsx("a",{href:"#",children:e.jsx(V,{size:20})})]})}},n={args:{variant:"newsletter",brand:e.jsx("span",{className:"font-semibold text-lg",children:"Brand"}),newsletter:e.jsxs("form",{className:"flex flex-col sm:flex-row gap-2 sm:gap-0",children:[e.jsx("input",{type:"email",placeholder:"Your email",className:"px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary-600 text-white rounded-r-md",children:"Subscribe"})]})},parameters:{layout:"centered"}},i={args:{variant:"corporate",brand:e.jsx("span",{className:"font-semibold text-lg",children:"CorpInc"}),columns:[{title:"Products",links:[{label:"Platform",href:"#"},{label:"Pricing",href:"#"}]},{title:"Company",links:[{label:"About",href:"#"},{label:"Careers",href:"#"},{label:"Press",href:"#"}]},{title:"Legal",links:[{label:"Privacy",href:"#"},{label:"Terms",href:"#"}]}]},parameters:{layout:"fullscreen"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'simple',
    brand: <span className="font-semibold text-lg">Brand</span>
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'multi-column',
    brand: <span className="font-semibold text-lg">Brand</span>,
    columns: [{
      title: 'Company',
      links: [{
        label: 'About',
        href: '#'
      }, {
        label: 'Careers',
        href: '#'
      }, {
        label: 'Press',
        href: '#'
      }]
    }, {
      title: 'Resources',
      links: [{
        label: 'Blog',
        href: '#'
      }, {
        label: 'Docs',
        href: '#'
      }, {
        label: 'Support',
        href: '#'
      }]
    }]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'social',
    brand: <span className="font-semibold text-lg">Brand</span>,
    socials: <>
        <a href="#"><Facebook size={20} /></a>
        <a href="#"><Twitter size={20} /></a>
        <a href="#"><Github size={20} /></a>
      </>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'newsletter',
    brand: <span className="font-semibold text-lg">Brand</span>,
    newsletter: <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <input type="email" placeholder="Your email" className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
        <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-r-md">Subscribe</button>
      </form>
  },
  parameters: {
    layout: 'centered'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'corporate',
    brand: <span className="font-semibold text-lg">CorpInc</span>,
    columns: [{
      title: 'Products',
      links: [{
        label: 'Platform',
        href: '#'
      }, {
        label: 'Pricing',
        href: '#'
      }]
    }, {
      title: 'Company',
      links: [{
        label: 'About',
        href: '#'
      }, {
        label: 'Careers',
        href: '#'
      }, {
        label: 'Press',
        href: '#'
      }]
    }, {
      title: 'Legal',
      links: [{
        label: 'Privacy',
        href: '#'
      }, {
        label: 'Terms',
        href: '#'
      }]
    }]
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...i.parameters?.docs?.source}}};const Y=["Simple","MultiColumn","Social","Newsletter","Corporate"];export{i as Corporate,t as MultiColumn,n as Newsletter,l as Simple,o as Social,Y as __namedExportsOrder,D as default};
