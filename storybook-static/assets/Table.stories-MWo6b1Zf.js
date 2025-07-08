import{r as x,j as e}from"./iframe-WWlJSg8F.js";import{B as ne}from"./Badge-CjYH4jTS.js";import{c as i}from"./index-cjPtjWgh.js";import{c as le}from"./createLucideIcon-B5M5C6C2.js";import{C as oe}from"./chevron-down-mTHlZmkw.js";import{L as ce}from"./loader-circle-Be4ZKRbM.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],de=le("chevron-up",ie),d=({variant:l="basic",columns:c,data:p,selectable:g=!1,sortable:L=!1,sort:B,onSort:I,selectedRows:A=[],onRowSelect:h,loading:q=!1,emptyMessage:P="No data available",caption:M,className:$,size:_="md",...F})=>{const G=x.useId(),[H,Q]=x.useState(B||null),[W,U]=x.useState(A),m=B||H,b=A.length>0?A:W,u=m?[...p].sort((a,s)=>{const o=a[m.column],t=s[m.column];return o<t?m.direction==="asc"?-1:1:o>t?m.direction==="asc"?1:-1:0}):p,X=a=>{if(!L)return;const s=m?.column===a&&m.direction==="asc"?"desc":"asc";I?I(a,s):Q({column:a,direction:s})},Y=(a,s)=>{const o=s?[...b,a]:b.filter(t=>t!==a);if(h){const t=u.filter(y=>o.includes(y.id));h(t)}else U(o)},Z=a=>{const s=a?u.map(o=>o.id):[];h?h(a?u:[]):U(s)},K=u.length>0&&b.length===u.length,ee=b.length>0&&b.length<u.length,ae={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},J={xs:"px-2 py-1",sm:"px-3 py-2",md:"px-4 py-3",lg:"px-5 py-4",xl:"px-6 py-5","2xl":"px-8 py-6"},te=i("w-full border-collapse bg-white",ae[_],l==="bordered"&&"border border-gray-300",$),O=i("bg-gray-50 border-b border-gray-200","font-semibold text-gray-900 text-left",J[_]),v=i("border-b border-gray-200",J[_],"text-gray-700"),se=a=>i(l==="striped"&&a%2===1&&"bg-gray-50","hover:bg-gray-50 transition-colors duration-150");return e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{id:G,className:te,...F,children:[M&&e.jsx("caption",{className:"sr-only",children:M}),e.jsx("thead",{children:e.jsxs("tr",{children:[g&&e.jsx("th",{className:i(O,"w-12"),children:e.jsx("input",{type:"checkbox",checked:K,ref:a=>{a&&(a.indeterminate=ee)},onChange:a=>Z(a.target.checked),className:"w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500","aria-label":"Select all rows"})}),c.map(a=>{const s=m?.column===a.key,o=s?m?.direction:null,t=L&&a.sortable!==!1;return e.jsx("th",{className:i(O,t&&"cursor-pointer hover:bg-gray-100",a.align==="center"&&"text-center",a.align==="right"&&"text-right"),style:{width:a.width},onClick:()=>t&&X(a.key),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:a.label}),t&&e.jsxs("div",{className:"flex flex-col",children:[e.jsx(de,{className:i("w-3 h-3",s&&o==="asc"?"text-primary-600":"text-gray-400")}),e.jsx(oe,{className:i("w-3 h-3 -mt-1",s&&o==="desc"?"text-primary-600":"text-gray-400")})]})]})},a.key)})]})}),e.jsxs("tbody",{children:[q&&e.jsx("tr",{children:e.jsx("td",{colSpan:c.length+(g?1:0),className:i(v,"text-center py-8"),children:e.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-500",children:[e.jsx(ce,{className:"w-5 h-5 animate-spin"}),"Loading..."]})})}),!q&&u.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:c.length+(g?1:0),className:i(v,"text-center py-8 text-gray-500"),children:P})}),!q&&u.map((a,s)=>{const o=b.includes(a.id);return e.jsxs("tr",{className:se(s),children:[g&&e.jsx("td",{className:v,children:e.jsx("input",{type:"checkbox",checked:o,onChange:t=>Y(a.id,t.target.checked),className:"w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500","aria-label":`Select row ${s+1}`})}),c.map(t=>{const y=a[t.key],re=t.render?t.render(y,a,s):y;return e.jsx("td",{className:i(v,t.align==="center"&&"text-center",t.align==="right"&&"text-right"),children:re},t.key)})]},a.id)})]})]})})};try{d.displayName="Table",d.__docgenInfo={description:"Comprehensive Table component with sorting, selection, and responsive features",displayName:"Table",props:{variant:{defaultValue:{value:"basic"},description:"Table visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bordered"'},{value:'"basic"'},{value:'"striped"'},{value:'"compact"'}]}},columns:{defaultValue:null,description:"Column definitions",name:"columns",required:!0,type:{name:"TableColumn[]"}},data:{defaultValue:null,description:"Table data",name:"data",required:!0,type:{name:"TableRow[]"}},selectable:{defaultValue:{value:"false"},description:"Enable row selection",name:"selectable",required:!1,type:{name:"boolean"}},sortable:{defaultValue:{value:"false"},description:"Enable sorting",name:"sortable",required:!1,type:{name:"boolean"}},sort:{defaultValue:null,description:"Current sort configuration",name:"sort",required:!1,type:{name:"TableSort"}},onSort:{defaultValue:null,description:"Sort change handler",name:"onSort",required:!1,type:{name:'(column: string, direction: "asc" | "desc") => void'}},selectedRows:{defaultValue:{value:"[]"},description:"Selected row IDs",name:"selectedRows",required:!1,type:{name:"(string | number)[]"}},onRowSelect:{defaultValue:null,description:"Row selection handler",name:"onRowSelect",required:!1,type:{name:"(selectedRows: TableRow[]) => void"}},loading:{defaultValue:{value:"false"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},emptyMessage:{defaultValue:{value:"No data available"},description:"Empty state message",name:"emptyMessage",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"Caption for accessibility",name:"caption",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom CSS class name",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Component size following accessibility guidelines",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}}}catch{}const he={title:"Components/Table",component:d,parameters:{docs:{description:{component:"Comprehensive table component with sorting, selection, and responsive features. Perfect for displaying structured data with interactive capabilities."}}},argTypes:{variant:{control:{type:"select"},options:["basic","striped","bordered","compact"],description:"Visual style variant"},sortable:{control:{type:"boolean"},description:"Enable column sorting"},selectable:{control:{type:"boolean"},description:"Enable row selection"},loading:{control:{type:"boolean"},description:"Show loading state"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Table size affecting padding and typography"}},args:{variant:"basic",sortable:!1,selectable:!1,loading:!1,size:"md"}},r=[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",align:"center"},{key:"lastSeen",label:"Last Seen",sortable:!0,align:"right"}],n=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active",lastSeen:"2 hours ago"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"Active",lastSeen:"1 day ago"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"Inactive",lastSeen:"1 week ago"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"Active",lastSeen:"3 hours ago"}],S={args:{columns:r,data:n,caption:"User management table"}},f={args:{variant:"striped",columns:r,data:n}},j={args:{variant:"bordered",columns:r,data:n}},w={args:{variant:"compact",columns:r,data:n}},N={args:{variant:"striped",columns:r,data:n,sortable:!0}},C={args:{variant:"striped",columns:r,data:n,selectable:!0}},D={args:{variant:"striped",columns:r,data:n,sortable:!0,selectable:!0}},k={render:()=>{const[l,c]=x.useState({column:"name",direction:"asc"});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Sorted by: ",e.jsx("strong",{children:l.column})," (",l.direction,")"]}),e.jsx(d,{variant:"striped",columns:r,data:n,sortable:!0,sort:l,onSort:(p,g)=>c({column:p,direction:g})})]})}},R={render:()=>{const[l,c]=x.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Selected rows: ",e.jsx("strong",{children:l.length}),l.length>0&&e.jsxs("span",{className:"ml-2",children:["(",l.map(p=>p.name).join(", "),")"]})]}),e.jsx(d,{variant:"striped",columns:r,data:n,selectable:!0,onRowSelect:c}),l.length>0&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-primary-600 text-white rounded text-sm",children:"Edit Selected"}),e.jsx("button",{className:"px-3 py-1 bg-red-600 text-white rounded text-sm",children:"Delete Selected"})]})]})}},T={render:()=>{const l=[{key:"name",label:"User",sortable:!0},{key:"email",label:"Contact",sortable:!0},{key:"status",label:"Status",align:"center",render:c=>e.jsx(ne,{variant:c==="Active"?"solid":"outline",color:c==="Active"?"success":"gray",size:"sm",children:c})},{key:"actions",label:"Actions",align:"right",render:(c,p)=>e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{className:"text-primary-600 hover:text-primary-800 text-sm",children:"Edit"}),e.jsx("button",{className:"text-red-600 hover:text-red-800 text-sm",children:"Delete"})]})}];return e.jsx(d,{variant:"striped",columns:l,data:n,sortable:!0})}},E={args:{variant:"striped",columns:r,data:n,loading:!0}},z={args:{variant:"striped",columns:r,data:[],emptyMessage:"No users found. Try adjusting your search criteria."}},V={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Extra Small"}),e.jsx(d,{variant:"bordered",columns:r,data:n.slice(0,2),size:"xs"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Small"}),e.jsx(d,{variant:"bordered",columns:r,data:n.slice(0,2),size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Medium (Default)"}),e.jsx(d,{variant:"bordered",columns:r,data:n.slice(0,2),size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Large"}),e.jsx(d,{variant:"bordered",columns:r,data:n.slice(0,2),size:"lg"})]})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    caption: 'User management table'
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    columns: sampleColumns,
    data: sampleData
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    columns: sampleColumns,
    data: sampleData
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    sortable: true
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    selectable: true
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    sortable: true,
    selectable: true
  }
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, setSort] = useState<TableSort>({
      column: 'name',
      direction: 'asc'
    });
    return <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Sorted by: <strong>{sort.column}</strong> ({sort.direction})
        </div>
        <Table variant="striped" columns={sampleColumns} data={sampleData} sortable sort={sort} onSort={(column, direction) => setSort({
        column,
        direction
      })} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);
    return <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Selected rows: <strong>{selectedRows.length}</strong>
          {selectedRows.length > 0 && <span className="ml-2">
              ({selectedRows.map(row => row.name).join(', ')})
            </span>}
        </div>
        <Table variant="striped" columns={sampleColumns} data={sampleData} selectable onRowSelect={setSelectedRows} />
        {selectedRows.length > 0 && <div className="flex gap-2">
            <button className="px-3 py-1 bg-primary-600 text-white rounded text-sm">
              Edit Selected
            </button>
            <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
              Delete Selected
            </button>
          </div>}
      </div>;
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const customColumns: TableColumn[] = [{
      key: 'name',
      label: 'User',
      sortable: true
    }, {
      key: 'email',
      label: 'Contact',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      align: 'center',
      render: value => <Badge variant={value === 'Active' ? 'solid' : 'outline'} color={value === 'Active' ? 'success' : 'gray'} size="sm">
            {value}
          </Badge>
    }, {
      key: 'actions',
      label: 'Actions',
      align: 'right',
      render: (_, row) => <div className="flex gap-2 justify-end">
            <button className="text-primary-600 hover:text-primary-800 text-sm">
              Edit
            </button>
            <button className="text-red-600 hover:text-red-800 text-sm">
              Delete
            </button>
          </div>
    }];
    return <Table variant="striped" columns={customColumns} data={sampleData} sortable />;
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    loading: true
  }
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your search criteria.'
  }
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Extra Small</h3>
        <Table variant="bordered" columns={sampleColumns} data={sampleData.slice(0, 2)} size="xs" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Small</h3>
        <Table variant="bordered" columns={sampleColumns} data={sampleData.slice(0, 2)} size="sm" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium (Default)</h3>
        <Table variant="bordered" columns={sampleColumns} data={sampleData.slice(0, 2)} size="md" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Large</h3>
        <Table variant="bordered" columns={sampleColumns} data={sampleData.slice(0, 2)} size="lg" />
      </div>
    </div>
}`,...V.parameters?.docs?.source}}};const ve=["Default","Striped","Bordered","Compact","Sortable","Selectable","SortableAndSelectable","ControlledSorting","ControlledSelection","CustomColumns","Loading","Empty","Sizes"];export{j as Bordered,w as Compact,R as ControlledSelection,k as ControlledSorting,T as CustomColumns,S as Default,z as Empty,E as Loading,C as Selectable,V as Sizes,N as Sortable,D as SortableAndSelectable,f as Striped,ve as __namedExportsOrder,he as default};
