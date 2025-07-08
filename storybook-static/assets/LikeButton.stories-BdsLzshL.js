import{r as h,j as e}from"./iframe-WWlJSg8F.js";import{c as g}from"./index-cjPtjWgh.js";import{c as N}from"./createLucideIcon-B5M5C6C2.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],B=N("heart",z);async function S(n,s){await new Promise(a=>setTimeout(a,800));const p=s.get("itemId")?.toString()||"";try{const a=!n.liked,k=n.count+(a?1:-1);return console.log(`${a?"Liked":"Unliked"} item:`,p),{liked:a,count:k,error:null}}catch{return{...n,error:"Failed to update like status"}}}const t=({itemId:n,initialLiked:s=!1,initialCount:p=0,size:a="md",variant:k="default",showCount:v=!0,disabled:x=!1,onLikeChange:f,className:b,...y})=>{const C=h.useId(),[i,L,o]=h.useActionState(S,{liked:s,count:p,error:null});f&&i.liked!==s&&f(i.liked,i.count);const I={sm:"text-sm px-2 py-1",md:"text-base px-3 py-2",lg:"text-lg px-4 py-3"},w={default:i.liked?"text-red-600 bg-red-50 border-red-200 hover:bg-red-100":"text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100",outline:i.liked?"text-red-600 border-red-600 hover:bg-red-50":"text-gray-600 border-gray-300 hover:bg-gray-50",ghost:i.liked?"text-red-600 hover:bg-red-50":"text-gray-600 hover:bg-gray-50"},j={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"};return e.jsxs("div",{className:g("inline-flex flex-col items-center",b),...y,children:[e.jsxs("form",{action:L,children:[e.jsx("input",{type:"hidden",name:"itemId",value:n}),e.jsxs("button",{id:C,type:"submit",disabled:x||o,className:g("inline-flex items-center gap-2 font-medium rounded-md border transition-all duration-200","focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2","disabled:opacity-50 disabled:cursor-not-allowed",I[a],w[k],o&&"animate-pulse"),"aria-label":i.liked?"Unlike this item":"Like this item","aria-pressed":i.liked,children:[e.jsx(B,{className:g(j[a],"transition-all duration-200",i.liked?"fill-current":"fill-none",o&&"animate-pulse")}),v&&e.jsx("span",{className:"font-medium",children:o?"...":i.count})]})]}),i.error&&e.jsx("div",{className:"mt-1 text-xs text-red-600 bg-red-50 px-2 py-1 rounded",role:"alert","aria-live":"polite",children:i.error})]})};t.displayName="LikeButton";try{t.displayName="LikeButton",t.__docgenInfo={description:`LikeButton component demonstrating React 19's useActionState hook
for simple async actions with optimistic UI updates.`,displayName:"LikeButton",props:{itemId:{defaultValue:null,description:"Unique identifier for the item being liked",name:"itemId",required:!0,type:{name:"string"}},initialLiked:{defaultValue:{value:"false"},description:"Initial liked state",name:"initialLiked",required:!1,type:{name:"boolean"}},initialCount:{defaultValue:{value:"0"},description:"Initial like count",name:"initialCount",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Size of the button",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"Visual variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"ghost"'},{value:'"default"'}]}},showCount:{defaultValue:{value:"true"},description:"Whether to show the like count",name:"showCount",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onLikeChange:{defaultValue:null,description:"Callback fired when like state changes",name:"onLikeChange",required:!1,type:{name:"(liked: boolean, count: number) => void"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Components/LikeButton",component:t,parameters:{docs:{description:{component:"A like button component demonstrating React 19's useActionState hook for simple async actions with optimistic UI updates."}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","outline","ghost"]},onLikeChange:{action:"like-changed"}}},r={args:{itemId:"post-1",initialLiked:!1,initialCount:42}},l={args:{itemId:"post-2",initialLiked:!0,initialCount:128}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{itemId:"post-small",size:"sm",initialCount:5}),e.jsx(t,{itemId:"post-medium",size:"md",initialCount:25}),e.jsx(t,{itemId:"post-large",size:"lg",initialCount:100})]}),parameters:{docs:{description:{story:"Different sizes of the like button."}}}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{itemId:"post-default",variant:"default",initialCount:42}),e.jsx(t,{itemId:"post-outline",variant:"outline",initialCount:42}),e.jsx(t,{itemId:"post-ghost",variant:"ghost",initialCount:42})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{itemId:"post-default-liked",variant:"default",initialLiked:!0,initialCount:43}),e.jsx(t,{itemId:"post-outline-liked",variant:"outline",initialLiked:!0,initialCount:43}),e.jsx(t,{itemId:"post-ghost-liked",variant:"ghost",initialLiked:!0,initialCount:43})]})]}),parameters:{docs:{description:{story:"Different visual variants of the like button, showing both liked and unliked states."}}}},c={args:{itemId:"post-no-count",showCount:!1,initialLiked:!1},parameters:{docs:{description:{story:"Like button without showing the count."}}}},m={args:{itemId:"post-callback",initialCount:25,onLikeChange:(n,s)=>{console.log(`Like changed: ${n?"liked":"unliked"}, new count: ${s}`)}},parameters:{docs:{description:{story:"Like button with a callback to handle like state changes."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    itemId: 'post-1',
    initialLiked: false,
    initialCount: 42
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    itemId: 'post-2',
    initialLiked: true,
    initialCount: 128
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <LikeButton itemId="post-small" size="sm" initialCount={5} />
      <LikeButton itemId="post-medium" size="md" initialCount={25} />
      <LikeButton itemId="post-large" size="lg" initialCount={100} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of the like button.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <LikeButton itemId="post-default" variant="default" initialCount={42} />
        <LikeButton itemId="post-outline" variant="outline" initialCount={42} />
        <LikeButton itemId="post-ghost" variant="ghost" initialCount={42} />
      </div>
      <div className="flex items-center gap-4">
        <LikeButton itemId="post-default-liked" variant="default" initialLiked initialCount={43} />
        <LikeButton itemId="post-outline-liked" variant="outline" initialLiked initialCount={43} />
        <LikeButton itemId="post-ghost-liked" variant="ghost" initialLiked initialCount={43} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the like button, showing both liked and unliked states.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    itemId: 'post-no-count',
    showCount: false,
    initialLiked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Like button without showing the count.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    itemId: 'post-callback',
    initialCount: 25,
    onLikeChange: (liked, count) => {
      console.log(\`Like changed: \${liked ? 'liked' : 'unliked'}, new count: \${count}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Like button with a callback to handle like state changes.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const D=["Default","Liked","Sizes","Variants","WithoutCount","WithCallback"];export{r as Default,l as Liked,d as Sizes,u as Variants,m as WithCallback,c as WithoutCount,D as __namedExportsOrder,A as default};
