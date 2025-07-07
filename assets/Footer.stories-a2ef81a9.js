import{b as D,c as E,j as e,a as r,F as G}from"./index-c845a5d8.js";import{r as Y}from"./index-8b3efc3f.js";import{c as p}from"./createLucideIcon-4b38f524.js";import"./_commonjsHelpers-de833af9.js";const H=p("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),O=p("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),J=p("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),K="w-full text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700",Q={simple:"py-6","multi-column":"py-8 md:py-12",social:"py-6",newsletter:"py-8 md:py-12",corporate:"py-8 md:py-12"};function U(n){const{variant:a}=n;return D(K,{variant:Q},{variant:a})}const c=Y.forwardRef(({variant:n="simple",brand:a,columns:_=[],socials:u,newsletter:q,children:f,className:z,...A},I)=>{const M=E(U({variant:n}),z),R=()=>r("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4",children:[a&&e("div",{className:"flex-shrink-0",children:a}),r("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," All rights reserved."]}),f&&e("div",{className:"text-sm",children:f})]}),T=m=>r("div",{className:"space-y-2",children:[e("h4",{className:"font-semibold text-gray-700 dark:text-gray-100 mb-2",children:m.title}),e("ul",{className:"space-y-1 list-none m-0 p-0",children:m.links.map(d=>e("li",{children:e("a",{href:d.href,className:"text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors",children:d.label})},d.href))})]},m.title),j=()=>r("div",{className:"container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8",children:[a&&e("div",{className:"sm:col-span-2 lg:col-span-1",children:a}),_.map(T)]}),L=()=>r("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4",children:[a&&e("div",{className:"flex-shrink-0",children:a}),u&&e("div",{className:"flex items-center space-x-3",children:u})]});return e("footer",{ref:I,className:M,...A,children:(()=>{switch(n){case"multi-column":case"corporate":return j();case"social":return L();case"newsletter":return r("div",{className:"container mx-auto px-4 space-y-6",children:[a&&e("div",{children:a}),q]});case"simple":default:return R()}})()})});c.displayName="Footer";try{c.displayName="Footer",c.__docgenInfo={description:'Footer component with a few flexible variants (simple, multi-column, social).\n\nExample:\n```tsx\n<Footer variant="simple" brand={<Logo />} />\n```',displayName:"Footer",props:{variant:{defaultValue:{value:"simple"},description:"Layout/visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"newsletter"'},{value:'"simple"'},{value:'"multi-column"'},{value:'"social"'},{value:'"corporate"'}]}},brand:{defaultValue:null,description:"Brand logo or name",name:"brand",required:!1,type:{name:"ReactNode"}},columns:{defaultValue:{value:"[]"},description:"Columns displayed in multi-column or corporate variants",name:"columns",required:!1,type:{name:"FooterColumn[]"}},socials:{defaultValue:null,description:"Social icons list",name:"socials",required:!1,type:{name:"ReactNode"}},newsletter:{defaultValue:null,description:"Newsletter form",name:"newsletter",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Extra content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},testId:{defaultValue:null,description:"Test ID for testing purposes",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const ae={title:"Components/Footer",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","multi-column","social"]}}},s={args:{variant:"simple",brand:e("span",{className:"font-semibold text-lg",children:"Brand"})}},t={args:{variant:"multi-column",brand:e("span",{className:"font-semibold text-lg",children:"Brand"}),columns:[{title:"Company",links:[{label:"About",href:"#"},{label:"Careers",href:"#"},{label:"Press",href:"#"}]},{title:"Resources",links:[{label:"Blog",href:"#"},{label:"Docs",href:"#"},{label:"Support",href:"#"}]}]}},l={args:{variant:"social",brand:e("span",{className:"font-semibold text-lg",children:"Brand"}),socials:r(G,{children:[e("a",{href:"#",children:e(H,{size:20})}),e("a",{href:"#",children:e(J,{size:20})}),e("a",{href:"#",children:e(O,{size:20})})]})}},o={args:{variant:"newsletter",brand:e("span",{className:"font-semibold text-lg",children:"Brand"}),newsletter:r("form",{className:"flex flex-col sm:flex-row gap-2 sm:gap-0",children:[e("input",{type:"email",placeholder:"Your email",className:"px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"}),e("button",{type:"submit",className:"px-4 py-2 bg-primary-600 text-white rounded-r-md",children:"Subscribe"})]})},parameters:{layout:"centered"}},i={args:{variant:"corporate",brand:e("span",{className:"font-semibold text-lg",children:"CorpInc"}),columns:[{title:"Products",links:[{label:"Platform",href:"#"},{label:"Pricing",href:"#"}]},{title:"Company",links:[{label:"About",href:"#"},{label:"Careers",href:"#"},{label:"Press",href:"#"}]},{title:"Legal",links:[{label:"Privacy",href:"#"},{label:"Terms",href:"#"}]}]},parameters:{layout:"fullscreen"}};var h,b,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'simple',
    brand: <span className="font-semibold text-lg">Brand</span>
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,x,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var N,w,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'social',
    brand: <span className="font-semibold text-lg">Brand</span>,
    socials: <>
        <a href="#"><Facebook size={20} /></a>
        <a href="#"><Twitter size={20} /></a>
        <a href="#"><Github size={20} /></a>
      </>
  }
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,S,F;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var P,B,V;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(B=i.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const re=["Simple","MultiColumn","Social","Newsletter","Corporate"];export{i as Corporate,t as MultiColumn,o as Newsletter,s as Simple,l as Social,re as __namedExportsOrder,ae as default};
