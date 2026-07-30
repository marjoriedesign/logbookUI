import{i as e}from"./preload-helper-BdFrVu1K.js";import{E as t,Ot as n,r}from"./iframe-C9EcFKKI.js";import{i,n as a,r as o,t as s}from"./PageLayout-DSn-iGAo.js";import{n as c,t as l}from"./LogbookListenProgress-JSc7X-6v.js";var u,d,f,p;e((()=>{r(),c(),i(),u=n(),d={title:`Logbook/ListenProgress`,component:l,decorators:[e=>(0,u.jsx)(s,{title:`ListenProgress`,children:(0,u.jsx)(e,{})})],args:{value:52},argTypes:{value:{control:{type:`range`,min:0,max:150,step:1},description:`Pourcentage écouté (peut dépasser 100)`}}},f={render:e=>(0,u.jsxs)(o,{children:[(0,u.jsx)(a,{title:`Default`,children:(0,u.jsx)(l,{...e})}),(0,u.jsx)(a,{title:`Examples`,children:(0,u.jsxs)(t,{spacing:2,children:[(0,u.jsx)(l,{value:120}),(0,u.jsx)(l,{value:52}),(0,u.jsx)(l,{value:0})]})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <LogbookListenProgress {...args} />
      </Section>

      <Section title="Examples">
        <Stack spacing={2}>
          <LogbookListenProgress value={120} />
          <LogbookListenProgress value={52} />
          <LogbookListenProgress value={0} />
        </Stack>
      </Section>
    </Sections>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};