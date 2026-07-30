import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{Ot as n,_t as r,it as i,ln as a,n as o,o as s,r as c,t as l}from"./iframe-TdOe9Jhp.js";import{i as u,n as d,o as f,r as p,t as m,w as h}from"./PageLayout-BSEDKeca.js";function g({icon:e,label:t,multiline:n=!0,minRows:a=2,sx:o,slotProps:c,...u}){return(0,_.jsxs)(i,{sx:{width:`100%`},children:[(0,_.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1,mb:1},children:[e,(0,_.jsx)(r,{variant:`h4`,color:`textSecondary`,children:t})]}),(0,_.jsx)(s,{variant:`outlined`,fullWidth:!0,multiline:n,minRows:a,slotProps:{htmlInput:{"aria-label":t},...c},sx:[{"& .MuiOutlinedInput-root":{borderRadius:`${l.borderRadius.lg}px`}},...Array.isArray(o)?o:o?[o]:[]],...u})]})}var _,v=e((()=>{c(),o(),_=n(),g.__docgenInfo={description:``,methods:[],displayName:`LogbookCommentField`,props:{icon:{required:!0,tsType:{name:`ReactNode`},description:`Icône de la catégorie (ex. pouce levé pour "Points positifs"), déjà dimensionnée/colorée par l'appelant.`},label:{required:!0,tsType:{name:`string`},description:``},multiline:{defaultValue:{value:`true`,computed:!1},required:!1},minRows:{defaultValue:{value:`2`,computed:!1},required:!1}},composes:[`Omit`]}}));function y(){let[e,t]=(0,b.useState)(`Tu maîtrises bien les autres notions`);return(0,x.jsx)(i,{sx:{width:{xs:`100%`,sm:480}},children:(0,x.jsx)(g,{icon:(0,x.jsx)(h,{size:24,color:l.color.purple[500]}),label:`Points positifs`,value:e,onChange:e=>t(e.target.value)})})}var b,x,S,C,w;e((()=>{b=t(a(),1),c(),v(),f(),o(),u(),x=n(),S={title:`Logbook/CommentField`,component:g,decorators:[e=>(0,x.jsx)(m,{title:`CommentField`,children:(0,x.jsx)(e,{})})],parameters:{controls:{disable:!0}}},C={render:()=>(0,x.jsxs)(p,{children:[(0,x.jsx)(d,{title:`Rempli (side panel, 480px de large)`,children:(0,x.jsx)(y,{})}),(0,x.jsx)(d,{title:`Vide (placeholder)`,children:(0,x.jsx)(i,{sx:{width:{xs:`100%`,sm:480}},children:(0,x.jsx)(g,{icon:(0,x.jsx)(h,{size:24,color:l.color.purple[500]}),label:`Points positifs`,placeholder:`Écrire un commentaire...`})})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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