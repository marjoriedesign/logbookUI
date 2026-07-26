import{i as e}from"./preload-helper-BdFrVu1K.js";import{X as t,_t as n,b as r,lt as i,n as a,r as o,t as s}from"./iframe-IM57FS_Y.js";import{i as c,n as l,r as u,t as d}from"./PageLayout-CRwZLSXZ.js";import{d as f,n as p}from"./icons-zwkADMJ7.js";function m({value:e}){let n=_.length,r=Math.max(0,e),a=Math.min(n,Math.round(Math.min(r,100)/100*n)),o=r>100?Math.min(n,Math.round((r-100)/100*n)):0;return(0,h.jsxs)(t,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,h.jsx)(f,{size:20,color:r>0?g.primary.main:g.secondary.main}),(0,h.jsx)(t,{sx:{display:`flex`,alignItems:`center`,gap:`4px`,height:20},children:_.map((e,i)=>{let s=g.secondary.main;return i<a&&(s=g.primary.main),o>0&&i>=n-o&&(s=g.primary.dark),(0,h.jsx)(t,{sx:{width:`3px`,height:`${r===0?4:e}px`,borderRadius:`2px`,backgroundColor:s}},i)})}),(0,h.jsxs)(i,{variant:`body2`,sx:{color:g.text.secondary,fontWeight:s.fontWeights.semibold},children:[Math.round(r),`%`]})]})}var h,g,_,v=e((()=>{o(),p(),a(),h=n(),{color:g}=s,_=[8,12,17,20,15,20,11,18,9,14,8,11],m.__docgenInfo={description:``,methods:[],displayName:`LogbookListenProgress`,props:{value:{required:!0,tsType:{name:`number`},description:`Pourcentage écouté, peut dépasser 100 (relecture d'une partie de l'audio).`}}}})),y,b,x,S;e((()=>{o(),v(),c(),y=n(),b={title:`Logbook/ListenProgress`,component:m,decorators:[e=>(0,y.jsx)(d,{title:`ListenProgress`,children:(0,y.jsx)(e,{})})],args:{value:52},argTypes:{value:{control:{type:`range`,min:0,max:150,step:1},description:`Pourcentage écouté (peut dépasser 100)`}}},x={render:e=>(0,y.jsxs)(u,{children:[(0,y.jsx)(l,{title:`Default`,children:(0,y.jsx)(m,{...e})}),(0,y.jsx)(l,{title:`Examples`,children:(0,y.jsxs)(r,{spacing:2,children:[(0,y.jsx)(m,{value:120}),(0,y.jsx)(m,{value:52}),(0,y.jsx)(m,{value:0})]})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`]}))();export{x as Default,S as __namedExportsOrder,b as default};