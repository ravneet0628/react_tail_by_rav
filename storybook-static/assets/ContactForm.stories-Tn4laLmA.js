import{r as g,j as s}from"./iframe-WWlJSg8F.js";import{c as p}from"./index-cjPtjWgh.js";import{I as u}from"./Input-Bc1tuKzh.js";import{B as f}from"./Button-RLJE7G7l.js";async function b(r,a){await new Promise(e=>setTimeout(e,1500));const o=a.get("name")?.toString()||"",t=a.get("email")?.toString()||"",n=a.get("message")?.toString()||"";if(!o.trim())return{success:!1,message:"Name is required",errors:{name:"Please enter your name"}};if(!t.trim()||!t.includes("@"))return{success:!1,message:"Please enter a valid email address",errors:{email:"Valid email is required"}};if(!n.trim()||n.length<10)return{success:!1,message:"Message must be at least 10 characters long",errors:{message:"Please provide a more detailed message"}};try{return console.log("Submitting contact form:",{name:o,email:t,message:n}),{success:!0,message:"Thank you! Your message has been sent successfully.",data:{name:o,email:t,message:n}}}catch{return{success:!1,message:"Failed to send message. Please try again.",errors:{general:"Network error occurred"}}}}const d=({className:r,onSuccess:a,onError:o,...t})=>{const n=g.useId(),[e,h,c]=g.useActionState(b,{success:null,message:"",errors:{}});return e.success===!0&&a&&e.data&&a(e.data),e.success===!1&&o&&o(e.message,e.errors),s.jsx("div",{className:p("w-full max-w-md mx-auto",r),...t,children:s.jsxs("form",{action:h,className:"space-y-4",children:[s.jsx("div",{children:s.jsx(u,{name:"name",label:"Name",placeholder:"Your full name",required:!0,error:e.errors?.name,disabled:c})}),s.jsx("div",{children:s.jsx(u,{name:"email",type:"email",label:"Email",placeholder:"your@email.com",required:!0,error:e.errors?.email,disabled:c})}),s.jsx("div",{children:s.jsx(u,{name:"message",variant:"textarea",label:"Message",placeholder:"Tell us how we can help...",rows:4,required:!0,error:e.errors?.message,disabled:c})}),s.jsx(f,{type:"submit",variant:"primary",fullWidth:!0,loading:c,disabled:c,children:c?"Sending...":"Send Message"}),e.message&&s.jsx("div",{className:p("mt-4 p-3 rounded-md text-sm",e.success?"bg-[oklch(var(--color-success-50))] text-[oklch(var(--color-success-800))] border border-[oklch(var(--color-success-200))]":"bg-[oklch(var(--color-danger-50))] text-[oklch(var(--color-danger-800))] border border-[oklch(var(--color-danger-200))]"),role:e.success?"status":"alert","aria-live":"polite",children:e.message}),e.success&&s.jsx(f,{type:"button",variant:"outline",onClick:()=>{document.getElementById(n)?.reset()},children:"Send Another Message"})]})})};d.displayName="ContactForm";try{d.displayName="ContactForm",d.__docgenInfo={description:`ContactForm component demonstrating React 19's useActionState hook
for form submission with built-in loading states and error handling.`,displayName:"ContactForm",props:{onSuccess:{defaultValue:null,description:"Callback fired when form is successfully submitted",name:"onSuccess",required:!1,type:{name:"(data: ContactFormData) => void"}},onError:{defaultValue:null,description:"Callback fired when form submission fails",name:"onError",required:!1,type:{name:"(message: string, errors?: ContactFormErrors | undefined) => void"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}}}catch{}const S={title:"Components/ContactForm",component:d,parameters:{docs:{description:{component:"A form component demonstrating React 19's useActionState hook for handling form submissions with built-in loading states, error handling, and success messages."}}},argTypes:{onSuccess:{action:"success"},onError:{action:"error"}}},l={args:{onSuccess:r=>console.log("Form submitted successfully:",r),onError:(r,a)=>console.error("Form submission failed:",r,a)}},i={args:{onSuccess:r=>{alert(`Thank you ${r.name}! We'll get back to you at ${r.email}`)},onError:r=>{alert(`Error: ${r}`)}},parameters:{docs:{description:{story:"Example showing how to handle success and error callbacks for integration with your application."}}}},m={args:{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"},parameters:{docs:{description:{story:"ContactForm with custom styling applied."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onSuccess: data => console.log('Form submitted successfully:', data),
    onError: (message, errors) => console.error('Form submission failed:', message, errors)
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onSuccess: data => {
      alert(\`Thank you \${data.name}! We'll get back to you at \${data.email}\`);
    },
    onError: message => {
      alert(\`Error: \${message}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to handle success and error callbacks for integration with your application.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'
  },
  parameters: {
    docs: {
      description: {
        story: 'ContactForm with custom styling applied.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const C=["Default","WithCallbacks","Styled"];export{l as Default,m as Styled,i as WithCallbacks,C as __namedExportsOrder,S as default};
