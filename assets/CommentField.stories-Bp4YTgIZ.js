import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{At as n,dn as r,it as i,n as a,o,r as s,t as c,yt as l}from"./iframe-FSf6lMNw.js";import{T as u,i as d,n as f,o as p,r as m,t as h}from"./PageLayout-Dm7H9q-3.js";function g({icon:e,label:t,multiline:n=!0,minRows:r=2,sx:a,slotProps:s,...u}){return(0,_.jsxs)(i,{sx:{width:`100%`},children:[(0,_.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1,mb:1},children:[e,(0,_.jsx)(l,{variant:`h4`,color:`textSecondary`,children:t})]}),(0,_.jsx)(o,{variant:`outlined`,fullWidth:!0,multiline:n,minRows:r,slotProps:{htmlInput:{"aria-label":t},...s},sx:[{"& .MuiOutlinedInput-root":{borderRadius:`${c.borderRadius.lg}px`}},...Array.isArray(a)?a:a?[a]:[]],...u})]})}var _,v=e((()=>{s(),a(),_=n(),g.__docgenInfo={description:``,methods:[],displayName:`LogbookCommentField`,props:{icon:{required:!0,tsType:{name:`ReactNode`},description:`Icône de la catégorie (ex. pouce levé pour "Points positifs"), déjà dimensionnée/colorée par l'appelant.`},label:{required:!0,tsType:{name:`string`},description:``},multiline:{defaultValue:{value:`true`,computed:!1},required:!1},minRows:{defaultValue:{value:`2`,computed:!1},required:!1}},composes:[`Omit`]}}));function y(){let[e,t]=(0,b.useState)(`Tu maîtrises bien les autres notions`);return(0,x.jsx)(i,{sx:{width:{xs:`100%`,sm:480}},children:(0,x.jsx)(g,{icon:(0,x.jsx)(u,{size:24,color:c.color.purple[500]}),label:`Points positifs`,value:e,onChange:e=>t(e.target.value)})})}var b,x,S,C,w;e((()=>{b=t(r(),1),s(),v(),p(),a(),d(),x=n(),S={title:`Logbook/CommentField`,component:g,decorators:[e=>(0,x.jsx)(h,{title:`CommentField`,children:(0,x.jsx)(e,{})})],parameters:{controls:{disable:!0}}},C={render:()=>(0,x.jsxs)(m,{children:[(0,x.jsx)(f,{title:`Rempli (side panel, 480px de large)`,children:(0,x.jsx)(y,{})}),(0,x.jsx)(f,{title:`Vide (placeholder)`,children:(0,x.jsx)(i,{sx:{width:{xs:`100%`,sm:480}},children:(0,x.jsx)(g,{icon:(0,x.jsx)(u,{size:24,color:c.color.purple[500]}),label:`Points positifs`,placeholder:`Écrire un commentaire...`})})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Rempli (side panel, 480px de large)">
        <CommentFieldDemo />
      </Section>
      <Section title="Vide (placeholder)">
        <Box sx={{
        width: {
          xs: '100%',
          sm: 480
        }
      }}>
          <LogbookCommentField icon={<RiThumbUpLine size={24} color={designTokens.color.purple[500]} />} label="Points positifs" placeholder="Écrire un commentaire..." />
        </Box>
      </Section>
    </Sections>
}`,...C.parameters?.docs?.source}}},w=[`Default`]}))();export{C as Default,w as __namedExportsOrder,S as default};